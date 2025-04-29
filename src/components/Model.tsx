import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animWithGsapTl } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
    id: 1,
  });

  const cameraControlSmall = useRef(null);
  const cameraControlLarge = useRef(null);

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRoatation, setSmallRotation] = useState(0);
  const [largeRoatation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();
  useEffect(() => {
    if (size === "large") {
      animWithGsapTl({
        timeline: tl,
        rotationRef: small,
        rotationState: smallRoatation,
        firstTarget: "#view1",
        secondTarget: "#view2",
        animationProps: {
          transform: "translateX(-100%)",
          duration: 2,
        },
      });
    }
    if (size === "small") {
      animWithGsapTl({
        timeline: tl,
        rotationRef: large,
        rotationState: largeRoatation,
        firstTarget: "#view2",
        secondTarget: "#view1",
        animationProps: {
          transform: "translateX(0)",
          duration: 2,
        },
      });
    }
  }, [size]);
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#heading",
        start: "top 95%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);
  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <h1
          id="heading"
          className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
        >
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative ">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                top: 0,
                bottom: 0,
                position: "fixed",
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")!}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5 ">
              {model.title}
            </p>
            <div className="flex items-center justify-center">
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-300 backdrop-blur">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 cursor-pointer rounded-full mx-2  "
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>
              <button className="flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="w-10 h-10 cursor-pointer text-sm flex justify-center items-center bg-white text-black rounded-full transition-all"
                    onClick={() => setSize(value)}
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                  >
                    {" "}
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
