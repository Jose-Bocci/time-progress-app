export default function month() {
  return new Date().toLocaleString("default", { month: "long" }).toUpperCase();
}
