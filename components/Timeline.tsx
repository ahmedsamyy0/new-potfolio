import { timeline } from "@/data";
import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col gap-10 pb-20" id="experience">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Here is my <span className="text-purple">work experience</span>
      </h1>
      <div className="timeline-container flex flex-col items-center justify-center ">
        {timeline.map(({ id, title, company, companyLink, date, desc }) => {
          return (
            <TimelineItem
              key={id}
              title={title}
              company={company}
              companyLink={companyLink}
              date={date}
              desc={desc}
            />
          );
        })}
        <span className="absolute z-10 -bottom-12">
          Still more to achieve...
        </span>
      </div>
    </div>
  );
};

export default Timeline;
