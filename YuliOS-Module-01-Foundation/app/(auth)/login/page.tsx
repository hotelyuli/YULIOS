import { LoginForm } from "@/features/auth/components/LoginForm";

export const metadata = { title: "Iniciar sesión" };

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-brand" aria-label="Hotel Yuli">
        <div className="brand-mark">Y</div>
        <p>HOTEL YULI</p>
        <h1>Operaciones claras.<br />Cada turno.</h1>
        <span>Uvita · Costa Rica</span>
      </section>
      <section className="login-panel">
        <div className="login-card">
          <p className="eyebrow">YuliOS</p>
          <h2>Bienvenido</h2>
          <p className="muted">Ingrese con su cuenta del hotel.</p>
          <LoginForm />
          <p className="login-help">¿Necesita acceso? Comuníquese con el propietario.</p>
        </div>
      </section>
    </main>
  );
}
