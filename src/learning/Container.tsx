import LoginForm from './components/LoginForm';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function Container() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="p-8 flex gap-16 justify-center items-start max-w-5xl w-full">
        <section className="flex flex-col gap-4 basis-3/5">
          <TodoList />
        </section>
        <section className="flex flex-col gap-4 basis-2/5">
          {/* <LoginForm /> */}
          <TodoForm />
        </section>
      </main>
    </div>
  );
}

export default Container;
