import Icon from "@/components/ui/icon";
import { results, steps, plans, trustCards, reviews } from "./NatalPage.data";

export default function NatalTariffs() {
  return (
    <>
      {/* RESULTS */}
      <section id="results" className="section-padding bg-white/60">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6">ЧТО ВЫ ПОЛУЧИТЕ</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Что входит в консультацию
          </h2>
          <p className="text-muted-foreground mb-12 font-body max-w-xl mx-auto">
            После разбора у вас будет ясность по каждому из этих вопросов
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {results.slice(0, 4).map(({ icon, text }) => (
              <div
                key={text}
                className="bg-background rounded-2xl p-6 border border-border text-left hover:border-lavender/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center mb-4">
                  <Icon name={icon} fallback="Star" size={18} className="text-lavender" />
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {results.slice(4).map(({ icon, text }) => (
              <div
                key={text}
                className="bg-background rounded-2xl p-6 border border-border text-left hover:border-lavender/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center mb-4">
                  <Icon name={icon} fallback="Star" size={18} className="text-lavender" />
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <div className="star-divider mb-6">ПРОЦЕСС</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
              Как проходит работа
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              От заявки до готового разбора — прозрачно и без лишних шагов
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-border h-full hover:border-lavender/30 hover:shadow-sm transition-all">
                  <span className="font-display text-3xl font-light text-lavender/30 block mb-3">{num}</span>
                  <h3 className="font-display text-xl font-light text-foreground mb-2">{title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tariffs" className="section-padding bg-white/60">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6">ТАРИФЫ</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Выберите свой формат
          </h2>
          <p className="text-muted-foreground mb-4 font-body max-w-xl mx-auto">
            Все форматы включают письменный разбор, видео-пояснение и поддержку 30 дней
          </p>
          <div className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground font-body mb-12">
            <Icon name="Shield" size={14} className="text-lavender" />
            <span>Основная оплата — только после получения готового разбора</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-7 lg:p-8 text-left border transition-all ${
                  plan.popular
                    ? "bg-lavender text-white border-lavender shadow-xl md:scale-[1.04] z-10"
                    : "bg-white border-border hover:border-lavender/40 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-white text-xs font-body font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
                    Популярный выбор
                  </div>
                )}
                <p className={`font-body text-sm font-medium mb-3 ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.name}
                </p>
                <p className={`font-display text-4xl font-light mb-1 ${plan.popular ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </p>
                <p className={`font-body text-xs mb-2 ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
                  {plan.prepay}
                </p>
                <p className={`font-body text-xs mb-6 ${plan.popular ? "text-white/50" : "text-muted-foreground/70"}`}>
                  {plan.deadline}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Icon
                        name="Check"
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${plan.popular ? "text-white/80" : "text-lavender"}`}
                      />
                      <span className={`font-body text-sm leading-relaxed ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#order"
                  className={`btn-primary w-full text-center ${
                    plan.popular ? "!bg-white !text-[#8E3B9E] hover:!bg-white/90" : ""
                  }`}
                >
                  Выбрать формат
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="star-divider mb-6">ДОВЕРИЕ</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Почему мне доверяют
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustCards.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-border text-center hover:border-lavender/30 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-lavender-light flex items-center justify-center mx-auto mb-4">
                  <Icon name={icon} fallback="Circle" size={20} className="text-lavender" />
                </div>
                <p className="font-body font-medium text-foreground text-sm mb-1.5">{title}</p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-padding bg-white/60">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6">ОТЗЫВЫ</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Что говорят клиенты
          </h2>
          <p className="font-body text-muted-foreground mb-12 max-w-lg mx-auto">
            Реальные отзывы — без редакции
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map(({ name, age, text }) => (
              <div key={name} className="bg-background rounded-2xl p-6 lg:p-7 border border-border text-left hover:border-lavender/30 hover:shadow-sm transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-lavender text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-sm text-foreground/80 leading-relaxed mb-5">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lavender-light flex items-center justify-center">
                    <span className="font-display text-sm text-lavender font-medium">{name[0]}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-body text-sm font-medium text-foreground">{name}</p>
                    <p className="font-body text-xs text-muted-foreground">{age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-10"
          >
            <Icon name="ExternalLink" size={16} />
            Смотреть все отзывы в Telegram
          </a>
        </div>
      </section>
    </>
  );
}
