/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const AllocationsContext = createContext({
  allocations: [],
  addNewAllocation: (allocation) => {
    console.log(allocation);
  },
});

export const useAllocationsContext = () => useContext(AllocationsContext);

export default function AllocationsContextProvider({ children }) {
  const [allocations, setAllocations] = useState([]);

  const addNewAllocation = ({ displayName, memoryUsage }) => {
    setAllocations([
      ...allocations,
      {
        id: crypto.randomUUID(),
        displayName,
        memoryUsage,
      },
    ]);
  };

  return (
    <AllocationsContext.Provider
      value={{
        allocations,
        addNewAllocation,
        setAllocations,
      }}
    >
      {children}
    </AllocationsContext.Provider>
  );
}
