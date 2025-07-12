import ClientTestimonialsPage from "@/components/ClientTestimonials";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import OurServicesSection from "@/components/OurServices";
import { Navbar } from "@/components/StickyNav";
import { TopBar } from "@/components/Topbar";



export default function Page() {
  return (
    <>
      <TopBar/>
      <Navbar />
      <main className="space-y-20 p-6 scroll-smooth">
        <HeroSection/>
       
          <ClientTestimonialsPage />
      
          <OurServicesSection/>
        
        
          <ContactSection />
        
      </main>
    </>
  );
}
