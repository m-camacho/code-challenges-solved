import { useContext } from "react";
import { AllocationsContext } from "./contexts/allocationsContext";

function App() {
  const { allocations, setAllocations } = useContext(AllocationsContext);
  console.log({ allocations });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const inputEl = elements.processName;
    const newAllocations = [...allocations, { displayName: inputEl.value }];
    console.log(newAllocations);
    setAllocations(newAllocations);
  };

  return (
    <form onSubmit={handleOnSubmit}>
        <label htmlFor="processName">First name:</label>
        <input type="text" name="processName" />
        <input type="submit" value="Submit"></input>
      </form>
  );
}

export default App;
