import { BusinessListSection } from "@/components/sections/BusinessListSection";

export default function Page({ params }: { params: { category: string } }) {
  return <BusinessListSection category={params.category} />;
}
