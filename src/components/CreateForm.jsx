"use client";

import createTask from "../action/CreateTask";
import React, { useActionState } from "react";

const CreateForm = () => {
    const [state, formAction, isPending] = useActionState(createTask);
  return (
    <section>
      <form action={formAction}>
        <div className=" flex border border-cyan-500 rounded-lg overflow-hidden">
          <input
            type="text"
            id="title"
            name="title"
            className=" outline-none px-4 py-1 flex-grow"
          />
          <button
            type="submit"
            className="bg-cyan-500 w-20 h-10 text-white text-sm"
          >
            {isPending ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateForm;
