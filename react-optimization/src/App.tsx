import { FC } from "react";
// useState,
// useEffect,
// useMemo,
// useCallback,
// ChangeEvent,
// import List from "./component/List";
// import Notes from "./component/Notes";
import TransExample from "./component/TransExample";
import IssueProvider from "./context/IssueContext";
import Issues from "./context/Issues";

// const initialTodos = [
//   { id: 1, task: "Go shopping" },
//   { id: 2, task: "Pay the electricity bill" },
// ];
const App: FC = () => {
  // const [todoList, setTodoList] = useState<Todo[]>(initialTodos);
  // const [task, setTask] = useState<string>("");
  // const [term, setTerm] = useState("");

  // useEffect(() => {
  //   console.log("Rendering <App />");
  // });
  // const handleSearch = () => {
  //   setTerm(task);
  // };
  // const filteredTodoList = useMemo(() => {
  //   todoList.filter((todo: Todo) => {
  //     console.log("Filtering...");
  //     return todo.task.toLowerCase().includes(term.toLowerCase());
  //   });
  // }, [term, todoList]);

  // const handleCreate = () => {
  //   const newTodo = {
  //     id: Date.now(),
  //     task,
  //   };

  //   setTodoList([...todoList, newTodo]);

  //   // Resetting input value
  //   setTask("");
  // };

  // const handleDelete = useCallback(
  //   (taskId: number) => {
  //     const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
  //     setTodoList(newTodoList);
  //   },
  //   [todoList],
  // );

  return (
    <>
      {/* <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>

      <List todoList={todoList} handleDelete={handleDelete} /> */}
      {/* <h1>Notes </h1>
      <Notes /> */}

      {/* <TransExample /> */}
      <IssueProvider
        url="https://api.github.com/repos/ContentPI/ContentPI/
issues"
      >
        <Issues />
      </IssueProvider>
    </>
  );
};

export default App;
