import React, { useState, useEffect } from "react";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";
import { database } from "../TransactionFirebase";
import { ref, get } from "firebase/database";

const TransactionsTable = () => {
  const { logOut, user } = UserAuth();

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/gettransfer/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTableData([data]); // Assuming the response is an object
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className="w-full ">
        <thead>
          <tr className="border-b-[1px] border-black text-center">
            <td className="w-[20%] py-5 font-normal text-md">Transaction ID</td>
            <td className="w-[20%] py-5 font-normal text-md">Sender Detail</td>
            <td className="w-[20%] py-5 font-normal text-md">
              Receiver Detail
            </td>
            <td className="w-[20%] py-5 font-normal text-md">Amount Detail</td>
            <td className="w-[20%] py-5 font-normal text-md">Date</td>
          </tr>
        </thead>

        <tbody>
          {tableData.map((map) => {
            // Check if the current user's email matches recEmail or senderEmail
            const isRecipient = map.recEmail === user?.email;
            const isSender = map.senderEmail === user?.email;

            // Define the background color classes based on the user's role
            const bgColorClass = isRecipient
              ? "bg-green-500"
              : isSender
              ? "bg-red-500"
              : "";

            return (
              <tr
                className={`transition duration-500 hover:bg-[#101010] hover:text-white text-center cursor-pointer ${bgColorClass}`}
                key={map.id}
              >
                <td className="w-[20%] py-5 font-normal text-md">{map.uuid}</td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.userEmail}
                </td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.recEmail}
                </td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.amount}
                </td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.date_Time}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
