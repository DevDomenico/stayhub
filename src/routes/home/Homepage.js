  import React, { useState } from "react";
  import "./Homepage.css";
  import Navbars from "../../components/navbar/Navbars";

  const Homepage = () => {
    const [inputValue, setInputValue] = useState("");

    const placesArray = [
      {
        id: "1",
        place: "london",
        image: "https://placekitten.com/300/200"
      },
      {
        id: "2",
        place: "russia",
        image: "https://placekitten.com/300/200"
      },
      {
        id: "3",
        place: "spain",
        image: "https://placekitten.com/300/200"
      },
      // ... other places
    ];

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const filteredPlaces = placesArray.filter((item) => {
      if (inputValue === "") {
        return true;
      } else if (item.place.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
      return false;
    });

    return (
      <div>
        <Navbars />
        <div className="homepage">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search"
          />
          <div className="image-container">
            {filteredPlaces.map((item) => (
              <div className="card" key={item.id} style={{ display: "inline-block" }}>
                <img src={item.image} alt={item.place} width={"200px"} />
                <p>{item.place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Homepage;
