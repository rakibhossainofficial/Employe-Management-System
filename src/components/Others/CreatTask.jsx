import React from 'react'

const CreatTask = () => {
  return (
    <div>
      <form className="flex w-full items-start justify-between mt-10 ">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm  text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm  text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm  text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm  text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-sm  text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm  rounded outline-none bg-transparent border-[1px] resize-none p-2"
            name=""
            id=""
            rows={10}
            cols={30}
          ></textarea>
          <button className="bg-emerald-500  py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full focus:bg-emerald-600">
            Creat Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatTask