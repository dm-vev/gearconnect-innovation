
import { useParams, Link } from 'react-router-dom';
import { Brain, Satellite, Network, Globe, Bot, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = {
  gearai: {
    name: "GearAI",
    description: "Искусственный интеллект и машинное обучение",
    icon: Brain,
    intro: "GearAI – подразделение компании, занимающееся разработкой интеллектуальных алгоритмов, нейросетевых моделей и автоматизированных систем принятия решений.",
    fullDescription: `Основное направление – создание мощных и адаптивных решений для анализа данных, 
    предсказательной аналитики, автоматизации и поддержки автономных систем. GearAI интегрируется с другими 
    продуктами GearTech, предоставляя возможность использовать искусственный интеллект для спутниковой связи, 
    вычислений и децентрализованных решений.`,
    technologies: [
      "Компьютерное зрение – распознавание и анализ изображений, видео, объектов и аномалий",
      "Обработка естественного языка (NLP) – системы анализа текстов, чат-боты, голосовые помощники",
      "Глубокое обучение и нейросетевые модели – многослойные сети для сложных вычислительных задач",
      "Генеративные модели – системы для создания текстов, изображений и видео на основе AI",
      "Автоматизированное управление – интеллектуальные алгоритмы для автономных систем"
    ],
    products: [
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
    intro: "GearSCS – подразделение GearTech, занимающееся спутниковыми технологиями, включая связь, глобальное отслеживание, интернет вещей и передачу данных в труднодоступных районах.",
    fullDescription: `Системы GearSCS обеспечивают связь на глобальном уровне и позволяют работать в сложных условиях, 
    например, при развертывании автономных систем или в удалённых зонах.`,
    technologies: [
      "Спутниковый интернет – передача данных через малые спутники и геостационарные системы",
      "Глобальная связь и IoT – подключение удалённых устройств, сенсоров, передача телеметрии",
      "Шифрованные коммуникации – защищённая передача данных для корпоративных и государственных нужд",
      "Спутниковая инфраструктура – наземные станции, передатчики и оборудование"
    ],
    products: [
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
    intro: "GearCI предоставляет облачную и распределённую вычислительную инфраструктура для обработки больших данных, машинного обучения и высокопроизводительных вычислений.",
    fullDescription: `Эти решения подходят для анализа данных, работы с AI, блокчейн-инфраструктуры и других задач, 
    требующих высокой мощности.`,
    technologies: [
      "Облачные вычисления – выделенные серверные мощности для любых задач",
      "Распределённые кластеры – масштабируемые вычислительные решения",
      "Оптимизированные нейросетевые серверы – выделенные ресурсы для глубокого обучения"
    ],
    products: [
      "GearCI Cloud – платформа облачных вычислений",
      "GearCI AI Compute – специализированные серверы для обучения нейросетей",
      "GearCI Edge – распределённые вычисления на периферийных устройствах"
    ]
  },
  gearnet: {
    name: "GearNET",
    description: "Децентрализованные сети без блокчейна на базе Mesh-сетей 2.4 ГГц",
    icon: Globe,
    intro: "GearNET - это инновационная технология для децентрализованных коммуникаций, использующая Mesh-сети на частоте 2.4 ГГц.",
    fullDescription: `В отличие от решений на основе блокчейна, GearNET ориентирован на быструю, эффективную и надежную 
    передачу данных в условиях отсутствия традиционной инфраструктуры связи.`,
    technologies: [
      "Mesh-сеть: устройства соединяются друг с другом напрямую, создавая динамическую и самоорганизующуюся сеть без центральных узлов",
      "Частота 2.4 ГГц: использование общедоступного радиодиапазона для максимальной совместимости",
      "Протокол динамической маршрутизации: адаптивный алгоритм выбора маршрута данных для повышения отказоустойчивости",
      "Минимальная задержка: оптимизированная передача данных для реального времени",
      "Шифрование и защита: безопасное соединение между узлами с возможностью анонимизации трафика"
    ],
    products: [
      "GearNET Core – программный стек для создания Mesh-сетей",
      "GearNET SecureMesh – защищённые коммуникации с шифрованием",
      "GearNET API – интерфейсы для интеграции с другими системами"
    ]
  },
  gearkit: {
    name: "GearKit",
    description: "Робототехника и автономные системы",
    icon: Bot,
    intro: "GearKit занимается разработкой автономных роботизированных платформ для промышленного применения, автоматизации процессов, исследовательских задач и созданием гуманоидных роботов.",
    fullDescription: `Наши гуманоидные роботы ориентированы на взаимодействие с людьми, выполнение сложных манипуляций 
    и интеграцию в производственные и сервисные процессы. Продукты GearKit предназначены для работы в сложных условиях 
    и интегрируются с другими технологиями GearTech, обеспечивая высокую степень автономности и адаптивности.`,
    technologies: [
      "Автономная навигация – системы машинного зрения и сенсоров",
      "Промышленные манипуляторы – автоматизированные роботизированные комплексы",
      "Силовые актуаторы – передовые приводы и системы управления движением"
    ],
    products: [
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
            <div className="flex items-center relative w-full justify-center">
              <Link to="/" className="absolute left-0">
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

      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Левая колонка */}
            <Card className="glass h-fit">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-xl">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
                    <CardDescription className="text-lg">{product.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">{product.intro}</p>
                  <p className="text-muted-foreground">{product.fullDescription}</p>
                </div>
              </CardContent>
            </Card>

            {/* Правая колонка */}
            <div className="space-y-8">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl">Технологии и направления</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    {product.technologies.map((tech, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2 w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-xl">Продукты {product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3">
                    {product.products.map((prod, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2 w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{prod}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;

