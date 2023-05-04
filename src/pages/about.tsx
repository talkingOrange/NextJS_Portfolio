import Seo from "@/components/Seo";
import Introduce from "../components/Introduce";
import Skills from "../components/Skills";

export default function about() {
  return (
    <>
      <div>
        <Seo title="ABOUT" />
      </div>
      <Introduce />
      <Skills/>
    </>
  );
}
