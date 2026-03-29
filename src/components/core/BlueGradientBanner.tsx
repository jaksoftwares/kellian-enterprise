import React from "react";

interface BlueGradientBannerProps {
  bannerText: string;
}

const BlueGradientBanner: React.FC<BlueGradientBannerProps> = ({
  bannerText,
}) => {
  return (
    <h1 className="bg-custom-blue-gradient font-fira text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white p-8 lg:py-20 lg:px-44">
      {bannerText}
    </h1>
  );
};

export default BlueGradientBanner;
