"use client"

import Image from "next/image"
import useSWR from "swr"

import { fetchAPI } from "@/lib/fetch-api"


export default function Home() {
  const { data, error, isLoading } = useSWR<TProduct[], Error>("/api/user", fetchAPI, {
    revalidateOnFocus: true,
    revalidateIfStale: true,
  })


  if (error) alert("Some error occured !!!"+ error.message)
  if (isLoading) return <>Loading...</>

  return (
    <section>
      <h1 style={{ margin: "2rem 0", fontSize: "3rem", textDecoration: "underline" }}>
        Products
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap:"20px" }}>
        {data?.map((prod) => (
          <div
            key={prod.id}
            style={{ border: "2px solid gray", borderRadius: "5px", padding: "1rem" }}
          >
            <h2>{prod.title}</h2>
            <Image height={200} width={200} src={prod.image} alt="img" />
            <p>Price: ${prod.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
