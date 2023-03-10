export default function month() {
  return new Date().toLocaleString("es-419", { month: "long" }).toUpperCase();
}
