import React, { useState, useEffect } from "react";
import HorizontalBarChart from "./HorizontalBarChart";
import Items from "./Items";
import DataTable from "./DataTable";

const MainDash = () => {
  const CropData = [
    { name: "Wheat", season: "Winter", area: 1000, kgha: 1500 },
    { name: "Rice", season: "Monsoon", area: 2000, kgha: 2000 },
    { name: "Maize", season: "Summer", area: 1500, kgha: 1800 },
    { name: "Barley", season: "Winter", area: 1200, kgha: 1600 },
  ];
  const data = [
    { name: "Yield Performance", value: 100 },
    { name: "Soil health", value: 200 },
    { name: "Irrigation condition", value: 150 },
    { name: "Risk property (Flood)", value: 100 },
    { name: "Risk property (Drought)", value: 170 },
  ];

  const [riskType, setRiskType] = useState("");

  const totalScore = data.reduce((acc, curr) => acc + curr.value, 0);

  useEffect(() => {
    const handleRiskType = () => {
      if (totalScore < 0) {
        setRiskType("High risk");
      } else if (totalScore < 690 && totalScore >= 290) {
        setRiskType("Medium risk");
      } else {
        setRiskType("Low risk");
      }
    };
    handleRiskType();
  }, [totalScore]);

  return (
    <div className="p-5 h-full ">
      <div className=" bg-white h-3/4 p-3 rounded-md text-gray-900 border-2 mb-3">
        <h1 className="text-3xl font-bold  border-b-2 pb-2">My Dashboard</h1>
        <div className="flex justify-around items-center px-5">
          <section className="grid grid-cols-2 gap-x-20 gap-y-5">
            {data.map((dataItem) => (
              <Items
                key={dataItem.name}
                name={dataItem.name}
                value={dataItem.value}
                maxValue="200"
              />
            ))}
          </section>
          <section className="">
            <HorizontalBarChart data={data} />
          </section>
        </div>
        <div className="bg-[#49b07c] text-white h-1/4 rounded-md flex justify-around items-center p-3">
          <div className="grid grid-cols-2 gap-x-20 gap-y-5">
            <div>
              <h1 className="text-lg font-bold">Total score</h1>
              <h1 className=" font-bold text-xl">
                <span className="text-4xl">{totalScore}</span> / 1000
              </h1>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Risk type</h1>
              <h1 className=" font-bold text-xl">
                <span className="text-4xl">{riskType}</span>
              </h1>
            </div>
          </div>
          <ul>
            <li>
              <span className="font-bold">High risk: </span> 0 - 290
            </li>
            <li>
              <span className="font-bold">Medium risk: </span> 300 - 690
            </li>
            <li>
              <span className="font-bold">Low risk: </span> 700 - 1000
            </li>
          </ul>
        </div>
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
