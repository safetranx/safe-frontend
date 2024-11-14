import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="fixed w-full top-0 z-10 bg-[#FFFFFF8C]">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image
            src="/assets/swissahecom.svg"
            height={40}
            width={150}
            alt="SwissahEcom Logo"
            className="h-10"
          />
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              How it Works
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <button className="bg-black text-[#FFD700] px-4 py-2 rounded-full text-sm">
            Download App
          </button>
        </div>
      </header>

      <div className="mt-5">{children}</div>
      <footer className="bg-[#1F1C0B] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-[51px]">
          {/* md:w-1/4 */}
            <div className="w-full max-w-[292px]  mb-8 md:mb-0">
              <Image
                src="/assets/swissahEcom.svg"
                height={40}
                width={150}
                alt="SafeTranx Logo"
                className="h-10 mb-4"
              />
              <p className="text-sm w-full text-[#A7ABB6]">
                Be part of Africa&apos;s trusted e-commerce revolution with
                SwissahEcom. Join the waitlist today and experience secure,
                transparent transactions, real-time tracking, price bidding for
                deliveries, and instant payments for sellers
              </p>
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-[51px]">

                <div className="w-full mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4 text-[#D9D9D9]">Home</h3>
                <ul className="space-y-2">
                    <li>
                    <Link href="#" className="text-[#A7ABB6] hover:text-gray-900">
                        About
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="text-[#A7ABB6] hover:text-gray-900">
                        How it works
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="text-[#A7ABB6] hover:text-gray-900">
                        Download
                    </Link>
                    </li>
                </ul>
                </div>

                <div className="w-full mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4 text-[#D9D9D9]">Join Us</h3>
                <ul className="space-y-2 ">
                   
                    <li>
                    <Link href="#" className="text-[#A7ABB6] hover:text-gray-900">
                    Buyer
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="text-[#A7ABB6] hover:text-gray-900">
                    Vendor
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="text-[#A7ABB6] hover:text-gray-900">
                    Validator
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="text-[#A7ABB6] hover:text-gray-900">
                    Rider
                    </Link>
                    </li>
                </ul>
                </div>
                <div className="w-full mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4 text-[#D9D9D9]">Contact</h3>
                <p className="text-[#A7ABB6]">+234 708 486 3705</p>
                <p className="text-[#A7ABB6]">support@swissahecom.com</p>
                <p className="text-[#A7ABB6]">Lagos, Nigeria</p>
                </div>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-4 text-[#D9D9D9]">
                Subscribe to our newsletter
              </h3>
              <p className="pb-4 text-[#A7ABB6]">
              Be the first to receive exciting news, insider tips, and special promotions.
              </p>
              <form className="flex  relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="relative text-[#A7ABB6] bg-[#3D3D3D] outline-[#FFD700] outline-1 px-4 py-2 w-full rounded-l-full lg:rounded-full border border-gray-300"
                />
                <button
                  type="submit"
                  className="bg-black lg:top-[3px] text-xs lg:text-sm lg:absolute lg:right-[3px] text-white px-4 py-2 rounded-r-full lg:rounded-full">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#FFD700] mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SwissahEcom. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#FFD700] hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-[#FFD700] hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-[#FFD700] hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>

              {/* <Link href="#" className="text-[#FFD700] hover:text-gray-900">
                Whats
              </Link> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
