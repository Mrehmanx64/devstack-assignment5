import { useState } from "react";
import type { ITechnologyCard } from "../../types/technologyCard";
import SelecteTech from "./SelecteTech";
import TechCard from "./TechCard";

interface IAvailableTech {
  technologies: ITechnologyCard[];
}

const AvailableTech = ({ technologies }: IAvailableTech) => {
  const [isAdded, setIsAdded] = useState<ITechnologyCard[]>([]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-15">
      <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies.map((tech) => {
          return (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={isAdded}
              setIsAdded={setIsAdded}
            />
          );
        })}
      </div>

      <SelecteTech isAdded={isAdded} setIsAdded={setIsAdded} />
    </div>
  );
};

export default AvailableTech;
