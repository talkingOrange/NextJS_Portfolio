import Seo from "@/components/@common/Seo";
import Intro from "../components/about/Intro";
import Career from "../components/about/Career";
import Education from "../components/about/Education";
import DevelopmentExperiences from "../components/about/DevelopmentExperiences";
import NonDevelopmentExperiences from "../components/about/Non-DevelopmentExperiences";

export default function about() {
  return (
    <>
      <div>
        <Seo title="ABOUT" />
        <Intro />
        <Education />
        <Career />
        <DevelopmentExperiences />
        <NonDevelopmentExperiences />
      </div>
    </>
  );
}
