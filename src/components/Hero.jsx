import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-image"></div>
        <div className="hero-gradient"></div>
        <div className="hero-vignette"></div>
      </div>

      <div className="film-frame frame-one"></div>
      <div className="film-frame frame-two"></div>
      <div className="film-frame frame-three"></div>

      <div className="hero-content">
        <div className="hero-meta">
          <span className="hero-index">01</span>
          <span>VIDEO EDITOR</span>
          <span className="meta-slash">/</span>
          <span>INDIA</span>
          <span className="meta-slash">/</span>
          <span>2026</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">VIVEK</span>
          <span className="hero-title-line hero-outline">SAHU</span>
        </h1>

        <div className="hero-footer">
          <div className="hero-description">
            <p>I turn raw footage into</p>
            <p className="hero-description-highlight">
              stories people remember.
            </p>
          </div>

          <div className="hero-actions">
            <a
              href="#showreel"
              className="hero-btn hero-btn-primary"
            >
              <span>WATCH MY WORK</span>
              <span className="hero-arrow">↗</span>
            </a>

            <a
              href="#contact"
              className="hero-btn hero-btn-secondary"
            >
              <span>LET'S WORK TOGETHER</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-text">
          SCROLL TO EXPLORE
        </div>

        <div className="hero-scroll-line">
          <span></span>
        </div>
      </div>

      <div className="hero-timeline">
        <div className="timeline-time">00:00:00</div>

        <div className="timeline-line">
          <span></span>
        </div>

        <div className="timeline-time">02:14:08</div>
      </div>
    </section>
  );
}

export default Hero;