import TodoListContainer from "@/components/TodoListContainer";
import CreateForm from "../components/CreateForm";

export default function Home() {
  return (
    <main className="p-10 w-[600px] h-screen mx-auto">
      <h1 className="font-bold text-2xl mb-5">Todo Lists</h1>
      <CreateForm/>
      <TodoListContainer/>
    </main>
  );
}
