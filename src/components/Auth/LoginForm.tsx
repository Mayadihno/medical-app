'use client'
/* eslint-disable react/no-unescaped-entities */
import SubmitButton from "@/shared/SubmitButton";
import TextInput from "@/shared/TextInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

type LoginProp = {
    email: string;
    password: string;
}

export default function LoginForm() {
    const [loading, setIsLoading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const router = useRouter();
    const { register, reset, handleSubmit, formState: { errors } } = useForm<LoginProp>();
    async function onSubmit(data: LoginProp) {
        try {
            setIsLoading(true);
            console.log("Attempting to sign in with credentials:", data);
            const loginData = await signIn("credentials", {
                ...data,
                redirect: false,
            });
            console.log("SignIn response:", loginData);
            if (loginData?.error) {
                setIsLoading(false);
                toast.error("Sign-in error: Check your credentials");
                setShowNotification(true);
            } else {
                // Sign-in was successful
                setShowNotification(false);
                reset();
                setIsLoading(false);
                toast.success("Login Successful");
                router.push("/dashboard");
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Network Error:", error);
            toast.error("Its seems something is wrong with your Network");
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
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        {showNotification && (
                            <Alert color="failure" icon={HiInformationCircle}>
                                <span className="font-medium">Sign-in error!</span> Please Check
                                your credentials
                            </Alert>
                        )}
                        <TextInput
                            label='Email address'
                            register={register}
                            name='email'
                            errors={errors}
                        />

                        <div>
                            <TextInput
                                label='Password'
                                register={register}
                                name='password'
                                errors={errors}
                                type="password"
                            />
                        </div>
                        <div>
                            <SubmitButton
                                title='Login'
                                type='submit'
                                isLoading={loading}
                                loadingTitle='Please wait...'
                            />
                        </div>
                    </form>
                    <div className="flex items-center justify-between text-sm mt-10">
                        <p className=" text-gray-500">
                            Don't have account?{' '}
                            <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Register
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
