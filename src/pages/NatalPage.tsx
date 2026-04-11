import NatalHeader from "./natal/NatalHeader";
import NatalTariffs from "./natal/NatalTariffs";
import NatalFooterSection from "./natal/NatalFooterSection";

export default function NatalPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <NatalHeader />
      <NatalTariffs />
      <NatalFooterSection />
    </div>
  );
}
