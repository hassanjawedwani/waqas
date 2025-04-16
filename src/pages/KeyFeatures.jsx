import React from 'react'

export default function KeyFeatures() {
  return (
    <div className='w-full bg-color8'>
      <div className='p-10 max-w-7xl mx-auto'>
        <div id="keyFeaturesTitle" className='text-center my-5'>
          <h2 className='text-2xl sm:text-3xl font-bold my-2'>Key Features Of <span className='text-colorText2'>Tagofy - Geotag</span>  Map Camera</h2>
          <p className='text-color7 text-lg'>See how Tagofy adds location and time stamps to photos, making every moment unforgettable.</p>
        </div>
        <div id='keyFeaturesCards' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className='bg-color4 rounded-2xl p-5 hover:border hover:border-blue-500 space-y-4'>
            <div>
              <img src='/assets/features/1.svg' alt='' className='' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Precision Timestamping</h3>
            </div>
            <div>
              <p className='text-sm text-color7'>Get precise timestamps with GPS Map Camera, including Geotag, Location, Latitude, Longitude, coordinates Address, and DateTime Stamp on Photo.</p>
            </div>
          </div>
          <div className='bg-color4 rounded-2xl p-5 hover:border hover:border-yellow-500 space-y-4'>
            <div>
              <img src='/assets/features/2.svg' alt='' className='' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Capture and Tag</h3>
            </div>
            <div>
              <p className='text-sm text-color7'>Users can add map stamps to their photos and videos for WhatsApp stories, Instagram reels, YouTube shorts, and more. They can also take photos and videos directly in the app.</p>
            </div>
          </div>
          <div className='bg-color4 rounded-2xl p-5 hover:border hover:border-red-500 space-y-4'>
            <div>
              <img src='/assets/features/3.svg' alt='' className='' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Geotagging Made Easy</h3>
            </div>
            <div>
              <p className='text-sm text-color7'>Easily navigate through your memories with GPS-enabled timestamping. Explore physical locations right from your photo gallery using Geotag and Location.</p>
            </div>
          </div>
          <div className='bg-color4 rounded-2xl p-5 hover:border hover:border-blue-500 space-y-4'>
            <div>
              <img src='/assets/features/4.svg' alt='' className='' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Add Note With Stamp</h3>
            </div>
            <div>
              <p className='text-sm text-color7'>Add notes directly onto your stamps. This feature helps you annotate images with additional information, making photos meaningful and detailed.</p>
            </div>
          </div>
          <div className='bg-color4 rounded-2xl p-5 hover:border hover:border-green-500 space-y-4'>
            <div>
              <img src='/assets/features/5.svg' alt='' className='' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Location and Time Tagging</h3>
            </div>
            <div>
              <p className='text-sm text-color7'>Record exact time and location details with Tagofy. Add Geotag, Location, Latitude, Longitude, and DateTime Stamp to your photos for precise and accurate memories.</p>
            </div>
          </div>
          <div className='bg-color4 rounded-2xl p-5 hover:border hover:border-brown-500 space-y-4'>
            <div>
              <img src='/assets/features/6.svg' alt='' className='' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Capture History, Create Future</h3>
            </div>
            <div>
              <p className='text-sm text-color7'>With time stamped images, bridge gap between memories and future adventures. Use Geotag, Location, Latitude, Longitude, and Note stamps to plan new journeys.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
