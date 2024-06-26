import React from "react";
import { AiFillInteraction } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import nhf from "./no_hidden_fees.png";

const Features = () => {
  const bag2 =
    "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

  const data = [
    {
      logo: <AiFillInteraction size={40} />,
      heading: "Intuitive Interface",
      content:
        "Enjoy an intuitive and user-friendly interface that simplifies compliance management for all users.",
    },
    {
      logo: <IoIosTimer size={40} />,
      heading: "Real-Time Transaction Monitoring",
      content:
        "Monitor transactions in real-time, enabling quick detection of any compliance issues and ensuring regulatory adherence.",
    },
    {
      logo: nhf,
      heading: "Advanced Credit Scoring Analysis",
      content:
        "Leverage cutting-edge credit scoring analysis tools to gain deeper insights into creditworthiness and risk assessment.",
    },
    {
      logo: <AiOutlineSafetyCertificate size={40} />,
      heading: "Critical Agricultural Analytics",
      content:
        "Access critical agricultural analytics to optimize farming practices, improve yield performance, and mitigate risks effectively.",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bag2})`, backgroundSize: "cover" }}
      className="h-auto flex flex-col items-center justify-center py-5"
    >
      <h1 className="text-5xl  font-bold text-center py-5">
        Advanced Compliance Features
      </h1>
      <p className="md:text-xl text-lg italic font-semibold text-gray-500 text-center my-5 px-10">
        Ensure your business stays compliant effortlessly. With TruComply,
        <br /> you can manage and track compliance tasks seamlessly.
      </p>

      <div className="grid md:grid-cols-4 grid-cols-1 place-items-center items-center justify-center m-10 ">
        {data.map((data) => (
          <div className="mx-5 p-6 bg-white rounded-2xl transition duration-700 hover:-translate-y-3 hover:bg-[#7fe4b2] text-[#7fe4b2] hover:text-white group shadow-2xl font-bold">
            {data.logo === nhf ? (
              <img src={data.logo} alt="features" className="h-12 " />
            ) : (
              <span>{data.logo}</span>
            )}
            <h1 className="text-2xl font-bold my-5">{data.heading}</h1>
            <p className=" text-lg font-bold italic text-gray-300 transition duration-700 group-hover:text-white">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
