"use client";
import GuidesTabs from "@/components/GuidesTabs";
import GuidesCard from "@/components/GuidesCard";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  const allGuides = Object.values(guides).flatMap((cat) => cat.items);
  console.log(allGuides, "allGuides<>");
  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row max-w-[1100px] mx-auto w-full pt-[100px]">
        <div className="lg:w-64 w-full ">
          <GuidesTabs selectedCategory="" />
        </div>

        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-8">
            Business, Marketing, and Branding Guides
          </h1>
          <p className="text font-semibold mb-2 max-w-2xl">
            Everything you need to know to grow your business.
          </p>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Step-by-step and highly practical guides covering proofreading and
            editing, white papers, resume writing, social media copy, sales
            copy, and more!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGuides.map((item, index) => (
              <GuidesCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
