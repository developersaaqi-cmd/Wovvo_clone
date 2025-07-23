import React from "react";

interface GuidesCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function GuidesCard({
  title,
  description,
  image,
  category,
}: GuidesCardProps) {
  return (
    <div className="bg-white transition ">
      <img src={image} alt={title} className=" mb-3 w-full h-40 object-cover" />
      <p className="text-sm gradient-text mb-1 text-gradient">{category}</p>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
