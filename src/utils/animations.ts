

// Define the props interface
interface AnimationProps {
  [key: string]: any; // Replace with specific animation properties if known
}

interface AnimWithGsapTlProps {
  timeline: gsap.core.Timeline;
  rotationRef: React.RefObject<{ rotation: { y: number } }>;
  rotationState: number;
  firstTarget: string | Element;
  secondTarget: string | Element;
  animationProps: AnimationProps;
}

export const animWithGsapTl = ({
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
}: AnimWithGsapTlProps): void => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  timeline.to(firstTarget, {
    ...animationProps,
    ease: 'power2.inOut',
  }, '<');

  timeline.to(secondTarget, {
    ...animationProps,
    ease: 'power2.inOut',
  }, '<');
};
