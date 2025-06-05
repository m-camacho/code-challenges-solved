import AllocationsContextProvider from "./contexts/allocationsContext";
import AllocatorForm from "./form/AllocatorForm";
import MemoryChart from "./MemoryChart";

function App() {
  return (
    <AllocationsContextProvider>
      <h1 className="text-2xl font-bold mb-4">Memory representation</h1>
      <AllocatorForm />
      <MemoryChart />
    </AllocationsContextProvider>
  );
}

export default App;
