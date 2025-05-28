import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
            <h4>{p.name}</h4>
            <p>Price: ${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
