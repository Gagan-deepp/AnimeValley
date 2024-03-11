'use client'
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { CommentValidation } from "@/lib/validations/user";
import { usePathname, useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import Image from "next/image";
import { addComment } from "@/lib/actions/talks.action";


const Comment = ({ talkId, currentUserImg, currentUserId }) => {

  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      comment_content: "",
    },
  });


  const onSubmit = async (values) => {
    await addComment(
      {
        talkId: talkId,
        CommentTxt: values.comment_content,
        userId: currentUserId,
        path: pathname
      }
    )
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 w-full outline-none py-4 mt-4 items-center border-y border-y-light-4"
      >

        <FormField control={form.control} name="comment_content"
          render={({ field }) => (
            <FormItem className=" flex gap-2 w-full items-center" >

              <FormLabel >
                <Image src={currentUserImg} width={48} height={48} className="rounded-full" />
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter Your Comment"
                  className="no-focus border-none rounded-[0.5rem] text-light-5 outline-none"
                  autocomplete="off"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-form_bg rounded-xl font-semibold" >Submit</Button>
      </form>
    </Form>
  )
}

export default Comment