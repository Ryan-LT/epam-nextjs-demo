import { FunctionComponent, ReactNode } from "react";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

export type ImageSliderProps = {
  slides: ReactNode[];
};

export const ImageSlider: FunctionComponent<ImageSliderProps> = ({
  slides,
}) => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({ loop: true });
  return (
    <div className="relative">
      <div ref={ref} className="keen-slider !w-[500px]">
        {slides}
      </div>
      <div
        className="absolute left-2 top-1/2 inline-block -translate-y-1/2 text-7xl text-cyan-500 hover:cursor-pointer"
        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
      >
        &#8249;
      </div>
      <div
        className="absolute right-2 top-1/2 inline-block -translate-y-1/2 text-7xl text-cyan-500 hover:cursor-pointer"
        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
      >
        &#8250;
      </div>
    </div>
  );
};
