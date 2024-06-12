"use client";

import Table from "./Table";
import useNormalizedSearch from "./useNormalizedSearch";
import firstNames from "./firstNamesOntario";

export default function FirstNamesOntario() {
  const { setSearchTerm, searchResult, searchTerm } = useNormalizedSearch({
    data: firstNames as unknown as Record<string, string>[],
    searchInKey: "name",
  });
  return (
    <>
      <div className="w-full bg-slate-800 mb-[-10px] pl-5 py-3 rounded-t-lg pr-5">
        <label className="text-slate-50 mr-2 font-semibold block" htmlFor="#">
          Search
        </label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-slate-50 border-transparent rounded p-3 focus:outline-none focus:border-sky-600 mb-[10px] bg-slate-700"
        />
      </div>
      <Table rows={searchResult} labels={["Prénom", "Rang"]} />
    </>
  );
}
