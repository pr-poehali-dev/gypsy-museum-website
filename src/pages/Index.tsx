import { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ExhibitionsSection from '@/components/ExhibitionsSection'
import TicketsSection from '@/components/TicketsSection'
import ContactsSection from '@/components/ContactsSection'
import Footer from '@/components/Footer'

export default function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onSectionChange={setActiveSection} />
      case 'exhibitions':
        return <ExhibitionsSection />
      case 'tickets':
        return <TicketsSection />
      case 'contacts':
        return <ContactsSection />
      default:
        return <HeroSection onSectionChange={setActiveSection} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}