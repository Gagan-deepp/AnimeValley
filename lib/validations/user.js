import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  username: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  bio: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(48, { message: "Maximum 48 caracters." }),
});

export const TalkValidation = z.object({
  talk_content: z
    .string()
    .nonempty()
    .min(3, { message: "Minimum 3 characters." })
    .max(200, { message: "Maximum 200 caracters." }),
  talk_head: z.string().nonempty()
    .min(3, { message: 'Minimumn 3 characters Required' }),
  accountId: z.string(),

})
export const CommentValidation = z.object({
  comment_content: z
    .string()
    .nonempty()
    .min(3, { message: "Minimum 3 characters." })
    .max(200, { message: "Maximum 200 caracters." }),
})