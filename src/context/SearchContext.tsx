// src/context/SearchContext.tsx
"use client";
import { searchProducts } from "@/lib/mock/functions";
import { MockProduct } from "@/lib/mock/mockData";
import React, { createContext, useContext, useState } from "react";

interface SearchContextType {
  searchQuery: string;
  searchResults: MockProduct[];
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<MockProduct[]>([]);

  const handleSetSearchQuery = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const results = searchProducts(query);
      setSearchResults(results);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        setSearchQuery: handleSetSearchQuery,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
