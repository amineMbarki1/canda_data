"use client";
import SearchInput from "./SearchInput";
import lastNamesData from "../lastNames";
import { useState, useMemo } from "react";
import { normalizeString } from "@/app/utils";
import {distance} from "closest-match";

export default function LastNamesTable({
  province,
}: {
  province: "ontario" | "quebec";
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const lastNames = lastNamesData[province];

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
    <div className="mt-2">
      <SearchInput
        searchTerm={searchTerm}
        handleChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="bg-white  shadow-2xl rounded-md w-full mt-2 relative">
        <div className="bg-[#6c7ae0] grid md:grid-cols-2 grid-rows-1 lg:grid-cols-4 rounded-t-md px-4 sticky top-0 left-0 w-full shadow-md z-20">
          <div className="flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Last name
            </span>
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Rank
            </span>
          </div>
          <div className="flex hidden md:flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Last name
            </span>
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Rank
            </span>
          </div>
          <div className="flex md:hidden hidden lg:flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Last name
            </span>
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Rank
            </span>
          </div>
          <div className="flex md:hidden hidden lg:flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Last name
            </span>
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Rank
            </span>
          </div>
        </div>

        <div
          className={
            "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  max-h-[555px] overflow-auto relative z-20 px-4"
          }
        >
          {searchResult.map(({ lastName, rank }) => (
            <div key={lastName} className={"flex h-12 items-center border-b"}>
              <span className="w-[50%]  text-gray-500 text-md">{lastName}</span>
              <span className="w-[50%] text-gray-500 text-md">{rank}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
