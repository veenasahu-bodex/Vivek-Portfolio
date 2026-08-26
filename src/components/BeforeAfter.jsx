import { useState, useRef } from "react";
import "./BeforeAfter.css";

function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);

  const updateSlider = (clientX) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();

    let value =
      ((clientX - rect.left) / rect.width) * 100;

    value = Math.max(5, Math.min(95, value));

    setPosition(value);
  };

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return;

    updateSlider(e.clientX);
  };

  const handleTouchMove = (e) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <section className="before-after" id="raw-final">

      {/* Header */}
      <div className="before-after-header">

        <div className="before-after-title">

          <span className="before-after-number">
            04
          </span>

          <div>
            <p className="small-label">
              EDITING TRANSFORMATION
            </p>

            <h2>
              RAW
              <span> → </span>
              FINAL
            </h2>
          </div>

        </div>

        <p className="before-after-intro">
          See what happens when raw footage
          <br />
          meets the right edit.
        </p>

      </div>


      {/* Slider */}
      <div
        className="comparison-wrapper"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >

        {/* FINAL */}
        <div className="comparison-final">

          <img
            src="images/vivek.jpeg"
            alt="Final cinematic edit"
            draggable="false"
          />

          <div className="comparison-label final-label">
            FINAL
          </div>

          <div className="final-info">
            <span>COLOR</span>
            <span>SOUND</span>
            <span>EDIT</span>
          </div>

        </div>


        {/* RAW */}
        <div
          className="comparison-raw"
          style={{
            width: `${position}%`,
          }}
        >

          <img
            src="images/vivek.jpeg"
            alt="Raw footage"
            draggable="false"
          />

          <div className="comparison-label raw-label">
            RAW
          </div>

        </div>


        {/* Drag Handle */}
        <div
          className="comparison-handle"
          style={{
            left: `${position}%`,
          }}
        >

          <div className="handle-line"></div>

          <div className="handle-circle">

            <span>‹</span>

            <span>›</span>

          </div>

          <div className="handle-line"></div>

        </div>


        {/* Percentage */}
        <div className="comparison-percentage">
          {Math.round(position)}%
        </div>

      </div>


      {/* Bottom Skills */}
      <div className="comparison-skills">

        <div className="comparison-skill">

          <span>01</span>

          <strong>
            COLOR GRADING
          </strong>

          <p>
            Building mood, contrast and cinematic
            visual identity.
          </p>

        </div>


        <div className="comparison-skill">

          <span>02</span>

          <strong>
            SOUND DESIGN
          </strong>

          <p>
            Using sound to control emotion,
            rhythm and attention.
          </p>

        </div>


        <div className="comparison-skill">

          <span>03</span>

          <strong>
            VISUAL RHYTHM
          </strong>

          <p>
            Cutting every frame with purpose
            and timing.
          </p>

        </div>

      </div>


      {/* Drag instruction */}
      <div className="drag-instruction">

        <span className="drag-arrow">
          ←
        </span>

        DRAG TO COMPARE

        <span className="drag-arrow">
          →
        </span>

      </div>

    </section>
  );
}

export default BeforeAfter;