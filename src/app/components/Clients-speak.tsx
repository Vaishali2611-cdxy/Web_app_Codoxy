"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./UI/infinite-moving-cards";

export function ClientsSpeak() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-b from-white to-orange-100 py-8 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-black">Our Clients </span>
        <span className="text-orange-500">Speak!</span>
      </h1>
      
      
      <InfiniteMovingCards 
        items={testimonials}
        direction="right"
        speed = "fast"
      />
    </div>
  );
}

 const testimonials = [
  {
    quote:
      "Your team’s contributions in developing and supporting this project have been invaluable, and we couldn’t have done it without your team’s dedication. As we move forward, we would like to seek your continued support and collaboration to ensure the continued success of this project. Your team’s contributions are critical to the ongoing development and maintenance of our new version of the web application. We appreciate your ongoing support and look forward to continuing our collaboration.",
    name: "Ananth Gopinath",
    title: "Scikraft - Xperimentor",
  },
  {
    quote:
      "Impressed by the seamless integration of new systems by Codoxy Solutions. Their approach to project management and implementation is commendable. They not only upgraded our IT infrastructure but also provided thorough training to our staff, ensuring a smooth transition. A trustworthy and proficient IT partner! Codoxy Solutions embodies efficiency, innovation, and reliability through tailor-made software solutions that enhance our operations, yielding substantial cost savings and heightened productivity.",
    name: "Vinay",
    title: "Zerozilla",
  },
  {
    quote: "I can’t recommend Codoxy Solutions enough! Their team possesses an in-depth understanding of the IT landscape and was able to tailor their services to our unique requirements. From developing websites to software development, they have consistently delivered top-notch solutions that have helped us stay ahead in our industry. A huge shoutout to Codoxy Solutions for their exceptional service! They rescued us from a critical data loss situation and implemented robust data backup solutions.",
    name: "Manohar Gowda",
    title: "Asteyatech",
  },  
];
