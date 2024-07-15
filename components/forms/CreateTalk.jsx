'use client'
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { TalkValidation } from "@/lib/validations/user";
import { usePathname, useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createTalk } from "@/lib/actions/talks.action";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";
import { toast } from 'sonner'
import { FaCircleCheck } from "react-icons/fa6";


const CreateTalk = ({ userId, communities }) => {
  const router = useRouter();
  const [disable, setDisable] = useState(false)
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(TalkValidation),
    defaultValues: {
      talk_head: "",
      talk_content: "",
      community: "",
      accountId: userId,
    },
  });

  // NOTE: onSubmit
  const onSubmit = async (values) => {
    setDisable(false)
    await createTalk(
      {
        heading: values.talk_head,
        content: values.talk_content,
        author: userId,
        community: values.community ? values.community : null,
        path: pathname
      }
    )
    toast("Talk Created", {
      icon: <FaCircleCheck />,
      unstyled: true,
      classNames: {
        toast: 'flex items-center rounded-[10px] border-0 p-3 bg-light-2',
        title: 'text-dark-1 text-base font-ui-text font-bold',
        cancelButton: 'bg-orange-400',
        closeButton: 'bg-lime-400',
      }
    })
    setDisable(true)
    router.push("/community")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-6 w-full bg-light-white backdrop-blur-xl outline-none p-8 rounded-2xl mt-4"
      >

        <FormField control={form.control} name="talk_head"
          render={({ field }) => (
            <FormItem className=" flex flex-col gap-2 w-full " >

              <FormLabel className="text-xl text-light-2 font-semibold" >Heading :</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter Heading"
                  className="talk_input placeholder:text-gray-3 no-focus borderHide"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField control={form.control} name="talk_content"
          render={({ field }) => (
            <FormItem className=" flex flex-col w-full" >

              <FormLabel className="text-xl text-light-2 font-semibold" >Content :</FormLabel>

              <FormControl  >
                <Textarea
                  placeholder="Enter Content..."
                  rows={2}
                  className="talk_input placeholder:text-gray-3 no-focus borderHide"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField control={form.control} name="community"
          render={({ field }) => (
            <FormItem className=" flex flex-col w-full" >

              <FormLabel className="text-xl text-light-2 font-semibold" >Select Your Community</FormLabel>

              <Select onValueChange={field.onChange} >
                <FormControl  >
                  <SelectTrigger className="no-focus text-light-3 font-ui-text-3 font-bold rounded-[0.5rem]" >
                    <SelectValue placeholder="Select a Community" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent className="bg-light-white px-0 rounded-[0.5rem]">
                  {JSON.parse(communities).map((community, index) => (
                    <SelectItem key={index} value={community._id} className="options" >
                      {community.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-button-bg rounded-xl font-semibold hover:scale-[1.02] duration-500 ease-in-out " disabled={disable} >Submit</Button>
      </form>
    </Form>
  )
}

export default CreateTalk