import CustomCard from "@/components/custom-card";
import { PATHS_INFO } from "@/data/paths-info";

export default function CardList() {
  return (
    // <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
    <div className="flex gap-5 flex-wrap justify-center">
      {PATHS_INFO.map((route) => (
        <CustomCard key={route.title} routeProps={route} />
      ))}
    </div>
  );
}
