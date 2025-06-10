"use client";

import React from "react";
import Link from "next/link";
import { Calender } from "./Calender";
import Image from "next/image";
import Arrow from '../../public/images/rightarrow.svg'

export default function Enquirysection() {
  return (
    <section className="padding-120 bg-[url('/images/Enquiry.png')] bg-cover bg-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row w-full gap-[60px]">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-white flex flex-col">
            <h1 className="white">
              Let’s work together <br /> and build something
            </h1>
            <p className="large white mt-6 mb-10">
              We help brands create new revenue streams, boost operational
              performance, and drive sustainable growth.
            </p>
            <Link href="" className="flex items-center gap-6 bg-white/20 backdrop-blur-[18px] text-white text-2xl font-medium p-[21px] md:p-8 rounded-full w-max shadow hover:shadow-lg transition">
              <Calender />  
              Schedule a call
              <Image src={Arrow} alt="" />
            </Link>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6 md:p-10">
            <h4 className="mb-8">
              Share your requirement
            </h4>
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Full name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Interest Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you interested in?
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Website",
                    "Mobile App",
                    "Web App",
                    "DAM",
                    "AI Integration",
                    "Branding",
                    "Printing",
                    "Others",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="px-4 py-1 rounded-full border border-gray-300 text-sm hover:bg-black hover:text-white transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email ID
                </label>
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                  Submit details
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  By submitting this form you acknowledge that you have read
                  Noseberry’s Privacy Policy & agree to its terms.*
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
