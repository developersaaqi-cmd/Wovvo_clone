"use client";
import Link from "next/link";
import clsx from "clsx";

const categories = [
  { slug: "writing-and-copywriting", name: "Writing & Copywriting Guides" },
  { slug: "graphic-design", name: "Graphics & Design Guides" },
  { slug: "digital-marketing", name: "Digital Marketing Guides" },
  { slug: "data-guides", name: "Data Guides" },
  { slug: "business-guides", name: "Business Guides" },
  { slug: "music-audio", name: "Music & Audio Guides" },
  { slug: "video-animation", name: "Video & Animation Guides" },
  { slug: "programming-tech", name: "Programming & Tech Guides" },
];

const popularGuides = [
  {
    title:
      "How to Start a Successful Blog In 2025: 8 Essential Steps for Beginners",
    slug: "start-a-successful-blog-2025",
  },
  {
    title: "How to Turn Your Skills Into a Profitable Online Business",
    slug: "turn-skills-profitable-business",
  },
  {
    title: "15 Ways to Promote Your Business Online",
    slug: "promote-business-online",
  },
];

export default function GuidesTabs({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  return (
    <div className="px-4 py-6 bg-gray-50">
      <h3 className="text-xs font-bold gradient-text uppercase tracking-wide mb-3">
        Choose Your Topic
      </h3>
      <ul className="space-y-2 mb-6">
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/guides/${cat.slug}`}
              className={clsx(
                "block text-gray-700 hover:text-red-500 transition text-sm sm:text-base font-semibold",
                selectedCategory === cat.slug && "text-red-500"
              )}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="text-xs font-bold gradient-text uppercase tracking-wide mb-3">
        The Most Popular Guides
      </h3>
      <ul className="space-y-2 mb-6">
        {popularGuides.map((guide, idx) => (
          <li key={idx} className="border-b border-gray-200 pb-2">
            <Link
              href={`/guides/${guide.slug}`}
              className={clsx(
                "block text-gray-700 hover:text-red-500 transition text-sm sm:text-base font-semibold",
                selectedCategory === guide.slug && "text-red-500"
              )}
            >
              {guide.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
