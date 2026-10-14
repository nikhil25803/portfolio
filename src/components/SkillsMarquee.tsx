const skills = [
  "Go",
  "Python",
  "JavaScript",
  "TypeScript",
  "C++",
  "Django",
  "FastAPI",
  "React",
  "Node.js",
  "Express",
  "Next.js",
  "NestJS",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "ScyllaDB",
  "PostGIS",
  "Docker",
  "Kubernetes",
  "AWS",
  "FFmpeg",
  "gRPC",
];

const SkillStrip = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="marquee-strip" aria-hidden={hidden || undefined}>
    {skills.map((skill) => (
      <span key={skill} className="whitespace-nowrap">
        <span className="mr-2 text-textPrimary">#</span>
        {skill}
      </span>
    ))}
  </div>
);

const SkillsMarquee = () => (
  <section
    aria-label="Skills"
    className="marquee border-y border-textGray/25 py-3"
  >
    <div className="marquee-track">
      <SkillStrip />
      <SkillStrip hidden />
    </div>
  </section>
);

export default SkillsMarquee;
