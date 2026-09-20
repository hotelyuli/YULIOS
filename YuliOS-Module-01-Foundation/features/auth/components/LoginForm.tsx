"use client";

import { useActionState } from "react";
import { LogIn } from "lucide-react";
import { login } from "@/features/auth/actions";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, {});
  return (
    <form action={action} className="login-form">
      <label>
        Correo electrónico
        <input name="email" type="email" autoComplete="email" required placeholder="nombre@hotelyuli.com" />
      </label>
      <label>
        Contraseña
        <input name="password" type="password" autoComplete="current-password" required minLength={8} />
      </label>
      {state.error && <p className="form-error" role="alert">{state.error}</p>}
      <button className="primary-button" type="submit" disabled={pending}>
        <LogIn size={18} aria-hidden="true" />
        {pending ? "Ingresando…" : "Iniciar sesión"}
      </button>
    </form>
  );
}
