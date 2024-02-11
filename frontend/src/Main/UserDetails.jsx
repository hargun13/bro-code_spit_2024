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
    // Calculate total score by summing up all values
    const score = Object.values(props.data[0]).reduce(
      (acc, curr) => acc + curr,
      0
    );
    setTotalScore(score);

    // Determine risk type based on total score
    if (score < 290) {
      setRiskType("High risk");
    } else if (score < 690 && score >= 290) {
      setRiskType("Medium risk");
    } else {
      setRiskType("Low risk");
    }
  }, [props.data]);

  return (
    <>
      <div className="flex justify-around items-center px-5">
        <section className="grid grid-cols-2 gap-x-20 gap-y-5">
          <Items
            key="Yield Performance"
            name="Yield Performance"
            value={props.data[0].yield_performance}
            maxValue="200"
          />
          <Items
            key="Soil health"
            name="Soil health"
            value={props.data[0].soil_health}
            maxValue="200"
          />
          <Items
            key="Irrigation condition"
            name="Irrigation condition"
            value={props.data[0].irrigation_condition}
            maxValue="200"
          />
          <Items
            key="Risk property (Flood)"
            name="Risk property (Flood)"
            value={props.data[0].risk_property_flood}
            maxValue="200"
          />
          <Items
            key="Risk property (Drought)"
            name="Risk property (Drought)"
            value={props.data[0].risk_property_drought}
            maxValue="200"
          />
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
