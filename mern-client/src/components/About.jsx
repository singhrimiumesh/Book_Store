import { Carousel } from 'flowbite-react';
import About1 from "../assets/1.png"
import About2 from "../assets/2.png"
import OpenBook from "../assets/openbook.png"

const About = () => {
  return (
    <div className='my-20 text-center'>
  
  <div className="grid my-10 mx-10 h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel>
      <img src={About2} alt="Carousel 1" />
      <img src={About1} alt="Carousel 2" />
    </Carousel>
    <div className='my-20'>
    <h2 className='text-5xl font-bold mx-20'> About <br/><span className='text-blue-700 my-10 text-center'>The Digital Repository</span>
    <br/><img src={OpenBook}  className="mx-20" alt="Carousel 2" /></h2>
    
    </div>
  </div>
  <hr className='my-20'></hr>
  <div className=" mx-5 my-10 text-justify">
      <h2 className="text-2xl my-20 font-bold mx-5 mb-4">Who We Are</h2>
      <div className="rounded-lg shadow-lg p-6">
      <p className="text-gray-700">
        The Digital Repository is a dynamic platform dedicated to providing an immersive reading experience. We believe in the power of knowledge and strive to make literature accessible to all.
      </p>
      <p className="text-gray-700 mt-4">
        Our mission goes beyond reading. We aim to create a community where book lovers can come together to explore, share, and contribute.
      </p>
      <p className="text-gray-700 mt-4">
    Explore a vast collection of books. 
  </p>
      <p className="text-gray-700 mt-4">
    Contribute to our community by donating to help expand our library. Together, we can foster a love for reading and learning.
  </p>
  <p className="text-gray-700 mt-4">
  Together, lets cultivate an environment where knowledge flourishes and future engineers thrive.
  </p>
      </div>
    </div>
</div>


  )
}

export default About