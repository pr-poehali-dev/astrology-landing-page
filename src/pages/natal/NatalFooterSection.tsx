import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { trustCards, reviews, freeQuestionPoints } from "./NatalPage.data";

const ASTROLOGER_PHOTO = "https://cdn.poehali.dev/projects/e978728c-c5bf-41ce-8d58-8d1e2acd2552/files/061d7845-2b46-409b-a1dd-dbea0da35874.jpg";

export default function NatalFooterSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    question: "",
  });
  const [messenger, setMessenger] = useState<"telegram" | "whatsapp" | "max" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messenger) return;
    const links = {
      telegram: "https://t.me/astrologer",
      whatsapp: "https://wa.me/79990000000",
      max: "https://max.ru/astrologer",
    };
    window.open(links[messenger], "_blank");
  };

  return (
    <>
      <section id="trust" className="section-padding bg-white/50">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <div className="star-divider mb-6">ДОВЕРИЕ</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Почему мне доверяют
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustCards.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-border/80 hover:border-lavender/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-lavender/8 flex items-center justify-center mb-4">
                  <Icon name={icon} fallback="Circle" size={20} className="text-lavender" />
                </div>
                <h3 className="font-display text-lg font-light text-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container-narrow max-w-4xl">
          <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2 border-lavender/15 shadow-lg">
                <img
                  src={ASTROLOGER_PHOTO}
                  alt="Астролог"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="star-divider mb-6 justify-start">ОБО МНЕ</div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
                Кто будет работать с вашей картой
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Астрология помогла мне найти своё направление в жизни. После 12 лет
                  работы бухгалтером я понимала, что живу не свою жизнь — натальная карта
                  показала, почему так происходило и куда двигаться дальше.
                </p>
                <p>
                  Сейчас у меня за плечами более 9 лет практики, профильное образование
                  (академия Шестопалова) и тысячи консультаций. В работе мне важно не просто
                  описать карту — а помочь человеку увидеть реальные решения для своей жизни.
                </p>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-6 text-lavender font-body font-medium hover:opacity-80 transition-opacity"
              >
                Узнать мой путь <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <div className="star-divider mb-6">ОТЗЫВЫ</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Что говорят клиенты
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {reviews.map(({ name, age, text }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-7 border border-border/80"
              >
                <div className="flex items-center gap-1.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm">
                  «{text}»
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-border/60">
                  <div className="w-9 h-9 rounded-full bg-lavender/10 flex items-center justify-center">
                    <span className="font-display text-sm text-lavender">{name[0]}</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{name}</p>
                    <p className="font-body text-xs text-muted-foreground">{age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://t.me/astrologer_reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !text-sm"
            >
              <Icon name="MessageCircle" size={16} />
              Смотреть все отзывы в Telegram
            </a>
          </div>
        </div>
      </section>

      <section id="free-question" className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="bg-foreground rounded-3xl p-10 md:p-16 text-center">
            <div className="w-14 h-14 rounded-2xl bg-lavender/20 flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageSquare" size={26} className="text-lavender" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-4">
              Остались сомнения?<br />Начните с одного вопроса
            </h2>
            <p className="font-body text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
              Вы можете задать один короткий вопрос бесплатно, чтобы понять мой подход
              и получить первый ориентир
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
              {freeQuestionPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm font-body text-white/70">
                  <Icon name="Check" size={13} className="text-lavender" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <a
              href="https://t.me/astrologer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Задать первый вопрос
            </a>
          </div>
        </div>
      </section>

      <section id="order" className="section-padding bg-white/50">
        <div className="container-narrow max-w-xl">
          <div className="text-center mb-10">
            <div className="star-divider mb-6">ЗАЯВКА</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Оставьте заявку на натальную карту
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto leading-relaxed">
              Напишите, что вас сейчас особенно волнует, и я подскажу, какой формат подойдёт именно вам
            </p>
          </div>
          <div className="bg-white rounded-3xl p-7 md:p-9 border border-border/80 shadow-sm">
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
                <label className="block text-sm font-body text-muted-foreground mb-3">
                  Где вам удобнее общаться?
                </label>
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
                  value={form.question}
                  onChange={(e) => setForm({ ...form, question: e.target.value })}
                  placeholder="Что вас сейчас волнует? Можно в свободной форме"
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

      <footer className="border-t border-border/60 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-display text-lg font-light text-foreground">
            ✦ Астролог
          </Link>
          <p className="text-sm text-muted-foreground font-body">© 2024 Все права защищены</p>
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
