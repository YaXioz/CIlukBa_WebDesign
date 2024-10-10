"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomMoveComponent = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 1, xPercent: 0, yPercent: 0 },
      {
        scale: 3, // Zoom sebesar 3x
        xPercent: 100, // Bergeser diagonal ke kanan
        yPercent: 100, // Bergeser diagonal ke bawah
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center", // Mulai animasi saat elemen mencapai bagian atas viewport
          end: "bottom top", // Animasi selesai ketika elemen mencapai bagian bawah viewport
          scrub: true, // Animasi bergerak seiring dengan scroll
        },
      }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "lightblue",
        margin: "100px auto",
        textAlign: "center",
        lineHeight: "200px",
        fontSize: "20px",
      }}
    >
      Zoom & Move
    </div>
  );
};

export default ZoomMoveComponent;
