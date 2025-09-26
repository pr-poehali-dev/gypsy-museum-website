import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
}

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const navigation: NavigationItem[] = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'exhibitions', label: 'Экспозиции', icon: 'Camera' },
    { id: 'tickets', label: 'Билеты', icon: 'Ticket' },
    { id: 'contacts', label: 'Контакты', icon: 'MapPin' }
  ]

  const NavButton = ({ id, label, icon }: NavigationItem) => (
    <button
      onClick={() => onSectionChange(id)}
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

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onSectionChange('home')}
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
  )
}