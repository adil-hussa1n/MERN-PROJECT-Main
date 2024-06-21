import React from 'react'
import image from '../assets/image-adil.jpg'
import imagee from '../assets/image-pol.jpg'
import images from '../assets/image-adi.jpg'

const About = () => {
  return (
    <div>

      {/* <h2 className='text-2xl md:text-2xl font-bold mt-3'> Welcome to ExploreConnect - your gateway to seamless travel experiences in Bangladesh!</h2>
      <h3 className='text-30 md:text-50 font-semibold mt-5'>Embark on unforgettable journeys across the vibrant landscapes of our beautiful nation with ExploreConnect, your ultimate travel companion. Whether you're a seasoned explorer or a curious novice, our comprehensive web application is tailored to cater to all your travel needs.</h3>
      <h3 h3 className='text-30 md:text-50 font-semibold mt-1'>At ExploreConnect, we're dedicated to providing you with an immersive and hassle-free travel experience from start to finish. With just a few clicks, you can discover hidden gems, plan exciting itineraries, and access a plethora of amenities to ensure your journey is nothing short of extraordinary.</h3>
      <h3 h3 className='text-30 md:text-50 font-semibold mt-1'>Designed with you in mind, our platform is accessible to individuals from all corners of Bangladesh, including students eager to explore the wonders of their own backyard. No matter where you're located, ExploreConnect is here to make every trip convenient, secure, and filled with excitement.</h3>
      <h2 align="center" className='text-2xl md:text-2xl font-bold mt-3'>Devolopers Information</h2> */}

      <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Welcome to ExploreConnect - your gateway to seamless travel experiences in Bangladesh!</h2>
      <p className="text-lg text-gray-700 mb-8">
        Embark on unforgettable journeys across the vibrant landscapes of our beautiful nation with ExploreConnect, your ultimate travel companion. Whether you're a seasoned explorer or a curious novice, our comprehensive web application is tailored to cater to all your travel needs.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        At ExploreConnect, we're dedicated to providing you with an immersive and hassle-free travel experience from start to finish. With just a few clicks, you can discover hidden gems, plan exciting itineraries, and access a plethora of amenities to ensure your journey is nothing short of extraordinary.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Designed with you in mind, our platform is accessible to individuals from all corners of Bangladesh, including students eager to explore the wonders of their own backyard. No matter where you're located, ExploreConnect is here to make every trip convenient, secure, and filled with excitement.
      </p>
      <h2 className="text-3xl font-bold mb-4 text-center">Developers Information</h2>

      <div className="flex justify-center items-center space-x-8 mt-10">
        <div className="w-64">
          <img src={image} alt="Developer 1" className="rounded-lg mb-2" />
          <h3 className="text-xl font-semibold">ADIL HUSSAIN</h3>
          <p className="text-gray-700">MERN Stack Developer</p>
        </div>
        <div className="w-64">
          <img src={imagee} alt="Developer 2" className="rounded-lg mb-2" />
          <h3 className="text-xl font-semibold">POLLOB BHOWMIK</h3>
          <p className="text-gray-700">MERN Stack Developer</p>
        </div>
        <div className="w-64">
          <img src={images} alt="Developer 3" className="rounded-lg mb-2" />
          <h3 className="text-xl font-semibold">ADITTO KOIRI</h3>
          <p className="text-gray-700">MERN Stack Developer</p>
        </div>
      </div>
    </div>
    </div>


    
    
  )
}

export default About