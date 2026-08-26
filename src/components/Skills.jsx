import "./Skills.css";

const skills = [
  "VISUAL STORYTELLING",
  "CREATIVE EDITING",
  "FAST-PACED EDITING",
  "CINEMATIC EDITING",
  "SHORT-FORM CONTENT",
  "LONG-FORM CONTENT",
  "SOCIAL MEDIA EDITING",
  "SOUND DESIGN",
  "COLOR CORRECTION",
  "MOTION GRAPHICS",
  "RHYTHM & PACING",
  "ATTENTION TO DETAIL",
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      {/* Background text */}
      <div className="skills-bg-text">
        EDIT
      </div>

      {/* Header */}
      <div className="skills-header">

        <div className="skills-heading-wrap">

          <span className="skills-number">
            06
          </span>

          <div>

            <p className="skills-eyebrow">
              THE TOOLSET BEHIND THE EDIT
            </p>

            <h2>
              WHAT I BRING
              <br />
              <span>TO THE TIMELINE</span>
            </h2>

          </div>

        </div>

        <p className="skills-intro">
          Not just cutting clips.
          <br />
          Building experiences.
        </p>

      </div>


      {/* Skills timeline */}
      <div className="skills-timeline">

        <div className="timeline-track">
          <span className="timeline-dot"></span>
          <span className="timeline-dot"></span>
          <span className="timeline-dot"></span>
          <span className="timeline-dot"></span>
          <span className="timeline-dot"></span>
        </div>


        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-item"
              key={skill}
            >

              <div className="skill-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="skill-name">
                {skill}
              </div>

              <div className="skill-arrow">
                ↗
              </div>

            </div>

          ))}

        </div>

      </div>


      {/* Bottom marquee */}
      <div className="skills-marquee">

        <div className="skills-marquee-track">

          <span>STORY</span>
          <b>×</b>

          <span>RHYTHM</span>
          <b>×</b>

          <span>ENERGY</span>
          <b>×</b>

          <span>EMOTION</span>
          <b>×</b>

          <span>DETAIL</span>
          <b>×</b>

          <span>STORY</span>
          <b>×</b>

          <span>RHYTHM</span>
          <b>×</b>

          <span>ENERGY</span>
          <b>×</b>

          <span>EMOTION</span>
          <b>×</b>

          <span>DETAIL</span>
          <b>×</b>

        </div>

      </div>

    </section>
  );
}

export default Skills;