import { useState } from "react";
import "./editingLanguage.css";

const editingStyles = [
  {
    number: "01",
    title: "STORYTELLING",
    text: "I build edits around emotion, structure and the story behind every frame.",
  },
  {
    number: "02",
    title: "PACING",
    text: "Every cut has a rhythm. I use timing to control attention and keep the viewer engaged.",
  },
  {
    number: "03",
    title: "SOUND DESIGN",
    text: "Sound effects, music and silence work together to make visuals feel more powerful.",
  },
  {
    number: "04",
    title: "COLOR & MOOD",
    text: "Color isn't decoration. It creates atmosphere, emotion and visual identity.",
  },
  {
    number: "05",
    title: "ATTENTION TO DETAIL",
    text: "Small details make the difference between an edit that looks good and one that feels finished.",
  },
];

function EditingLanguage() {
  const [active, setActive] = useState(0);

  return (
    <section className="editing-language" id="style">

      {/* Background number */}
      <div className="language-bg-number">
        {String(active + 1).padStart(2, "0")}
      </div>

      {/* Header */}
      <div className="language-header">

        <div className="language-heading">

          <span className="language-section-number">
            05
          </span>

          <div>

            <p className="language-eyebrow">
              CREATIVE APPROACH
            </p>

            <h2>
              MY EDITING
              <br />
              <em>LANGUAGE</em>
            </h2>

          </div>

        </div>


        <p className="language-intro">
          The way I think about
          <br />
          every frame.
        </p>

      </div>


      {/* Skills */}
      <div className="language-list">

        {editingStyles.map((item, index) => (

          <div
            className={`language-item ${
              active === index ? "active" : ""
            }`}
            key={item.number}
            onMouseEnter={() => setActive(index)}
            onClick={() => setActive(index)}
          >

            <div className="language-number">
              {item.number}
            </div>


            <div className="language-title">
              {item.title}
            </div>


            <div className="language-description">
              {item.text}
            </div>


            <div className="language-icon">
              ↗
            </div>

          </div>

        ))}

      </div>


      {/* Bottom statement */}
      <div className="language-footer">

        <span>
          EVERY FRAME
        </span>

        <div className="language-line">
          <span></span>
        </div>

        <span>
          HAS A PURPOSE.
        </span>

      </div>

    </section>
  );
}

export default EditingLanguage;