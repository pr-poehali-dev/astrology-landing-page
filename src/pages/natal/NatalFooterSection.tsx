import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { advantages } from "./NatalPage.data";

interface NatalFooterSectionProps {
  form: { name: string; phone: string };
  setForm: (form: { name: string; phone: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function NatalFooterSection({ form, setForm, handleSubmit }: NatalFooterSectionProps) {
  return (
    <>
      {/* ADVANTAGES */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="star-divider mb-6">ПОЧЕМУ Я</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Преимущества
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {advantages.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-border text-center hover:border-lavender/40 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-lavender-light flex items-center justify-center mx-auto mb-3">
                  <Icon name={icon} fallback="Circle" size={20} className="text-lavender" />
                </div>
                <p className="font-body font-medium text-foreground text-sm mb-1">{title}</p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SHORT */}
      <section className="section-padding bg-lavender-light/20">
        <div className="container-narrow max-w-3xl text-center">
          <div className="star-divider mb-6">ОБО МНЕ</div>
          <h2 className="font-display text-4xl font-light text-foreground mb-6">
            Кто будет составлять вашу карту
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Меня зовут [Имя]. Я профессиональный астролог с опытом более 9 лет,
            выпускница академии Шестопалова. Работаю с клиентами из России, Европы и США.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Я пришла в астрологию после 12 лет работы бухгалтером. Я сама искала ответы —
            и нашла их. Теперь помогаю другим сделать то же самое: без мистики,
            без сложных терминов, только практически.
          </p>
          <Link
            to="/"
            className="text-lavender font-body font-medium flex items-center gap-2 justify-center hover:opacity-80 transition-opacity"
          >
            Читать мою историю подробнее <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="bg-foreground rounded-3xl p-10 md:p-14 text-center text-white">
            <Icon name="Gift" size={36} className="text-lavender mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-4">
              Можно задать 1 вопрос бесплатно
            </h2>
            <p className="font-body text-white/70 mb-8 max-w-md mx-auto">
              Не уверены, нужна ли консультация? Задайте вопрос — отвечу честно
            </p>
            <button className="bg-lavender text-white font-body font-medium px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105">
              Задать бесплатный вопрос
            </button>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="section-padding bg-lavender-light/20">
        <div className="container-narrow max-w-xl text-center">
          <div className="star-divider mb-6">ЗАЯВКА</div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Заказать натальную карту
          </h2>
          <p className="font-body text-muted-foreground mb-10">
            Оставьте контакты — свяжусь в течение нескольких часов
          </p>
          <div className="bg-white rounded-3xl p-8 border border-border shadow-sm text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как вас зовут?"
                  className="w-full px-4 py-3 rounded-xl border border-border font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-lavender/30 focus:border-lavender/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">Телефон</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border border-border font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-lavender/30 focus:border-lavender/50 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-lavender text-white font-body font-medium py-3.5 rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] mt-2"
              >
                Заказать натальную карту
              </button>
              <p className="text-xs text-muted-foreground font-body text-center">
                Нажимая «Заказать», вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href="#order"
              className="bg-lavender text-white font-body font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-all"
            >
              Заказать натальную карту
            </a>
            <button className="border border-border text-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-secondary transition-all">
              Задать вопрос
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-4">
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
