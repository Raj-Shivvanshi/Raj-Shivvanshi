import React from 'react';
import { Menu, X, ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold">Raj Shivvanshi</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Portfolio</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
              <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Portfolio</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm Raj Shivvanshi
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              An experienced writer with 2+ years of creating engaging, SEO-friendly content across automotive, technology, and business industries. Proficient in AI tools, research, and content optimization.
            </p>
            <div className="flex space-x-4">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 flex items-center">
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-md hover:bg-teal-50">
                Let's Connect
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/api/placeholder/600/600"
              alt="Raj Shivvanshi - Content Writer"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-12">
            Previous Work
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center p-4">
              <h3 className="font-semibold text-gray-900">Collegedunia</h3>
              <p className="text-gray-600">(CarHP)</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-gray-900">Newparts.com</h3>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-gray-900">Medium.com</h3>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold text-gray-900">Aether Attire</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Services I Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Automotive Content</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Vehicle reviews and comparisons</li>
              <li>• Technical automotive guides</li>
              <li>• Industry news and trends</li>
              <li>• Product descriptions</li>
            </ul>
            <a href="#" className="text-teal-600 hover:text-teal-700 flex items-center">
              Learn More
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Tech & AI Content</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• AI and technology articles</li>
              <li>• Web development guides</li>
              <li>• Tech industry analysis</li>
              <li>• Tutorial content</li>
            </ul>
            <a href="#" className="text-teal-600 hover:text-teal-700 flex items-center">
              Learn More
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Marketing Materials</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Email newsletters</li>
              <li>• Landing pages</li>
              <li>• Social media content</li>
              <li>• Brand development</li>
            </ul>
            <a href="#" className="text-teal-600 hover:text-teal-700 flex items-center">
              Learn More
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Raj Shivvanshi</h3>
              <p className="text-gray-400 mb-4">
                Content writer specializing in automotive, technology, and business content with expertise in SEO and AI tools.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Content Types</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Automotive</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Tech & AI</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Marketing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Business</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Raj Shivvanshi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
