import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

export default function Home({ projects }: any) {
  console.log(projects);
  console.log(projects.results);

  return (
    <div>
      <Seo title="Home" />

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          {!projects && <h4>Loading...</h4>}
          {projects.results?.map((project: any) => (
            <div key={project.id}>
              <h4>{project.created_time}</h4>
            </div>
          ))}
          <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Kickstarter Actually Pinterest Brunch Bitters Occupy
          </h2>
          <div class="md:w-3/5 md:pl-6">
            <p class="leading-relaxed text-base">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div class="flex md:mt-4 mt-6">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <a class="text-indigo-500 inline-flex items-center ml-4">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//서버에서 찍히는 부분
export async function getStaticProps() {
  const NOTION_DATABASE_ID = "2f8e51b3c14b43c9adef4f52c78d5787";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization:
        "Bearer secret_vlMd7yCIqLbNC8RiDIXzeFBEcPJNpIeUTW4zrU1kgKb",
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
