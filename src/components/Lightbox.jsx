import { useStore } from "solid-nanostores";

import {
  isPopVisible,
  setPopVisible,
  PopIframeURL,
  setIframeURL,
} from "../store/data.js";

const Lightbox = ({ iframeURL }) => {
  const isVisible = useStore(isPopVisible);
  const PopURL = useStore(PopIframeURL);
  console.log("testing");
  return (
    <>
      <div
        class={`fixed top-0 left-0 w-screen h-screen backdrop-blur-lg backdrop-brightness-50 z-50 p-[5vw] md:p-[5vw] ${
          isVisible.value ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <div class="bg-purple max-w-full h-full aspect-video rounded-xl drop-shadow-2xl mx-auto">
          {iframeURL && (
            <iframe
              class="w-full h-full rounded-xl overflow-hidden"
              src={PopURL.value}
            />
          )}

          <slot>
            <div
              class="absolute -right-3 -top-3 bg-purple rounded-full p-2 pointer-events-auto"
              onClick={() => setIframeURL({ url: "", visible: false })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-Width={1.5}
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </slot>
        </div>
      </div>
    </>
  );
};

export default Lightbox;
