import React, { useState, useEffect } from "react";
import HorizontalBarChart from "./HorizontalBarChart";
import Items from "./Items";

const UserDetails = (props) => {
  const [totalScore, setTotalScore] = useState(0);
  const [riskType, setRiskType] = useState("");

  // Define text color classes based on risk type
  const riskTypeTextColor = {
    "High risk": "text-red-500",
    "Medium risk": "text-yellow-500",
    "Low risk": "text-green-500",
  };

  useEffect(() => {
    // Calculate total score
    const score = props.data.reduce((acc, curr) => acc + curr.value, 0);
    setTotalScore(score);

    // Determine risk type based on total score
    if (score < 290) {
      setRiskType("High risk");
    } else if (score < 690 && score >= 290) {
      setRiskType("Medium risk");
    } else {
      setRiskType("Low risk");
    }
  }, []);
  return (
    <>
      <div className="flex justify-around items-center px-5">
        <section className="grid grid-cols-2 gap-x-20 gap-y-5">
          {props.data.map((dataItem) => (
            <Items
              key={dataItem.name}
              name={dataItem.name}
              value={dataItem.value}
              maxValue="200"
            />
          ))}
        </section>
        <section className="">
          <HorizontalBarChart data={props.data} />
        </section>
      </div>
      <div className="bg-[#aeeccd] text-gray-900 h-1/4 rounded-md flex justify-around items-center p-3">
        <div className="grid grid-cols-2 gap-x-20 gap-y-5">
          <div>
            <h1 className="text-lg font-bold">Total score</h1>
            <h1 className=" font-bold text-xl">
              <span className="text-4xl">{totalScore}</span> / 1000
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Risk type</h1>
            {/* Apply dynamic text color based on risk type */}
            <h1 className={`font-bold text-xl ${riskTypeTextColor[riskType]}`}>
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
    </>
  );
};

export default UserDetails;
