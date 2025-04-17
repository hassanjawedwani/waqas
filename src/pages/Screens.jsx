import React from "react";
import ScreensSwiper from "../components/ScreensSwiper";

export default function Screens() {
  return (
    <div className="w-full bg-color8">
      <div className="p-10 max-w-7xl mx-auto">
        <div id="screensTitle" className="text-center my-5">
          <h2 className="text-2xl sm:text-3xl font-bold my-2">
          Explore our {" "}
            <span className="text-colorText2">Amazing Interface</span>
          </h2>
          <p className="text-color7 text-lg">
          A quick glimpse into in-app features & output
          </p>
        </div>
        <div className="my-10 relative">
          <img src="/assets/mockup.d24bd61a.png" alt="" className="mx-auto absolute top-0 left-0 right-0 bottom-0 z-10" />
          <ScreensSwiper />
        </div>
      </div>
    </div>
  );
}
