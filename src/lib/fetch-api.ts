export async function fetchAPI() {
  return fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
}