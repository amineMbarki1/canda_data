"use client";

import { useState } from "react";

import Toggle from "./Toggle";
import Tabs from "./Tabs";
import LastNamesTable from "./LastNamesTable";
import EmailsTable from "./EmailsTable";
import FirstNamesOntario from "./FirstNamesOntario";
import FirstNamesQuebec from "./FirstNamesQuebec";


export default function Test() {
  const [activeProvince, setActiveProvince] = useState<"quebec" | "ontario">(
    "quebec"
  );
  const [activeTable, setActiveTable] = useState<
    "lastNames" | "emails" | "firstNames"
  >("lastNames");

  return (
    <div className="lg:max-w-screen-lg xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm px-1 md:px-0 lg:px-0 mx-auto mt-8">
      <>
        <div className="flex gap-2 items-center my-2">
          <span
            className={`text-gray-500 text-sm ${
              activeProvince === "quebec" ? "font-bold text-black" : ""
            }`}
          >
            Québec
          </span>
          <Toggle
            handleChange={() =>
              setActiveProvince((prev) =>
                prev === "ontario" ? "quebec" : "ontario"
              )
            }
            isChecked={!(activeProvince === "quebec")}
          />
          <span
            className={`text-gray-500 text-sm ${
              activeProvince === "ontario" ? "font-bold text-black" : ""
            }`}
          >
            Ontario
          </span>
        </div>
        <Tabs onChange={setActiveTable as () => void} />
      </>
      {activeTable === "lastNames" && (
        <LastNamesTable province={activeProvince} />
      )}
      {activeTable === "emails" && <EmailsTable />}
      {activeTable === "firstNames" && activeProvince === "ontario" && (
        <FirstNamesOntario />
      )}
      {activeTable === "firstNames" && activeProvince === "quebec" && (
        <FirstNamesQuebec />
      )}
    </div>
  );
}
