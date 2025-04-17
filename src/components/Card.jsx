function Card({theme}) {
  return (
    <div className= {`flex gap-5 mt-3 border p-3 ${theme === 'light' ? 'bg-gray-700 text-amber-50' : ''}`}>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src="https://picsum.photos/400/300"
          alt="Product image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Awesome Product
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            This is a short description of the product that highlights its key
            features and value.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-600">$49.99</span>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src="https://picsum.photos/400/300"
          alt="Product image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Awesome Product
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            This is a short description of the product that highlights its key
            features and value.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-600">$49.99</span>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src="https://picsum.photos/400/300"
          alt="Product image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Awesome Product
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            This is a short description of the product that highlights its key
            features and value.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-600">$49.99</span>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src="https://picsum.photos/400/300"
          alt="Product image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Awesome Product
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            This is a short description of the product that highlights its key
            features and value.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-600">$49.99</span>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;