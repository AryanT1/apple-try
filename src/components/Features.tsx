import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useGSAP(() => {
    gsap.to("#exploreVideo",{
        scrollTrigger: {
            trigger: "#exploreVideo",
            start: "-10% bottom",
            toggleActions: "play pause reverse restart",
          },
          onComplete:()=>{videoRef.current?.play()}
    })
    gsap.to("#feature_title", {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#feature_title",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to("#g_grow", {
      scale: 1,
      opacity: 1,
      duration: 4,
      ease: "power1.inOut",
      scrub: 5.5,
      scrollTrigger: {
        trigger: "#g_grow",
        start: "top 80%",
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.to(".g_text", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".g_text",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);
  return (
    <section className="h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc relative overflow-hidden ">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1
            className="text-gray md:mb-0 mb-5 sm:text-5xl text-3xl lg:mb-0  font-medium opacity-0 translate-y-20"
            id="feature_title"
          >
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl text-gray-100 font-semibold">
              iPhone.
            </h2>
            <h2 className="text-5xl lg:text-7xl text-gray-300  font-semibold">
              Forged in Titanium.
            </h2>
          </div>
          <div className="flex items-center justify-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center "
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative ">
              <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    id="g_grow"
                    className="w-full h-full object-cover object-center scale-150 opacity-0"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium2"
                    id="g_grow"
                    className="w-full h-full object-cover object-center scale-150 opacity-0"
                  />
                </div>
              </div>
              <div className=" w-full flex justify-center items-center flex-col md:flex-row mt-10 md:mt-16 gap-5">
                <div className="flex-1 flex items-center justify-center">
                  <p className="g_text text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[60px]">
                    iPhone 15 Pro is {""}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <p className="g_text text-gray max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[60px]">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our {""}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
