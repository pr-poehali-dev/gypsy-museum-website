import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

interface Artifact {
  id: number;
  name: string;
  category: string;
  period: string;
  description: string;
  image: string;
}

export default function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const artifacts: Artifact[] = [
    {
      id: 1,
      name: "Традиционное ожерелье",
      category: "Украшения",
      period: "XIX век",
      description: "Серебряное ожерелье с традиционными цыганскими орнаментами и монетами",
      image: "/img/569d7bd1-6f6e-4745-9281-afde87b15118.jpg"
    },
    {
      id: 2,
      name: "Цыганская скрипка",
      category: "Музыкальные инструменты",
      period: "1890-е годы",
      description: "Старинная скрипка мастера Янко Петрова, использовалась в цыганском театре",
      image: "/img/569d7bd1-6f6e-4745-9281-afde87b15118.jpg"
    },
    {
      id: 3,
      name: "Праздничный костюм",
      category: "Текстиль",
      period: "Начало XX века",
      description: "Женский праздничный костюм с вышивкой и традиционными узорами",
      image: "/img/df595ea8-27c8-4ac6-9bcd-e0d5c99072f5.jpg"
    },
    {
      id: 4,
      name: "Кованые украшения",
      category: "Ремесла",
      period: "XVIII-XIX век",
      description: "Коллекция кованых изделий: подвески, браслеты и декоративные элементы",
      image: "/img/569d7bd1-6f6e-4745-9281-afde87b15118.jpg"
    }
  ]

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'exhibitions', label: 'Экспозиции', icon: 'Camera' },
    { id: 'tickets', label: 'Билеты', icon: 'Ticket' },
    { id: 'contacts', label: 'Контакты', icon: 'MapPin' }
  ]

  const NavButton = ({ id, label, icon }: { id: string, label: string, icon: string }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        activeSection === id 
          ? 'bg-primary text-primary-foreground shadow-md' 
          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
      }`}
    >
      <Icon name={icon as any} size={20} />
      <span className="font-medium">{label}</span>
    </button>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/img/ef8eb363-8cb1-429e-a8fe-1861cf8d461c.jpg')` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
              
              <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                <div className="mb-6">
                  <div className="text-roma-gold text-6xl mb-4">🎭</div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-roma-gold to-white bg-clip-text text-transparent">
                    Музей цыган
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                    Откройте для себя богатое культурное наследие цыганского народа
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
                    onClick={() => setActiveSection('exhibitions')}
                  >
                    <Icon name="Camera" className="mr-2" size={20} />
                    Посетить экспозиции
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-roma-gold text-roma-gold hover:bg-roma-gold hover:text-black px-8 py-3 text-lg"
                    onClick={() => setActiveSection('tickets')}
                  >
                    <Icon name="Ticket" className="mr-2" size={20} />
                    Купить билеты
                  </Button>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-background to-muted/30">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Что вас ждёт</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                      <CardTitle className="text-xl">Уникальные экспонаты</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Редкие артефакты, музыкальные инструменты и предметы быта из частных коллекций
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎵</div>
                      <CardTitle className="text-xl">Интерактивные залы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Послушайте традиционную цыганскую музыку и узнайте историю танцев
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
                      <CardTitle className="text-xl">Онлайн каталог</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Полная база данных музейных коллекций с подробными описаниями
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </>
        )

      case 'exhibitions':
        return (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-4">Музейные коллекции</h2>
              <p className="text-muted-foreground text-center mb-12 text-lg">
                Исследуйте наш онлайн каталог уникальных экспонатов
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {artifacts.map((artifact) => (
                  <Card key={artifact.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={artifact.image} 
                        alt={artifact.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-roma-gold/90 text-black">
                          {artifact.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{artifact.name}</CardTitle>
                        <Badge variant="outline" className="border-primary/50">
                          {artifact.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {artifact.description}
                      </p>
                      
                      <Button 
                        variant="ghost" 
                        className="mt-4 p-0 text-primary hover:text-primary/80"
                      >
                        Подробнее 
                        <Icon name="ArrowRight" className="ml-1" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Search" className="mr-2" size={20} />
                  Просмотреть весь каталог
                </Button>
              </div>
            </div>
          </section>
        )

      case 'tickets':
        return (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-4xl font-bold text-center mb-12">Билеты и посещение</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="Clock" size={24} className="text-primary" />
                      Часы работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2">
                    <div className="flex justify-between">
                      <span>Вторник - Воскресенье:</span>
                      <span className="font-medium">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Понедельник:</span>
                      <span className="text-muted-foreground">Выходной</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Последний вход:</span>
                      <span className="font-medium">17:30</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="CreditCard" size={24} className="text-primary" />
                      Стоимость билетов
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2">
                    <div className="flex justify-between">
                      <span>Взрослый:</span>
                      <span className="font-medium">300 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Льготный:</span>
                      <span className="font-medium">150 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Дети до 7 лет:</span>
                      <span className="font-medium text-green-600">Бесплатно</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-center">Забронировать билеты</CardTitle>
                  <CardDescription className="text-center">
                    Заполните форму, и мы свяжемся с вами для подтверждения брони
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя *</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Телефон *</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Дата посещения *</label>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Количество билетов *</label>
                        <Input type="number" min="1" max="10" defaultValue="1" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Дополнительные пожелания</label>
                      <Textarea 
                        placeholder="Экскурсия на определённом языке, группа с детьми..."
                        rows={3}
                      />
                    </div>
                    
                    <Button size="lg" className="w-full">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        )

      case 'contacts':
        return (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Icon name="MapPin" size={24} className="text-primary" />
                        Адрес
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-2">г. Москва, ул. Культурная, 25</p>
                      <p className="text-sm text-muted-foreground">
                        м. Цветной бульвар, выход № 3<br />
                        10 минут пешком
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Icon name="Phone" size={24} className="text-primary" />
                        Телефоны
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2">
                      <div>
                        <p className="font-medium">Касса и справки:</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                      <div>
                        <p className="font-medium">Экскурсионный отдел:</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Icon name="Mail" size={24} className="text-primary" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">info@roma-museum.ru</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-xl">Напишите нам</CardTitle>
                    <CardDescription>
                      Задайте вопрос или оставьте отзыв о посещении музея
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя *</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email *</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Сообщение *</label>
                        <Textarea 
                          placeholder="Ваше сообщение..."
                          rows={4}
                        />
                      </div>
                      
                      <Button size="lg" className="w-full">
                        <Icon name="Send" className="mr-2" size={20} />
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setActiveSection('home')}
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-200">🎭</div>
              <div>
                <h1 className="text-xl font-bold">Музей цыган</h1>
                <p className="text-sm text-muted-foreground">Культурное наследие</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => (
                <NavButton key={item.id} {...item} />
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 pt-4 border-t">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <NavButton key={item.id} {...item} />
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎭</span>
                <h3 className="font-bold text-lg">Музей цыган</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Сохраняем и представляем богатое культурное наследие цыганского народа для будущих поколений.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Информация</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>г. Москва, ул. Культурная, 25</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@roma-museum.ru</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Часы работы</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Вт-Вс: 10:00 - 18:00</p>
                <p>Пн: выходной</p>
                <p>Последний вход: 17:30</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Музей цыган. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}