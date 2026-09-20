import { BedDouble, CalendarCheck, CircleDollarSign, ClipboardCheck, Coffee, Wrench } from "lucide-react";

const cards = [
  { label: "Check-ins", value: "—", note: "Importe el CSV de hoy", icon: CalendarCheck },
  { label: "Check-outs", value: "—", note: "Importe el CSV de hoy", icon: BedDouble },
  { label: "Desayunos", value: "—", note: "Coberturas incluidas", icon: Coffee },
  { label: "Pagos pendientes", value: "—", note: "USD y CRC separados", icon: CircleDollarSign },
  { label: "Tareas abiertas", value: "—", note: "Seguimientos activos", icon: ClipboardCheck },
  { label: "Mantenimiento", value: "—", note: "Pendientes", icon: Wrench }
];

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <div className="page-heading"><div><p className="eyebrow">Domingo · Turno de mañana</p><h1>Buenos días, equipo</h1><p>El día operativo comienza con la importación de Little Hotelier.</p></div><button className="primary-button" disabled>Importar CSV</button></div>
      <section className="metric-grid" aria-label="Indicadores del día">
        {cards.map(({ label, value, note, icon: Icon }) => <article className="metric-card" key={label}><div className="metric-icon"><Icon size={20} /></div><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
      </section>
      <section className="foundation-panel">
        <div><p className="eyebrow">MODULE 1</p><h2>La base segura está lista</h2><p>Autenticación, aislamiento por hotel y estructura de permisos. Los datos operativos se incorporarán en el siguiente módulo.</p></div>
        <ol><li><span>01</span>Conectar el proyecto Supabase</li><li><span>02</span>Aplicar las migraciones iniciales</li><li><span>03</span>Crear el primer usuario Owner</li></ol>
      </section>
    </main>
  );
}
