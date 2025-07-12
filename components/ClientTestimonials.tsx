import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { AccordionSection } from "@/components/AccordionSection";

export default function ClientTestimonialsPage() {
  return (
    <section id="testimonials" className="w-full min-h-screen bg-white py-10 px-4 pt-28">
      <h1 className="text-center text-2xl font-bold mb-10">Client Testimonials</h1>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-start">
        
        <div className="md:w-[70%] w-full">
          <TestimonialCarousel />
        </div>

     
        <div className="md:w-[40%] w-full">
          <AccordionSection />
        </div>
      </div>
    </section>
  );
}
