"use client";

import { useMemo, useState } from "react";
import { LastNameData } from "./lastNames";
import { normalizeString } from "./utils";
import Table from "./Table";
import styles from "./LastNamesTyble.module.css";

export default function LastNamesTable({
  lastNames,
}: {
  lastNames: LastNameData[];
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = useMemo(() => {
    if (!searchTerm) return lastNames;
    const normalizedSearchTerm = normalizeString(searchTerm).toLowerCase();
    return lastNames.filter(({ lastName }) =>
      normalizeString(lastName)
        .toLowerCase()
        .replace("-", "")
        .includes(normalizedSearchTerm)
    );
  }, [searchTerm, lastNames]);

  return (
    <>
      <div className="bg-slate-800 mb-[-10px] pl-5 py-3">
        <label className="text-slate-50 mr-2 font-semibold block" htmlFor="#">
          Search
        </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-slate-50 border-transparent rounded p-3 focus:outline-none focus:border-sky-600 mb-[10px] bg-slate-700"
        />
      </div>

      <div className={`flex flex-wrap ${styles.tablesWrapper}`}>
        <Table
          rows={
            searchResult.slice(0, 250) as unknown as Record<string, number>[]
          }
          labels={["Nom", "Rang"]}
        />

        <Table
          rows={
            searchResult.slice(250, 500) as unknown as Record<string, number>[]
          }
          labels={["Nom", "Rang"]}
        />

        <Table
          rows={
            searchResult.slice(500, 750) as unknown as Record<string, number>[]
          }
          labels={["Nom", "Rang"]}
        />

        <Table
          rows={searchResult.slice(750) as unknown as Record<string, number>[]}
          labels={["Nom", "Rang"]}
        />
      </div>
      <div className="rounded-b-lg h-5 w-full  mt-[-10px] bg-slate-800"></div>
    </>
  );
}
