"use client";

import { TechStackTypeV3 } from "@/data/TechStackTypeV3";

interface props {
  data: TechStackTypeV3[];
}

export default function TechStack({ data }: props) {
  return (
    <div className="space-y-6 flex h-full w-full flex-col">
      {data.map((section) => (
        <div key={section.category}>
          {section.category !== "Summary" ? (
            <h3 className="text-lg md:text-xl font-bold mb-1">
              {section.category}
            </h3>
          ) : (
            <></>
          )}
          <ul className="space-y-1 pl-6 text-sm md:text-lg leading-relaxed">
            {section.items.map((item) => (
              <li key={item.name} className="whitespace-pre-line">
                {section.category !== "Summary" ? (
                  <span className="font-semibold">{item.name} : </span>
                ) : (
                  <></>
                )}
                {section.category !== "Summary" ? (
                  item.description
                ) : (
                  <span className="italic text-balance text-sm md:text-xl leading-loose">
                    {item.description}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
