import type { ExperienceEntry } from "../../types";

interface ExperienceCardProps {
  experience: ExperienceEntry;
  detailed?: boolean;
}

const ExperienceCard = ({
  experience,
  detailed = false,
}: ExperienceCardProps) => (
  <article
    id={experience.id}
    className="experience-card flex scroll-mt-6 gap-4 border-b border-textGray/20 py-6 first:pt-0 last:border-0 last:pb-0"
  >
    <img
      src={experience.companyLogo}
      alt={`${experience.company} company logo`}
      width="64"
      height="64"
      loading="lazy"
      decoding="async"
      className="h-16 w-16 shrink-0 rounded-md border border-textGray/30 bg-textWhite/5 object-cover"
    />
    <div className="min-w-0 flex-1">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-base font-medium text-textWhite">
            {experience.company}
          </h3>
          <p className="text-sm text-textPrimary">{experience.role}</p>
        </div>
        <p className="shrink-0 text-xs text-textGray sm:text-right">
          {experience.dates}
        </p>
      </div>
      <p className="mt-3 text-sm leading-6 text-detailText">
        {experience.summary}
      </p>
      {detailed && (
        <>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-detailText">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-textPrimary">›</span>
                <span>
                  {typeof highlight === "string" ? (
                    highlight
                  ) : (
                    <>
                      {highlight.leading}
                      <strong className="font-medium text-textWhite">
                        {highlight.metric}
                      </strong>
                      {highlight.trailing}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-textGray">
            {experience.skills.map((skill) => (
              <span key={skill}>#{skill}</span>
            ))}
          </div>
          <p className="mt-3 text-xs text-textGray/70">{experience.location}</p>
        </>
      )}
    </div>
  </article>
);

export default ExperienceCard;
