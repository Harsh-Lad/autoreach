"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageSquareMore, ArrowRight } from "lucide-react"
import axiosInstance from "@/utils/axiosInstance"
import { useToast } from "@/hooks/use-toast"

export default function VerifyOTP() {
  const [otp, setOtp] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const emailParam = searchParams.get("email")
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axiosInstance.post('/verify-email/', {
        email,
        otp,
      })
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Email verified successfully",
          status: "success",
        })
        router.push('/dashboard') // Redirect to the dashboard or another page
      } else {
        toast({
          title: "Error",
          description: response.data.message,
          status: "error",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred",
        status: "error",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleResendOTP = async () => {
    setLoading(true)
    try {
      const response = await axiosInstance.post('/resend-otp/', {
        email,
      })
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "OTP resent successfully",
          status: "success",
        })
      } else {
        toast({
          title: "Error",
          description: response.data.message,
          status: "error",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred",
        status: "error",
      })
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
            <CardTitle className="text-2xl font-bold text-center text-white">Verify Your Email</CardTitle>
            <CardDescription className="text-center text-gray-400">
              We&apos;ve sent a verification code to your email. Please enter it below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-gray-200">
                  Verification Code
                </Label>
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  value={otp}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-gray-700 text-white placeholder-gray-500 text-center text-2xl tracking-widest"
                  maxLength={6}
                  placeholder="000000"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={loading}>
                {loading ? "Verifying..." : "Verify Email"}
                {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-400 text-center">
              Didn&apos;t receive the code?{" "}
              <button onClick={handleResendOTP} className="text-primary hover:underline" disabled={loading}>
                {loading ? "Resending..." : "Resend"}
              </button>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

