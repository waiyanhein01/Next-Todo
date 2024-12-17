"use client";

import removeTask from "@/action/RemoveTask";
import React, { useActionState } from "react";

const RemoveBtn = ({id}) => {
  const [state, formAction, isPending] = useActionState(removeTask);
  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          className="text-red-500  text-sm"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      </form>
    </div>
  );
};

export default RemoveBtn;
