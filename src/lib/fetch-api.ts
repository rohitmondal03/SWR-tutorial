export async function fetchAPI(url: string) {
  return fetch(url)
    .then(res => res.json())
}