import experience, { ExperienceItem } from "../(experience)/data";
import { IoOpenOutline } from "react-icons/io5";

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 bg-white dark:bg-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200">
      {/* Top row: role + type badge */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 dark:text-[#ededed] leading-snug">
            {item.role}
          </h3>
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 text-xs text-[#8e8e92] hover:text-gray-700 dark:hover:text-[#ededed] transition-colors duration-200 group"
              >
                {item.company}
                <IoOpenOutline className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            ) : (
              <span className="text-xs text-[#8e8e92]">{item.company}</span>
            )}
            {item.location && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                <span className="text-xs text-[#8e8e92]">{item.location}</span>
              </>
            )}
          </div>
        </div>

        {/* Type badge */}
        <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700 text-[#8e8e92] dark:text-[#8e8e92] font-ibm-plex-mono whitespace-nowrap">
          {item.type}
        </span>
      </div>

      {/* Period */}
      <p className="text-[11px] text-[#8e8e92] font-ibm-plex-mono -mt-1">
        {item.period}
      </p>

      {/* Description */}
      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
        {item.description}
      </p>

      {/* Tech stack chips */}
      {item.tech && item.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-400 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

const Experience = () => {
  return (
    <div className="pt-16">
      {/* Section label */}
      <div className="text-sm text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono mb-4">
        experience
      </div>

      {/* Experience cards */}
      <div className="flex flex-col gap-3">
        {experience.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
