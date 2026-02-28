const steps = [
  {
    number: "1",
    title: "You upload your video",
    description:
      "Pick a practice video from your device or record a new one, then upload from our app.",
  },
  {
    number: "2",
    title: "We generate feedback",
    description:
      "Your video is processed, analyzed, and we generate feedback tailored to your needs.",
  },
  {
    number: "3",
    title: "You review & improve",
    description:
      "Review your practice session, track concrete metrics, and use those as a base to improve your artistry.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2 className="section-title">How it works</h2>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.number} className="step">
            <div className="step-number">{s.number}</div>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-desc">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
