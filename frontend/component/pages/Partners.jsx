import Image from "next/image";

const partners = [
  { name: "Frontify", logo: "/images/frontify.png" },
  { name: "Censhare", logo: "/images/censhare.png" },
  { name: "Google Cloud", logo: "/images/google-cloud.png" },
  { name: "Databricks", logo: "/images/data-bricks.png" },
  { name: "Aprimo", logo: "/images/aprimo.png" },
  { name: "Sitecore", logo: "/images/sitecore.png" },
  { name: "Creative Cloud", logo: "/images/creative-cloud.png" },
];

export default function SoftwarePartners() {
  return (
    <section className="partners-section bg-[#F0F2FA] padding-120">
      <div className="container">
        <h2 className="text-center">
          Our software partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 max-w-4xl mx-auto mt-10">
          {partners.map((partner, index) => (
            <div key={index}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={185}
                height={80}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
