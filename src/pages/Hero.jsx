import React from "react";
import Spacer from "../components/Spacer";
import CoverflowSlider from "../components/Swiper";

export default function Hero() {
  return (
    <div>
      <div id="heroContent" className="flex flex-col items-center gap-6 mb-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-colorText2 text-center">
          <span>Tagofy - Geotag</span> Map Camera
        </h1>
        <p className="font-medium text-colorText3 text-xl">
          Add location, latitude, longitude, date, time stamp, and map
          <br />
          stamps to photos using a GPS Map Camera feature.
        </p>
        <div id="heroBtns" className="flex gap-10">
          <a
            href="https://play.google.com/store/apps/details?id=com.gps.photo.geo.capture.location.map.time.stamp"
            className="bg-colorbg1 flex justify-center items-center px-4 lg:px-6 py-2 rounded-full gap-3"
          >
            <img
              src="/assets/playstoreWhite.svg"
              alt="playstore link"
            />
            <span className="text-color4 text-lg lg:text-2xl">Google Play</span>
          </a>
          <a
            href="https://apps.apple.com/il/app/tagofy-geotag-map-camera/id6453854362"
            className="bg-colorbg1 flex justify-center items-center  px-4 lg:px-6 py-2  rounded-full gap-3"
          >
            <img
              src="/assets/appstore.svg"
              alt="app store link"
            />{" "}
            <span className="text-color4 text-lg lg:text-2xl">App Store</span>
          </a>
        </div>
      </div>
      <div id="heroMedia" className="mb-2">
       <CoverflowSlider />
      </div>
      <div id="heroFooter" className="flex flex-col items-center gap-4 text-center">
        <p className="text-color5 text-lg mt-6">Camera timestamp having custom stamps.</p>
        <h2 className="text-colorText3 text-2xl lg:text-3xl font-semibold">Geotag, Location, Latitude Longitude, Address, Add Notes<br /> On Stamp, map stamps & DateTime Stamp on Photo.</h2>
      </div>
    </div>
  );
}
