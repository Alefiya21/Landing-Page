import React from 'react';
import { Link } from 'react-router-dom';
import person from "../assets/person.jpg"

const LandingPage = () => {
  return (
  
    <div className="bg-slate-800 min-h-screen p-12 text-white">
      <div className="container mx-auto px-5">
        <div className='flex flex-row gap-20'>
          <div className='flex flex-col animate__animated animate__fadeInLeft '>
            <h1 className="text-4xl font-bold mb-8">Unlock the Secrets of Journalism with Mr. Arun</h1>
            <p className="mb-8  ">
              Embark on a journey through the illustrious career of Mr. Arun, a distinguished figure in the realm of journalism. With decades of experience as a seasoned journalist, Mr. Arun has traversed the intricate landscapes of reporting, storytelling, and investigative journalism. His portfolio boasts contributions to renowned publications, shedding light on pressing issues, shaping narratives, and uncovering truths that resonate globally.
            </p>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <img src={person} alt='img' className='h-[450px] w-[2000px] rounded-lg shadow-lg' />
          </div>
        </div>
        

        <div className="mb-8 animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Why This Course?</h3>
          <p>
            Are you an aspiring journalist yearning to venture into the captivating world of news reporting and storytelling? Look no further. Mr. Arun's meticulously crafted online course offers a unique opportunity to glean insights from a stalwart in the field. Delve into the nuances of journalism, learn the ropes of effective storytelling, and master the art of investigative reporting.
          </p>
        </div>

        <hr className="my-6 border-t-2 border-gray-300" /> 

        <div className="mb-8 animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold mb-4">What You'll Learn:</h3>
          <ul className="list-disc list-inside">
            <li>The Fundamentals: Understand the core principles of journalism and its ethical considerations.</li>
            <li>Crafting Compelling Narratives: Learn to captivate your audience with engaging storytelling techniques.</li>
            <li>Navigating the Digital Landscape: Explore the evolving dynamics of digital journalism and harness its potential.</li>
            <li>Unveiling Truths: Develop the skills to conduct thorough investigations and uncover hidden realities.</li>
            <li>Practical Exercises: Apply your newfound knowledge through hands-on exercises and real-world scenarios.</li>
          </ul>
        </div>
        <hr className="my-6 border-t-2 border-gray-300" /> 

        <div className="mb-8 animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Course Details:</h3>
          <ul className="list-none">
            <li>Duration: 2 weeks</li>
            <li>Format: Online sessions with interactive modules</li>
            <li>Access: Lifetime access to course materials</li>
            <li>Certificate: Upon completion</li>
          </ul>
        </div>
        <hr className="my-6 border-t-2 border-gray-300" /> 
        <div className="mb-8 animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Who Should Enroll?</h3>
          <ul className="list-disc list-inside">
            <li>Aspiring Journalists</li>
            <li>Journalism Students</li>
            <li>Media Enthusiasts</li>
            <li>Anyone Passionate About Storytelling and Truth</li>
          </ul>
        </div>
        <hr className="my-6 border-t-2 border-gray-300" />

        <div className="mb-8 animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-bold mb-4">Join Us Today:</h3>
          <p>
            Embark on a transformative journey with Mr. Arun and equip yourself with the tools to navigate the dynamic landscape of journalism. Seize this opportunity to unravel the mysteries of storytelling, cultivate a keen eye for truth, and embark on a fulfilling career in journalism.
          </p>
          <p>
            Enroll now to embark on a journey of discovery, empowerment, and journalistic excellence.
          </p>
        </div>
        <hr className="my-6 border-t-2 border-gray-300" /> 
        
        <Link to="/enroll" type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Enroll Now
        </Link>
      </div>
      <footer className="text-center mt-12 animate__animated animate__fadeInUp">
        <p className="text-gray-400">Journalism Unveiled - Empowering the Voices of Tomorrow</p>
      </footer>
    </div>


  );
};

export default LandingPage;