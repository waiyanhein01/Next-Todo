"use server";

import { revalidateTag } from "next/cache";

const removeTask = async (currentState, formData) => {
  const id = formData.get("id");

  const res = await fetch(`http://localhost:3003/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    revalidateTag("tasks");
    return res.json();
  } else {
    throw new Error("Failed to create task");
  }
};

export default removeTask;
