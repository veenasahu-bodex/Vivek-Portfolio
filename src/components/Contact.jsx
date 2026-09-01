import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-bg-text">
        CONTACT
      </div>

      {/* Top label */}
      <div className="contact-header">

        <div className="contact-index">
          <span>11</span>
          <p>LET'S CREATE SOMETHING</p>
        </div>

        <div className="contact-status">
          <span className="contact-status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

      </div>


      {/* Main CTA */}
      <div className="contact-main">

        <p className="contact-eyebrow">
          HAVE A STORY TO TELL?
        </p>

        <h2>
          LET'S
          <br />
          <span>EDIT IT.</span>
        </h2>

        <p className="contact-description">
          Looking for a Video Editor who understands
          storytelling, pacing and visual impact?
          Let's turn your footage into something worth watching.
        </p>


        {/* Buttons */}
        <div className="contact-actions">

          <a
            href="mailto:viveksahuvivek2@gmail.com"
            className="contact-primary"
          >
            <span>EMAIL ME</span>
            <strong>↗</strong>
          </a>


          <a
            href="tel:+917067520692"
            className="contact-secondary"
          >
            <span>CALL ME</span>
            <strong>↗</strong>
          </a>

        </div>

      </div>


      {/* Contact information */}
      <div className="contact-info">

        <div className="contact-info-item">

          <span>EMAIL</span>

          <a href="mailto:viveksahuvivek2@gmail.com">
            viveksahuvivek2@gmail.com
          </a>

        </div>


        <div className="contact-info-item">

          <span>PHONE</span>

          <a href="tel:+917067520692">
            +91 7067520692
          </a>

        </div>


        <div className="contact-info-item">

          <span>ROLE</span>

          <p>
            VIDEO EDITOR
          </p>

        </div>


        <div className="contact-info-item">

          <span>STATUS</span>

          <p>
            OPEN TO WORK
          </p>

        </div>

      </div>


      {/* Social links */}
      <div className="contact-socials">

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


      {/* Bottom visual */}
      <div className="contact-timeline">

        <div className="contact-time">
          00:00:00
        </div>

        <div className="contact-timeline-track">

          <span></span>

          <div className="contact-playhead">
            <i></i>
          </div>

        </div>

        <div className="contact-time">
          01:00:00
        </div>

      </div>

    </section>
  );
}

export default Contact;