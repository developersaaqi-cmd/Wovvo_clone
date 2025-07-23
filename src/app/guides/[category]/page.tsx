"use client";
import { useEffect, useState } from "react";
import GuidesTabs from "@/components/GuidesTabs";
import GuidesContent from "@/components/GuidesContent";
import { guides } from "@/data/guides";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [categoryState, setCategoryState] = useState<string | null>(null);

  useEffect(() => {
    if (params.category) setCategoryState(params.category);
  }, [params.category]);

  if (!categoryState) return <div>Loading...</div>;

  return (
    <div className="min-h-screen  ">
      {/* Centered content container */}
      <div className="flex flex-col lg:flex-row max-w-[1100px] mx-auto w-full pt-[105px]">
        {/* Sidebar */}
        <div className="lg:w-64 w-full border-b lg:border-b-0 lg:border-r border-gray-200">
          <GuidesTabs selectedCategory={categoryState} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <GuidesContent category={categoryState as keyof typeof guides} />{" "}
        </div>
      </div>
    </div>
  );
}
