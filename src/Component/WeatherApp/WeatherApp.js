import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Ahmedabad");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      setCity(lastCity);
    }
  }, []);

  useEffect(() => {
    const handleButtonClick = () => {
      let url = `http://api.weatherapi.com/v1/current.json?key=f2408b7c92b84349adf61836231604&q=${query}&api=no`;
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          localStorage.setItem("lastCity", query);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    handleButtonClick();
  }, [query]);

  return (
    <div className="container">
      <center>
        <h1>Weather Details:</h1>
        <br></br>
        <input
          type="text"
          style={{ height: "40px" }}
          placeholder="Enter City"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          style={{ marginLeft: "5px" }}
          className="btn btn-primary "
          onClick={() => setQuery(city)}
        >
          Check
        </button>
        {data && data.location && (
          <div className="table-container my-2">
            <table className="table">
              <tbody>
                <th>
                  Weather
                </th>
                <tr>
                  <td>Region:</td>
                  <td>{data.location.region}</td>
                </tr>
                <tr>
                  <td>Temperature:</td>
                  <td>{data.current.temp_c}</td>
                </tr>
                <tr>
                  <td>Condition:</td>
                  <td>{data.current.condition.text}</td>
                </tr>
                <tr>
                  <td>Icon:</td>
                  <td>
                    <img
                      src={data.current.condition.icon}
                      alt={data.current.condition.text}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </center>
    </div>
  );
}
