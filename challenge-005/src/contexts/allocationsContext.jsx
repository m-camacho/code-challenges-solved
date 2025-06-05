/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const AllocationsContext = createContext({
  allocations: [],
  setAllocations: (allocations) => {},
});

export const useAllocationsContext = () => useContext(AllocationsContext);

export default function AllocationsContextProvider({ children }) {
  const [allocations, setAllocations] = useState([]);

  return (
    <AllocationsContext.Provider value={{ allocations, setAllocations }}>
      {children}
    </AllocationsContext.Provider>
  );
}
