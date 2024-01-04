import React from "react";
import Tour from "./Tour";

const Tours = ({tours, new_Tours}) => {
  return (
    <section>
      <div className="title">
        <h1>Our Tours</h1>
      </div>
      <div className="underline"></div>
      <div className="final-tour-card">
        
        {tours.map((tour) => {
                return <Tour tour = {tour} new_Tours={new_Tours}/>;
        })}
        
      </div>
    </section>
  );
};

export default Tours;
