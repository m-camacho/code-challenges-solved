import { createContext, useState } from "react";

export const AllocationsContext = createContext({
  allocations: [],
  setAllocations: (allocations) => {},
});

export default function AllocationsContextProvider({ children }) {
  const [allocations, setAllocations] = useState([]);

  return (
    <AllocationsContext.Provider value={{ allocations, setAllocations }}>
      {children}
    </AllocationsContext.Provider>
  );
}
