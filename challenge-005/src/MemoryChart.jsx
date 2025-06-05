import { useAllocationsContext } from "./contexts/allocationsContext";

function App() {
  const { allocations } = useAllocationsContext();
  return (
    <div>
      {allocations.map((allocation) => (
        <div key={allocation.id}>
          {`${allocation.displayName} - ${allocation.memoryUsage}`}
        </div>
      ))}
    </div>
  );
}

export default App;
