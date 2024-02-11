import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import UserDetails from "./UserDetails";

const MainDash = () => {
  const initSoilData = [
    {
      yield_performance: 0,
      soil_health: 0,
      irrigation_condition: 0,
      risk_property_flood: 0,
      risk_property_drought: 0,
    },
  ];

  const [soilData, setSoilData] = useState(initSoilData);
  const CropData = [
    { name: "Wheat", season: "Winter", area: 1000, kgha: 1500 },
    { name: "Rice", season: "Monsoon", area: 2000, kgha: 2000 },
    { name: "Maize", season: "Summer", area: 1500, kgha: 1800 },
    { name: "Barley", season: "Winter", area: 1200, kgha: 1600 },
  ];
  // get data from rohit
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const dbRef = firebase.database().ref("soildata");
  //       dbRef.once("value", (snapshot) => {
  //         const data = snapshot.val();
  //         setSoilData(data);
  //       });
  //     } catch (error) {
  //       console.error("Error fetching soil data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="p-5 h-full ">
      <div className=" bg-white h-3/4 p-3 rounded-md text-gray-900 border-2 mb-3">
        <h1 className="text-3xl font-bold  border-b-2 pb-2">My Dashboard</h1>
        <UserDetails data={soilData} />
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
