import React from 'react'

export default function About() {
  return (
    <div id="about" className="w-full">
      <div className="w-full p-5 md:flex max-w-7xl mx-auto">
        <div id="aboutImage" className="w-full md:w-1/3 md:p-5">
          <div className="w-1/2 mx-auto md:w-full">
            <img src="/assets/about.svg" alt="about" className="w-full max-w-sm" />
          </div>
        </div>
        <div id="aboutDescription" className='md:w-2/3  md:p-5 flex flex-col justify-center'>
          <h3 className="text-xl sm:text-2xl md:text-[26px] xl:text-3xl mt-6 mb-2 font-bold">
            About <span className="text-colorText2">Tagofy - Geotag</span> Map Camera
          </h3>
          <p className=" text-color7 leading-6 md:text-lg max-w-2xl">
            Tagofy - Geotag Map Camera is perfect for capturing and preserving
            your memories. With features like GPS Map Camera and adding Note on
            a stamp, it adds location details, latitude, longitude, date stamp,
            time stamps, and map stamps to your photos. Tagofy ensures you
            always remember when and where your photos were taken, making your
            photo memories even more special.
          </p>
        </div>
      </div>
    </div>
  )
}
