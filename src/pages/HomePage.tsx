import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ASTROLOGER_IMAGE =
  "https://cdn.poehali.dev/projects/e978728c-c5bf-41ce-8d58-8d1e2acd2552/files/32bc7894-a30d-4da5-9131-3c2810bc7c8e.jpg";

const services = [
  {
    title: "Натальная карта",
    desc: "Полный разбор личности, судьбы и жизненных циклов",
    icon: "Star",
    link: "/natal",
    popular: true,
    image: "https://cdn.poehali.dev/projects/e978728c-c5bf-41ce-8d58-8d1e2acd2552/files/dbbee533-480c-4701-abad-f4af03572ded.jpg",
  },
  {
    title: "Годовой прогноз",
    desc: "Ключевые периоды, возможности и предупреждения на год",
    icon: "Calendar",
    image: "https://cdn.poehali.dev/projects/e978728c-c5bf-41ce-8d58-8d1e2acd2552/files/6a168fc5-b536-4325-885a-655fc38f32b6.jpg",
  },
  {
    title: "Профориентация",
    desc: "Найдите своё призвание через астрологический анализ",
    icon: "Briefcase",
    image: "https://cdn.poehali.dev/projects/e978728c-c5bf-41ce-8d58-8d1e2acd2552/files/0945eaaa-25eb-4024-83a3-3ceae8ed3ea4.jpg",
  },
  {
    title: "Совместимость",
    desc: "Синастрия пар: сильные стороны и точки роста",
    icon: "Heart",
    image: "https://cdn.poehali.dev/projects/e978728c-c5bf-41ce-8d58-8d1e2acd2552/files/a2a6b50c-ff4d-4371-9dcb-478277262e42.jpg",
  },
];

const steps = [
  { num: "01", title: "Заявка", desc: "Оставляете контакты и удобное время" },
  { num: "02", title: "Анкета", desc: "Заполняете краткую анкету с данными рождения" },
  { num: "03", title: "Анализ", desc: "Составляю вашу натальную карту" },
  { num: "04", title: "Разбор", desc: "Письменный анализ за 2–3 дня (15–30 страниц)" },
  { num: "05", title: "Видео", desc: "Видео-пояснение по ключевым моментам" },
  { num: "06", title: "Поддержка", desc: "30 дней ответов на вопросы" },
];

const faqs = [
  {
    q: "Нужен ли точный час рождения?",
    a: "Желательно, но не обязательно. Если вы не знаете точное время — я провожу бесплатную ректификацию и уточняю его по событиям вашей жизни.",
  },
  {
    q: "Что входит в консультацию?",
    a: "Персональный анализ натальной карты, разбор ключевых сфер жизни (отношения, работа, финансы), письменный отчёт и видео-пояснение.",
  },
  {
    q: "Каковы сроки?",
    a: "Письменный разбор готов через 2–3 рабочих дня после получения анкеты. Видео-пояснение — в течение 1–2 дней после разбора.",
  },
  {
    q: "Можно ли задать вопросы после?",
    a: "Да, 30 дней после получения разбора вы можете задавать любые вопросы. Это входит в стоимость без доплат.",
  },
];

