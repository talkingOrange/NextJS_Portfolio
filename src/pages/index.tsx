import Seo from "@/components/@common/Seo";
import Introduce from "../components/index/Introduce";
import Skills from "../components/index/Skills";

export default function home() {
  return (
    <>
      <div>
        <Seo title="HOME" />
      </div>
      <Introduce />
      <Skills />
    </>
  );
}
