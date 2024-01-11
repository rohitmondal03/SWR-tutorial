"use client"

import useSWR from "swr"
import { useState } from "react"



export default function LocalStoragePage() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const { data, error, isLoading } = useSWR<string[], Error>(
    "/api/todos",
    fetchTodos,
    {
      revalidateOnFocus: true,
    })

  function fetchTodos() {
    const data = window.localStorage.getItem("ls")
    if (data) {
      const r = JSON.parse(data) as string[];
      return r;
    } else {
      return [];
    }
  }

  function addToDo() {
    setTodos(prev => ({ ...prev, value }))
    window.localStorage.setItem("ls", JSON.stringify(todos))
  }


  if (isLoading) return <>Loading...</>
  if (error) return <>{error.message}</>

  return (
    <section>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addToDo}>Add ToDo</button>

      {data?.map((d) => (
        <p>{d}</p>
      ))}
    </section>
  )
}
