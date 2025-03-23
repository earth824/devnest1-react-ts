export default function Container() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <main className="p-8 flex gap-16 justify-center items-start max-w-5xl w-full">
        <section className="flex flex-col gap-4 basis-3/5">
          <h1 className="text-center text-2xl">Please log in to continue</h1>
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow border-l-8 border-l-green-600">
            <h2>Completed</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow border-l-8 border-l-red-600">
            <h2>Pending</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
                Doing
              </button>
              <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow border-l-8 border-l-yellow-600">
            <h2>In Progress</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
                To Do
              </button>
              <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
                Done
              </button>
              <button className="p-2 rounded-md cursor-pointer border border-gray-200 hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4 basis-2/5">
          <form className="flex flex-col gap-2 bg-white rounded-lg p-4 shadow">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="px-3 py-1.5 outline-none border rounded-md border-gray-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="px-3 py-1.5 outline-none border rounded-md border-gray-200"
              />
            </div>
            <div className="mt-2">
              <button className="w-full bg-blue-600 text-white p-2 rounded-md cursor-pointer">
                Sign In
              </button>
            </div>
          </form>
          <form className="flex flex-col gap-2 bg-white rounded-lg p-4 shadow">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="px-3 py-1.5 outline-none border rounded-md border-gray-200"
              />
            </div>
            <div className="mt-2">
              <button className="w-full bg-blue-600 text-white p-2 rounded-md cursor-pointer">
                Create
              </button>
            </div>
          </form>
          <h2 className="text-blue-600 cursor-pointer self-center">Sign out</h2>
        </section>
      </main>
    </div>
  );
}
