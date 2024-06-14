"use client";
import SearchInput from "./SearchInput";
import firstNamesBoys from "../firstNamesBoys";
import firstNamesGirls from "../firstNamesBoys";
import useNormalizedSearch from "../useNormalizedSearch";

export default function FirstNamesQuebec() {
//   const { setSearchTerm, searchResult, searchTerm } = useNormalizedSearch({
//     data: firstNames as unknown as Record<string, string>[],
//     searchInKey: "name",
//     mode: "closest_match",
//   });

  return (
    <div className="mt-2">
      {/* <SearchInput
        searchTerm={searchTerm}
        handleChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      <div className="bg-white  shadow-2xl rounded-md w-full mt-2 relative">
        <div className="bg-[#6c7ae0] grid md:grid-cols-2 grid-rows-1 lg:grid-cols-4 rounded-t-md px-4 sticky top-0 left-0 w-full shadow-md z-20">
          <div className="flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              First Name
            </span>
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Rank
            </span>
          </div>
          <div className="flex hidden md:flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              First Name
            </span>
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Rank
            </span>
          </div>
          <div className="flex md:hidden hidden lg:flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              First Name
            </span>
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Rank
            </span>
          </div>
          <div className="flex md:hidden hidden lg:flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              First Name
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
          {firstNamesBoys.map(({ name, rank }) => (
            <div key={name} className={"flex h-12 items-center border-b"}>
              <span className="w-[50%]  text-gray-500 text-md">{name}</span>
              <span className="w-[50%]  text-gray-500 text-md">{rank}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
