"use client";

import LastNamesTable from "./LastNamesTable";
import EmailsTable from "./EmailsTable";
import FirstNamesTable from "./FirstNamesBoysTable";
import FirstNamesGirlsTable from "./FirstNamesGirlsTable";
import { useState } from "react";
import clsx from "clsx";

export default function HomePage() {
  const [activeTable, setActiveTable] = useState<
    "lastNames" | "firstNames" | "emails"
  >("lastNames");

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
          className={clsx(
            false && "bg-slate-800 p-3 text-slate-50",
            "rounded-t-lg font-semibold ml-2"
          )}
        >
          Ontario
        </button>
        <button
          onClick={() => setActiveTable("firstNames")}
          className={clsx(
            true && "bg-slate-800 p-3 text-slate-50",
            "rounded-t-lg font-semibold ml-2"
          )}
        >
          Canada
        </button>
      </div>
      {activeTable === "lastNames" && <LastNamesTable />}
      {activeTable === "emails" && <EmailsTable />}
      {activeTable === "firstNames" && (
        <>
          <FirstNamesTable />
          <FirstNamesGirlsTable />
        </>
      )}
    </main>
  );
}
