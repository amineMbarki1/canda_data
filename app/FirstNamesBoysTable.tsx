"use client";

import Table from "./Table";
import firstNamesBoys from "./firstNamesBoys";
import useNormalizedSearch from "./useNormalizedSearch";

export default function FirstNamesBoysTable() {
  const { setSearchTerm, searchResult, searchTerm } = useNormalizedSearch({
    data: firstNamesBoys,
    searchInKey: "name",
  });
  return (
    <div>
      <div className="w-full bg-slate-800 mb-[-10px] pl-5 py-3 rounded-t-lg  pr-5">
        <label className="text-slate-50 mr-2 font-semibold block" htmlFor="#">
          Search
        </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-slate-50 border-transparent rounded p-3 focus:outline-none focus:border-sky-600 mb-[10px] bg-slate-700"
        />
      </div>
      <Table rows={searchResult} labels={["Prénom Garçon", "Rang"]} />
    </div>
  );
}
