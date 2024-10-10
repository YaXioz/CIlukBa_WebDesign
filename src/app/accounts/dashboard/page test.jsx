/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const colors = ["#00AAFF", "#FF5500", "#00FF77", "#FF00AA", "#5500FF", "#FFAA00"];
const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg", "/images/image5.jpg", "/images/image6.jpg"];

export default function Home() {
  const containerRef = useRef(null);
  const [contentIndex, setContentIndex] = useState(0); // Menyimpan indeks konten yang akan diganti

  useEffect(() => {
    const elements = containerRef.current.children;
    let iteration = 0;

    // Timeline untuk animasi berulang
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onLeave: () => {
          // Mengganti konten setiap kali elemen keluar dari viewport
          iteration += 1;
          const newIndex = iteration % colors.length; // Siklus konten berdasarkan panjang array
          setContentIndex(newIndex);

          // Reset posisi animasi
          gsap.fromTo(
            elements,
            {
              scale: 1,
              x: 0,
              y: 0,
              opacity: 1,
            },
            {
              scale: 2,
              x: 500, // Geser diagonal
              y: 500,
              opacity: 0,
              stagger: 0.1,
              duration: 2,
              ease: "power1.inOut",
            }
          );
        },
      },
    });

    return () => {
      // Bersihkan timeline saat komponen di-unmount
      tl.kill();
    };
  }, [contentIndex]); // Gunakan contentIndex sebagai dependensi agar perubahan di-render

  return (
    <div style={{ height: "200vh", padding: "50px" }}>
      <div
        ref={containerRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          width: "80%",
          margin: "0 auto",
        }}
      >
        {/* Elemen yang akan dianimasikan */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={boxStyle(colors[contentIndex], images[i])}>
            {/* Ganti ini dengan gambar jika perlu */}
            <img src={images[i]} alt={`image-${i}`} style={{ width: "100%", height: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Fungsi untuk memberikan style box
const boxStyle = (color, image) => ({
  width: "200px",
  height: "200px",
  backgroundColor: color,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  color: "white",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});
