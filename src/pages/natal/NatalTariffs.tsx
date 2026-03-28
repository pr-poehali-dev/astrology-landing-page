import Icon from "@/components/ui/icon";
import { plans, results } from "./NatalPage.data";

const reviews = [
  { name: "Анна, 32 года", text: "После разбора впервые поняла, почему снова и снова попадаю в одни и те же ситуации. Очень точно и практично.", stars: 5 },
  { name: "Мария, 28 лет", text: "Получила чёткое понимание, в каком направлении двигаться в карьере. Рекомендую всем, кто в поиске себя.", stars: 5 },
  { name: "Елена, 41 год", text: "Прошла расширенный тариф. Разбор на 30 страниц — подробно, без воды, с конкретными рекомендациями.", stars: 5 },
];

export default function NatalTariffs() {
  return (
    <>
      {/* TARIFFS */}
      <section id="tariffs" className="section-padding bg-lavender-light/20">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6">ТАРИФЫ</div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Выберите свой формат
          </h2>
          <p className="text-muted-foreground mb-4 font-body max-w-xl mx-auto">
            Все варианты включают письменный разбор и поддержку 30 дней
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm text-foreground font-body mb-12">
            <Icon name="Shield" size={14} className="text-lavender" />
            <strong>Важно:</strong>&nbsp;основная оплата — только после получения готового разбора
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 text-left border transition-all ${
                  plan.popular
                    ? "bg-lavender text-white border-lavender shadow-xl scale-[1.03]"
                    : "bg-white border-border hover:border-lavender/40 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-white text-xs font-body font-medium px-4 py-1.5 rounded-full">
                    Популярный
                  </div>
                )}
                <p
                  className={`font-body text-sm font-medium mb-2 ${
                    plan.popular ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`font-display text-4xl font-light mb-1 ${
                    plan.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </p>
                <p
                  className={`font-body text-xs mb-6 ${
                    plan.popular ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  {plan.prepay}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Icon
                        name="Check"
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${plan.popular ? "text-white/80" : "text-lavender"}`}
                      />
                      <span
                        className={`font-body text-sm leading-relaxed ${
                          plan.popular ? "text-white/90" : "text-muted-foreground"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#order"
                  className={`block w-full text-center font-body font-medium py-3 rounded-xl transition-all ${
                    plan.popular
                      ? "bg-white text-lavender hover:bg-white/90"
                      : "bg-lavender text-white hover:opacity-90"
                  }`}
                >
                  Выбрать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-padding">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6">ЧТО ПОЛУЧИТЕ</div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Ваши результаты
          </h2>
          <p className="text-muted-foreground mb-12 font-body">
            После консультации у вас будет ясность по каждому из этих вопросов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {results.map(({ icon, text }) => (
              <div
                key={text}
                className="bg-white rounded-2xl p-5 border border-border text-left hover:border-lavender/40 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center mb-3">
                  <Icon name={icon} fallback="Star" size={18} className="text-lavender" />
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="bg-lavender-light/60 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="font-display text-2xl font-light text-foreground mb-3">🎁 Бонус к каждому разбору</p>
            <div className="flex flex-wrap justify-center gap-4 font-body text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Icon name="Calendar" size={14} className="text-lavender" />
                Годовой прогноз
              </span>
              <span className="flex items-center gap-2">
                <Icon name="MessageCircle" size={14} className="text-lavender" />
                30 дней поддержки
              </span>
            </div>
          </div>
          <a
            href="#order"
            className="inline-block mt-10 bg-lavender text-white font-body font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-all hover:scale-105"
          >
            Заказать натальную карту
          </a>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-padding bg-foreground text-white">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6 text-white/40">
            <span className="text-white/60">ОТЗЫВЫ</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            Что говорят клиенты
          </h2>
          <p className="font-body text-white/60 mb-10">
            Живые отзывы без редакции — в нашем Telegram-канале
          </p>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-white/20 text-white font-body font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            <Icon name="ExternalLink" size={18} />
            Перейти в Telegram канал
          </a>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {reviews.map(({ name, text, stars }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-white/80 text-sm leading-relaxed mb-4">{text}</p>
                <p className="font-body text-white/50 text-xs">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
