
import { HighlightCard } from "@/components/HighLightCard";
import { FaClock, FaChartLine, FaRocket, FaUsers } from "react-icons/fa";
import { ServiceCard } from "@/components/ServicesCard";
export default function OurServicesSection() {
  const serviceCards = [
    {
      image: "/automation1.png",
      title: "Workflow Mapping and Audit",
      description: "We identify your manual workflows and suggest the most efficient automation strategies.",
    },
    {
      image: "/automation2.png",
      title: "Tool and App Integration",
      description: "We connect your CRM, emails, spreadsheets and tools into one streamlined system.",
    },
    {
      image: "/automation3.png",
      title: "Custom Automation Support",
      description: "We build powerful, no-code automations tailored to your exact processes.",
    },
   
  
  ];

  const highlightCards = [
    {
      icon: <FaClock />,
      value: "230 +",
      label: "Manual hours saved",
      description: "For a mid-size client in just the first 30 days of workflow automation",
    },
    {
      icon: <FaChartLine />,
      value: "95%",
      label: "Faster internal turnaround",
      description: "Fewer delays and backlogs in internal ops",
    },
    {
      icon: <FaRocket />,
      value: "4x faster",
      label: "Campaign execution",
      description: "Prebuilt automations speed up client delivery",
    },
    {
      icon: <FaUsers />,
      value: "12+",
      label: "Workflows built",
      description: "For ops, support, CRM, outreach and more",
    },
  ];

  return (
    <>
      <section id="services"   className="bg-blue-500 text-white py-16 px-4 pt-28 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Services that help you Automate Smarter</h2>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:flex-wrap">
          {serviceCards.map((card, idx) => (
            <ServiceCard key={idx} {...card} />
          ))}
        </div>
      </section>

      
      <section className="bg-white py-10 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold underline underline-offset-4 text-black mb-10">
          Why <span className="text-blue-500">work with us</span> ?
        </h2>
        <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center">
          {highlightCards.map((card, idx) => (
            <HighlightCard key={idx} {...card} />
          ))}
        </div>
        <div className="mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Get your Free ROI estimate
          </button>
        </div>
      </section>
    </>
  );
}
