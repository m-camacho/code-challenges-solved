import { useContext } from "react";
import { AllocationsContext } from "./contexts/allocationsContext";

function App() {
  const { allocations } = useContext(AllocationsContext);
  return (
    <div>
      {allocations.map((allocation) => (
        <div key={allocation.id}>{allocation.displayName}</div>
      ))}
    </div>
  );
}

export default App;
