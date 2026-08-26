import { useEffect, useRef, useState } from "react";
import "./Experience.css";

const milestones = [
  {
    year: "01",
    title: "LEARNING",
    description:
      "Building the fundamentals of editing, storytelling, pacing, transitions and visual rhythm.",
  },
  {
    year: "02",
    title: "PROFESSIONAL EDITING",
    description:
      "Turning editing knowledge into real-world production work and consistent content.",
  },
  {
    year: "03",
    title: "CLIENT PROJECTS",
    description:
      "Working on projects where creative direction, deadlines and client expectations meet.",
  },
  {
    year: "04",
    title: "SOCIAL MEDIA CONTENT",
    description:
      "Creating short-form content designed around hooks, retention, rhythm and platform behavior.",
  },
  {
    year: "05",
    title: "CREATIVE GROWTH",
    description:
      "Continuously improving storytelling, sound design, color, motion and visual direction.",
  },
];

function Experience() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const total = rect.height + viewportHeight;
      const current = viewportHeight - rect.top;

      let value = current / total;

      value = Math.max(0, Math.min(1, value));

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="experience-section"
      id="experience"
      ref={sectionRef}
    >

      {/* Background */}
      <div className="experience-bg">
        EXPERIENCE
      </div>


      {/* Header */}
      <div className="experience-header">

        <div className="experience-heading">

          <span className="experience-number">
            07
          </span>

          <div>

            <p className="experience-eyebrow">
              THE JOURNEY SO FAR
            </p>

            <h2>
              THE
              <br />
              <span>EXPERIENCE</span>
            </h2>

          </div>

        </div>


        <div className="experience-counter">

          <span className="counter-label">
            EXPERIENCE
          </span>

          <strong>
            1<span>+</span>
          </strong>

          <small>
            YEARS
          </small>

        </div>

      </div>


      {/* Timeline */}
      <div className="experience-timeline">

        <div className="timeline-base"></div>

        <div
          className="timeline-progress"
          style={{
            height: `${progress * 100}%`,
          }}
        ></div>


        <div className="timeline-items">

          {milestones.map((item, index) => {

            const itemProgress =
              progress * milestones.length;

            const isActive =
              itemProgress >= index + 0.4;

            return (
              <div
                className={`experience-item ${
                  isActive ? "active" : ""
                }`}
                key={item.year}
              >

                {/* Dot */}
                <div className="experience-dot">
                  <span></span>
                </div>


                {/* Year */}
                <div className="experience-item-number">
                  {item.year}
                </div>


                {/* Content */}
                <div className="experience-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>


                {/* Side label */}
                <div className="experience-side-label">
                  0{index + 1}
                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* Bottom statement */}
      <div className="experience-bottom">

        <div className="experience-bottom-line"></div>

        <p>
          MORE EXPERIENCE.
          <br />
          MORE STORIES.
          <br />
          BETTER EDITS.
        </p>

      </div>

    </section>
  );
}

export default Experience;