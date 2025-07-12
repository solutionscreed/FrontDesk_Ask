import { FaqCard } from "@/components/FaqCard";
import { CtaBanner } from "@/components/CtaBanner";
import { FooterCard } from "@/components/FooterCard";
import { BottomStrip } from "@/components/BottomStrip";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full min-h-screen bg-white py-10 px-4 pt-28">
      <FaqCard />
      <CtaBanner />
      <FooterCard />
      <BottomStrip />
    </section>
  );
}
