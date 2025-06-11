"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/header-logo.svg";
import "../../public/styles/buttons.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileView, setMobileView] = useState('main');
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);

  const toggleDropdown = (dropdown) => setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  const closeDropdowns = () => setActiveDropdown(null);
  const openMobileSubmenu = (menu) => setMobileView(menu);
  
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileView('main');
    setExpandedMobileSection(null);
  };

  const goBackToMain = () => {
    setMobileView('main');
    setExpandedMobileSection(null);
  };

  const toggleMobileSection = (section) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section);
  };

  const serviceCategories = {
    'Product Development': ['UX Design', 'Web Development', 'Mobile Application Development', 'Custom Software Solutions'],
    'AI & ML Solutions': ['Predictive Analytics', 'AI-Powered Automation', 'Natural Language Processing (NLP)', 'Machine Learning Models'],
    'Brand Building': ['Brand Strategy', 'Logo Design', 'Identity Development', 'Packaging', 'Storytelling', 'Rebranding'],
    'Digital Marketing': ['Search Engine Optimization (SEO)', 'Social Media Optimization (SMO)', 'Email Marketing', 'Social Media Advertising', 'Lead Nurturing', 'Analytics & Reporting', 'WhatsApp Marketing', 'Marketing Automation']
  };

  const desktopServiceSections = [
    { title: 'Product Development', items: serviceCategories['Product Development'], bgColor: 'bg-white' },
    { title: 'AI & ML Solutions', items: serviceCategories['AI & ML Solutions'], bgColor: 'bg-white' },
    { title: 'Mobile App Development', items: ['iOS Apps', 'Android Apps', 'Cross-Platform Apps', 'App Maintenance & Updates'], bgColor: 'bg-pink-50', highlight: true },
    { title: 'Technology Integration', items: ['Cloud Solutions', 'AI & Machine Learning', 'Cybersecurity', 'IoT Development', 'Blockchain Integration'], bgColor: 'bg-white' },
    { title: 'Brand Building', items: serviceCategories['Brand Building'], bgColor: 'bg-white' },
    { title: 'Digital Marketing', items: serviceCategories['Digital Marketing'], bgColor: 'bg-white' }
  ];

  const DropdownIcon = ({ isOpen }) => (
    <svg className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const MenuIcon = ({ isOpen }) => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );

  const ChevronRight = () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const ChevronLeft = () => (
    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const DropdownItem = ({ title, items, highlight }) => (
    <div className={`p-6 rounded-lg ${highlight ? 'border border-pink-200 bg-pink-50' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {highlight && <ChevronRight />}
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <a key={item} href="#" className="block text-sm text-gray-600 hover:text-gray-900">
            {item}
          </a>
        ))}
      </div>
    </div>
  );

  const DesktopDropdown = ({ title, type, children }) => (
    <div className="relative">
      <button 
        className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
        onClick={() => toggleDropdown(type)}
      >
        {title}
        <DropdownIcon isOpen={activeDropdown === type} />
      </button>
      {activeDropdown === type && children}
    </div>
  );

  const MobileMenuLink = ({ children, onClick }) => (
    <button 
      onClick={onClick}
      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 text-lg font-medium border-b border-gray-100"
    >
      {children}
      <ChevronRight />
    </button>
  );

  const MobileSubmenuHeader = ({ title }) => (
    <div className="flex items-center p-4 border-b border-gray-200">
      <button onClick={goBackToMain} className="flex items-center text-gray-700 hover:text-gray-900">
        <ChevronLeft />
        {title}
      </button>
    </div>
  );

  return (
    <header className="w-full bg-white border-b border-[#E8E8E8]">
      <div className="container !max-w-full py-5 flex items-center justify-between">  
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium" onClick={closeDropdowns}>
            Our Work
          </a>
          
          <DesktopDropdown title="Services" type="services">
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white rounded-lg shadow-lg border border-gray-100 py-8 z-50">
              <div className="grid grid-cols-3 gap-6 px-8">
                {desktopServiceSections.map((section) => (
                  <DropdownItem 
                    key={section.title}
                    title={section.title}
                    items={section.items}
                    highlight={section.highlight}
                  />
                ))}
              </div>
            </div>
          </DesktopDropdown>

          <DesktopDropdown title="Solutions" type="solutions">
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Technology Solutions</h3>
                {['AI & ML Solutions', 'Cloud Integration', 'Cybersecurity'].map(item => (
                  <a key={item} href="#" className="block px-2 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded">{item}</a>
                ))}
              </div>
              <div className="border-t border-gray-100 px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Business Solutions</h3>
                {['Digital Transformation', 'Process Automation'].map(item => (
                  <a key={item} href="#" className="block px-2 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded">{item}</a>
                ))}
              </div>
            </div>
          </DesktopDropdown>

          <DesktopDropdown title="Insights" type="insights">
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
              <div className="px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Resources</h3>
                {['Blog Posts', 'Case Studies', 'White Papers'].map(item => (
                  <a key={item} href="#" className="block px-2 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded">{item}</a>
                ))}
              </div>
              <div className="border-t border-gray-100 px-4 py-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Industry Insights</h3>
                {['Technology Trends', 'Market Analysis'].map(item => (
                  <a key={item} href="#" className="block px-2 py-1 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded">{item}</a>
                ))}
              </div>
            </div>
          </DesktopDropdown>
        </nav>

        {/* <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
          Get in touch
        </button> */}

        <div className="flex items-center space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                  Get in touch
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 md:hidden">
                  <MenuIcon isOpen={isMenuOpen} />
                </button>
        </div>

        {/* <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900">
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div> */}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-white">
            <div className="container !max-w-full py-5 flex items-center justify-between">  
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
              <div className="flex items-center space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                  Get in touch
                </button>
                <button onClick={closeMobileMenu} className="text-gray-700 hover:text-gray-900">
                  <MenuIcon isOpen={true} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {mobileView === 'main' && (
                <div className="p-4 space-y-4">
                  <a href="#" className="block text-gray-700 hover:text-gray-900 py-3 text-lg font-medium border-b border-gray-100">
                    Our Work
                  </a>
                  <MobileMenuLink onClick={() => openMobileSubmenu('services')}>Services</MobileMenuLink>
                  <MobileMenuLink onClick={() => openMobileSubmenu('solutions')}>Solutions</MobileMenuLink>
                  <MobileMenuLink onClick={() => openMobileSubmenu('insights')}>Insights</MobileMenuLink>
                </div>
              )}

              {mobileView === 'services' && (
                <div>
                  <MobileSubmenuHeader title="Our Services" />
                  <div className="p-4 space-y-4">
                    {Object.entries(serviceCategories).map(([category, items]) => (
                      <div key={category} className="border-b border-gray-100 last:border-b-0">
                        <button
                          onClick={() => toggleMobileSection(category)}
                          className="flex items-center justify-between w-full text-left py-4 bg-pink-50 px-4 rounded-lg mb-2"
                        >
                          <span className="font-medium text-gray-900">{category}</span>
                          <DropdownIcon isOpen={expandedMobileSection === category} />
                        </button>
                        
                        {expandedMobileSection === category && (
                          <div className="pb-4 space-y-2">
                            {items.map((item) => (
                              <a key={item} href="#" className="block text-gray-600 hover:text-gray-900 py-2 px-4 text-sm">
                                {item}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {mobileView === 'solutions' && (
                <div>
                  <MobileSubmenuHeader title="Solutions" />
                  <div className="p-4 space-y-4">
                    {['Technology Solutions', 'Business Solutions', 'Digital Transformation'].map(item => (
                      <a key={item} href="#" className="block text-gray-700 hover:text-gray-900 py-3 text-base border-b border-gray-100">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {mobileView === 'insights' && (
                <div>
                  <MobileSubmenuHeader title="Insights" />
                  <div className="p-4 space-y-4">
                    {['Blog Posts', 'Case Studies', 'White Papers', 'Technology Trends'].map(item => (
                      <a key={item} href="#" className="block text-gray-700 hover:text-gray-900 py-3 text-base border-b border-gray-100">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdowns}></div>
      )}
    </header>
  );
};

export default Header;