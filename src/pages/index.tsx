import Seo from "@/components/@common/Seo";
import Introduce from "../components/index/Introduce";
import Skills from "../components/index/Skills";
import Education from "@/components/index/Education";
import Career from "@/components/index/Career";
import DevelopmentExperiences from "@/components/index/DevelopmentExperiences";
import NonDevelopmentExperiences from "@/components/index/Non-DevelopmentExperiences";

export default function about() {
  return (
    <>
      <div>
        <Seo title="HOME" />
      </div>
      <Introduce />
      <Education />
      <Career />
      <DevelopmentExperiences />
      <NonDevelopmentExperiences />
      <Skills />
    </>
  );
}
