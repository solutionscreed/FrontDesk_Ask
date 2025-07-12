
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 py-12 gap-8"
    >
    
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/robot.jpg"
          alt="AI Illustration"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="md:w-1/2 max-w-md w-full space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-yellow-500">Outcome</span> – First Approach.
          </h2>
          <p className="text-gray-600 mt-2">
            Here you lure the user with the help of the core benefit they get.
          </p>
        </div>

        <form className="bg-blue-500 p-6 rounded-lg space-y-4 shadow-md">
          <Input
            type="text"
            placeholder="Name"
            className="bg-white text-black placeholder:text-gray-500"
          />
          <Input
            type="email"
            placeholder="E-mail or phone."
            className="bg-white text-black placeholder:text-gray-500"
          />
          <Input
            type="date"
            className="bg-white text-black"
          />
          <Button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold hover:bg-yellow-300"
          >
            very specific cta
          </Button>
        </form>
      </div>
    </section>
  );
}
