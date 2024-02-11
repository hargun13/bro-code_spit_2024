import React, { useState } from "react";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";
import Record from "./Record";

const LendMoney = () => {
  const { user } = UserAuth();
  const initSoilData = [
    {
      yield_performance: 0,
      soil_health: 0,
      irrigation_condition: 0,
      risk_property_flood: 0,
      risk_property_drought: 0,
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-5xl font-thin mb-5">Loan requests</h1>
      <div className="w-full h-full bg-[#62D69C] grid grid-cols-5 gap-3 p-3">
        <h1 className="text-xl text-white font-bold ">Applicant name</h1>
        <h1 className="text-xl text-white font-bold ">Loan amount</h1>
        <h1 className="text-xl text-white font-bold ">Loan period</h1>
        <h1 className="text-xl text-white font-bold ">Credit score</h1>
        <h1 className="text-xl text-white font-bold ">Risk assessment</h1>
      </div>
      <Record data={initSoilData} />
      <Record data={initSoilData} />
      <Record data={initSoilData} />
      <Record data={initSoilData} />
    </div>
  );
};

export default LendMoney;
