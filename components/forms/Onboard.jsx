'use client'

import * as z from "zod";
import { UserValidation } from '@/lib/validations/user';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { updateUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Onboard = ({ userData, title }) => {

    const [files, setFiles] = useState([]);
    const { startUpload } = useUploadThing("media");
    const router = useRouter();
    const { pathname } = usePathname();

    //TEST: --> Form Validation
    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: userData?.image ? userData.image : "",
            name: userData?.name ? userData.name : "",
            username: userData?.username ? userData.username : "",
            bio: userData?.bio ? userData.bio : "",
        },
    });

    // NOTE: ---> ONSUBMIT
    const onSubmit = async (values) => {
        const userValues = values.profile_photo;

        const isChange = isBase64Image(userValues)

        if (isChange) {
            const imgRes = await startUpload(files);
            if (imgRes && imgRes[0].fileUrl) {
                values.profile_photo = imgRes[0].fileUrl
            }
        }

        await updateUser({
            userID: userData.id,
            userName: values.username,
            name: values.name,
            image: values.profile_photo,
            bio: values.bio,
            path: pathname
        });

        if (pathname === '/profile/edit') {
            router.back();
        } else {
            router.push('/');
        }
    }

    // TEST:-->  Profile Change
    const profileChange = (e, fieldChange) => {
        e.preventDefault();
        const fileRead = new FileReader();

        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            setFiles(Array.from(e.target.files));

            if (!file.type.includes('image')) return;

            fileRead.onload = async (event) => {
                const imageDataUrl = event.target?.result?.toString() || "";

                fieldChange(imageDataUrl);
            }
            fileRead.readAsDataURL(file);
        }
    }



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-start gap-10">

                <FormField control={form.control} name="profile_photo"
                    render={({ field }) => (
                        <FormItem className=" flex items-center gap-4 " >
                            <FormLabel className="profile_label" >
                                {
                                    field.value ? (
                                        <Image src={field.value}
                                            width={96}
                                            alt="profile_pic"
                                            priority
                                            height={96}
                                            className="rounded-full object-contain" />
                                    ) : (
                                        <Image src="/assest/profile.svg"
                                            width={24}
                                            height={24}
                                            alt="profile_pic"
                                            className="rounded object-contain" />
                                    )
                                }
                            </FormLabel>
                            <FormControl className="flex-1 text-gray-200 text-base" >
                                <Input
                                    type="file"
                                    accept="image/*"
                                    className="profile_image"
                                    placeholder="Upload Your Profile Pic"
                                    onChange={(e) => profileChange(e, field.onChange)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="name"
                    render={({ field }) => (
                        <FormItem className=" flex flex-col gap-2 w-full" >

                            <FormLabel className="text-base text-light-2 font-semibold" >Name</FormLabel>

                            <FormControl>
                                <Input
                                    type="text"
                                    className="form_input rounded-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="username"
                    render={({ field }) => (
                        <FormItem className=" flex flex-col gap-2 w-full" >

                            <FormLabel className="text-base text-light-2 font-semibold" >Username</FormLabel>

                            <FormControl >
                                <Input
                                    type="text"
                                    className="form_input rounded-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="bio"
                    render={({ field }) => (
                        <FormItem className=" flex flex-col gap-2 w-full" >

                            <FormLabel className="text-base text-light-2 font-semibold" >Signature</FormLabel>

                            <FormControl  >
                                <Textarea
                                    rows={10}
                                    className="form_input rounded-xl"
                                    placeholder="Enter Your Signature (48)"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-light-3 text-base bg-gray-4" />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="bg-button-bg-2 rounded-xl font-semibold" >Submit</Button>
            </form>
        </Form>
    )
}

export default Onboard