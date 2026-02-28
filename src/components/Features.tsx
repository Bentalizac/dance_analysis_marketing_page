import { PRODUCT_NAME } from "../config";

const features = [
  {
    icon: "🎥",
    title: "Video Upload",
    description:
      "Record from your camera or pick a file from your gallery. Works on mobile and web.",
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    description:
      "Our backend processes your video to detect poses, evaluate form, and generate coaching feedback.",
  },
  {
    icon: "📝",
    title: "Routine Tracking",
    description:
      "Document your routines, exercises, and more to share notes and progress.",
  },
  {
    icon: "🕐",
    title: "Detailed Feedback",
    description:
      "Get feedback tied to specific moments in your routine, down to individual frames.",
  },
  {
    icon: "📊",
    title: "Progression History",
    description:
      "Track your practice time and revisit past feedback to measure your growth.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "We don't want our data leaked, so we take care of yours.",
  },
];

function Features() {
  return (
    <section id="features" className="features">
      <h2 className="section-title">Everything you need to level up</h2>
      <p className="section-subtitle">
        From upload to analysis to review — {PRODUCT_NAME} covers the full loop.
      </p>
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <span className="feature-icon">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
