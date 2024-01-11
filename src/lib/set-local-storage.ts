export function setLocalStorage(value: string) {
  localStorage.setItem("ls", JSON.stringify(value));
}