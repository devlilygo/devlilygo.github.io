"use client";

import dynamic from "next/dynamic";
import { Card } from "../atoms/Card";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import { ApexOptions } from "apexcharts";

const Skills = () => {
  const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const techStatState = {
    series: [
      {
        name: "Series 1",
        data: [9, 8.5, 8, 8.5, 8.5, 6.5],
      },
    ],
    options: {
      title: {
        text: "TECH STATS",
        style: {
          fontWeight: "bold",
          fontFamily: "jost",
          color: "#263238",
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      yaxis: {
        stepSize: 2,
      },
      xaxis: {
        categories: [
          "React",
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "REST API",
          "GraphQL",
        ],
      },
    },
    animations: {
      enabled: true,
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  };

  const timelineState: ApexAxisChartSeries = [
    {
      data: [
        {
          x: "Relocation",
          y: [new Date("2024-04-16").getTime(), new Date().getTime()],
          fillColor: "#808080",
        },
        {
          x: "React, Typescript, Next.js, GraphQL, Tailwind",
          y: [
            new Date("2023-01-01").getTime(),
            new Date("2023-12-31").getTime(),
          ],
          fillColor: "#F9C80E",
        },
        {
          x: "React, Typescript, Node.js, REST API",
          y: [
            new Date("2024-01-01").getTime(),
            new Date("2024-04-16").getTime(),
          ],
          fillColor: "#A300D6",
        },
        {
          x: "C#",
          y: [
            new Date("2022-07-01").getTime(),
            new Date("2022-12-31").getTime(),
          ],
          fillColor: "#2983FF",
        },
        {
          x: "React, Typescript, Node.js, REST API",
          y: [
            new Date("2022-01-01").getTime(),
            new Date("2022-06-30").getTime(),
          ],
          fillColor: "#A300D6",
        },
        {
          x: "React, Typescript, Node.js, REST API",
          y: [
            new Date("2021-06-01").getTime(),
            new Date("2021-12-31").getTime(),
          ],
          fillColor: "#A300D6",
        },
        {
          x: "Vue.js, Java Spring",
          y: [
            new Date("2021-01-01").getTime(),
            new Date("2021-05-31").getTime(),
          ],
          fillColor: "#449DD1",
        },
        {
          x: "Javascript",
          y: [
            new Date("2020-01-01").getTime(),
            new Date("2020-12-31").getTime(),
          ],
          fillColor: "#00B1F2",
        },
        {
          x: "pro*C, Javascript",
          y: [
            new Date("2016-03-01").getTime(),
            new Date("2019-12-31").getTime(),
          ],
          fillColor: "#81D4FA",
        },
      ],
    },
  ];

  const timelineOptions: ApexOptions = {
    chart: {
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: true,
        distributed: false,
        dataLabels: {
          hideOverflowingLabels: true,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number[]) => {
        const a = dayjs(val[0]);
        const b = dayjs(val[1]);
        const diff = b.diff(a, "month", true);
        const roundedMonth = Math.round(diff);
        return roundedMonth + " m";
      },
      style: {
        colors: ["#f3f4f5", "#fff"],
        fontFamily: "jost",
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "MMM 'yy",
        style: { fontFamily: "jost" },
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      borderColor: "#f3f4f5",
      strokeDashArray: 4,
      row: {
        colors: ["#f3f4f5", "#fff"],
        opacity: 0,
      },
    },
    theme: {
      palette: "palette10",
    },
    tooltip: {
      enabled: true,
      style: { fontFamily: "jost" },
    },
  };

  return (
    <div className="flex-1 flex flex-col bg-white/60 px-8 p-10 gap-4">
      <div className="flex w-full h-1/2 gap-4">
        <div className="flex w-1/2 h-full">
          <Card title="TECH STATS" header={false}>
            <div className="flex w-full h-full items-center justify-center">
              <Chart
                options={techStatState.options}
                series={techStatState.series}
                type="radar"
                height={300}
              />
            </div>
          </Card>
        </div>
        <div className="flex flex-col w-1/2 h-full gap-2">
          <Card
            title="LANGUAGES"
            padding="py-2 px-6"
            backgroundColor="bg-transparent"
            className="h-20"
          >
            <div className="flex gap-2">
              <Badge variant="default">JavaScript (ES6+)</Badge>
              <Badge variant="default">TypeScript</Badge>
              <Badge variant="default">HTML / CSS</Badge>
            </div>
          </Card>
          <Card
            title="FRAMEWORKS & LIBRARIES"
            padding="py-2 px-6"
            backgroundColor="bg-transparent"
            className="h-20"
          >
            <div className="flex gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </div>
          </Card>
          <Card
            title="TOOLS & SERVICES"
            padding="py-2 px-6"
            backgroundColor="bg-transparent"
            className="h-20"
          >
            <div className="flex gap-2">
              <Badge variant="outline" className="border-white">
                Git / GitHub
              </Badge>
              <Badge variant="outline" className="border-white">
                Figma
              </Badge>
              <Badge variant="outline" className="border-white">
                VS Code
              </Badge>
              <Badge variant="outline" className="border-white">
                Jira
              </Badge>
              <Badge variant="outline" className="border-white">
                Confluence
              </Badge>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex w-full h-1/2 gap-4 pb-4 pr-4">
        <Card
          title="SKILLS"
          header={false}
          backgroundColor="bg-transparent"
          className="pl-0"
        >
          <Chart
            options={timelineOptions}
            series={timelineState}
            type="rangeBar"
            height={300}
          />
        </Card>
      </div>
    </div>
  );
};

export default Skills;
