"use client";

import React from "react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    desc: '"Noseberry Digital Agency: Leading the Change in Creative Excellence Since 2022"',
    image: "/images/nbd-meetup.png",
    tags: ["Growth", "AI Trends"],
    date: "11 April 2025",
    readTime: "7 min read",
  },
  {
    id: 2,
    desc: '"Noseberry Digital Agency: Leading the Change in Creative Excellence Since 2022"',
    image: "/images/nbd-growth.png",
    tags: ["AI", "AI Integration", "Web Application"],
    date: "11 April 2025",
    readTime: "7 min read",
  },
];

export default function ExploreNBD() {
  return (
    <section className="exploreNBD bg-black padding-120">
      <div className="container flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-1/4">
          <p className="semi-bold white mb-4 rounded-sm bg-[rgba(75,34,224,0.12)] px-2 py-1.5 w-max">
            INSIGHTS
          </p>
          <h2 className="white">
            Explore <br /> about NBD
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-14 lg:w-3/4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col md:flex-row gap-10 rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={article.image}
                  alt=""
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
                <div>
                  <h4 className="white">{article.desc}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-base text-white px-4 py-2 rounded-full border-[1.5px] border-[#925EFF] secondary-font font"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 secondary-font font grey">
                  <div>{article.date}</div> <span>•</span>{" "}
                  <div>{article.readTime}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
