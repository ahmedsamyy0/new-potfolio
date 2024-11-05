import React from "react";

const TimelineItem = ({
  title,
  company,
  companyLink,
  date,
  desc,
}: {
  title: string;
  company: string;
  companyLink: string;
  date: string;
  desc: string;
}) => {
  return (
    <div
      className="timeline-item flex-col p-6 rounded-xl relative border border-white/[0.1]"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
      <h2 className="text-base md:text-lg font-medium text-purple">
        {company}
      </h2>
      <p className="text-xs md:text-sm italic">{date}</p>
      {/* <p className="text-sm">{desc}</p> */}
    </div>
  );
};

export default TimelineItem;
