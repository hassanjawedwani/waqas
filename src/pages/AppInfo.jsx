import React from "react";

export default function AppInfo() {
  return (
    <div className="w-full bg-color6">
      <div className=" max-w-7xl  mx-auto text-center py-12">
        <div id="title">
          <h2 className="text-3xl font-bold">Downloads & Rating</h2>
          <p className="text-lg text-color5">
            Many happy customers have downloaded our
            <br /> app and are enjoying it.
          </p>
        </div>

        <div id="appInfo" className="flex items-center flex-wrap p-5 ">
          <div className="order-1 w-full lg:order-2 lg:w-1/2">
            <img
              src="/assets/appinfo.svg"
              alt="appinfo"
              className="w-full max-w-2xl mx-auto"
            />{" "}
          </div>

          <div className="order-2 w-full sm:w-1/2 lg:order-1 lg:w-1/4">
            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3">
              100K+ Downloads
            </h3>
            <p className="md:text-lg text-color5">
              Tagofy is a trusted photo camera app for adding GPS details, such
              as time and map stamps, to your photos.
            </p>
          </div>

          <div className="order-3 w-full sm:w-1/2 lg:order-3 lg:w-1/4">
            <h3 className="text-2xl md:text-3xl  font-bold mt-6 mb-3">
              4.5 Rating
            </h3>
            <p className="md:text-lg text-color5">
              Add GPS coordinates as stamp templates to your photos with
              Tagofy's GPS Map Camera feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
