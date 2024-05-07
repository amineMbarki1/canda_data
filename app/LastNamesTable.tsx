"use client";

import { useMemo, useState } from "react";
import lastNames from "./lastaNames";
import { normalizeString } from "./utils";
import Table from "./Table";

export default function LastNamesTable() {
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
  }, [searchTerm]);

  console.log(searchResult);

  return (
    <div>
      <div className="w-full bg-slate-800 mb-[-10px] pl-5 py-3 rounded-t-lg mt-2">
        <label className="text-slate-50 mr-2 font-semibold block" htmlFor="#">
          Search
        </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-slate-50 border-transparent rounded p-3 focus:outline-none focus:border-sky-600 mb-[10px] bg-slate-700"
        />
      </div>
      <div>
        <div className="flex">
          <Table rows={searchResult.slice(0, 250)} labels={["Nom", "Rang"]} />

          <Table rows={searchResult.slice(250, 500)} labels={["Nom", "Rang"]} />

          <Table rows={searchResult.slice(500, 750)} labels={["Nom", "Rang"]} />

          <Table rows={searchResult.slice(750)} labels={["Nom", "Rang"]} />
        </div>
        <div className="rounded-b-lg h-5 w-full  mt-[-10px] bg-slate-800"></div>
      </div>
    </div>
  );
}
