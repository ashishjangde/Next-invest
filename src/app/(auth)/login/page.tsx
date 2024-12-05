'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import SigninSchema from '@/schema/LoginSchema'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/components/ui/button'
import { AtSign, Lock } from 'lucide-react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import {Spinner} from "@nextui-org/spinner";

export default function LoginPage() {
    const [submitting, setIsSubmitting] = React.useState(false)
    const { toast } = useToast()
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(SigninSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const handleSubmit = async (data: z.infer<typeof SigninSchema>) => {
        setIsSubmitting(true)
    
        try {
          const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password
          })
    
          if (result?.error) {
            toast({
              title: "Authentication Failed",
              description: "Please check your credentials",
              variant: "destructive",
            })
          } else {
            toast({
              title: "Welcome Back",
              description: "Successfully logged in",
            })
            router.push("/")
            router.refresh()
          }
        } catch (error) {
          toast({
            title: "Error",
            description: "An unexpected error occurred",
            variant: "destructive",
          })
        } finally {
          setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-4">
            <Card className="w-full max-w-md mx-auto rounded-3xl border-none shadow-2xl dark:bg-gray-800">
                <CardHeader className="pb-4 pt-8 px-8 text-center">
                    <div className="flex flex-col items-center space-y-4">
                        <Image
                            src="/asset/images/4.svg"
                            alt="Login illustration"
                            width={220}
                            height={220}
                        />
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Login to your account
                            </p>
                        </div>
                    </div>
                </CardHeader>
                
                <Separator className="my-4 mx-8 bg-gray-200 dark:bg-gray-700" />
                
                <CardContent className="px-8 pb-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <AtSign className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <Input
                                                type="email"
                                                placeholder="your@email.com"
                                                {...field}
                                                disabled={submitting}
                                                className="pl-10 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                            />
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <Input
                                                type="password"
                                                placeholder="Enter password"
                                                {...field}
                                                disabled={submitting}
                                                className="pl-10 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                            />
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <p className='text-left text-sm'>
                                Don&apos;t have an account? 
                                <Link href="/register" className='text-emraldGreen hover:underline ml-1'>
                                    Register
                                </Link>
                            </p>
                            <Button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-6 rounded-xl bg-emraldGreen hover:bg-emraldGreen/90 
                                transition-colors duration-300 ease-in-out text-white font-semibold"
                            >
                                {submitting ? <Spinner/> : 'Login'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}