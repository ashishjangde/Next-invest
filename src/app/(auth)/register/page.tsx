'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import RegisterSchema from '@/schema/RegisterSchema'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button'
import { AtSign, Lock, User as UserIcon } from 'lucide-react'
import Link from 'next/link'
import {Spinner} from "@nextui-org/spinner";
import axios, { AxiosError } from 'axios'
import { useToast } from '@/hooks/use-toast'
import { ApiResponse } from '@/app/api/_utils/ApiResponse'
import { user } from '@prisma/client'
import { useRouter } from 'next/navigation'

export default function Page() {
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()
    const toast = useToast()
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })


    const handleSubmit = async (data: z.infer<typeof RegisterSchema>) => {
        setIsLoading(true)
       try {
        const response = await  axios.post('/api/auth/register', data);
        if(response.status === 200){
            toast.toast({
                description: 'Registration successful',
            })
            router.push('/login')
        }
       } catch (error) {
        if(error instanceof AxiosError && error.response?.data){
            const apiError = error.response.data as ApiResponse<user>;
            toast.toast({
              description: apiError.apiError?.message,
              variant: 'destructive',
            });
        }
       }finally{
        setIsLoading(false)
       }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-4">
            <Card className="w-full max-w-md mx-auto rounded-3xl border-none shadow-2xl dark:bg-gray-800">
                <CardHeader className="pb-4 pt-8 px-8 text-center">
                    <div className="flex flex-col items-center space-y-4">
                        <Image
                            src="/asset/images/4.svg"
                            alt="Registration illustration"
                            width={220}
                            height={220}
                            className=""
                        />
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Create your account
                            </p>
                        </div>
                    </div>
                    <Separator />
                </CardHeader>
                
                
                <CardContent className="px-8 pb-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Name
                                        </FormLabel>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <UserIcon className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <Input
                                                type="text"
                                                placeholder="Your full name"
                                                {...field}
                                                className="pl-10 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                            />
                                        </div>
                                        <FormMessage className="text-xs text-red-500 mt-1" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Email
                                        </FormLabel>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <AtSign className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <Input
                                                type="email"
                                                placeholder="your@email.com"
                                                {...field}
                                                className="pl-10 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                            />
                                        </div>
                                        <FormMessage className="text-xs text-red-500 mt-1" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Password
                                        </FormLabel>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <Input
                                                type="password"
                                                placeholder="Create password"
                                                {...field}
                                                className="pl-10 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                            />
                                        </div>
                                        <FormMessage className="text-xs text-red-500 mt-1" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                            Confirm Password
                                        </FormLabel>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <Input
                                                type="password"
                                                placeholder="Repeat password"
                                                {...field}
                                                className="pl-10 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                            />
                                        </div>
                                        <FormMessage className="text-xs text-red-500 mt-1" />
                                    </FormItem>
                                )}
                            />

                            <p className='text-left text-sm'>Already have an account? <Link href="/login" className='text-emraldGreen hover:underline'>Login</Link></p>
                            <Button
                                type="submit"
                                className="w-full py-6 rounded-xl bg-emraldGreen hover:bg-emraldGreen/90 
                                transition-colors duration-300 ease-in-out text-white font-semibold"
                            >
                               {isLoading ? <Spinner className='text-white'/> : "Create Account"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}