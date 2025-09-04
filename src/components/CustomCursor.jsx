"use client"
import gsap from "gsap"
import { useEffect } from "react"

const CustomCursor = ({ color }) => {
  useEffect(() => {
    const cursorCustom = document.querySelector('.cursorCustom')
    const cursorFollower = document.querySelector('.follower')

    const moveCursor = (e) => {
      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(cursorCustom, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
    };

    gsap.set(cursorFollower, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorCustom, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="max-lg:hidden z-10">
      {/* follower */}
      <div
        className="follower fixed z-50 pointer-events-none rounded-full"
        style={{
          width: color ? "20px" : "50px",
          height: color ? "20px" : "50px",
          backgroundColor: color || "#dc2626"
        }}
      />

      <div
        className="cursorCustom fixed z-50 pointer-events-none rounded-full"
        style={{
          backgroundColor: color && "white" || "black",
          width: "10px",
          height: "10px"
        }}
      />

    </div>
  );
}

export default CustomCursor;
