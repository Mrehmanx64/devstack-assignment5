import { use } from "react";
import type { ITechnologyCard } from "../../types/technologyCard";
import AvailableTech from "./AvailableTech";

interface ITechnologies {
  techPromise: Promise<ITechnologyCard[]>;
}


const Technologies = ({ techPromise }: ITechnologies) => {
  const technologies = use(techPromise);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-10 text-center lg:text-left">
        <h2 className="font-extrabold text-4xl font-inter text-[#0F172A] leading-tight">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="font-arimo font-normal text-xl text-[#64748B] leading-relaxed">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <AvailableTech technologies = {technologies} />
    </div>
  );
};

export default Technologies;
