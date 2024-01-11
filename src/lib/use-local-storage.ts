export function fetchLocalStorage() {
  const data = window.localStorage.getItem("ls")

  if(data) return JSON.parse(data);
  else return "No item found..."
}