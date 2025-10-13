import Image from "next/image";
import { Button } from "./Button";

export function Card({ title, price, description, img }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <Image src={img} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-grey-800">{description}</p>
        <p className="text-lg font-semibold mt-2">{price}</p>
        <Button className="mt-4">Buy Now</Button>
      </div>
    </div>
  );
}
