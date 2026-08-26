import { useRef, useState } from "react";
import "./Showreel.css";

const videos = [
  {
    id: "01",
    title: "Commercial Edit",
    category: "COMMERCIAL",
    file: "/videos/m1.mp4",
  },
  {
    id: "02",
    title: "Commercial Edit",
    category: "COMMERCIAL",
    file: "/videos/m2.mp4",
  },
  {
    id: "03",
    title: "Cinematic Edit",
    category: "CINEMATIC",
    file: "/videos/video.mp4",
  },
  {
    id: "04",
    title: "Cafe Edit",
    category: "CINEMATIC",
    file: "/videos/video1.mp4",
  },
  {
    id: "05",
    title: "Commercial Edit",
    category: "COMMERCIAL",
    file: "/videos/m4.mp4",
  },
  {
    id: "06",
    title: "AD Edit",
    category: "SHORT FORM",
    file: "/videos/video2.mp4",
  },
  {
    id: "07",
    title: "COMMERCIAL Edit",
    category: "COMMERCIAL",
    file: "/videos/m3.mp4",
  },
  {
    id: "08",
    title: "Cafe Film",
    category: "REEL",
    file: "/videos/video3.mp4",
  },
  {
    id: "09",
    title: "Brand Film",
    category: "REEL",
    file: "/videos/video4.mp4",
  },
  {
    id: "10",
    title: "Cafe Edit",
    category: "REEL",
    file: "/videos/video5.mp4",
  },
  {
    id: "11",
    title: "Brand Edit",
    category: "COMMERCIAL",
    file: "/videos/video6.mp4",
  },
  {
    id: "12",
    title: "Brand Edit",
    category: "COMMERCIAL",
    file: "/videos/video7.mp4",
  },
  {
    id: "13",
    title: "Trending",
    category: "REEL",
    file: "/videos/video8.mp4",
  },
  {
    id: "14",
    title: "Product Video",
    category: "PRODUCT",
    file: "/videos/video9.mp4",
  },
  {
    id: "15",
    title: "Product Video",
    category: "PRODUCT",
    file: "/videos/video10.mp4",
  },
  {
    id: "16",
    title: "Trending",
    category: "REEL",
    file: "/videos/v4.mp4",
  },

  {
    id: "17",
    title: "AI Reel",
    category: "REEL",
    file: "/videos/v2.mp4",
  },


  {
    id: "19",
    title: "Brand Edit",
    category: "SHORT FROM",
    file: "/videos/v1.mp4",
  },
 {
    id: "20",
    title: "Product ",
    category: "COMMERCIAL",
    file: "/videos/v5.mp4",
  },

  {
    id: "21",
    title: "Product Edit",
    category: "REEL",
    file: "/videos/v6.mp4",
  },
  {
    id: "22",
    title: "Product Edit",
    category: "AD",
    file: "/videos/v7.mp4",
  },

  {
    id: "23",
    title: "Fashion Reel",
    category: "REEL",
    file: "/videos/v8.mp4",
  },
   {
    id: "24",
    title: "Product ",
    category: "REEl",
    file: "/videos/v9.mp4",
  },

  {
    id: "25",
    title: "AD Reel",
    category: "REEL",
    file: "/videos/v21.mp4",
  },
   
   

  {
    id: "26",
    title: "Commercial Reel",
    category: "REEL",
    file: "/videos/v12.mp4",
  },
  
   {
    id: "27",
    title: "Product Campaign",
    category: "COMMERCIAL",
    file: "/videos/v14.mp4",
  },

  {
    id: "28",
    title: "Social Media Reel",
    category: "REEL",
    file: "/videos/v15.mp4",
  },
   {
    id: "29",
    title: "Fashion Reel",
    category: "REEL",
    file: "/videos/v16.mp4",
  },
   {
    id: "30",
    title: "Product Campaign",
    category: "COMMERCIAL",
    file: "/videos/v17.mp4",
  },

  {
    id: "31",
    title: "GYM Reel",
    category: "REEL",
    file: "/videos/v18.mp4",
  },
 
   {
    id: "32",
    title: "Brand Edit",
    category: "COMMERCIAL",
    file: "/videos/v20.mp4",
  },

  {
    id: "33",
    title: "Product Reel",
    category: "PRODUCT",
    file: "/videos/v24.mp4",
  },

   {
    id: "34",
    title: "AD Reel",
    category: "AD",
    file: "/videos/v22.mp4",
  },
   {
    id: "35",
    title: "Product Reel",
    category: "COMMERCIAL",
    file: "/videos/v23.mp4",
  },


];

