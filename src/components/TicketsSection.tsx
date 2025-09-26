import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

export default function TicketsSection() {
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
}