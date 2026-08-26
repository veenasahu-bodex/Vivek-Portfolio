import { useEffect, useState } from "react";
import "./Preloader.css";

function Preloader({ onComplete = () => {} }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    let completeTimer;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 2;

      if (current >= 100) {
        current = 100;

        clearInterval(interval);

        setProgress(100);

        completeTimer = setTimeout(() => {
          onComplete();
        }, 500);

        return;
      }

      setProgress(current);
    }, 70);

    return () => {
      clearInterval(interval);

      if (completeTimer) {
        clearTimeout(completeTimer);
      }
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader ${
        progress === 100 ? "complete" : ""
      }`}
    >

      {/* TOP */}
      <div className="preloader-top">

        <span>
          VIVEK SAHU
        </span>

        <span>
          PORTFOLIO / 2026
        </span>

      </div>


      {/* MAIN */}
      <div className="preloader-center">

        <div className="preloader-title">

          <span>VIVEK</span>

          <span>SAHU</span>

        </div>


        <div className="preloader-role">
          VIDEO EDITOR
        </div>


        {/* TIMELINE */}
        <div className="preloader-timeline">

          <div className="timeline-info">

            <span>
              00:00:
              {String(
                Math.floor(progress / 10)
              ).padStart(2, "0")}
            </span>

            <span>
              {progress}%
            </span>

          </div>


          <div className="timeline-track">

            <div
              className="timeline-progress"
              style={{
                width: `${progress}%`,
              }}
            />

            <div
              className="timeline-head"
              style={{
                left: `${progress}%`,
              }}
            />

          </div>


          <div className="timeline-labels">

            <span>RAW</span>

            <span>EDIT</span>

            <span>COLOR</span>

            <span>SOUND</span>

            <span>FINAL</span>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="preloader-bottom">

        <span>
          STORY IN EVERY FRAME
        </span>

        <span>
          {progress === 100
            ? "READY"
            : "LOADING EXPERIENCE..."
          }
        </span>

      </div>

    </div>
  );
}

export default Preloader;