import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ASTROLOGER_PHOTO = "https://cdn.poehali.dev/projects/e978728c-c5bf-41ce-8d58-8d1e2acd2552/files/2de1405a-7d04-46d9-a364-78992feb0287.jpg";

interface NatalFooterSectionProps {
  form: { name: string; phone: string };
  setForm: (form: { name: string; phone: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function NatalFooterSection({ form, setForm, handleSubmit }: NatalFooterSectionProps) {
  const [messenger, setMessenger] = useState<"telegram" | "whatsapp" | "max" | null>(null);
  const [question, setQuestion] = useState("");

  return (
    <>
      {/* ABOUT */}
      <section id="about" className="section-padding">
        <div className="container-narrow max-w-4xl">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-center">
            <div className="mx-auto md:mx-0">
              <div className="w-[240px] h-[280px] md:w-[280px] md:h-[320px] rounded-3xl overflow-hidden border border-border shadow-sm">
                <img
                  src={ASTROLOGER_PHOTO}
                  alt="Астролог"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="star-divider mb-6 justify-start">ОБО МНЕ</div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-5">
                Кто будет составлять вашу карту
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Астрология помогла мне найти своё направление в жизни — после 12 лет работы в совершенно другой сфере. Именно поэтому в каждом разборе для меня важно не просто описать карту, а помочь человеку увидеть реальные решения.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Профильное образование, более 9 лет практики, тысячи консультаций. Работаю с клиентами из России, Европы и США. Объясняю простым языком — без эзотерического жаргона, с акцентом на практику.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { value: "9+", label: "лет практики" },
                  { value: "1000+", label: "консультаций" },
                  { value: "30", label: "дней поддержки" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <span className="font-display text-2xl text-lavender font-light">{value}</span>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/"
                className="text-lavender font-body font-medium text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                Подробнее обо мне <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FREE QUESTION */}
      <section id="free-question" className="section-padding bg-white/60">
        <div className="container-narrow max-w-3xl">
          <div className="bg-background rounded-3xl p-8 md:p-12 border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-lavender-light flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={24} className="text-lavender" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
              Остались сомнения? Начните с одного вопроса
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              Вы можете задать один короткий вопрос бесплатно, чтобы понять мой подход и получить первый ориентир
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
              {[
                { icon: "User", text: "Отвечаю лично" },
                { icon: "CircleDollarSign", text: "Без оплаты" },
                { icon: "Unlock", text: "Без обязательств" },
                { icon: "FileText", text: "С практическим комментарием" },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <Icon name={icon} fallback="Check" size={14} className="text-lavender flex-shrink-0" />
                  {text}
                </span>
              ))}
            </div>
            <a href="#order" className="btn-primary">
              Задать первый вопрос
            </a>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="section-padding">
        <div className="container-narrow max-w-xl text-center">
          <div className="star-divider mb-6">ЗАЯВКА</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Оставьте заявку на натальную карту
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            Напишите, что вас сейчас особенно волнует, и я подскажу, какой формат подойдёт именно вам
          </p>
          <div className="bg-white rounded-3xl p-7 md:p-8 border border-border shadow-sm text-left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Имя или никнейм в Telegram
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться?"
                  className="w-full px-4 py-3 rounded-xl border border-border font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-lavender/30 focus:border-lavender/50 transition-all"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label className="text-sm font-body text-muted-foreground">Телефон</label>
                  <span className="text-xs font-body text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-full">необязательно</span>
                </div>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border border-border font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-lavender/30 focus:border-lavender/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-body text-muted-foreground mb-3">Удобный мессенджер</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["telegram", "whatsapp", "max"] as const).map((m) => {
                    const icons = { telegram: "Send", whatsapp: "MessageCircle", max: "Zap" };
                    const labels = { telegram: "Telegram", whatsapp: "WhatsApp", max: "Max" };
                    const isActive = messenger === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMessenger(m)}
                        className={`flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-xl border-2 transition-all font-body text-sm font-medium cursor-pointer ${
                          isActive
                            ? "border-lavender bg-lavender/8 text-lavender shadow-sm"
                            : "border-border text-muted-foreground hover:border-lavender/40 hover:text-foreground"
                        }`}
                      >
                        <Icon name={icons[m]} fallback="Circle" size={18} className={isActive ? "text-lavender" : ""} />
                        {labels[m]}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Коротко опишите ваш вопрос
                </label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Что вас сейчас волнует? Чем могу помочь?"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-lavender/30 focus:border-lavender/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!messenger}
                className={`w-full py-4 rounded-xl font-body font-medium text-base transition-all ${
                  messenger
                    ? "btn-primary cursor-pointer"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                Отправить заявку
              </button>
              <p className="text-xs text-muted-foreground/60 font-body text-center">
                Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-display text-lg font-light text-foreground">
            ✦ Астролог
          </Link>
          <p className="text-sm text-muted-foreground font-body">© 2025 Все права защищены</p>
          <Link
            to="/"
            className="text-sm text-lavender font-body hover:opacity-80 transition-opacity"
          >
            ← На главную
          </Link>
        </div>
      </footer>
    </>
  );
}
