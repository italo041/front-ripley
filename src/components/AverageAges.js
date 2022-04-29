import React, { useEffect, useState } from "react";

export const AverageAges = ({ clients }) => {
  const [averageAges, setaverageAges] = useState("");

  const fetchAverageAges = async () => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_DOMAIN}/clients/average-ages`
      );
      const average = await resp.json();
      setaverageAges(average.avg.years);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAverageAges();
  }, [clients]);

  return (
    <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Average Age</div>
      <div className="card-body text-success">
        <h5 className="card-title">The average age is: {averageAges} years </h5>
      </div>
    </div>
  );
};
