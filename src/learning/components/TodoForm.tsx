import Input from './Input';

// state { title: string }

export default function TodoForm() {
  return (
    <form className="flex flex-col gap-2 bg-white rounded-lg p-4 shadow">
      <Input id="title" label="Title" />
      <div className="mt-2">
        <button className="w-full bg-blue-600 text-white p-2 rounded-md cursor-pointer">
          Create
        </button>
      </div>
    </form>
  );
}
