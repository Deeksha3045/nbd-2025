"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Form, Button, Input } from "@heroui/react";
import { Calender } from "./Calender";
import Image from "next/image";
import Arrow from "../../public/images/rightarrow.svg";
import "../../public/styles/input.scss";
import "../../public/styles/enquiry.scss";

export default function Enquirysection() {
  const tags = [
    "Website",
    "Mobile App",
    "Web App",
    "DAM",
    "AI Integration",
    "Branding",
    "Printing",
    "Others",
  ];

  const [selectedTags, setSelectedTags] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleChange = (e) => {
    setErrors({});
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // You can submit formData and selectedTags here
    console.log({ ...formData, selectedTags });
  };

  return (
    <section className="enquiry-section padding-120 bg-[url('/images/Enquiry.png')] bg-cover bg-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row w-full gap-[60px]">
          {/* Left Section */}
          <div className="content-col w-full lg:w-1/2 text-white flex flex-col">
            <h1 className="white">
              Let’s work together <br /> and build something
            </h1>
            <p className="large white mt-6 mb-10">
              We help brands create new revenue streams, boost <br></br> operational
              performance, and drive sustainable growth.
            </p>
            <Link
              href=""
              className="flex items-center gap-6 bg-white/20 backdrop-blur-[18px] text-white text-2xl font-medium p-[21px] md:p-8 rounded-full w-max shadow hover:shadow-lg transition"
            >
              <Calender />
              Schedule a call
              <Image src={Arrow} alt="" />
            </Link>
          </div>

          {/* Right Section - Form */}
          <div className="form-col w-full lg:w-1/2 bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-8">
            <h4>Share your requirement</h4>
            <Form className="gap-0" onSubmit={handleSubmit}>
              <div className="w-full space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Full name
                  </label>
                  <Input
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                    errorMessage={errors.fullName}
                    className="popup-input"
                    classNames={{ inputWrapper: "input-wrapper" }}
                  />
                </div>

                {/* Interest Tags */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((item) => {
                      const isSelected = selectedTags.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleTag(item)}
                          className={`px-3 py-2 rounded-[56px] text-sm transition border-[1.5px]
                          ${
                            isSelected
                              ? "bg-black text-white border-black"
                              : "border-[#CCC] text-black"
                          }
                          hover:bg-black hover:text-white hover:border-black
                        `}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email ID
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                    className="popup-input"
                    classNames={{
                      inputWrapper: "input-wrapper",
                    }}
                  />
                </div>

                {/* Submit */}
                <div>
                  <Button type="submit" className="w-full primary-btn mt-3">
                    Submit details
                  </Button>
                </div>
              </div>
            </Form>

            <div>
              <p className="small grey text-center !leading-5">
                By submitting this form you acknowledge that you have read
                Noseberry’s Privacy Policy & agree to its terms.*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
