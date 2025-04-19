import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function Home() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`mt-2 container mx-auto py-10 px-4 ${theme === 'light' ? 'bg-gray-700 text-amber-50' : ''}`}>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to Home
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          This is the homepage of our application. Explore our website to learn
          more about us and get in touch!
        </p>
        <img
          src="https://picsum.photos/600/400"
          alt="Home"
          className="mt-6 rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}

export default Home;
