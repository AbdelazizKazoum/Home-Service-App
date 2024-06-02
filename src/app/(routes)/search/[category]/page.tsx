import { BusinessListByCategory } from "@/components/categoryPage/businessListByCategory";
import { BusinessListSection } from "@/components/sections/BusinessListSection";

export default function Page({ params }: { params: { category: string } }) {
  return <BusinessListByCategory category={params.category} />;
}
