import React, { useEffect, useState } from "react";

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {/* Top Heading */}
      <h2 className="text-4xl font-bold text-center text-white bg-black py-4 rounded-lg shadow-md mb-8">
        Fetched Posts
      </h2>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Post Heading */}
              <h3 className=" bg-gray-700 text-white text-xl font-semibold p-3 rounded-t-lg mb-3">
                {item.title}
              </h3>
              {/* Post Content */}
              <div className="bg-white p-4 rounded-b-lg text-gray-700">
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
