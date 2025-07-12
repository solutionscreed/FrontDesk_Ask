"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const sections = [
  { name: "Home", href: "#home" },
  { name: "Client Testimonials", href: "#testimonials" },
  { name: "Our Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export  function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");

  const handleClick = (name: string) => {
    setActiveSection(name);
  };

  return (
    <nav className="w-full sticky top-0 bg-white z-50 shadow-sm">
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap px-4 py-3 md:justify-center scrollbar-hide">
        {sections.map((item) => (
          <a
            href={item.href}
            key={item.name}
            onClick={() => handleClick(item.name)}
            className="shrink-0"
          >
            <Button
              variant={activeSection === item.name ? "default" : "secondary"}
              className="rounded-full text-sm font-medium transition-all"
            >
              {item.name}
            </Button>
          </a>
        ))}
      </div>
    </nav>
  );
}
