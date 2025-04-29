import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Features = () => {
  useGSAP(() => {
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
          <div className="h-[700px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
