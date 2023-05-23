import Seo from "@/components/@common/Seo";
import Project from "../components/project/project";

export default function project({ projects }: any) {
  const images = [
    "/project7.png",
    "/project6.png",
    "/project5.jpg",
    "/project4.jpg",
    "/project3.png",
    "/project2.png",
    "/project1.jpeg",
  ];

  return (
    <div>
      <Seo title="PROJECT" />

      {projects.results?.map((project: any, index: number) => (
        <Project
          data={project}
          key={project.id}
          image={images[index % images.length]}
        />
      ))}
    </div>
  );
}

//서버에서 찍히는 부분
export async function getStaticProps() {
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
  const NOTION_TOKEN = process.env.NOTION_TOKEN;

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
