import { useState } from "react";
import "./CreativeProcess.css";

const processSteps = [
  {
    number: "01",
    title: "UNDERSTAND",
    label: "THE STORY",
    description:
      "Understand the brief, audience, emotion and purpose before touching the timeline.",
  },
  {
    number: "02",
    title: "SELECT",
    label: "THE MOMENTS",
    description:
      "Find the strongest shots, expressions, reactions and moments that deserve to stay.",
  },
  {
    number: "03",
    title: "STRUCTURE",
    label: "THE FLOW",
    description:
      "Build the story, sequence the footage and create a rhythm that keeps viewers watching.",
  },
  {
    number: "04",
    title: "EDIT",
    label: "THE TIMELINE",
    description:
      "Cut with intention, shape pacing and connect every frame into a cohesive visual experience.",
  },
  {
    number: "05",
    title: "POLISH",
    label: "THE DETAILS",
    description:
      "Refine sound, color, transitions, motion and micro-details until the edit feels complete.",
  },
  {
    number: "06",
    title: "DELIVER",
    label: "THE FINAL FRAME",
    description:
      "Export a polished final product ready for its platform, audience and purpose.",
  },
];

function CreativeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="process-section" id="process">

      {/* Background */}
      <div className="process-bg-word">
        PROCESS
      </div>


      {/* Header */}
      <div className="process-header">

        <div className="process-heading">

          <span className="process-number">
            09
          </span>

          <div>

            <p className="process-eyebrow">
              THE EDITING WORKFLOW
            </p>

            <h2>
              FROM RAW
              <br />
              <span>TO FINAL FRAME</span>
            </h2>

          </div>

        </div>


        <div className="process-intro">
          <span>06 STEPS</span>

          <p>
            Every project starts
            <br />
            with a story.
          </p>
        </div>

      </div>


      {/* Timeline */}
      <div className="process-timeline">

        {/* Main line */}
        <div className="process-track">

          <div
            className="process-track-progress"
            style={{
              width: `${((activeStep + 1) / processSteps.length) * 100}%`,
            }}
          />

        </div>


        {/* Steps */}
        <div className="process-steps">

          {processSteps.map((step, index) => (

            <button
              type="button"
              className={`process-step ${
                activeStep === index ? "active" : ""
              }`}
              key={step.number}
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >

              <span className="process-step-number">
                {step.number}
              </span>

              <span className="process-step-dot">
                <span />
              </span>

              <span className="process-step-title">
                {step.title}
              </span>

            </button>

          ))}

        </div>


        {/* Active content */}
        <div className="process-detail">

          <div className="process-detail-number">
            {processSteps[activeStep].number}
          </div>

          <div className="process-detail-main">

            <p className="process-detail-label">
              {processSteps[activeStep].label}
            </p>

            <h3>
              {processSteps[activeStep].title}
            </h3>

            <p className="process-detail-description">
              {processSteps[activeStep].description}
            </p>

          </div>


          <div className="process-frame">

            <div className="process-frame-top">
              <span>
                TIMELINE
              </span>

              <span>
                00:00:{String(activeStep + 1).padStart(2, "0")}
              </span>
            </div>


            <div className="process-frame-lines">

              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>


            <div className="process-playhead">
              <span />
            </div>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="process-bottom">

        <span>
          RAW FOOTAGE
        </span>

        <div className="process-bottom-arrow">
          →
        </div>

        <strong>
          STORY
        </strong>

        <div className="process-bottom-arrow">
          →
        </div>

        <span>
          FINAL FRAME
        </span>

      </div>

    </section>
  );
}

export default CreativeProcess;