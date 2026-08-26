import { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: "01",
    quote:
      "Vivek understands that editing is not just about cutting clips. He knows how to build emotion and keep the viewer engaged.",
    name: "CREATIVE DIRECTOR",
    role: "CREATIVE AGENCY",
  },
  {
    id: "02",
    quote:
      "The pacing, transitions and attention to detail made the final video feel much more premium than the original footage.",
    name: "CONTENT LEAD",
    role: "DIGITAL MEDIA",
  },
  {
    id: "03",
    quote:
      "What stands out is his ability to understand the story first and then use editing to make that story stronger.",
    name: "PROJECT MANAGER",
    role: "PRODUCTION TEAM",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section className="testimonials-section" id="testimonials">

      {/* Background */}
      <div className="testimonials-bg">
        TESTIMONIALS
      </div>


      {/* Header */}
      <div className="testimonials-header">

        <div className="testimonials-label">
          <span>10</span>
          <p>WHAT PEOPLE SAY</p>
        </div>

        <div className="testimonials-status">
          <span className="testimonials-status-dot"></span>
          <span>SELECTED FEEDBACK</span>
        </div>

      </div>


      {/* Main quote */}
      <div className="testimonial-main">

        <div className="testimonial-mark">
          “
        </div>


        <div className="testimonial-content">

          <div className="testimonial-count">
            {current.id} / 03
          </div>

          <blockquote key={current.id}>
            {current.quote}
          </blockquote>


          <div className="testimonial-author">

            <div className="testimonial-author-line"></div>

            <div>
              <strong>
                {current.name}
              </strong>

              <span>
                {current.role}
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* Navigation */}
      <div className="testimonial-navigation">

        <div className="testimonial-progress">

          {testimonials.map((item, index) => (

            <button
              key={item.id}
              type="button"
              className={
                active === index
                  ? "testimonial-nav active"
                  : "testimonial-nav"
              }
              onClick={() => setActive(index)}
            >

              <span>
                {item.id}
              </span>

              <div className="testimonial-nav-line">
                <span></span>
              </div>

            </button>

          ))}

        </div>


        <div className="testimonial-hint">
          DRAG / CLICK TO EXPLORE
        </div>

      </div>


      {/* Bottom marquee */}
      <div className="testimonial-marquee">

        <div className="testimonial-marquee-track">

          <span>STORY</span>
          <i>•</i>
          <span>EMOTION</span>
          <i>•</i>
          <span>RHYTHM</span>
          <i>•</i>
          <span>IMPACT</span>
          <i>•</i>

          <span>STORY</span>
          <i>•</i>
          <span>EMOTION</span>
          <i>•</i>
          <span>RHYTHM</span>
          <i>•</i>
          <span>IMPACT</span>
          <i>•</i>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;