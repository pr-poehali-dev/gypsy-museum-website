export default function Footer() {
  return (
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
  )
}