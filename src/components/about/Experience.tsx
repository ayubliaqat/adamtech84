"use client";
import React from "react";
import TimelineItem from "./TimelineItem"; // Ensure this matches our previous component

export default function ExperienceSection() {
  const workHistory = [
    {
      title: "Technical Lead & AI Consultant",
      company: "Strategic Tech Solutions",
      period: "2021 — PRESENT",
      description: "Leading the integration of LLMs and RAG pipelines into existing enterprise infrastructures. Focused on automating decision-making processes for SMEs while maintaining high-security standards in the German market.",
    },
    {
      title: "Senior Telecommunications Engineer",
      company: "Global Connect GmbH",
      period: "2015 — 2021",
      description: "Managed large-scale infrastructure projects, specializing in network resilience and zero-downtime migrations. Optimized hardware-software interfaces for high-throughput data environments.",
    },
    {
      title: "Systems Infrastructure Engineer",
      company: "Telecom Dynamics",
      period: "2012 — 2015",
      description: "Designed and deployed foundational electrical and network systems. Built the 'ground-up' architecture for regional communication hubs.",
    }
  ];

  return (
    <section id="experience" className="scroll-mt-32 space-y-12">
      {/* SECTION HEADER */}
      <div className="space-y-2">
        <h3 className="text-cyan-600 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-3">
          <span className="h-[1px] w-8 bg-cyan-600/30"></span>
          // 01. Professional Path
        </h3>
        <p className="text-xs text-muted/50 font-mono italic pl-11">
          Evolution: Infrastructure → Intelligence
        </p>
      </div>

      {/* TIMELINE LIST */}
      <div className="relative">
        {workHistory.map((job, index) => (
          <TimelineItem 
            key={index}
            title={job.title}
            company={job.company}
            period={job.period}
            description={job.description}
            isLast={index === workHistory.length - 1}
          />
        ))}
      </div>
    </section>
  );
}