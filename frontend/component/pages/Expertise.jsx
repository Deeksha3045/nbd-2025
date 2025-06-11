import Image from "next/image";

const expertiseList = [
  {
    title: "Web & app development",
    desc: "Building fast, secure platforms engineered for scale.",
    icon: "/images/web-dev.svg",
  },
  {
    title: "Brand identity & UI/UX design",
    desc: "Building fast, secure platforms engineered for scale.",
    icon: "/images/designing.svg",
  },
  {
    title: "Performance marketing",
    desc: "Building fast, secure platforms engineered for scale.",
    icon: "/images/perform-marketing.svg",
  },
  {
    title: "Digital asset management",
    desc: "Building fast, secure platforms engineered for scale.",
    icon: "/images/digital management.svg",
  },
  {
    title: "Product strategy & engineering",
    desc: "Building fast, secure platforms engineered for scale.",
    icon: "/images/strategy.svg",
  },
  {
    title: "AI enablement & automation",
    desc: "Building fast, secure platforms engineered for scale.",
    icon: "/images/ai-automation.svg",
  },
];

export default function ExpertiseSection() {
  return (
    <section
      className="expertise-section padding-120 !pb-0"
      style={{
        background:
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 36.71%), #F0F2FA",
      }}
    >
      <div className="container">
        <h2 className="text-center">Our expertise</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 text-left group transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]"
            >
              {/* Violet upper-left corner on hover */}
              <div className="absolute top-0 left-0 w-36 h-32 z-0 overflow-hidden rounded-tl-2xl pointer-events-none">
                <div className="w-full h-full bg-white rounded-br-[500px] transition-colors duration-300 group-hover:bg-[rgba(75,34,224,0.2)]"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-[60px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
                <p className="large semi-bold">{item.title}</p>
                <p className="grey pt-2 pb-2.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
