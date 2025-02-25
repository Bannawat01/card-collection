'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "../register/action"

export function RegisterForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        await signup(formData)
    }

    return (
        <div className={className} {...props}>

            <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"></div>


            <div className="relative flex items-center justify-center min-h-screen p-6">
                <Card className="w-full max-w-md shadow-2xl rounded-lg border border-gray-200 bg-white/90 backdrop-blur-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold text-gray-900">Create an Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-gray-900 font-medium">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="example@gmail.com"
                                        required
                                        className="rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password" className="text-gray-900 font-medium">Password</Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                    />
                                </div>
                                <Button type="submit" className="w-full py-3 text-lg font-semibold rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-all">
                                    Sign Up 🔥
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm text-gray-800">
                                Already have an account?{" "}
                                <a href="/login" className="font-medium text-purple-700 hover:underline">
                                    Go to Login Page 🚀
                                </a>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
