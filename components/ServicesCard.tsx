import Image from "next/image";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

export function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow text-center w-full max-w-md">
      <Image src={image} alt={title} width={140} height={140} className="mx-auto mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2 text-gray-600">{description}</p>
    </div>
  );
}
