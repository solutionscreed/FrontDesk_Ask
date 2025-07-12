import { ReactNode } from "react";

type HighlightCardProps = {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
};

export function HighlightCard({ icon, value, label, description }: HighlightCardProps) {
  return (
    <div className="relative bg-yellow-400 rounded-md shadow-md p-6 pt-10 w-full max-w-xs">
      <div className="absolute -top-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-md text-xl">
        {icon}
      </div>
      <div className="text-black text-center">
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-lg font-semibold mt-1">{label}</div>
        <p className="text-sm mt-2">{description}</p>
      </div>
      <div className="h-1 w-20 bg-black mt-4 mx-auto" />
    </div>
  );
}
