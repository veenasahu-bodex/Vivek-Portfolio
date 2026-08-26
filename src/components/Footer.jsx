import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Top line */}
      <div className="footer-top">

        <div className="footer-brand">
          <span className="footer-dot"></span>
          <span>VIVEK SAHU</span>
        </div>

        <div className="footer-role">
          VIDEO EDITOR
        </div>

      </div>


      {/* Main footer */}
      <div className="footer-main">

        <div className="footer-title">
          <span>MAKE</span>
          <span>EVERY</span>
          <span>FRAME</span>
          <span>MATTER.</span>
        </div>


        <div className="footer-right">

          <p>
            EDITORIAL STORIES.
            <br />
            CINEMATIC EXPERIENCES.
          </p>

          <a
            href="mailto:viveksahuvivek2@gmail.com"
            className="footer-email"
          >
            viveksahuvivek2@gmail.com
            <span>↗</span>
          </a>

        </div>

      </div>


      {/* Social links */}
      <div className="footer-links">

        <div className="footer-socials">

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            YOUTUBE
          </a>

          <a href="mailto:viveksahuvivek2@gmail.com">
            EMAIL
          </a>

        </div>


        <a
          href="tel:+919876545678"
          className="footer-phone"
        >
          +91 98765 45678
        </a>

      </div>


      {/* Timeline */}
      <div className="footer-timeline">

        <div className="footer-time">
          00:00
        </div>

        <div className="footer-track">

          <div className="footer-track-fill"></div>

          <div className="footer-playhead">
            <span></span>
          </div>

        </div>

        <div className="footer-time">
          {currentYear}
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          VIVEK SAHU © {currentYear}
        </p>

        <p>
          VIDEO EDITOR
        </p>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          BACK TO TOP ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;