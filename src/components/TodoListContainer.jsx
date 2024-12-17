import TodoList from "./TodoList";

const TodoListContainer = async () => {
    const res = await fetch("http://localhost:3003/tasks",{
        next: {
            tags: ["tasks"],
        },
    });
    const data = await res.json();
    // return data;

  return <div className="mt-3">
    {data.map((task) => <TodoList key={task.id} task={task} />)}
  </div>;
};

export default TodoListContainer;
