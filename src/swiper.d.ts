declare module "swiper/react" {
  import { Swiper as SwiperClass } from "swiper";
  import React from "react";

  interface SwiperProps extends React.HTMLAttributes<HTMLElement> {
    swiper?: SwiperClass;
    [key: string]: any;
  }

  const Swiper: React.FunctionComponent<SwiperProps>;
  const SwiperSlide: React.FunctionComponent<React.HTMLAttributes<HTMLElement>>;

  export { Swiper, SwiperSlide };
}

declare module "swiper/modules" {
  export const EffectCube: any;
  export const Autoplay: any;
}
