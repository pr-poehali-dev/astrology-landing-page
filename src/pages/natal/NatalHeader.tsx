import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { pains } from "./NatalPage.data";

export default function NatalHeader() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-light tracking-wide text-foreground">
            ✦ Астролог
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-body text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <a href="#tariffs" className="hover:text-foreground transition-colors">Тарифы</a>
            <a href="#results" className="hover:text-foreground transition-colors">Что получите</a>
            <a href="#order" className="hover:text-foreground transition-colors">Заказать</a>
          </nav>
          <a href="#order" className="btn-primary !py-[10px] !px-5 !text-sm">
            Заказать
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-lavender-light/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="star-divider mb-8">УСЛУГА</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight">
            Полная расшифровка<br />
            <em className="text-lavender not-italic">натальной карты</em>
          </h1>
          <ul className="space-y-3 mb-10 max-w-lg mx-auto text-base font-body text-muted-foreground text-left">
            {[
              "Ректификация — бесплатное уточнение времени рождения",
              "Анализ личности + прогноз по главной сфере",
              "Сопровождение 30 дней после получения разбора",
              "Видео-пояснение по ключевым моментам",
              "Полная конфиденциальность",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-lavender mt-0.5 text-lg leading-none">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#order" className="btn-primary">
              Заказать натальную карту
            </a>
            <button className="btn-secondary">
              Подарочный сертификат
            </button>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/60 border border-border rounded-full px-4 py-2 text-sm text-muted-foreground font-body">
            <Icon name="CreditCard" size={14} className="text-lavender" />
            Оплата основной суммы — только после получения готового разбора
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="star-divider mb-6 justify-start">УЗНАЁТЕ СЕБЯ?</div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
                Чувствуете, что<br />жизнь идёт не так?
              </h2>
              <ul className="space-y-4">
                {pains.map((pain) => (
                  <li key={pain} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-lavender/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-lavender/60" />
                    </div>
                    <span className="font-body text-muted-foreground leading-relaxed">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-lavender rounded-3xl p-8 text-white">
              <Icon name="Sparkles" size={32} className="text-white/60 mb-4" fallback="Star" />
              <h3 className="font-display text-2xl font-light mb-4">
                Натальная карта даёт ответы
              </h3>
              <p className="font-body text-white/80 leading-relaxed mb-6">
                Карта показывает, почему определённые ситуации повторяются, какой путь вам подходит
                и какие периоды будут благоприятны для изменений.
              </p>
              <p className="font-body text-white/80 leading-relaxed">
                На консультации вы получите не общие слова — а конкретные ответы и практические
                рекомендации именно для вашей ситуации.
              </p>
              <a href="#order" className="btn-secondary mt-6 !border-white/40 !text-white hover:!bg-white/10 hover:!text-white hover:!border-white/60 !text-sm">
                Получить ответы <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}