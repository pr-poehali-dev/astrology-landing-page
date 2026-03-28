import { useState } from "react";
import NatalHeader from "./natal/NatalHeader";
import NatalTariffs from "./natal/NatalTariffs";
import NatalFooterSection from "./natal/NatalFooterSection";

export default function NatalPage() {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <NatalHeader />
      <NatalTariffs />
      <NatalFooterSection form={form} setForm={setForm} handleSubmit={handleSubmit} />
    </div>
  );
}
