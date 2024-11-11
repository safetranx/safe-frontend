import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

export default function ContactUs() {
    return (
      <div className="min-h-screen bg-[#FFFDF7] font-sans">
        <Layout>
          {/* Main Content */}
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/assets/map.svg')]">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h1 className="text-5xl font-bold tracking-tighter text-[#FFD60A] sm:text-6xl">CONTACT US</h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            Got questions or want to learn more? We&apos;re here to help!
                        </p>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 lg:flex lg:flex-col lg:gap-12">
                    <div className="space-y-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <h2 className="text-3xl font-bold tracking-tighter text-[#2D2D2D]">We are always happy to assist you</h2>
                        <div className="space-y-6 flex flex-col lg:flex-row lg:gap-6">
                            <div>
                                <h3 className="font-semibold mb-1">Office hours</h3>
                                <p className="text-gray-500">Monday</p>
                                <p className="text-gray-500">Friday 6am to 8pm (UTC + 1)</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Email Address</h3>
                                <p className="text-gray-500">support@safetranx.com</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Phone</h3>
                                <p className="text-gray-500">+234 708 486 3705</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 flex flex-col lg:flex-row max-w-[1120px] mx-auto w-full rounded-[10px] shadow-lg lg:justify-center lg:p-10 lg:gap-10">
                        <div className="w-full rounded-lg bg-[#2D2D2D] p-8 text-white flex justify-center items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-[#FFD60A] mb-6">Send in Your Message</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                    <svg
                                        className=" h-5 w-5"
                                        fill="none"
                                        height="24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>+234 708 486 3705</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                    <svg
                                        className=" h-5 w-5"
                                        fill="none"
                                        height="24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect height="16" rx="2" width="20" x="2" y="4" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    <span>support@safetranx.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                    <MapPin className="h-5 w-5" />
                                    <span>Lagos, Nigeria</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="w-full space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input className="bg-gray-50 rounded-[24px]" placeholder="Full Name" />
                            <Input className="bg-gray-50 rounded-[24px]" placeholder="Last Name" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Input className="bg-gray-50 rounded-[24px]" placeholder="Email" type="email" />
                            <Input className="bg-gray-50 rounded-[24px]" placeholder="Address" />
                        </div>
                        <Textarea className="min-h-[150px] bg-gray-50 rounded-[24px]" placeholder="Enter Message" />
                        <Button className="bg-[#2D2D2D] rounded-[24px] text-[#FFD700] hover:bg-[#2D2D2D]/90">Send Message</Button>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </Layout>
      </div>
    );
  }