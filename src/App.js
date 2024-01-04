import React from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetch_data = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
      console.log("fetch Complete");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const new_Tours = (id) => {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetch_data();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h2>There are no tours left</h2>
        </div>
      </main>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} new_Tours={new_Tours} />
    </div>
  );
};

export default App;
