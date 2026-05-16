import { useState } from 'react'
import './App.css'

const translations = {
  lt: {
    nav: {
      about: 'Apie mus',
      services: 'Paslaugos',
      details: 'Rekvizitai',
      contact: 'Kontaktai'
    },
    header: {
      contactBtn: 'Susisiekti',
      langSwitch: 'EN'
    },
    hero: {
      badge: 'Dirbame nuo 2024 m.',
      title1: 'Patikimi krovinių pervežimai',
      title2: 'visoje Europoje',
      subtitle: 'UAB "Knauss Logistics" — profesionalus krovinių vežėjas automobilių transportu. Garantuojame saugumą, punktualumą ir skaidrumą kiekviename pristatymo etape.',
      btn1: 'Mūsų paslaugos',
      btn2: 'Susisiekti su mumis'
    },
    stats: {
      trips: 'Sėkmingų reisų',
      countries: 'Europos šalių',
      delivery: 'Pristatymų laiku',
      capital: 'Įstatinis kapitalas'
    },
    about: {
      title: 'Apie mus',
      badge: 'Patikimas partneris logistikos srityje',
      p1: 'UAB "Knauss Logistics" — Lietuvos transporto įmonė, įregistruota Lietuvos Respublikos juridinių asmenų registre. Specializuojamės tarptautiniuose krovinių pervežimuose automobilių transportu Europos Sąjungoje ir Europos šalyse.',
      p2: 'Mūsų požiūris pagrįstas trimis principais: patikimumu, punktualumu ir skaidrumu. Vertiname kiekvieną klientą ir siekiame užtikrinti aukščiausią paslaugų lygį.',
      tags: ['Krovinių pervežimai', 'Tarptautiniai reisai', 'Konsoliduoti kroviniai', 'Skubus pristatymas'],
      director: 'Ion Stefanesa',
      directorTitle: 'Įmonės direktorius',
      quote: '"Mes kuriame verslą pasitikėjimu ir profesionalumu. Kiekvienas krovinys yra mūsų atsakomybė, kiekvienas klientas — mūsų partneris."'
    },
    services: {
      title: 'Mūsų paslaugos',
      subtitle: 'Visas spektras krovinių pervežimo automobilių transportu paslaugų Europoje',
      ftl: {
        title: 'FTL pervežimai',
        desc: 'Visiškai pakrauti sunkvežimiai (Full Truck Load) — specialiai Jūsų kroviniui skirtas transportas nuo durų iki durų be perkrovimų ir tarpinių sandėlių.'
      },
      ltl: {
        title: 'Konsoliduoti kroviniai',
        desc: 'Ekonomiškas sprendimas mažoms siuntoms. Įvairių siuntėjų krovinių konsolidavimas ta pačia kryptimi.'
      },
      intl: {
        title: 'Tarptautiniai pervežimai',
        desc: 'Krovinių pristatymas į visas ES ir Europos šalis. Visas muitinės formalumų ir lydimųjų dokumentų tvarkymas.'
      },
      activityLabel: 'Veiklos kodas',
      activityDesc: 'Krovinių pervežimas automobilių transportu — mūsų pagrindinė ir vienintelė specializacija.',
      licenseBadge: 'Licencija aktyvi'
    },
    details: {
      title: 'Įmonės rekvizitai',
      subtitle: 'Oficiali informacija apie UAB "Knauss Logistics"',
      headerTitle: 'Lietuvos Respublikos juridinis asmuo',
      status: 'Būsena',
      statusValue: 'Aktyvi',
      companyCode: 'Įmonės kodas',
      vatCode: 'PVM mokėtojo kodas',
      regDate: 'Įregistravimo data',
      director: 'Vadovas',
      capital: 'Įstatinis kapitalas',
      activity: 'Veiklos rūšis',
      activityValue: 'Krovinių pervežimas automobilių transportu (49.41.00 — EVRK 2.1)',
      sourceBadge: 'Duomenys patvirtinti Okredo.com'
    },
    contact: {
      title: 'Kontaktai',
      subtitle: 'Susisiekite su mumis Jums patogiu būdu',
      phone: 'Telefonas',
      address: 'Registracijos adresas',
      email: 'El. paštas',
      formTitle: 'Parašykite mums',
      namePlaceholder: 'Jūsų vardas',
      emailPlaceholder: 'Jūsų el. paštas',
      msgPlaceholder: 'Jūsų žinutė',
      submitBtn: 'Siųsti žinutę',
      lithuania: 'Lietuva'
    },
    map: {
      title: 'Vietovė',
      subtitle: 'Lietuva, Pasvalio rajonas'
    },
    footer: {
      desc: 'Profesionalūs krovinių pervežimai automobilių transportu visoje Europoje.',
      navTitle: 'Navigacija',
      servicesTitle: 'Paslaugos',
      contactsTitle: 'Kontaktai',
      copyright: '© 2024—2026 UAB "Knauss Logistics". Visos teisės saugomos.'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      details: 'Company Details',
      contact: 'Contact'
    },
    header: {
      contactBtn: 'Contact Us',
      langSwitch: 'LT'
    },
    hero: {
      badge: 'Operating since 2024',
      title1: 'Reliable Freight Transport',
      title2: 'across Europe',
      subtitle: 'UAB "Knauss Logistics" is a professional road freight carrier. We guarantee safety, punctuality, and transparency at every stage of delivery.',
      btn1: 'Our Services',
      btn2: 'Contact Us'
    },
    stats: {
      trips: 'Successful trips',
      countries: 'European countries',
      delivery: 'On-time delivery',
      capital: 'Share capital'
    },
    about: {
      title: 'About Us',
      badge: 'Reliable logistics partner',
      p1: 'UAB "Knauss Logistics" — a Lithuanian transport company registered in the Register of Legal Entities of the Republic of Lithuania. We specialize in international road freight transport across the European Union and European countries.',
      p2: 'Our approach is based on three principles: reliability, punctuality, and transparency. We value every client and strive to provide the highest level of service.',
      tags: ['Freight transport', 'International routes', 'Groupage cargo', 'Express delivery'],
      director: 'Ion Stefanesa',
      directorTitle: 'Company Director',
      quote: '"We build business on trust and professionalism. Every cargo is our responsibility, every client is our partner."'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Full range of road freight transport services across Europe',
      ftl: {
        title: 'FTL Transport',
        desc: 'Full Truck Load — dedicated transport for your cargo from door to door without reloading or intermediate warehouses.'
      },
      ltl: {
        title: 'Groupage Cargo',
        desc: 'Cost-effective solution for small shipments. Consolidation of cargo from different senders in the same direction.'
      },
      intl: {
        title: 'International Transport',
        desc: 'Cargo delivery to all EU and European countries. Full customs clearance and accompanying documentation.'
      },
      activityLabel: 'Activity code (EVRK 2.1)',
      activityDesc: 'Road freight transport — our main and only specialization.',
      licenseBadge: 'License active'
    },
    details: {
      title: 'Company Details',
      subtitle: 'Official information about UAB "Knauss Logistics"',
      headerTitle: 'Legal entity of the Republic of Lithuania',
      status: 'Status',
      statusValue: 'Active',
      companyCode: 'Company code',
      vatCode: 'VAT code',
      regDate: 'Registration date',
      director: 'Manager',
      capital: 'Share capital',
      activity: 'Activity type',
      activityValue: 'Freight transport by road (49.41.00 — EVRK 2.1)',
      sourceBadge: 'Data verified on Okredo.com'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us in a way that suits you',
      phone: 'Phone',
      address: 'Registration address',
      email: 'Email',
      formTitle: 'Write to us',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      msgPlaceholder: 'Your message',
      submitBtn: 'Send message',
      lithuania: 'Lithuania'
    },
    map: {
      title: 'Location',
      subtitle: 'Lithuania, Pasvalys District'
    },
    footer: {
      desc: 'Professional road freight transport across Europe.',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      contactsTitle: 'Contacts',
      copyright: '© 2024—2026 UAB "Knauss Logistics". All rights reserved.'
    }
  }
}

