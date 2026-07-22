"use client";

import React, { useState } from "react";
import skills, { Skill, SkillCategory } from "../(Skills)";

// Tooltip wrapper
function SkillBadge({
  skill,
  showIcon,
}: {
  skill: Skill;
  showIcon: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium cursor-default transition-all duration-200 bg-black text-white dark:bg-transparent dark:border dark:border-gray-700 dark:text-[#ededed] hover:opacity-80 select-none">
        {showIcon && skill.icon && (
          <skill.icon className="w-3.5 h-3.5 shrink-0" />
        )}
        <span>{skill.name}</span>
      </div>

      {/* Tooltip */}
      {skill.description && hovered && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[180px] pointer-events-none">
          <div className="bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg px-3 py-2 shadow-xl border border-gray-700">
            <p className="font-semibold text-[11px] mb-0.5 text-white">{skill.name}</p>
            <p className="text-gray-300 text-[10px] leading-relaxed">{skill.description}</p>
          </div>
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-gray-900 dark:bg-gray-800 border-r border-b border-gray-700 rotate-45 -mt-1" />
          </div>
        </div>
      )}
    </div>
  );
}

// Single category card
function CategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white dark:bg-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200">
      <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-ibm-plex-mono">
        {category.category}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
            showIcon={category.showIcons}
          />
        ))}
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="pt-16">
      {/* Section label */}
      <div className="text-sm text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono mb-4">
        skills
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((category) => (
          <CategoryCard key={category.category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
