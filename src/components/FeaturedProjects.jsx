import _ from "lodash";
import { projects } from "../store/data";
import ProjectThumb from "./ProjectThumb";
const homeProjects = _.filter(projects, { type: "featured" });
console.log(homeProjects);
const FeaturedProjects = () => {
  return (
    <>
      <div class="bg-purple text-white  ">
        <div class="max-w-[1400px] px-[5vw] mx-auto pt-20 pb-20">
          <div class="flex flex-col md:flex-row items-center mb-10 md:mb-20 gap-10">
            <h2 class=" font-heading font-black text-5xl text-center md:text-left">
              Featured Projects
            </h2>
            <p class="max-w-[42ch] font-text  text-lg tracking-wide">
              eyeNAV 360 increases conversion with a style of 360° photography
              your customers will get excited about. Seeing inside a hotel or
              venue builds confidence for making booking decisions.
            </p>
            <div class="grow hidden md:flex justify-end">
              <a
                href="/projects"
                class="bg-orange text-white font-text font-semibold px-5 py-5 rounded-md"
              >
                See More Projects
              </a>
            </div>
          </div>
          <div class="grid md:grid-rows-2 grid-cols-1 md:grid-cols-3 gap-7">
            <div class="md:row-span-2 md:aspect-[2/3] aspect-video w-full h-full ">
              <ProjectThumb
                title={homeProjects[0].title}
                bgImage={homeProjects[0].bgImage}
                projectLink={homeProjects[0].projectLink}
                webLink={homeProjects[0].webLink}
              />
            </div>
            <div class="md:aspect-auto aspect-video">
              <ProjectThumb
                title={homeProjects[1].title}
                bgImage={homeProjects[1].bgImage}
                webLink={homeProjects[1].webLink}
              />
            </div>
            <div class="aspect-video md:aspect-auto">
              <ProjectThumb
                title={homeProjects[2].title}
                bgImage={homeProjects[2].bgImage}
                projectLink={homeProjects[2].projectLink}
                webLink={homeProjects[2].webLink}
              />
            </div>
            <div class="md:col-span-2 aspect-video md:aspect-auto">
              <ProjectThumb
                title={homeProjects[3].title}
                bgImage={homeProjects[3].bgImage}
                projectLink={homeProjects[3].projectLink}
                webLink={homeProjects[3].webLink}
              />
            </div>
          </div>
          <div class="flex md:hidden justify-center mt-10">
            <a href="/projects" class="w-full inline-block">
              <button class="bg-orange text-white font-text font-semibold px-5 py-5 rounded-md w-full">
                See More Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedProjects;
