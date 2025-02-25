'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/app/login/action"

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="relative">

      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"></div>


      <div className="relative flex items-center justify-center min-h-screen p-6">
        <Card className="w-full max-w-md shadow-2xl rounded-lg border border-gray-150 bg-white/90 backdrop-blur-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Login</CardTitle>
            <CardDescription className="text-gray-700">
              Enter your email below to login to your account            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-gray-900 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="yourname@example.com"
                    required
                    className="rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-gray-900 font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-3 text-lg font-semibold rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-all"
                  formAction={login}
                >
                  Sign In
                </Button>
                <Button
                  variant="outline"
                  className="w-full py-3 text-lg font-semibold border-gray-500 text-gray-700 hover:bg-gray-200 transition-all"
                >
                  Sign in with Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm text-gray-800">
                Don&apos;t have an account?{" "}
                <a href="/register" className="font-medium text-purple-700 hover:underline">
                  Sign up here
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
