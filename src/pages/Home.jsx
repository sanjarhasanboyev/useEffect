import { useEffect, useState } from "react";

function Home() {

  // mounting
  // updating

  // const [count, setCount] = useState(0);
  // const [api, setApi] = useState(0);

  // useEffect(() => {
  //   console.log("counter");
  // }, [])

  // useEffect(() => {
  //   console.log("serverdan 1gb lik narsa olinyabdi...");
  // }, [api])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Home component hali ham ishlayabdi");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Home
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This is the homepage of our application. Explore our website to learn
          more about us and get in touch!
        </p>
        <img
          src="https://picsum.photos/600/400"
          alt="Home"
          className="mt-6 rounded-lg shadow-lg mx-auto"
        />
      </div>
      {/* <h1 className="text-4xl">{count}</h1>
      <button onClick={() => setCount(count + 1)} className="border rounded px-5 py-2 cursor-pointer">Oshirish</button>
      <hr />
      <h1 className="text-4xl">{api}</h1>
      <button onClick={() => setApi(api + 1)} className="border rounded px-5 py-2 cursor-pointer">API olish</button> */}
    </div>
  );
}

export default Home;