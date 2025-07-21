"use client";

import { TechStackType } from "@/data/techStackData";

interface props {
  data: TechStackType[];
}

export default function TechStack({ data }: props) {
  return (
    <div className="space-y-6">
      {data.map((section) => (
        <div key={section.category}>
          {section.category !== "Summary" ? (
            <h3 className="text-2xl font-bold mb-1">{section.category}</h3>
          ) : (
            <></>
          )}
          <ul className="space-y-1 pl-4 text-lg">
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
                  <span className="italic bg-white">{item.description}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
