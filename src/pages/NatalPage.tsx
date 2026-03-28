import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Базовый",
    price: "4 900 ₽",
    prepay: "Предоплата 400 ₽",
    popular: false,
    features: [
      "Разбор личности и характера",
      "Основные сферы жизни",
      "Видео-пояснение",
      "15–18 страниц анализа",
      "Готово за 2–3 дня",
      "Поддержка 30 дней",
    ],
  },
  {
    name: "Расширенный",
    price: "7 900 ₽",
    prepay: "Предоплата 900 ₽",
    popular: true,
    features: [
      "Всё из базового",
      "Глубокий анализ всех сфер",
      "Причины повторяющихся ситуаций",
      "Сценарии и паттерны",
      "25–30 страниц анализа",
      "Поддержка 30 дней",
    ],
  },
  {
    name: "Онлайн",
    price: "10 900 ₽",
    prepay: "Предоплата 2 900 ₽",
    popular: false,
    features: [
      "Всё из расширенного",
      "Личная встреча онлайн",
      "1–1.5 часа разговора",
      "Ответы на все вопросы",
      "30–35 страниц анализа",
      "Поддержка 30 дней",
    ],
  },
];

const pains = [
  "Нет понимания своего предназначения и пути",
  "Проблемы с работой, карьерой или доходом",
  "Сложности в отношениях — почему так происходит",
  "Период неопределённости и потери ориентиров",
  "Финансовые трудности — как изменить ситуацию",
];

const results = [
  { icon: "Compass", text: "Понимание своего жизненного пути и предназначения" },
  { icon: "TrendingUp", text: "Финансовые направления и лучшие источники дохода" },
  { icon: "Heart", text: "Глубокое понимание отношений и партнёрства" },
  { icon: "Briefcase", text: "Карьера и сферы деятельности по призванию" },
  { icon: "Star", text: "Сильные стороны и природные таланты" },
  { icon: "AlertCircle", text: "Слабые места и как с ними работать" },
  { icon: "Calendar", text: "Ключевые периоды жизни и их значение" },
  { icon: "Sparkles", text: "Предназначение и миссия в этой жизни" },
];

const advantages = [
  { icon: "GraduationCap", title: "Образование", desc: "Академия Шестопалова — профессиональная подготовка" },
  { icon: "Clock", title: "Опыт 9+ лет", desc: "Более тысячи консультаций с клиентами по всему миру" },
  { icon: "Settings", title: "Ректификация", desc: "Бесплатно уточняем время рождения по событиям жизни" },
  { icon: "Users", title: "Форматы работы", desc: "Письменно, видео или онлайн-встреча — на ваш выбор" },
  { icon: "Lock", title: "Конфиденциальность", desc: "Ваши данные никогда не передаются третьим лицам" },
];

export default function NatalPage() {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background font-body">
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
          <a
            href="#order"
            className="bg-lavender text-white text-sm font-body font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
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
            <a
              href="#order"
              className="bg-lavender text-white font-body font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              Заказать натальную карту
            </a>
            <button className="border border-border text-foreground font-body font-medium px-8 py-3.5 rounded-full hover:bg-secondary transition-all">
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
              <a
                href="#order"
                className="inline-flex items-center gap-2 mt-6 text-white font-body font-medium text-sm border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all"
              >
                Получить ответы <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

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
            {[
              { name: "Анна, 32 года", text: "После разбора впервые поняла, почему снова и снова попадаю в одни и те же ситуации. Очень точно и практично.", stars: 5 },
              { name: "Мария, 28 лет", text: "Получила чёткое понимание, в каком направлении двигаться в карьере. Рекомендую всем, кто в поиске себя.", stars: 5 },
              { name: "Елена, 41 год", text: "Прошла расширенный тариф. Разбор на 30 страниц — подробно, без воды, с конкретными рекомендациями.", stars: 5 },
            ].map(({ name, text, stars }) => (
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
    </div>
  );
}
