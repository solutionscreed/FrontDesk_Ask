"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const testimonials = [
  { name: "Client 1", image: "/client1.jpg", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { name: "Client 2", image: "/client2.jpg", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { name: "Client 3", image: "/client3.jpg", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { name: "Client 4", image: "/client4.jpg", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [hovered, setHovered] = useState(false);

  const total = testimonials.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // Autoplay once on mount
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-full overflow-hidden rounded-lg"
    >
      {/* Arrow Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className={clsx(
          "absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow transition-opacity",
          hovered ? "opacity-100" : "opacity-0"
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className={clsx(
          "absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow transition-opacity",
          hovered ? "opacity-100" : "opacity-0"
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slides */}
      <div className="w-full aspect-video relative">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={clsx(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              {
                "opacity-100 z-10": i === current,
                "opacity-0 z-0": i !== current,
              }
            )}
          >
            <a href={t.video} target="_blank" rel="noopener noreferrer">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover rounded-lg"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
