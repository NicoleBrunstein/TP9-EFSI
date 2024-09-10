"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que la página se recargue

    // Aquí puedes agregar lógica adicional si es necesario

    // Redirigir al usuario a la Home después de enviar el formulario
    router.push("/");
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Ingresa tu email" required />
        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
