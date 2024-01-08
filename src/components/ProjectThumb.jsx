import { setPopVisible, setIframeURL } from "../store/data";
const ProjectThumb = ({ title, bgImage, projectLink, webLink }) => {
  return (
    <>
      <div
        class={`grid bg-gray-100/50 rounded bg-cover bg-center w-full h-full ]  `}
        style={`background-image: url(${bgImage})`}
      >
        <div class="col-span-full row-span-full flex justify-start items-end p-3">
          <a href={webLink} target="_blank" class=" z-10 inline-block">
            <div class="flex items-center gap-5">
              <div class="bg-purple p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width={1.5}
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  ></path>
                </svg>
              </div>
              <h6 class="font-inter drop-shadow-lg">{title}</h6>
            </div>
          </a>
        </div>
        <div
          class="col-span-full row-span-full"
          onClick={() =>
            setIframeURL({
              url: projectLink,
              visible: true,
            })
          }
        ></div>
      </div>
    </>
  );
};

export default ProjectThumb;
