import { useState, useMemo } from "react";
import { normalizeString } from "./utils";

function useNormalizedSearch({
  data,
  searchInKey,
}: {
  data: Record<string, string>[];
  searchInKey: string;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = useMemo(() => {
    if (!searchTerm) return data;
    const normalizedSearchTerm = normalizeString(searchTerm).toLowerCase();
    return data.filter((row) =>
      normalizeString(row[searchInKey])
        .toLowerCase()
        .replace("-", "")
        .includes(normalizedSearchTerm)
    );
  }, [data, searchInKey, searchTerm]);

  return { setSearchTerm, searchResult, searchTerm };
}

export default useNormalizedSearch;
