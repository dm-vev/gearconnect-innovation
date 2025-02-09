import { useParams, Link } from 'react-router-dom';
import { Brain, Satellite, Network, Globe, Bot, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const products = {
  gearai: {
    name: "GearAI",
    description: "Искусственный интеллект и машинное обучение",
    icon: Brain,
    details: "Разработка интеллектуальных алгоритмов, нейросетевых моделей и автоматизированных систем принятия решений для анализа данных, предсказательной аналитики и поддержки автономных систем.",
    features: ["Компьютерное зрение", "Обработка естественного языка", "Глубокое обучение", "Генеративные модели", "Автоматизированное управление"],
    fullDescription: `GearAI – подразделение компании, занимающееся разработкой интеллектуальных алгоритмов, нейросетевых моделей и автоматизированных систем принятия решений. Основное направление – создание мощных и адаптивных решений для анализа данных, предсказательной аналитики, автома��изации и поддержки автономных систем. GearAI интегрируется с другими продуктами GearTech, предоставляя возможность использовать искусственный интеллект для спутниковой связи, вычислений и децентрализованных решений.`,
    applications: [
      "GearAI Vision – интеллектуальный движок для анализа видео и изображений",
      "GearAI Speech – система обработки речи и текстовой аналитики",
      "GearAI AutoML – платформа для автоматизированного обучения моделей AI",
      "GearAI Robotics – комплекс ПО для управления автономными системами"
    ]
  },
  gearscs: {
    name: "GearSCS",
    description: "Спутниковая система связи",
    icon: Satellite,
    details: "Спутниковые технологии для глобальной связи, отслеживания, интернета вещей и передачи данных в труднодоступных районах.",
    features: ["Спутниковый интернет", "Глобальная связь и IoT", "Шифрованные коммуникации", "Спутниковая инфраструктура"],
    fullDescription: `GearSCS – подразделение GearTech, занимающееся спутниковыми технологиями, включая связь, глобальное отслеживание, интернет вещей и передачу данных в труднодоступных районах. Системы GearSCS обеспечивают связь на глобальном уровне и позволяют работать в сложных условиях, например, при развертывании автономных систем или в удалённых зонах.`,
    applications: [
      "GearSCS Link – терминалы для спутниковой связи",
      "GearSCS IoT – система подключения IoT-устройств через спутники",
      "GearSCS GPS – спутниковая система позиционирования",
      "GearSCS SecureNet – защищённые каналы передачи данных"
    ]
  },
  gearci: {
    name: "GearCI",
    description: "Вычислительная инфраструктура",
    icon: Network,
    details: "Облачная и распределённая вычислительная инфраструктура для обработки больших данных, машинного обучения и высокопроизводительных вычислений.",
    features: ["Облачные вычисления", "Распределённые кластеры", "Оптимизированные нейросетевые серверы"],
    fullDescription: `GearCI предоставляет облачную и распределённую вычислительную инфраструктуру для обработки больших данных, машинного обучения и высокопроизводительных вычислений. Эти решения подходят для анализа данных, работы с AI, блокчейн-инфраструктуры и других задач, требующих высокой мощности.`,
    applications: [
      "GearCI Cloud – платформа облачных вычислений",
      "GearCI AI Compute – специализированные серверы для обучения нейросетей",
      "GearCI Edge – распределённые вычисления на периферийных ��стройствах"
    ]
  },
  gearnet: {
    name: "GearNET",
    description: "Децентрализованные сети без блокчейна на базе Mesh-сетей 2.4 ГГц",
    icon: Globe,
    details: "Инновационная технология для децентрализованных коммуникаций, использующая Mesh-сети на частоте 2.4 ГГц для быстрой и эффективной передачи данных.",
    features: ["Mesh-сеть", "Динамическая маршрутизация", "Минимальная задержка", "Шифрование и защита"],
    fullDescription: `GearNET - это инновационная технология для децентрализованных коммуникаций, использующая Mesh-сети на частоте 2.4 ГГц. В отличие от решений на основе блокчейна, GearNET ориентирован на быструю, эффективную и надежную передачу данных в условиях отсутствия традиционной инфраструктуры связи. Устройства соединяются друг с другом напрямую, создавая динамическую и самоорганизующуюся сеть без центральных узлов.`,
    applications: [
      "GearNET Core – программный стек для создания Mesh-сетей",
      "GearNET SecureMesh – защищённые коммуникации с шифрованием",
      "GearNET API – интерфейсы для интеграции с другими системами"
    ]
  },
  gearkit: {
    name: "GearKit",
    description: "Робототехника и автономные системы",
    icon: Bot,
    details: "Разработка автономных роботизированных платформ для промышленного применения, автоматизации процессов, исследовательских задач и создание гуманоидных роботов.",
    features: ["Автономная навигация", "Промышленные манипуляторы", "Силовые актуаторы"],
    fullDescription: `GearKit занимается разработкой автономных роботизированных платформ для промышленного применения, автоматизации процессов, исследовательских задач и созданием гуманоидных роботов. Наши гуманоидные роботы ориентированы на взаимодействие с людьми, выполнение сложных манипуляций и интеграцию в производственные и сервисные процессы. Продукты GearKit предназначены для работы в сложных условиях и интегрируются с другими технологиями GearTech, обеспечивая высокую степень автономности и адаптивности.`,
    applications: [
      "GearKit Auto – автономные мобильные платформы",
      "GearKit Industrial – промышленные роботизированные комплексы",
      "GearKit AI Control – программное обеспечение для управления роботами"
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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <nav className="glass mx-auto mt-4 px-4 sm:px-8 py-4 rounded-lg bg-white/60 w-[90%]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="hover:bg-white/20">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/" className="text-xl font-bold">GearTech</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">О нас</Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Продукты</Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 pt-32">
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

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Описание</h3>
              <p className="text-lg leading-relaxed">{product.fullDescription}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Ключевые особенности</h3>
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
              <h3 className="text-xl font-semibold mb-4">Области применения</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Техническая спецификация</h3>
              <p className="text-muted-foreground">{product.details}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
