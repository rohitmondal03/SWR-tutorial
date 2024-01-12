"use client"

import useSWR from "swr"


export default function Home() {
  const { data, error, isLoading } = useSWR<TFakeJson[], Error>("https://jsonplaceholder.typicode.com/todos/")


  if (error) alert("Some error occured !!!" + error.message)
  if (isLoading) return <>Loading...</>

  return (
    <section>
      <h1 style={{ margin: "2rem 0", fontSize: "3rem", textDecoration: "underline" }}>
        Fake JSON
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {data?.map((data) => (
          <div
            key={data.id}
            style={{ border: "2px solid gray", borderRadius: "5px", padding: "1rem" }}
          >
            <h2>{data.title}</h2>
            <p>Id: ${data.id}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
