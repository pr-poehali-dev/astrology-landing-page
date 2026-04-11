import Icon from "@/components/ui/icon";
import { results, steps, plans } from "./NatalPage.data";

export default function NatalTariffs() {
  return (
    <>
      <section id="results" className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <div className="star-divider mb-6">ЧТО ВЫ ПОЛУЧИТЕ</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Что входит в консультацию
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Каждый пункт — это не общие слова, а конкретный анализ именно вашей карты
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {results.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`bg-white rounded-2xl p-7 border border-border/80 hover:border-lavender/30 transition-all duration-300 ${
                  i === results.length - 1 && results.length % 3 === 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-lavender/8 flex items-center justify-center mb-4">
                  <Icon name={icon} fallback="Circle" size={20} className="text-lavender" />
                </div>
                <h3 className="font-display text-xl font-light text-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-padding bg-white/50">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <div className="star-divider mb-6">ПРОЦЕСС</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Как проходит работа
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              От заявки до готового разбора — прозрачно и без сюрпризов
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-6 md:space-y-8">
                {steps.map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-5 md:gap-7 items-start">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-lavender/8 border border-lavender/15 flex items-center justify-center">
                        <span className="font-display text-lg text-lavender font-light">{num}</span>
                      </div>
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-display text-xl font-light text-foreground mb-1">{title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-6">
            <div className="star-divider mb-6">ТАРИФЫ</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              Выберите свой формат
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto mb-4">
              Все варианты включают письменный разбор, видео-пояснение и поддержку 30 дней
            </p>
          </div>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2.5 bg-white border border-border/80 rounded-full px-5 py-2.5 text-sm text-foreground font-body">
              <Icon name="Shield" size={14} className="text-lavender" />
              <span><strong>Важно:</strong> основная оплата — только после получения готового разбора</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-7 md:p-8 border transition-all ${
                  plan.popular
                    ? "bg-lavender text-white border-lavender shadow-xl md:scale-[1.03] md:-my-2"
                    : "bg-white border-border/80 hover:border-lavender/30 hover:shadow-md"
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
                <div className={`flex items-center gap-3 mb-6 ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
                  <span className="font-body text-xs">{plan.prepay}</span>
                  <span className="w-1 h-1 rounded-full bg-current opacity-40" />
                  <span className="font-body text-xs">{plan.deadline}</span>
                </div>
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
    </>
  );
}
