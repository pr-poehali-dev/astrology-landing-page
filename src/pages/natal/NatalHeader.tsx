import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { heroFeatures, pains } from "./NatalPage.data";

export default function NatalHeader() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-light tracking-wide text-foreground">
            ✦ Астролог
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-body text-muted-foreground">
            <a href="#problems" className="hover:text-foreground transition-colors">Запросы</a>
            <a href="#tariffs" className="hover:text-foreground transition-colors">Тарифы</a>
            <a href="#about" className="hover:text-foreground transition-colors">Обо мне</a>
            <a href="#order" className="hover:text-foreground transition-colors">Заявка</a>
          </nav>
          <a href="#free-question" className="btn-primary !py-[10px] !px-5 !text-sm">
            Задать вопрос
          </a>
        </div>
      </header>

      <section className="pt-28 md:pt-36 pb-20 md:pb-28 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="star-divider mb-8">НАТАЛЬНАЯ КАРТА</div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-light text-foreground mb-6 leading-[1.15] tracking-tight">
            Натальная карта с подробным разбором личности, отношений, денег,{" "}
            <em className="text-lavender not-italic">сильных сторон</em> и жизненных задач
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Письменный разбор с персональным видео-пояснением, бесплатным уточнением
            времени рождения и поддержкой 30 дней после консультации
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 max-w-2xl mx-auto">
            {heroFeatures.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-lavender/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" size={11} className="text-lavender" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#free-question" className="btn-primary">
              Задать первый вопрос бесплатно
            </a>
            <a href="#tariffs" className="btn-secondary">
              Выбрать формат консультации
            </a>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-white/70 border border-border/60 rounded-full px-5 py-2.5 text-sm text-muted-foreground font-body backdrop-blur-sm">
            <Icon name="Shield" size={14} className="text-lavender" />
            Оплата основной суммы — только после получения готового разбора
          </div>
        </div>
      </section>

      <section id="problems" className="section-padding bg-white/50">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <div className="star-divider mb-6">УЗНАЁТЕ СЕБЯ?</div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
              С чем обычно приходят
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Если хотя бы один пункт про вас — натальная карта даст конкретные ответы
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {pains.map(({ icon, text }) => (
              <div
                key={text}
                className="group bg-white rounded-2xl p-6 border border-border/80 hover:border-lavender/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-lavender/8 flex items-center justify-center mb-4 group-hover:bg-lavender/12 transition-colors">
                  <Icon name={icon} fallback="Circle" size={20} className="text-lavender" />
                </div>
                <p className="font-body text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
