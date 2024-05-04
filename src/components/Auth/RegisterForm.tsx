'use client'
import { createUser } from "@/actions/users";
import { RegisterProp } from "@/config/types";
import SubmitButton from "@/shared/SubmitButton";
import TextInput from "@/shared/TextInput";
import { UserRole } from "@prisma/client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";

export default function RegisterForm({ role = "USER" }: { role?: UserRole }) {
    const [loading, setLoading] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm<RegisterProp>();
    const router = useRouter();
    async function onSubmit(data: RegisterProp) {
        setLoading(true);
        data.role = role;
        try {
            const user = await createUser(data)
            if (user && user.status === 201) {
                console.log("User created successfully");
                setLoading(false);
                console.log(user.data);
                toast.success("User Created Successfully");
                const userId = user.data?.id;
                router.push(`/verify-account/${userId}`)
                reset();
            } else {
                console.log(user?.error);
                setLoading(false)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            label='Full Name'
                            register={register}
                            name='fullName'
                            errors={errors} />
                        <TextInput
                            label='Email address'
                            register={register}
                            name='email'
                            errors={errors} />
                        <TextInput
                            label='Phone Number'
                            register={register}
                            name='phone'
                            errors={errors}
                            type="tel" />
                        <TextInput
                            label='Password'
                            register={register}
                            name='password'
                            errors={errors}
                            type="password" />

                        <div>
                            <SubmitButton
                                title='Create Account'
                                type='submit'
                                isLoading={loading}
                                loadingTitle='Creating account Please wait...' />
                        </div>
                    </form>
                    <div className="flex items-center justify-between text-sm mt-10">
                        <p className=" text-gray-500">
                            Already have an account?{' '}
                            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Login
                            </Link>
                        </p>
                        <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
