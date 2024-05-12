import ProjectThumb from "./ProjectThumb";
import { createSignal } from "solid-js";
import _ from "lodash";

const MoreProjects = ({ projectData, showall, url }) => {
  const [more, setMore] = createSignal(false);
  return (
    <>
      <div class="mb-20">
        <div class="text-white ">
          <div class="max-w-[1400px] px-[5vw] mx-auto pt-10 ">
            <div class="grid md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-7">
              {_.take(projectData, showall ? projectData.length : 6).map(
                (project) => (
                  <div class=" aspect-video w-full h-full ">
                    <ProjectThumb
                      title={project.title}
                      bgImage={project.bgImage}
                      projectLink={project.projectLink}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center">
          {!showall && projectData.length > 6 && (
            <a href={url}>
              <div class="px-8 py-3 font-text text-gray-800 mt-10 font-bold border border-gray-800 rounded">
                Explore More
              </div>
            </a>
          )}
        </div>
      </div>

      <div class="mb-20 hidden">
        <div class="text-white ">
          <div class="max-w-[1400px] px-[5vw] mx-auto pt-10 ">
            <div class="grid md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-7">
              {_.take(projectData, more() ? projectData.length : 6).map(
                (project) => (
                  <div class=" aspect-video w-full h-full ">
                    <ProjectThumb
                      title={project.title}
                      bgImage={project.bgImage}
                      projectLink={project.projectLink}
                      webLink={project.webLink}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center">
          {projectData.length > 6 && (
            <div
              class="px-8 py-3 font-text text-gray-800 mt-10 font-bold border border-gray-800 rounded"
              onClick={() => setMore(!more())}
            >
              {more() ? "Show Less" : "Load More"}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default MoreProjects;
