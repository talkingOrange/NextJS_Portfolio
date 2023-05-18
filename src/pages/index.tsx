import Seo from "@/components/@common/Seo";
import Introduce from "../components/index/Introduce";
import Skills from "../components/index/Skills";
import Education from "@/components/index/Education";
import Career from "@/components/index/Career";

export default function about() {
  return (
    <>
      <div>
        <Seo title="HOME" />
      </div>
      <Introduce />
      <Education />
      <Career/>
      <Skills />
    </>
  );
}
