// props: label, id

export default function Input() {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">Email</label>
      <input type="text" className="px-3 py-1.5 outline-none border rounded-md border-gray-400" />
    </div>
  );
}
