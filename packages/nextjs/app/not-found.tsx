import { redirect } from "next/navigation";

export default function NotFound() {
  // Redirigir inmediatamente a /holesky
  redirect("/");

  return null;
}
