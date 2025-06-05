import AllocatorForm from "./AllocatorForm";
import AllocationsContextProvider from "./contexts/allocationsContext";
import MemoryChart from "./MemoryChart";

function App() {
  return (
    <AllocationsContextProvider>
      <h1>Memory representation</h1>
      <p>Use ctrl + cmd + space to see the emoji panel in macOS 💻</p>

      <AllocatorForm />
      <MemoryChart />
    </AllocationsContextProvider>
  );
}

export default App;
