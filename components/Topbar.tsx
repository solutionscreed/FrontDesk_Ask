
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function TopBar() {
  return (
    <div className="w-full bg-white border-b px-4 py-3 flex justify-between items-center">
   
      <div className="flex items-center gap-2">
        <Image
          src="/logo.jpeg" 
          alt="Company Logo"
          width={40}
          height={40}
        />
        <span className="font-semibold text-lg">YourCompany</span>
      </div>

      <Button variant="outline" className="text-sm">
        Message
      </Button>
    </div>
  );
}
