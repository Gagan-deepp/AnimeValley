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


const CreateTalk = ({ userId }) => {

  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(TalkValidation),
    defaultValues: {
      talk_head: "",
      talk_content: "",
      accountId: userId,
    },
  });

  // NOTE: onSubmit
  const onSubmit = async (values) => {
    await createTalk(
      {
        heading: values.talk_head,
        content: values.talk_content,
        author: userId,
        communities: null,
        path: pathname
      }
    )

    router.push("/")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 w-1/2 bg-[#f6ecea] shadow-shadow_1 outline-none p-8 rounded-2xl mt-4"
      >

        <FormField control={form.control} name="talk_head"
          render={({ field }) => (
            <FormItem className=" flex flex-col gap-2 w-full" >

              <FormLabel className="text-base text-dark-2 font-semibold" >Heading</FormLabel>

              <FormControl>
                <Input
                  type="text"
                  className="form_input border-none bg-slate-50 rounded-[0.5rem] text-dark-4"
                  {...field}
                  autocomplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField control={form.control} name="talk_content"
          render={({ field }) => (
            <FormItem className=" flex flex-col gap-2 w-full" >

              <FormLabel className="text-base text-dark-2 font-semibold" >Content</FormLabel>

              <FormControl  >
                <Textarea
                  rows={10}
                  className="border-none bg-slate-50 rounded-[0.5rem] text-dark-4"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-button-bg-2 rounded-xl font-semibold" >Submit</Button>
      </form>
    </Form>
  )
}

export default CreateTalk