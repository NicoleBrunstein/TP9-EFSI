"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button type="button">Registrarse</button>
      </form>
    </div>
  );
}
