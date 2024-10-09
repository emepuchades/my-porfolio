import React from "react";
import { Link } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const experienceItems = [
  { number: "01", title: "Indra", link: "#" },
  { number: "02", title: "Finametrix", link: "#" },
  { number: "03", title: "Dide", link: "#" },
];

function WorkExperience() {
  return (
    <section className="bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              8+ Years de
              <br />
              experiencia
            </h2>
            <p className="text-sm mb-8 max-w-md">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusant doloremque laudantium
            </p>
          </div>
          <div className="border-t border-black pt-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">
                {experienceItems[0].title}
              </h3>
              <span className="text-sm">{experienceItems[0].number}</span>
            </div>
            <a
              href={experienceItems[0].link}
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              Explore
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {experienceItems.slice(1).map((item) => (
            <div key={item.number} className="border-t border-black pt-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-sm">{item.number}</span>
              </div>
              <a
                href={item.link}
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                Explore
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
