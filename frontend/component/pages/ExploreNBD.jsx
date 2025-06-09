import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "NBD Success Meetup 2025",
    desc: "Noseberry Digital Agency: Leading the Change in Creative Excellence Since 2022",
    image: "/images/nbd-meetup.png",
    tags: ["Growth", "AI Trends"],
    date: "19 April 2025",
    readTime: "7 min read",
  },
  {
    id: 2,
    title: "Growth is Important",
    desc: "Noseberry Digital Agency: Leading the Change in Creative Excellence Since 2022",
    image: "/images/nbd-growth.png",
    tags: ["AI Integration", "Web Application"],
    date: "19 April 2025",
    readTime: "7 min read",
  },
];

export default function ExploreNBD() {
  return (
    <section className="exploreNBD bg-black padding-120">
      <div className="container flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-1/4">
          <p className="semi-bold white mb-4">INSIGHTS</p>
          <h2 className="white">Explore about NBD</h2>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 lg:w-3/4">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col md:flex-row gap-4 bg-[#141414] rounded-xl overflow-hidden">
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <h4 className="text-lg font-semibold mb-2">{article.desc}</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#1e1e1e] text-white px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-[#9A9A9A]">
                  {article.date} • {article.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
