import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  Heart
} from 'lucide-react';

type FooterProps = {
    handleSubmit: () => void
}

export default function Footer({handleSubmit}: FooterProps) {
  

  return (
    <footer className="bg-white dark:bg-card text-slate-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-300">Company</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-900 dark:text-gray-300">
              Building innovative solutions that empower businesses and individuals 
              to achieve their goals through cutting-edge technology.
            </p>
            <div className="flex space-x-3 text-gray-900 dark:text-gray-300">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-slate-800">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-slate-800">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-slate-800">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4 text-gray-900 dark:text-gray-300">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  AI & Machine Learning
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Enterprise Suite
                </a>
                <Badge variant="secondary" className="text-xs">New</Badge>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4 text-gray-900 dark:text-gray-300">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4 text-gray-900 dark:text-gray-300">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-100 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button 
                onClick={handleSubmit} 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <p className="flex items-center">
              © 2024 Company. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500" /> 
              by our team.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Badge variant="outline" className="text-green-400 border-green-400">
              Status: All systems operational
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}