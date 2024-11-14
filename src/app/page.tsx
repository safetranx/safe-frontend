import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Compass } from "lucide-react";
import Join from "./icons/Join";
import Secure from "./icons/Secure";
import Truck from "./icons/Truck";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] font-sans">
      {/* Header */}
      {/* <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Image src="/assets/SafeTranx.svg" height={40} width={150} alt="SwissahEcom Logo" className="h-10" />
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">How it Works</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>
        <button className="bg-black text-[#FFD700] px-4 py-2 rounded-full text-sm">Download App</button>
      </header> */}
      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-28 text-center relative bg-[url('/assets/hero.svg')] bg-cover">
          <p>Secure Escrow Payments for Buyers, Instant Payments for Sellers</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#545143]">
              SHOP <span className="text-[#FFD700]">SMARTER</span>
            </span>
            <br />
            <span className=" text-[#545143]">
              SHOP <span className="text-[#FFD700]">SAFER</span>
            </span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join SwissahEcom to experience seamless e-commerce with trusted
            quality checks, real-time order tracking, and reliable delivery
            across Africa. Get on the waitlist today!
          </p>
          <button className="bg-black text-[#FFD700] px-6 py-3 rounded-full text-lg font-semibold">
            Join The Waitlist
          </button>
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              layout="fill"
              objectFit="cover"
              alt="Background pattern"
              className="opacity-10"
            />
          </div>
        </section>

        {/* Why Choose SwissahEcom */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose SwissahEcom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Secure Transactions with Escrow",
                description:
                  "Buyers pay through escrow, so their money is only released to the seller after product delivery and verification.",
              },
              {
                title: "Real-Time Order Tracking",
                description:
                  "Buyers can track their orders from validation to delivery, ensuring transparency throughout the process",
              },
              {
                title: "Instant Payments for Sellers",
                description:
                  "Sellers receive instant payment once the buyer confirms that the product has been delivered in good condition",
              },
              {
                title: "Price Bidding for Delivery",
                description:
                  "Sellers can choose the best delivery option by selecting from available riders based on price bidding and proximity.",
              },
              {
                title: "Trusted Validators",
                description:
                  "Third-party validators inspect every product before it’s handed over for delivery, ensuring quality.",
              },
              {
                title: "Seamless Logistics Integration",
                description:
                  "Sellers can choose from multiple logistics partners, ensuring fast and reliable deliveries to buyers.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-9 rounded-[24px] shadow-sm border-[1px] border-[#C0C0C04F]">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Get Started Today */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center py-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              Get Started Today
            </h2>
            <p className="text-[#A7ABB6] text-center max-w-[619px]">
              SwissahEcom connects buyers, sellers, validators, and logistics
              partners to create a secure and transparent e-commerce ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "For Sellers",
                description:
                  "You get instant payment upon order completion, with no risk of delayed payments from delivery agents or third-party platforms.",
                image: "/assets/for-sellers.svg",
              },
              {
                title: "For Buyers",
                description:
                  "Your payment is held securely in escrow until the product is delivered and verified. You can track the status of your order in real time, from seller confirmation to delivery.",
                image: "/assets/for-buyers.svg",
              },
              {
                title: "For Validators",
                description:
                  "Ensure product quality before and after delivery, earning money by protecting both buyers and sellers.",
                image: "/assets/for-validators.svg",
              },
              {
                title: "For Logistics Companies",
                description:
                  "Grow your business by delivering verified products for trusted sellers and receiving fast payments for completed deliveries.",
                image: "/assets/for-logistics.svg",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg bg-no-repeat bg-cover bg-center h-[300px]`}
                style={{ backgroundImage: `url(${card.image})` }}>
                {/* <Image src="/placeholder.svg?height=300&width=400" width={400} height={300} alt={card.title} className="w-full h-48 object-cover" /> */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold">
              Get Started
            </button>
          </div>
        </section>

        {/* How SwissahEcom Works */}
        <section className="container mx-auto px-4 py-16">
          <div className="py-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              How SwissahEcom Works
            </h2>
            <p className="text-[#A7ABB6] text-center">
              A Step-by-Step Guide to SwissahEcom
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start">
            {[
              {
                icon: <Join />,
                title: "Join the Platform",
                description: "Sign up and create your account",
              },
              {
                icon: <Compass />,
                title: "Browse Categories",
                description: "Explore a wide range of products",
                background: "#FBF5CF",
              },
              {
                icon: <Secure />,
                title: "Secure Checkout",
                description: "Pay securely with our escrow system",
              },
              {
                icon: <Truck />,
                title: "Receive Your Products",
                description: "Get your items delivered to your doorstep",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col p-8 border-[1px] border-[#C0C0C04F] rounded-[24px] items-start max-w-[258px] mb-8 md:mb-0"
                style={{
                  backgroundColor: !step.background ? "" : step.background,
                }}>
                <div className="w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-[#A7ABB6]">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sign Up Form */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-[#FFF8E1] rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-6">
              Be the First to Experience SwissahEcom
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Join SwissahEcom today and experience secure, transparent
              e-commerce with real-time tracking and flexible delivery options.
              Sign up for early access to the future of buying, selling, and
              delivering across Africa!
            </p>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-full border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-full border border-gray-300"
                />
              </div>
              <div className="mb-6">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 rounded-full border border-gray-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-full text-lg font-semibold">
                Join the waitlist
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Over 10,000 people joined
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Have any questions?
            <br />
            Read popular answers below
          </h2>
          <div className="space-y-6">
            {[
              "How does SwissahEcom protect my payment?",
              "How fast do sellers get paid?",
              "Can I track my order after making a purchase?",
              "Can sellers choose their delivery agents?",
              "How do logistics companies get paid?",
            ].map((question, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="text-lg font-semibold">{question}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile App Promotion */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Manage all orders from your mobile
              </h2>
              <p className="text-gray-600 mb-6">
                Manage your shopping experience, track your orders, and
                communicate with sellers and delivery agents - all from the palm
                of your hand. Download the SwissahEcom app today!
              </p>
              <div className="flex space-x-4">
                <Image
                  src="/assets/googleplay.svg"
                  width={120}
                  height={40}
                  alt="Get it on Google Play"
                />
                <Image
                  src="/assets/applestore.svg"
                  width={120}
                  height={40}
                  alt="Download on the App Store"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/assets/mobile-phone.svg"
                width={300}
                height={600}
                alt="SwissahEcom Mobile App"
                className="mx-auto"
              />
            </div>
          </div>
        </section>
      </Layout>

      {/* Footer */}
      {/* <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <Image src="/placeholder.svg?height=40&width=150" height={40} width={150} alt="SwissahEcom Logo" className="h-10 mb-4" />
              <p className="text-sm text-gray-600">
                SwissahEcom is Africa's leading e-commerce platform, providing secure transactions and seamless delivery across the continent.
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Press</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">info@swissahecomltd.com</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
              <form className="flex">
                <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 rounded-l-full border border-gray-300" />
                <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-full">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">&copy; 2023 SwissahEcom. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link  href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
