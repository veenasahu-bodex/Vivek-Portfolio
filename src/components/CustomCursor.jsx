import { useEffect, useState } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest(
        "a, button, .project-item, .showreel-player"
      );

      if (!target) {
        setCursorType("default");
        return;
      }

      if (
        target.classList.contains("project-item")
      ) {
        setCursorType("view");
      } else if (
        target.classList.contains("showreel-player")
      ) {
        setCursorType("play");
      } else if (
        target.closest("#contact")
      ) {
        setCursorType("talk");
      } else {
        setCursorType("link");
      }
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );
    };
  }, []);

  return (
    <div
      className={`custom-cursor cursor-${cursorType}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {cursorType === "view" && (
        <span>VIEW</span>
      )}

      {cursorType === "play" && (
        <span>PLAY</span>
      )}

      {cursorType === "talk" && (
        <span>LET'S TALK</span>
      )}
    </div>
  );
}

export default CustomCursor;