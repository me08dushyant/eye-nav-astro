import { setPopVisible, setIframeURL } from "../store/data";
const ProjectThumb = ({ title, bgImage, projectLink, webLink }) => {
  return (
    <>
      <div
        class={`grid bg-gray-100/50 rounded bg-cover bg-center w-full h-full animated  `}
        style={`background-image: url(${bgImage})`}
      >
        <div class="col-span-full row-span-full flex justify-start items-end p-3">
          <div class="flex items-center gap-5">
            <div class="bg-purple p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                />
              </svg>
            </div>
            <h6 class="font-inter drop-shadow-lg">{title}</h6>
          </div>
        </div>
        <div
          class="hidden md:block col-span-full row-span-full  z-10"
          onClick={() =>
            setIframeURL({
              url: projectLink,
              visible: true,
            })
          }
        ></div>
        <a
          class="block md:hidden col-span-full row-span-full z-10"
          href={projectLink}
          target="_blank"
        ></a>
      </div>
    </>
  );
};

export default ProjectThumb;
