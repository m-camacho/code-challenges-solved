import { useAllocationsContext } from "../contexts/allocationsContext";
import Input from "./Input";

function AllocatorForm() {
  const { allocations, addNewAllocation } = useAllocationsContext();
  console.log({ allocations });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    addNewAllocation({
      displayName: elements.processName.value,
      memoryUsage: elements.memoryUsage.value,
    });
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-2">
      <Input label="Process name:" name="processName" />
      <Input label="Memory usage:" name="memoryUsage" />
      <input
        type="submit"
        value="Submit"
        className="bg-blue-500 text-white p-2 rounded-md"
      />
    </form>
  );
}

export default AllocatorForm;
