import { FC, useEffect, memo } from "react";
import Task from "./Task";
export type Todo = {
  id: number;
  task: string;
  handleDelete: any;
};
interface Props {
  todoList: Todo[];
}

const List: FC<Props> = ({ todoList, handleDelete }) => {
  useEffect(() => {
    // This effect is executed every new render
    console.log("Rendering <List />");
  });
  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <Task
          key={todo?.id}
          id={todo.id}
          task={todo.task}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default memo(List);
