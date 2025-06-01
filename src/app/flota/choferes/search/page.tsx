"use client";
import dynamic from "next/dynamic";

const SearchImport = dynamic(() => import("./search"), {
  ssr: false,
});

function Search() {
  return <SearchImport />;
}

export default Search;
