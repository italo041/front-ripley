import React, { useEffect, useState } from "react";
import { DoughnutChart } from "../components/DoughnutChart";

export const Stadistics = () => {
  const [agesRanges, setAgeRanges] = useState({});

  const fetchAgeRanges = async (offset = 1) => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_DOMAIN}/clients/age-ranges`
      );
      const ageRanges = await resp.json();
      setAgeRanges(ageRanges);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAgeRanges();
  }, []);

  return (
    <div className="container my-3">
      <h1>Stadistics</h1>
      <div className="card" style={{ maxWidth: "300px" }}>
        <div className="card-body">
          <h5 class="card-title text-center">Age range</h5>
          <DoughnutChart agesRanges={agesRanges} />
        </div>
      </div>
    </div>
  );
};
