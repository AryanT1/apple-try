import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,

      duration: 2,
      scrollTrigger:{
        trigger: "#title",
        start: "top 100%",
        toggleActions: "play reverse play reverse",
      }
    });
    gsap.to("#link", {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger:{
        trigger: "#link",
        start: "top 95%",
        toggleActions: "play reverse play reverse",
      }
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc"
    >
      <div className="screen-max-width">
        <div className=" md:flex mb-12 w-full items-end justify-between">
          <h1
            id="title"
            className="text-gray md:mb-0 mb-5 sm:text-5xl text-3xl lg:mb-0  font-medium opacity-0 translate-y-20"
          >
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p
              id="link"
              className=" text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20"
            >
              Watch the film{" "}
              <img src={watchImg} alt="watch " className="ml-2" />
            </p>
            <p
              id="link"
              className=" text-blue hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20"
            >
              Watch the event{" "}
              <img src={rightImg} alt="right " className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
