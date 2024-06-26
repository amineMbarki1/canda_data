"use client";

import LastNamesTable from "./LastNamesTable";
import EmailsTable from "./EmailsTable";
import FirstNamesTable from "./FirstNamesBoysTable";
import FirstNamesGirlsTable from "./FirstNamesGirlsTable";
import { useState } from "react";
import clsx from "clsx";
import lastNames from "./lastNames";
import FirstNamesOntario from "./FrstNamesOntario";

export default function HomePage() {
  const [activeTable, setActiveTable] = useState<
    "lastNames" | "firstNames" | "emails"
  >("lastNames");

  const [activeState, setActiveState] = useState<"queubec" | "ontario">(
    "queubec"
  );


  return (
    <main className="max-w-screen-lg mx-auto mt-10">
      <div className="flex">
        <div className="mr-auto flex">
          <button
            onClick={() => setActiveTable("lastNames")}
            className={clsx(
              activeTable === "lastNames" && "bg-slate-800 p-3 text-slate-50",
              "rounded-t-lg font-semibold mr-2"
            )}
          >
            Last Names
          </button>
          <button
            onClick={() => setActiveTable("firstNames")}
            className={clsx(
              activeTable === "firstNames" && "bg-slate-800 p-3 text-slate-50",
              "rounded-t-lg font-semibold mr-2"
            )}
          >
            First Names
          </button>
          <button
            onClick={() => setActiveTable("emails")}
            className={clsx(
              activeTable === "emails" && "bg-slate-800 p-3 text-slate-50",
              "rounded-t-lg font-semibold mr-2"
            )}
          >
            Email
          </button>
        </div>

        <button
          onClick={() => setActiveState("ontario")}
          className={clsx(
            activeState === "ontario" && "bg-slate-800 p-3 text-slate-50",
            "rounded-t-lg font-semibold ml-2"
          )}
        >
          Ontario
        </button>
        <button
          onClick={() => setActiveState("queubec")}
          className={clsx(
            activeState === "queubec" && "bg-slate-800 p-3 text-slate-50",
            "rounded-t-lg font-semibold ml-2"
          )}
        >
          Québec
        </button>
      </div>
      {activeTable === "lastNames" && (
        <LastNamesTable
          lastNames={
            activeState === "ontario" ? lastNames.ontario : lastNames.quebec
          }
        />
      )}
      {activeTable === "emails" && <EmailsTable />}
      {activeTable === "firstNames" && activeState === "queubec" && (
        <div className="flex overflow-x-scroll">
          <div className="flex-grow-[1]">
            <FirstNamesTable />
          </div>
          <div className="flex-grow-[1]">
            <FirstNamesGirlsTable />
          </div>
        </div>
      )}
      {activeTable === "firstNames" && activeState === "ontario" && (
        <FirstNamesOntario />
      )}
    </main>
  );
}
