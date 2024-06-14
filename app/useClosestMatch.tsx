import { normalizeString } from "./utils";
import { useMemo } from "react";
import { distance } from "closest-match";

function useClosestMatch({
  data,
  searchTerm,
  searchInKey,
}: {
  data: any[];
  searchTerm: string;
  searchInKey: string;
}) {
  useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((row) => {
      const score = distance(
        normalizeString(row[searchInKey]).toLowerCase(),
        normalizeString(searchTerm).toLowerCase()
      );
      return score <= 3;
    });
  }, [searchTerm, searchInKey, data]);
}
