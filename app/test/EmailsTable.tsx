"use client";
import SearchInput from "./SearchInput";
import emailsData from "../emailAddresses";
import useNormalizedSearch from "../useNormalizedSearch";

export default function EmailsTable() {
  const { setSearchTerm, searchResult, searchTerm } = useNormalizedSearch({
    data: emailsData,
    searchInKey: "address",
  });

  return (
    <div className="mt-2">
      <SearchInput
        searchTerm={searchTerm}
        handleChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="bg-white  shadow-2xl rounded-md w-full mt-2 relative">
        <div className="bg-[#6c7ae0] grid grid-cols-1 rounded-t-md px-4 sticky top-0 left-0 w-full shadow-md z-20">
          <div className="flex">
            <span className="font-semibold text-white py-4  text-left  w-[50%]">
              Address
            </span>
          </div>
        </div>

        <div
          className={
            "grid grid-cols-1  max-h-[555px] overflow-auto relative z-20 px-4"
          }
        >
          {(searchResult as unknown as { address: string }[]).map(
            ({ address }) => (
              <div key={address} className={"flex h-12 items-center border-b"}>
                <span className="w-[100%]  text-gray-500 text-md">
                  {address}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
