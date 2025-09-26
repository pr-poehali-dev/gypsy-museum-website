import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

export default function ContactsSection() {
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
}