function Showreel() {
  const sliderRef = useRef(null);
  const videoRefs = useRef({});

  const [playing, setPlaying] = useState(null);

  /* =========================================
     SLIDER
  ========================================= */

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".video-card");

    if (!card) return;

    const gap = 18;

    const amount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  /* =========================================
     PLAY / PAUSE
  ========================================= */

  const handlePlay = async (id) => {
    const selectedVideo = videoRefs.current[id];

    if (!selectedVideo) return;

    try {
      /* Same video → pause */

      if (playing === id) {
        selectedVideo.pause();
        setPlaying(null);
        return;
      }

      /* Pause every other video */

      Object.entries(videoRefs.current).forEach(
        ([videoId, video]) => {
          if (video && videoId !== id) {
            video.pause();
            video.currentTime = 0;
          }
        }
      );

      /* Play selected video */

      await selectedVideo.play();

      setPlaying(id);
    } catch (error) {
      console.error("Video play error:", error);
    }
  };

  /* =========================================
     VIDEO ENDED
  ========================================= */

  const handleEnded = (id) => {
    if (playing === id) {
      setPlaying(null);
    }
  };

  return (
    <section className="showreel" id="showreel">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="showreel-header">

        <div className="showreel-label">
          <span className="showreel-number">
            02
          </span>

          SHOWREEL
        </div>

        <div className="showreel-year">
          SELECTED CUTS / 2026
        </div>

      </div>


      {/* =========================================
          INTRO
      ========================================= */}

      <div className="showreel-intro">

        <div>
          <h2>
            MY
            <br />
            <span>WORK.</span>
          </h2>
        </div>

        <p>
          A collection of edits, stories and
          <br />
          visual experiments crafted frame by frame.
        </p>

      </div>


      {/* =========================================
          CONTROLS
      ========================================= */}

      <div className="slider-controls">

        <span className="slider-count">
          {String(videos.length).padStart(2, "0")} PROJECTS
        </span>

        <div className="slider-arrows">

          <button
            type="button"
            onClick={() => scrollSlider("prev")}
            aria-label="Previous"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollSlider("next")}
            aria-label="Next"
          >
            →
          </button>

        </div>

      </div>


      {/* =========================================
          VIDEO SLIDER
      ========================================= */}

      <div
        className="video-slider"
        ref={sliderRef}
      >

        {videos.map((video) => (

          <article
            className={`video-card ${
              playing === video.id ? "playing" : ""
            }`}
            key={video.id}
            onClick={() => {

              if (playing === video.id) {
                handlePlay(video.id);
              }

            }}
          >

            {/* VIDEO */}

            <video
              ref={(element) => {
                videoRefs.current[video.id] = element;
              }}
              className="portfolio-video"
              src={video.file}
              playsInline
              preload="metadata"
              onEnded={() => handleEnded(video.id)}
            />


            {/* DARK OVERLAY */}

            <div className="video-overlay"></div>


            {/* TOP INFO */}

            <div className="video-top">

              <span>
                {video.id}
              </span>

              <span>
                {video.category}
              </span>

            </div>


            {/* PLAY BUTTON */}

            {playing !== video.id && (

              <button
                type="button"
                className="video-play"
                onClick={(event) => {
                  event.stopPropagation();
                  handlePlay(video.id);
                }}
                aria-label={`Play ${video.title}`}
              >

                <div className="play-circle">
                  ▶
                </div>

              </button>

            )}


            {/* BOTTOM INFO */}

            <div className="video-bottom">

              <span className="video-label">
                PROJECT
              </span>

              <h3>
                {video.title}
              </h3>

            </div>

          </article>

        ))}

      </div>


      {/* =========================================
          BOTTOM STATEMENT
      ========================================= */}

      <div className="showreel-bottom">

        <div className="showreel-statement">
          EDIT. CUT. FEEL. <em>REPEAT.</em>
        </div>

        <div className="showreel-description">
          Every cut has a purpose.
          <br />
          Every frame has a feeling.
        </div>

      </div>


      {/* =========================================
          MARQUEE
      ========================================= */}

      <div className="showreel-marquee">

        <div className="marquee-track">

          <span>CUT</span>
          <i>•</i>

          <span>COLOR</span>
          <i>•</i>

          <span>SOUND</span>
          <i>•</i>

          <span>STORY</span>
          <i>•</i>

          <span>MOTION</span>
          <i>•</i>

          <span>CUT</span>
          <i>•</i>

          <span>COLOR</span>
          <i>•</i>

          <span>SOUND</span>
          <i>•</i>

          <span>STORY</span>
          <i>•</i>

          <span>MOTION</span>
          <i>•</i>

        </div>

      </div>

    </section>
  );
}

export default Showreel;