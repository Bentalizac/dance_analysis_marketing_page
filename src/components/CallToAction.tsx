function CallToAction() {
  return (
    <section id="cta" className="cta">
      <div className="cta-content">
        <h2 className="cta-title">Ready to transform your practice?</h2>
        <p className="cta-subtitle">
          Join dancers who are using AI to get better, faster. Sign up for early
          access — it's free.
        </p>
        <form
          className="cta-form"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Thanks for signing up! We\'ll be in touch.')
          }}
        >
          <input
            type="email"
            placeholder="you@example.com"
            className="cta-input"
            required
          />
          <button type="submit" className="btn btn-primary">
            Get Early Access
          </button>
        </form>
      </div>
    </section>
  )
}

export default CallToAction
