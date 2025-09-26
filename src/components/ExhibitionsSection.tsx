import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function ExhibitionsSection() {
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
}