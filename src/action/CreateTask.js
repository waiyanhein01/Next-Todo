"use server";

import { revalidateTag } from "next/cache";

const createTask = async (currentState, formData) => {
  const title = formData.get("title");

  const res = await fetch("http://localhost:3003/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    }),
  });

  if (res.ok) {
    revalidateTag("tasks");
    return res.json();
  } else {
    throw new Error("Failed to create task");
  }
};

export default createTask;