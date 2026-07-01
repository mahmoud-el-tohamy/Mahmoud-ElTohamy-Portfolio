import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, MapPin, Award, CalendarDays } from "lucide-react";

const volunteeringData = [
  {
    id: "yly",
    org: "Youth Leading Youth (YLY)",
    subtitle: "Ministry of Youth and Sports, Egypt",
    period: "Aug 2023 – Present",
    location: "Matrouh Governorate, Egypt",
    image: "/images/volunteering/yly.jpeg",
    color: "from-[#004aad] to-blue-400",
    accentColor: "blue",
    finalRole: "Vice Team Leader",
    highlights: [
      "#1 Operations Member Nationwide — Consistently achieved the top rank for 12 consecutive months (Entire Season 5).",
      "#1 Head of Operations in Egypt",
      "Led 'Flash' photography event to maximum capacity",
      "Organized Mustaqbalna 12 with ~200 volunteers & 300+ children",
      "Selected by Governor to lead National Day Celebration",
      "Coordinated Minister of Youth visit across multiple venues",
      "Received 2× Ministerial Shield of Excellence from the Minister of Youth and Sports Dr. Ashraf Sobhy (Feb & Jun 2025)",
    ],
    journey: [
      { date: "Aug 2023", role: "OR Committee Member" },
      { date: "Jun 2024", role: "Vice Head of Operations" },
      { date: "Dec 2024", role: "Head of Operations" },
      { date: "Jan 2025", role: "Vice Team Leader" },
    ],
  },
  {
    id: "creativa",
    org: "Creativa Innovation Hub Mansoura",
    subtitle: "Ministry of Communications & IT",
    period: "Jul 2025 – Present",
    location: "Mansoura, Egypt",
    image: "/images/volunteering/creativa.jpeg",
    color: "from-violet-600 to-fuchsia-500",
    accentColor: "purple",
    finalRole: "Volunteer",
    highlights: [
      "Supported technology events & training programs (ITIDA)",
      "Technical setup, registration & attendance management",
      "Photography, videography & video editing for events",
      "Lead Organizer & Official Photographer (Ministerial Visit) — Organized & documented the visit of H.E. Amr Talaat, Minister of Communications, to Creativa Mansoura.",
      "Organized TICnovation Expert Talks with VOIS (Cyber Security, DevSecOps)",
      "Helped establish & define the volunteer team structure",
    ],
    journey: [{ date: "Jul 2025", role: "Volunteer" }],
  },
  {
    id: "gdg",
    org: "Google Developers Group Delta",
    subtitle: "GDG Delta Community",
    period: "Sep 2025 – Present",
    location: "Mansoura, Egypt",
    image: "/images/volunteering/gdg.jpeg",
    color: "from-emerald-500 to-cyan-500",
    accentColor: "green",
    finalRole: "Logistics & Technical Member",
    highlights: [
      "Organized community events — workshops to major conferences (DevFest)",
      "Configured & maintained AV systems, networking & technical displays",
      "On-site technical support for speakers and attendees",
      "Managed distribution of event resources & printed materials",
    ],
    journey: [{ date: "Sep 2025", role: "Logistics & Technical Member" }],
  },
];

const accentClasses = {
  blue: {
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
    dot: "bg-blue-600",
    glow: "group-hover:shadow-blue-500/20",
    bullet: "bg-blue-500",
  },
  purple: {
    badge:
      "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20",
    dot: "bg-purple-600",
    glow: "group-hover:shadow-purple-500/20",
    bullet: "bg-purple-500",
  },
  green: {
    badge:
      "bg-green-500/10 text-green-600 dark:text-green-300 border-green-500/20",
    dot: "bg-green-600",
    glow: "group-hover:shadow-green-500/20",
    bullet: "bg-green-500",
  },
};

const VolunteeringCard = ({ item, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const accent = accentClasses[item.accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={`group relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl ${accent.glow} transition-all duration-500 hover:-translate-y-1`}
    >
      {/* Top bar gradient */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} />

      <div className="flex flex-col laptop:flex-row">
        {/* Image Panel — h-64/72 on mobile/tablet, w-52 full height on laptop */}
        <div className="w-full h-64 tablet:h-72 laptop:w-52 laptop:h-auto laptop:min-h-full laptop:flex-shrink-0 relative overflow-hidden">
          {!imgError ? (
            <Image
              src={item.image}
              alt={item.org ? `${item.org} - Volunteering Experience` : "Volunteering Experience"}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className={`absolute inset-0 w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
            >
              <span className="text-white text-5xl font-black opacity-30 select-none">
                {item.org.slice(0, 2)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t laptop:bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Right — Content */}
        <div className="flex-1 p-6 laptop:p-8 flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl laptop:text-2xl font-bold text-black dark:text-white leading-tight">
                  {item.org}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full border ${accent.badge} flex-shrink-0`}
              >
                {item.finalRole}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5" />
                {item.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {item.location}
              </span>
            </div>
          </div>

          {/* Journey Steps */}
          {item.journey.length > 1 && (
            <div className="mt-1">
              {/* Mobile: vertical timeline */}
              <div className="flex flex-col gap-3 laptop:hidden">
                {item.journey.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex flex-col items-center pt-1">
                      <div
                        className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${accent.dot}`}
                      />
                      {i < item.journey.length - 1 && (
                        <div className="w-px flex-1 min-h-[20px] bg-gray-300 dark:bg-gray-700 mt-1" />
                      )}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs font-semibold text-black dark:text-white">
                        {step.role}
                      </span>
                      <span className="block text-[10px] text-gray-400">
                        {step.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Desktop: horizontal timeline */}
              <div className="hidden laptop:flex items-start gap-0 overflow-x-auto">
                {item.journey.map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center gap-0.5 min-w-[90px]">
                      <div className={`w-2 h-2 rounded-full ${accent.dot}`} />
                      <span className="text-xs font-medium text-black dark:text-white text-center leading-tight mt-0.5">
                        {step.role}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {step.date}
                      </span>
                    </div>
                    {i < item.journey.length - 1 && (
                      <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700 mt-1 min-w-[12px]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Top 3 highlights always visible */}
          <ul className="flex flex-col gap-2">
            {item.highlights.slice(0, 3).map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
              >
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.bullet}`}
                />
                {h}
              </li>
            ))}
          </ul>

          {/* Expand / Collapse */}
          {item.highlights.length > 3 && (
            <>
              <AnimatePresence>
                {expanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-2 overflow-hidden"
                  >
                    {item.highlights.slice(3).map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.bullet}`}
                        />
                        {h}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <button
                onClick={() => setExpanded(!expanded)}
                className="self-start flex items-center gap-1.5 text-xs font-semibold text-[#004aad] dark:text-blue-400 hover:opacity-70 transition-opacity mt-auto"
              >
                {expanded ? "Show less" : `+${item.highlights.length - 3} more`}
                <motion.span
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Volunteering = () => {
  return (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2 mb-8 laptop:mb-12"
      >
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-[#004aad] dark:text-blue-400" />
          <h1 className="text-2xl text-bold">Volunteering.</h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg">
          Leadership, operations, and community impact across national
          initiatives.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {volunteeringData.map((item, index) => (
          <VolunteeringCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
