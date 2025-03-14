import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface Props {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: Props) {
  return (
    <div className="h-80 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <InteractiveCard>
        <div className="relative w-full min-h-52 h-1/2 overflow-hidden">
          <Image
            src={imgSrc}
            alt="Product Picture"
            fill={true}
            className="object-cover transition duration-500 hover:opacity-90"
          />
        </div>
        <div className="h-1/3 p-4 bg-white flex items-center justify-center">
          <h3 className="font-bold text-brown-700 text-lg text-center">
            {venueName}
          </h3>
        </div>
      </InteractiveCard>
    </div>
  );
}
