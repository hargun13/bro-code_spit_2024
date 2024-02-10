import React, { useState, useEffect } from "react";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";
import { database } from "../TransactionFirebase";
import { ref, get } from "firebase/database";

const TransactionsTable = () => {
  const { logOut, user } = UserAuth();

  const [tableData, setTableData] = useState([]);

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
          {/* {tableData.map((map) => {
            return (
              <tr
                className="transition duration-500 hover:bg-[#101010] hover:text-white text-center cursor-pointer"
                key={map.id}
              >
                <td className="w-[20%] py-5 font-normal text-md">
                  {map.TransactionId}
                </td>
                <td className="w-[20%] py-5 font-normal text-md">
                  {user?.email}
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
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
