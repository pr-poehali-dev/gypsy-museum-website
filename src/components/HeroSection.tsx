import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

export default function HeroSection({ onSectionChange }: HeroSectionProps) {
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
              onClick={() => onSectionChange('exhibitions')}
            >
              <Icon name="Camera" className="mr-2" size={20} />
              Посетить экспозиции
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-roma-gold text-roma-gold hover:bg-roma-gold hover:text-black px-8 py-3 text-lg"
              onClick={() => onSectionChange('tickets')}
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
}