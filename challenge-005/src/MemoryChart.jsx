import { useAllocationsContext } from "./contexts/allocationsContext";

const MEMORY_SIZE = 2048;

function App() {
  const { allocations } = useAllocationsContext();
  return (
    <>
      <div className="m-4 mt-6 h-25 bg-blue-200 rounded-lg w-5xl">
        {allocations.map((allocation, index) => {
          const memoryUsage = allocation.memoryUsage;
          const width = (memoryUsage / MEMORY_SIZE) * 100;
          const color = index % 2 === 0 ? "bg-red-200" : "bg-green-200";
          return (
            <div
              key={allocation.id}
              className={`p-1 h-full inline-block rounded-lg ${color}`}
              style={{ width: `${width}%` }}
            >
              <div className="text-gray-500">{allocation.displayName}</div>
              <div className="text-gray-500">{allocation.memoryUsage}</div>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-gray-500">Total memory: {MEMORY_SIZE}MB</p>
    </>
  );
}

export default App;
