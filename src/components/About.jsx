import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      {/* Background */}
      <div className="about-bg-word">
        VIVEK
      </div>


      {/* Header */}
      <div className="about-header">

        <span className="about-section-number">
          08
        </span>

        <p>
          BEHIND THE CUTS
        </p>

      </div>


      {/* Main content */}
      <div className="about-main">

        {/* Portrait */}
        <div className="about-visual">

          <div className="about-image-frame">

            {/* Replace this image later */}
            <img
              src="/images/vivek1.jpeg"
              alt="Vivek Sahu - Video Editor"
            />

            <div className="about-image-overlay"></div>

            <div className="about-image-grain"></div>


            {/* Image labels */}
            <div className="about-image-top">
              <span>VIVEK SAHU</span>
              <span>VIDEO EDITOR</span>
            </div>


            <div className="about-image-bottom">

              <span>
                FRAME
              </span>

              <span>
                2026
              </span>

            </div>


            {/* Corner */}
            <div className="about-corner top-left"></div>
            <div className="about-corner top-right"></div>
            <div className="about-corner bottom-left"></div>
            <div className="about-corner bottom-right"></div>

          </div>


          {/* Experience badge */}
          <div className="about-experience-badge">

            <strong>
              1+
            </strong>

            <span>
              YEARS
              <br />
              EXPERIENCE
            </span>

          </div>

        </div>


        {/* Text */}
        <div className="about-content">

          <p className="about-kicker">
            I'M VIVEK SAHU —
          </p>


          <h2>
            I DON'T JUST
            <br />
            <span>EDIT VIDEOS.</span>
            <br />
            I BUILD
            <br />
            <em>STORIES.</em>
          </h2>


          <div className="about-description">

            <p>
              I'm Vivek Sahu, a Video Editor with
              1+ years of experience turning raw
              footage into engaging visual stories.
            </p>

            <p>
              I focus on storytelling, pacing,
              emotion, sound and visual rhythm
              to create edits that don't just look
              good — they keep people watching.
            </p>

            <p>
              From short-form reels and YouTube
              videos to cinematic sequences and
              branded content, I approach every
              project with one goal:
            </p>

          </div>


          <div className="about-statement">

            <span>
              MAKE
            </span>

            <strong>
              EVERY FRAME
            </strong>

            <span>
              MATTER.
            </span>

          </div>


          {/* Stats */}
          <div className="about-stats">

            <div className="about-stat">

              <strong>
                01+
              </strong>

              <span>
                YEARS
                <br />
                EXPERIENCE
              </span>

            </div>


            <div className="about-stat">

              <strong>
                03
              </strong>

              <span>
                EDITING
                <br />
                APPROACHES
              </span>

            </div>


            <div className="about-stat">

              <strong>
                ∞
              </strong>

              <span>
                CREATIVE
                <br />
                POSSIBILITIES
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom line */}
      <div className="about-bottom">

        <span>
          STORY
        </span>

        <div className="about-line">
          <span></span>
        </div>

        <span>
          EMOTION
        </span>

        <div className="about-line">
          <span></span>
        </div>

        <span>
          RHYTHM
        </span>

        <div className="about-line">
          <span></span>
        </div>

        <span>
          IMPACT
        </span>

      </div>

    </section>
  );
}

export default About;