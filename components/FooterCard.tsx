import { FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export function FooterCard() {
  return (
    <section className="bg-white py-12 px-6 text-center text-sm text-gray-700">
     
      <div className="mb-4 flex justify-center">
        <Image src="/logo.jpeg" alt="Company Logo" width={80} height={40} />
      </div>

      <p className="mb-6">Think your team might benefit with no-code workflows? Let’s connect.</p>

     
      <div className="flex justify-center gap-4 mb-8">
        <a href="#" className="text-blue-700 text-xl"><FaLinkedin /></a>
        <a href="#" className="text-red-600 text-xl"><FaYoutube /></a>
        <a href="#" className="text-green-600 text-xl"><FaEnvelope /></a>
      </div>

      
      <div className="flex flex-col md:flex-row justify-center gap-12 text-left text-sm">
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p>📞 +91 8567 987 456</p>
          <p>🌐 www.your-company.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Address</h4>
          <p>Company HQ<br /> 2nd Floor, Sector 62,<br /> Noida, India - 201307</p>
        </div>
      </div>
    </section>
  );
}
