import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const paymentMethods = [
    { name: 'PayPal', icon: '💳', address: 'zoid.ketevan@gmail.com', note: 'Use family and friends', color: 'from-blue-500 to-blue-600' },
    { name: 'Bitcoin', icon: '₿', address: '1LHwjpMPtuhzNjUp6nXMXaFmu5EGinvWNY', color: 'from-orange-500 to-orange-600' },
    { name: 'USDT', icon: '₮', address: 'TXHWYwxR2Exj9MCn1wCLTfhi8sMvKUN1bj', color: 'from-green-500 to-green-600' },
    { name: 'Ethereum', icon: 'Ξ', address: 'TXHWYwxR2Exj9MCn1wCLTfhi8sMvKUN1bj', color: 'from-purple-500 to-purple-600' }
  ];

  const copyToClipboard = (text: string, method: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Скопировано!', description: `Адрес ${method} скопирован в буфер обмена` });
  };

  const handlePayment = (plan: any) => {
    setSelectedPlan(plan);
    setPaymentOpen(true);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const pricingPlans = [
    {
      name: 'Basic',
      price: 20,
      videos: '5,000',
      features: ['HD качество', 'Базовый монтаж', 'До 3 минут', 'Быстрая обработка'],
      color: 'from-primary to-secondary'
    },
    {
      name: 'Mega',
      price: 30,
      videos: '7,000',
      features: ['Full HD качество', 'Продвинутый монтаж', 'Цветокоррекция', 'До 5 минут', 'Спецэффекты'],
      color: 'from-secondary to-accent',
      popular: true
    },
    {
      name: 'Ultra Mega',
      price: 60,
      videos: '30,000',
      features: ['4K качество', 'Профессиональный монтаж', 'Цветокоррекция PRO', 'Неограниченная длина', 'Спецэффекты PRO', 'VIP поддержка'],
      color: 'from-accent to-primary'
    }
  ];

  const services = [
    {
      icon: 'Video',
      title: 'Съёмка',
      description: 'Профессиональная видеосъёмка с использованием современного оборудования'
    },
    {
      icon: 'Film',
      title: 'Монтаж',
      description: 'Создание динамичных видео с идеальными переходами и ритмом'
    },
    {
      icon: 'Palette',
      title: 'Цветокоррекция',
      description: 'Придаём вашим видео кинематографичный и профессиональный вид'
    },
    {
      icon: 'Sparkles',
      title: 'Спецэффекты',
      description: 'Добавляем wow-эффект с помощью современных визуальных решений'
    }
  ];

  const portfolioItems = [
    { title: 'Рекламный ролик', category: 'Реклама', gradient: 'from-primary/20 to-secondary/20' },
    { title: 'Корпоративное видео', category: 'Бизнес', gradient: 'from-secondary/20 to-accent/20' },
    { title: 'Music Video', category: 'Музыка', gradient: 'from-accent/20 to-primary/20' },
    { title: 'Event Coverage', category: 'События', gradient: 'from-primary/20 to-accent/20' },
    { title: 'Product Showcase', category: 'Продукт', gradient: 'from-secondary/20 to-primary/20' },
    { title: 'Social Media', category: 'SMM', gradient: 'from-accent/20 to-secondary/20' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              VideoStudio 2026
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'portfolio', 'pricing'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : section === 'services' ? 'Услуги' : section === 'portfolio' ? 'Портфолио' : 'Тарифы'}
                </button>
              ))}
            </div>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              🚀 Видеопродакшн 2026
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Создаём видео,<br />которые продают
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Полный цикл видеопродакшна: от съёмки до финального рендера с профессиональными спецэффектами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('pricing')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Выбрать тариф
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="text-lg border-primary/30 hover:bg-primary/10">
                <Icon name="Eye" className="mr-2" size={20} />
                Портфолио
              </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-up">
            {[
              { number: '500+', label: 'Проектов' },
              { number: '99%', label: 'Довольных клиентов' },
              { number: '24/7', label: 'Поддержка' },
              { number: '4K', label: 'Качество' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Наши услуги</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Полный спектр услуг</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессиональная команда для реализации видео любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="border-border/50 bg-card hover:bg-card/80 transition-all hover:scale-105 hover:border-primary/30">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Портфолио</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Проекты, которые вдохновляют и приносят результат
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, idx) => (
              <Card key={idx} className="overflow-hidden border-border/50 hover:border-primary/30 transition-all group cursor-pointer">
                <div className={`h-64 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <Icon name="Play" size={64} className="text-white/30 group-hover:text-white/60 transition-colors group-hover:scale-110 transform duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/80 text-foreground border-border/50">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Тарифы</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой план</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Гибкие тарифы для проектов любого масштаба
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative border-border/50 hover:border-primary/50 transition-all ${
                  plan.popular ? 'ring-2 ring-primary scale-105 shadow-2xl shadow-primary/20' : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-secondary to-accent border-0">
                      ⭐ Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${plan.color} mb-4`}></div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">${plan.price}</span>
                  </div>
                  <CardDescription className="text-lg mt-2">
                    {plan.videos} видео
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handlePayment(plan)}
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-secondary to-accent hover:opacity-90' 
                        : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                    }`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <a 
        href="https://t.me/tokare2" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float"
      >
        <Icon name="MessageCircle" size={28} className="text-white" />
      </a>

      <Dialog open={paymentOpen} onOpenChange={setPaymentOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Оплата тарифа {selectedPlan?.name}</DialogTitle>
            <DialogDescription>
              Выберите способ оплаты ${selectedPlan?.price}
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {paymentMethods.map((method, idx) => (
              <Card key={idx} className="overflow-hidden border-border/50 hover:border-primary/50 transition-all">
                <CardHeader className={`bg-gradient-to-r ${method.color} text-white`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{method.icon}</span>
                    <CardTitle className="text-white">{method.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <p className="text-xs text-muted-foreground mb-1">Адрес для оплаты:</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-xs bg-muted p-2 rounded break-all">{method.address}</code>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => copyToClipboard(method.address, method.name)}
                        className="flex-shrink-0"
                      >
                        <Icon name="Copy" size={16} />
                      </Button>
                    </div>
                  </div>
                  {method.note && (
                    <p className="text-xs text-amber-500 font-medium mt-2">⚠️ {method.note}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              После оплаты свяжитесь с нами в Telegram с подтверждением платежа
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            VideoStudio 2026
          </h2>
          <p className="text-muted-foreground mb-6">Профессиональный видеопродакшн для вашего бизнеса</p>
          <div className="flex justify-center gap-6">
            {['Instagram', 'Youtube', 'Mail'].map((social) => (
              <Button key={social} variant="ghost" size="icon" className="hover:bg-primary/10">
                <Icon name={social as any} size={20} />
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8">© 2026 VideoStudio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;