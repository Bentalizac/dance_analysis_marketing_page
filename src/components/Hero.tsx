import { PRODUCT_NAME } from "../config";

function Hero() {
  return (
    <section className="hero">
      <nav className="nav">
        <div className="nav-brand">{PRODUCT_NAME}</div>
        <a href="#features" className="nav-link">
          Features
        </a>
        <a href="#how-it-works" className="nav-link">
          How It Works
        </a>
        <a href="#cta" className="btn btn-sm">
          Get Early Access
        </a>
      </nav>

      <div className="hero-content">
        <p className="hero-eyebrow">AI-Powered Dance Analysis</p>
        <h1 className="hero-title">
          Get better technique,
          <br />
          Get better results.
        </h1>
        <p className="hero-subtitle">
          Building a strong technical foundation gives you the freedom to
          express yourself in every step.
        </p>
        <div className="hero-actions">
          <a href="#cta" className="btn btn-primary">
            Get Started Free
          </a>
          <a href="#how-it-works" className="btn btn-outline">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