function App() {
  const [lang, setLang] = useState('lt')
  const t = translations[lang]

  const toggleLang = () => {
    setLang(prev => prev === 'lt' ? 'en' : 'lt')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Header / Navigation ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              KL
            </div>
            <div>
              <span className="text-xl font-extrabold text-gray-900 tracking-tight">Knauss</span>
              <span className="text-xl font-light text-blue-700"> Logistics</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-700 transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-blue-700 transition-colors">{t.nav.services}</a>
            <a href="#details" className="hover:text-blue-700 transition-colors">{t.nav.details}</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-100 hover:text-blue-700 transition-all"
              title={lang === 'lt' ? 'Switch to English' : 'Perjungti į lietuvių kalbą'}
            >
              {t.header.langSwitch}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.header.contactBtn}
            </a>
          </div>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-blue-200 text-sm font-medium mb-6 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              {t.hero.title1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-amber-400/30 hover:shadow-xl"
              >
                {t.hero.btn1}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-base transition-all"
              >
                {t.hero.btn2}
              </a>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">50+</div>
              <div className="text-blue-300 text-sm mt-1">{t.stats.trips}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">15+</div>
              <div className="text-blue-300 text-sm mt-1">{t.stats.countries}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">100%</div>
              <div className="text-blue-300 text-sm mt-1">{t.stats.delivery}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-white">€24K</div>
              <div className="text-blue-300 text-sm mt-1">{t.stats.capital}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-1.5 text-blue-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t.about.badge}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong className="text-gray-900">UAB "Knauss Logistics"</strong> — {t.about.p1}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.about.p2}
              </p>
              <div className="flex flex-wrap gap-3">
                {t.about.tags.map((tag, i) => (
                  <span key={i} className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t.about.director}</div>
                    <div className="text-blue-200 text-sm">{t.about.directorTitle}</div>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed italic border-l-2 border-amber-400 pl-4">
                  {t.about.quote}
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.ftl.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t.services.ftl.desc}
              </p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.ltl.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t.services.ltl.desc}
              </p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services.intl.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {t.services.intl.desc}
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t.services.activityLabel} (EVRK 2.1): 49.41.00</h3>
                <p className="text-gray-500">{t.services.activityDesc}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t.services.licenseBadge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Company Details Section ===== */}
      <section id="details" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {t.details.title}
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full mb-4" />
            <p className="text-gray-500">
              {t.details.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-8 py-6">
                <h3 className="text-xl font-bold text-white">UAB "Knauss Logistics"</h3>
                <p className="text-blue-200 text-sm mt-1">{t.details.headerTitle}</p>
              </div>

              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="px-8 py-5 bg-gray-50/50 font-semibold text-gray-700 text-sm md:col-span-1">{t.details.status}</div>
                  <div className="px-8 py-5 md:col-span-2">
                    <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {t.details.statusValue}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="px-8 py-5 bg-gray-50/50 font-semibold text-gray-700 text-sm">{t.details.companyCode}</div>
                  <div className="px-8 py-5 font-mono text-gray-900 font-medium">306845837</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="px-8 py-5 bg-gray-50/50 font-semibold text-gray-700 text-sm">{t.details.vatCode}</div>
                  <div className="px-8 py-5 font-mono text-gray-900 font-medium">LT100019839215</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="px-8 py-5 bg-gray-50/50 font-semibold text-gray-700 text-sm">{t.details.regDate}</div>
                  <div className="px-8 py-5 text-gray-900 font-medium">{lang === 'lt' ? '2024 m. birželio 13 d.' : '13 June 2024'}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="px-8 py-5 bg-gray-50/50 font-semibold text-gray-700 text-sm">{t.details.director}</div>
                  <div className="px-8 py-5 text-gray-900 font-medium">Ion Stefanesa, {t.details.director.toLowerCase() === 'vadovas' ? 'Direktorius' : 'Director'}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="px-8 py-5 bg-gray-50/50 font-semibold text-gray-700 text-sm">{t.details.capital}</div>
                  <div className="px-8 py-5 text-gray-900 font-medium">24 000,00 EUR</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="px-8 py-5 bg-gray-50/50 font-semibold text-gray-700 text-sm">{t.details.activity}</div>
                  <div className="px-8 py-5 text-gray-900 font-medium">{t.details.activityValue}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://okredo.com/en-lt/company/uab-knauss-logistics-306845837"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {t.details.sourceBadge}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full mb-4" />
            <p className="text-gray-500">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t.contact.phone}</h4>
                  <a href="tel:+37063149603" className="text-xl text-blue-700 hover:text-blue-800 font-medium transition-colors">
                    +370 631 49 603
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t.contact.address}</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Pasvalio r. sav., Vaškų sen., Nairių k.,<br />
                    Maučiuvio g. 17-4, LT-39380<br />
                    {t.contact.lithuania}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t.contact.email}</h4>
                  <a href="mailto:info@knauss-logistics.com" className="text-blue-700 hover:text-blue-800 font-medium transition-colors">
                    info@knauss-logistics.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-6">{t.contact.formTitle}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder={t.contact.msgPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-700/25 hover:shadow-xl"
                >
                  {t.contact.submitBtn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Map Section ===== */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">{t.map.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{t.map.subtitle}</p>
            </div>
            <div className="h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-gray-500 text-sm font-medium">Pasvalio r. sav., Vaškų sen., Nairių k.</p>
                <p className="text-gray-400 text-xs mt-1">Maučiuvio g. 17-4, LT-39380</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  KL
                </div>
                <span className="text-white font-extrabold text-lg">Knauss Logistics</span>
              </div>
              <p className="text-sm leading-relaxed">
                {t.footer.desc}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.navTitle}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                <li><a href="#details" className="hover:text-white transition-colors">{t.nav.details}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.servicesTitle}</h4>
              <ul className="space-y-2 text-sm">
                <li>{t.services.ftl.title}</li>
                <li>{t.services.ltl.title}</li>
                <li>{t.services.intl.title}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.contactsTitle}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:+37063149603" className="hover:text-white transition-colors">+370 631 49 603</a>
                </li>
                <li>
                  <a href="mailto:info@knauss-logistics.com" className="hover:text-white transition-colors">info@knauss-logistics.com</a>
                </li>
                <li className="text-gray-500 text-xs mt-2">
                  Maučiuvio g. 17-4<br />
                  LT-39380
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>{t.footer.copyright}</p>
            <p className="text-gray-600">
              Company ID: 306845837 | VAT: LT100019839215
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App