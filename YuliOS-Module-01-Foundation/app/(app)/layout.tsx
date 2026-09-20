import Link from "next/link";
import { CalendarDays, LogOut, ShieldCheck } from "lucide-react";
import { logout } from "@/features/auth/actions";
import { requireSession } from "@/features/auth/logic/guards";

const nav = ["Dashboard", "Operaciones", "Desayuno", "Housekeeping", "Eventos", "Tareas", "Tours", "Ingresos"];

export default async function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { user } = await requireSession();
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link href="/dashboard" className="wordmark"><span>Y</span><div><strong>Hotel Yuli</strong><small>YULIOS · OPERATIONS</small></div></Link>
        <div className="topbar-meta"><CalendarDays size={16} /><span>America/Costa_Rica</span></div>
        <div className="user-chip"><ShieldCheck size={16} /><div><small>SESIÓN ACTIVA</small><strong>{user.email}</strong></div></div>
        <form action={logout}><button className="icon-button" aria-label="Cerrar sesión"><LogOut size={18} /></button></form>
      </header>
      <nav className="main-nav" aria-label="Navegación principal">
        {nav.map((item, index) => <Link key={item} className={index === 0 ? "active" : "disabled"} href={index === 0 ? "/dashboard" : "#"}>{item}</Link>)}
      </nav>
      {children}
    </div>
  );
}