export default function HomePage() {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="/" className="font-display text-xl font-light tracking-wide text-foreground">
            ✦ Астролог
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-body text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">О себе</a>
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#process" className="hover:text-foreground transition-colors">Процесс</a>
            <a href="#contacts" className="hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <a href="#contacts" className="btn-primary !py-[10px] !px-5 !text-sm">
            Записаться
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 md:px-8 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="star-divider mb-8 justify-start">
              <span>ПРОФЕССИОНАЛЬНЫЙ АСТРОЛОГ</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground mb-8">
              Консультации<br />
              <em className="text-lavender not-italic">профессионального</em><br />
              астролога
            </h1>
            <ul className="space-y-3 mb-10 text-base font-body text-muted-foreground">
              {[
                "Персональный разбор натальной карты",
                "Прогноз по отношениям, работе и финансам",
                "Сопровождение 30 дней — ответы на вопросы",
                "Бесплатная ректификация — уточнение времени рождения",
                "Полная конфиденциальность — 96% довольных клиентов",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-lavender mt-0.5 text-lg leading-none">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="#contacts" className="btn-primary">
                Заказать консультацию
              </a>
              <button className="btn-secondary">
                Подарочный сертификат
              </button>
            </div>
          </div>
          <div className="relative animate-fade-in-slow hidden md:block">
            <div className="absolute inset-0 bg-lavender-light rounded-3xl -rotate-2 scale-95 opacity-50" />
            <img
              src={ASTROLOGER_IMAGE}
              alt="Астролог"
              className="relative rounded-3xl w-full object-cover aspect-[3/4] shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-border">
              <p className="font-display text-3xl font-light text-lavender">9+</p>
              <p className="text-xs text-muted-foreground font-body">лет практики</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-border">
              <p className="font-display text-3xl font-light text-lavender">96%</p>
              <p className="text-xs text-muted-foreground font-body">довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE READING */}
      <section className="section-padding bg-lavender-light/40">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6">ПРИМЕР РАЗБОРА</div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Как выглядит ваш анализ
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto font-body">
            Это не шаблонные тексты — каждый разбор составляется индивидуально, с анализом именно вашей карты
          </p>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border text-left max-w-3xl mx-auto">
            <p className="text-xs font-body uppercase tracking-widest text-lavender mb-6">Фрагмент разбора</p>
            <h3 className="font-display text-2xl font-light mb-4 text-foreground">Солнце в Рыбах, VIII дом</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Ваше предназначение связано с глубинным познанием — вы приходите в этот мир, чтобы помогать людям 
              проходить через трансформации. Восьмой дом даёт вам интуитивное понимание психологии людей и 
              умение работать с тем, что другие предпочитают не замечать.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              В финансовом плане это указывает на доход через партнёрство или наследство. Важно не замыкаться 
              на самостоятельной работе — ваши лучшие результаты приходят через объединение ресурсов с другими.
            </p>
            <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground font-body">
              ✦ Этот текст — пример реального анализа, имена и личные данные изменены
            </div>
          </div>
          <a href="#contacts" className="btn-primary mt-10">
            Заказать свой разбор
          </a>
        </div>
      </section>

      {/* HOW ASTROLOGY HELPS */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="star-divider mb-6 justify-start">ДЛЯ ЧЕГО ЭТО</div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8">
                Чем помогает<br />астрология
              </h2>
              <ul className="space-y-5">
                {[
                  { icon: "Clock", text: "Понять важные периоды жизни и использовать их" },
                  { icon: "Heart", text: "Разобраться в отношениях и найти гармонию" },
                  { icon: "TrendingUp", text: "Определить направление в работе и карьере" },
                  { icon: "Compass", text: "Принять важное решение с ясностью" },
                  { icon: "MessageCircle", text: "Получить ответы на личные вопросы" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center flex-shrink-0">
                      <Icon name={icon} fallback="Circle" size={18} className="text-lavender" />
                    </div>
                    <span className="font-body text-foreground leading-relaxed pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-lavender-light/60 rounded-3xl p-8 md:p-10">
              <p className="font-display text-2xl font-light text-foreground mb-6 italic">
                "Астрология — это язык, на котором небо говорит о вас"
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Я не предсказываю судьбу и не говорю о карме. Мой подход — практический: 
                понять ваши сильные стороны, увидеть закономерности и дать конкретные рекомендации.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-lavender/20">
                <div className="w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center">
                  <Icon name="CheckCircle" size={18} className="text-lavender" />
                </div>
                <span className="font-body text-sm text-muted-foreground">Объяснение без сложных терминов и абстракций</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding bg-foreground text-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="star-divider mb-6 justify-start text-white/40">
                <span className="text-white/60">О СПЕЦИАЛИСТЕ</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
                Путь к астрологии<br />через жизнь
              </h2>
              <p className="font-body text-white/70 leading-relaxed mb-4">
                Я 12 лет работала бухгалтером. Цифры, отчёты, стабильность — всё было «правильно», 
                но не было ощущения своего места.
              </p>
              <p className="font-body text-white/70 leading-relaxed mb-4">
                Астрология пришла как личный инструмент — я хотела понять себя. То, что я увидела 
                в своей натальной карте, изменило всё. Я нашла себя, сменила путь — и теперь помогаю 
                другим сделать то же самое.
              </p>
              <p className="font-body text-white/70 leading-relaxed mb-8">
                Более 9 лет практики. Работаю с клиентами по всему миру — Россия, Европа, США.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { num: "9+", label: "лет практики" },
                  { num: "1000+", label: "консультаций" },
                  { num: "96%", label: "рекомендуют" },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-display text-3xl font-light text-lavender mb-1">{num}</p>
                    <p className="text-xs text-white/50 font-body">{label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="btn-secondary !border-white/40 !text-white hover:!bg-white/10 hover:!text-white hover:!border-white/60">
                  Узнать мой путь
                </button>
                <a href="#contacts" className="btn-primary">
                  Получить консультацию
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "GraduationCap", title: "Академия Шестопалова", desc: "Профессиональное образование в области астрологии" },
                { icon: "Globe", title: "Международная практика", desc: "Клиенты из России, Европы и США" },
                { icon: "Shield", title: "Конфиденциальность", desc: "Все данные строго защищены и не передаются третьим лицам" },
                { icon: "MessageSquare", title: "Без эзотерики", desc: "Только практические рекомендации — без «кармы» и абстракций" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={icon} fallback="Circle" size={18} className="text-lavender" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white text-sm">{title}</p>
                    <p className="font-body text-white/50 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6">КАК ЭТО РАБОТАЕТ</div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Как проходит консультация
          </h2>
          <p className="text-muted-foreground mb-16 font-body max-w-lg mx-auto">
            Простой и прозрачный процесс — от заявки до результата
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl bg-white border border-border text-left group hover:border-lavender/40 transition-all hover:shadow-md"
              >
                <span className="font-display text-5xl font-light text-lavender/20 mb-4 block">
                  {step.num}
                </span>
                <h3 className="font-display text-xl font-light text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-lavender/30 z-10">
                    <Icon name="ChevronRight" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <a href="#contacts" className="btn-primary mt-12">
            Записаться на консультацию
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-lavender-light/30">
        <div className="container-narrow text-center">
          <div className="star-divider mb-6">УСЛУГИ</div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Популярные услуги
          </h2>
          <p className="text-muted-foreground mb-12 font-body">
            Выберите то, что актуально для вас прямо сейчас
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ title, desc, icon, link, popular, image }) => (
              <div
                key={title}
                className={`bg-white rounded-2xl border text-left hover:shadow-lg transition-all group overflow-hidden relative flex flex-col ${popular ? "border-lavender shadow-md ring-1 ring-lavender/30" : "border-border hover:border-lavender/40"}`}
              >
                {popular && (
                  <div className="absolute top-3 right-3 z-10 bg-lavender text-white text-xs font-body font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span>⭐</span> Популярное
                  </div>
                )}
                {image && (
                  <div className="w-full h-36 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center mb-3">
                  <Icon name={icon} fallback="Circle" size={18} className="text-lavender" />
                </div>
                <h3 className="font-display text-xl font-light text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4 flex-1">{desc}</p>
                {link ? (
                  <Link
                    to={link}
                    className="btn-secondary !py-[9px] !px-4 !text-sm self-start"
                  >
                    Подробнее
                  </Link>
                ) : (
                  <button className="btn-secondary !py-[9px] !px-4 !text-sm self-start">
                    Подробнее
                  </button>
                )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="bg-lavender rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
              Хотите сделать жизнь<br />осознанной?
            </h2>
            <p className="font-body text-white/80 mb-8 max-w-lg mx-auto">
              Запишитесь на консультацию и получите чёткое понимание своего пути
            </p>
            <a href="#contacts" className="btn-primary !bg-white !text-[#8E3B9E] hover:!bg-white/90" style={{background: 'white', color: '#8E3B9E', boxShadow: '0 4px 20px rgba(0,0,0,0.12)'}}>
              Записаться на консультацию
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-lavender-light/30">
        <div className="container-narrow max-w-3xl">
          <div className="text-center mb-12">
            <div className="star-divider mb-6">ВОПРОСЫ И ОТВЕТЫ</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Часто спрашивают
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-2xl border border-border px-6 data-[state=open]:border-lavender/40"
              >
                <AccordionTrigger className="font-body font-medium text-foreground hover:no-underline py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="star-divider mb-6 justify-start">КОНТАКТЫ</div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                Готовы начать?
              </h2>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Напишите в удобный мессенджер или оставьте заявку — отвечу в течение нескольких часов.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "@astrologer" },
                  { icon: "Mail", label: "Email", value: "hello@astrologer.ru" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center">
                      <Icon name={icon} fallback="Circle" size={18} className="text-lavender" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-body">{label}</p>
                      <p className="font-body font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="font-display text-2xl font-light text-foreground mb-6">
                Оставить заявку
              </h3>
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
                <button type="submit" className="btn-primary w-full mt-2">
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground font-body text-center">
                  Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-light text-foreground">✦ Астролог</span>
          <p className="text-sm text-muted-foreground font-body">© 2024 Все права защищены</p>
          <Link
            to="/natal"
            className="text-sm text-lavender font-body hover:opacity-80 transition-opacity"
          >
            Натальная карта →
          </Link>
        </div>
      </footer>
    </div>
  );
}