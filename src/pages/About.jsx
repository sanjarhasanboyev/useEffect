import { useContext } from "react";



function About({theme}) {
   
  return (
    <div className={`container mt-2 mx-auto py-10 px-4 ${theme === 'light' ? 'bg-gray-700 text-amber-50' : ''}`}>
      <div className="text-center">
        <h2 className="text-4xl font-bold  mb-4">About Us</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We are a passionate team dedicated to building amazing web applications.
          Our mission is to deliver high-quality solutions that make a difference.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-600 mt-2">
              To innovate and inspire through technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              To create impactful solutions for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;