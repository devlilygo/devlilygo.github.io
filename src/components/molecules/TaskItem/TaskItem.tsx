import { Checkbox } from "@/components/ui/checkbox";

const TaskItem = ({
  label,
  checked = false,
}: {
  label: string;
  checked?: boolean;
}) => {
  return (
    <li className="flex items-center space-x-2">
      <Checkbox defaultChecked={checked} />
      <span className={checked ? "line-through text-muted-foreground" : ""}>
        {label}
      </span>
    </li>
  );
};

export default TaskItem;
