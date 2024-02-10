import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import UserDetails from "./UserDetails";

const MainDash = () => {
  const CropData = [
    { name: "Wheat", season: "Winter", area: 1000, kgha: 1500 },
    { name: "Rice", season: "Monsoon", area: 2000, kgha: 2000 },
    { name: "Maize", season: "Summer", area: 1500, kgha: 1800 },
    { name: "Barley", season: "Winter", area: 1200, kgha: 1600 },
  ];
  // get data from rohit
  const Soildata = [
    { name: "Yield Performance", value: 100 },
    { name: "Soil health", value: 200 },
    { name: "Irrigation condition", value: 200 },
    { name: "Risk property (Flood)", value: 100 },
    { name: "Risk property (Drought)", value: 170 },
  ];

  // State for total score

  return (
    <div className="p-5 h-full ">
      <div className=" bg-white h-3/4 p-3 rounded-md text-gray-900 border-2 mb-3">
        <h1 className="text-3xl font-bold  border-b-2 pb-2">My Dashboard</h1>
        <UserDetails data={Soildata} />
      </div>
      <div>
        <h1 className="text-xl font-bold py-3">
          Major crops & their performance
        </h1>
        <DataTable data={CropData} />
      </div>
    </div>
  );
};

export default MainDash;
