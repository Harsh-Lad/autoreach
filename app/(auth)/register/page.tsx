"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageSquareMore, ArrowRight, CheckCircle2 } from "lucide-react"
import axiosInstance from "@/utils/axiosInstance"
import { toast } from "react-toastify"

export default function Register() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationWebsite: "",
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axiosInstance.post('/register/', {
        email: formData.email,
        password: formData.password,
        organization_name: formData.organizationName,
      })
      if (response.status === 201) {
        router.push(`/verifyotp?email=${encodeURIComponent(formData.email)}`)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
        <div className="absolute h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <MessageSquareMore className="h-10 w-10 text-white" />
          <span className="ml-2 text-3xl font-bold text-white">AutoReach</span>
        </div>

        <Card className="border-border/10 bg-black/40 backdrop-blur-xl shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-white">Create your account</CardTitle>
            <CardDescription className="text-center text-gray-400">Start your journey with AutoReach</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="organizationName" className="text-gray-200">
                  Organization Name
                </Label>
                <Input
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organizationWebsite" className="text-gray-200">
                  Organization Website
                </Label>
                <Input
                  id="organizationWebsite"
                  name="organizationWebsite"
                  type="url"
                  value={formData.organizationWebsite}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-200">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
                {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400 text-center w-full">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* Additional information */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
              No credit card required
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}