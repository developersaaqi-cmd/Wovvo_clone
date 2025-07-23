import GuidesCard from "./GuidesCard";
import { guides } from "@/data/guides";
type CategoryKey = keyof typeof guides;

export default function GuidesContent({ category }: { category: CategoryKey }) {
  const categoryData = guides[category];
  if (!categoryData) return <p>No content found.</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">{categoryData.title}</h1>
      <p className="text font-semibold mb-2 max-w-2xl">
        {categoryData.subtitle}
      </p>
      <p className="text-gray-600  max-w-2xl mb-5">
        {categoryData.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {categoryData.items.map((item, index) => (
          <GuidesCard key={index} {...item} />
        ))}
      </div>
    </>
  );
}
