
import { useParams } from 'react-router-dom';
import { Brain, Satellite, Network, Globe, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const products = {
  gearai: {
    name: "GearAI",
    description: "Искусственный интеллект для бизнес-решений",
    icon: Brain,
    details: "Разработка и внедрение систем искусственного интеллекта для оптимизации бизнес-процессов, анализа данных и принятия решений.",
    features: ["Машинное обучение", "Нейронные сети", "Предиктивная аналитика"],
    fullDescription: `
      GearAI представляет собой комплексное решение в области искусственного интеллекта,
      предназначенное для оптимизации и автоматизации бизнес-процессов. Наша система
      использует передовые алгоритмы машинного обучения и нейронные сети для анализа
      данных, прогнозирования трендов и принятия решений.
    `,
    applications: [
      "Автоматизация рутинных задач",
      "Анализ больших данных",
      "Прогнозирование бизнес-показателей",
      "Оптимизация ресурсов",
      "Персонализация клиентского опыта"
    ]
  },
  gearscs: {
    name: "GearSCS",
    description: "Спутниковые системы связи",
    icon: Satellite,
    details: "Создание надёжных спутниковых систем связи для обеспечения глобального покрытия и бесперебойной коммуникации.",
    features: ["Глобальное покрытие", "Высокая скорость", "Надёжность"],
    fullDescription: `
      GearSCS обеспечивает надежную спутниковую связь в любой точке планеты.
      Наша система предоставляет высокоскоростной доступ к данным и коммуникационным
      сервисам даже в самых удаленных регионах.
    `,
    applications: [
      "Морская навигация",
      "Авиация",
      "Удаленные регионы",
      "Экстренные службы",
      "Военная связь"
    ]
  },
  gearci: {
    name: "GearCI",
    description: "Вычислительная инфраструктура",
    icon: Network,
    details: "Построение масштабируемых вычислительных систем для обработки больших объёмов данных и сложных вычислений.",
    features: ["Облачные решения", "Высокая производительность", "Масштабируемость"],
    fullDescription: `
      GearCI предоставляет современную вычислительную инфраструктуру для решения
      сложных вычислительных задач. Наши системы масштабируются под потребности
      клиента и обеспечивают максимальную производительность.
    `,
    applications: [
      "Высокопроизводительные вычисления",
      "Облачные сервисы",
      "Обработка больших данных",
      "Научные исследования",
      "Рендеринг и моделирование"
    ]
  },
  gearnet: {
    name: "GearNET",
    description: "Децентрализованные сети",
    icon: Globe,
    details: "Разработка децентрализованных сетевых решений на основе блокчейн-технологий для безопасного обмена данными.",
    features: ["Блокчейн", "Безопасность", "Прозрачность"],
    fullDescription: `
      GearNET использует технологию блокчейн для создания безопасных и прозрачных
      децентрализованных сетей. Наши решения обеспечивают надежную защиту данных
      и неизменность информации.
    `,
    applications: [
      "Смарт-контракты",
      "Цифровые активы",
      "Защищенный документооборот",
      "Цепочки поставок",
      "Финансовые транзакции"
    ]
  },
  gearkit: {
    name: "GearKit",
    description: "Робототехнические решения",
    icon: Bot,
    details: "Создание интеллектуальных робототехнических систем для автоматизации производственных и логистических процессов.",
    features: ["Автоматизация", "ИИ-управление", "Адаптивность"],
    fullDescription: `
      GearKit представляет собой комплексное решение в области робототехники,
      объединяющее передовые технологии автоматизации и искусственного интеллекта
      для оптимизации производственных процессов.
    `,
    applications: [
      "Промышленная автоматизация",
      "Логистические операции",
      "Складской учет",
      "Контроль качества",
      "Сборочные линии"
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white/80 backdrop-blur-lg border-b border-white/20 mb-12">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass p-8 rounded-2xl mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-xl">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          </div>
          
          <p className="text-lg mb-6">{product.fullDescription}</p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Особенности</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 bg-primary/5 rounded-full text-primary"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Применение</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
