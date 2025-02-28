
import { useEffect, useRef } from "react";
import { Globe, Rocket, Brain, Satellite, Network, Bot } from "lucide-react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const typedRef = useRef(null);
  const navigate = useNavigate();
  const productsRef = useRef<HTMLElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openTelegram = () => {
    window.open('https://t.me/dmvev', '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const typed = new Typed(typedRef.current, {
      strings: [
        "Инновационные технологии для будущего",
        "Передовые решения для бизнеса",
        "Технологии, меняющие мир",
        "Будущее начинается сегодня"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const products = [
    {
      id: "gearai",
      name: "GearAI",
      description: "Искусственный интеллект для бизнес-решений",
      icon: Brain,
      details: "Разработка и внедрение систем искусственного интеллекта для оптимизации бизнес-процессов, анализа данных и принятия решений.",
      features: ["Машинное обучение", "Нейронные сети", "Предиктивная аналитика"]
    },
    {
      id: "gearscs",
      name: "GearSCS",
      description: "Спутниковые системы связи",
      icon: Satellite,
      details: "Создание надёжных спутниковых систем связи для обеспечения глобального покрытия и бесперебойной коммуникации.",
      features: ["Глобальное покрытие", "Высокая скорость", "Надёжность"]
    },
    {
      id: "gearci",
      name: "GearCI",
      description: "Вычислительная инфраструктура",
      icon: Network,
      details: "Построение масштабируемых вычислительных систем для обработки больших объёмов данных и сложных вычислений.",
      features: ["Облачные решения", "Высокая производительность", "Масштабируемость"]
    },
    {
      id: "gearnet",
      name: "GearNET",
      description: "Децентрализованные сети",
      icon: Globe,
      details: "Разработка децентрализованных сетевых решений на основе блокчейн-технологий для безопасного обмена данными.",
      features: ["Блокчейн", "Безопасность", "Прозрачность"]
    },
    {
      id: "gearkit",
      name: "GearKit",
      description: "Робототехнические решения",
      icon: Bot,
      details: "Создание интеллектуальных робототехнических систем для автоматизации производственных и логистических процессов.",
      features: ["Автоматизация", "ИИ-управление", "Адаптивность"]
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <nav className="glass mx-auto mt-4 px-4 sm:px-8 py-4 rounded-lg bg-white/60 w-[90%]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
            <div className="text-xl font-bold">GearTech</div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Продукты</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="section-padding pt-32 min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/5 rounded-full">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h1 className="hero-text mb-6">
              <span ref={typedRef}></span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Создаем передовые решения в области ИИ, спутниковой связи и робототехники
              для трансформации бизнеса и общества
            </p>
            <button 
              onClick={scrollToProducts}
              className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all"
            >
              Узнать больше
            </button>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background/20"></div>
      </section>

      <section ref={productsRef} className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Наши продукты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Интегрированные решения для различных отраслей
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300 w-[calc(33.333%-1.5rem)] min-w-[320px] cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/5 rounded-xl mb-4">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm mb-4">{product.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-primary/5 rounded-full text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Свяжитесь с нами, чтобы узнать, как наши технологии могут помочь вашему бизнесу
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={openTelegram}
              className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all"
            >
              Связаться с нами
            </button>
            <button 
              onClick={openTelegram}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all"
            >
              Заказать демо
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 GearTech. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
