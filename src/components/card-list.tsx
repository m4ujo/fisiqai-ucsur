import CustomCard from "@/components/custom-card";
import { pathsInfo } from "@/data/paths-info";

export default function CardList() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {pathsInfo.map((route) => (
        <CustomCard key={route.title} routeProps={route} />
      ))}
    </div>
  );
}
