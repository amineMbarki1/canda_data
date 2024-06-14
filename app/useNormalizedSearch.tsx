import { useState, useMemo } from "react";
import { normalizeString } from "./utils";
import { distance } from "closest-match";

function useNormalizedSearch({
  data,
  searchInKey,
  mode = "contains",
}: {
  data: Record<string, string>[];
  searchInKey: string;
  mode?: "closest_match" | "contains";
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = useMemo(() => {
    if (!searchTerm) return data;
    const normalizedSearchTerm = normalizeString(searchTerm).toLowerCase();
    if (mode === "closest_match")
      return data
        .map((row) => ({
          ...row,
          score: closestMatch(row[searchInKey], normalizedSearchTerm),
        }))
        .filter(({ score }) => score <= 2)
        .toSorted((a, b) => a.score - b.score);

    return data.filter((row) =>
      compare(
        normalizeString(row[searchInKey]).toLowerCase().replace("-", ""),
        normalizedSearchTerm
      )
    );
  }, [data, searchInKey, searchTerm, mode]);

  return { setSearchTerm, searchResult, searchTerm };
}

export default useNormalizedSearch;

export function closestMatch(text1: string, text2: string) {
  const score = distance(
    normalizeString(text1).toLowerCase(),
    normalizeString(text2).toLowerCase()
  );
  return score;
}

export function compare(text1: string, text2: string) {
  normalizeString(text1).toLowerCase().replace("-", "").includes(text2);
}
