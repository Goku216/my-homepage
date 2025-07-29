import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Search,
  BookOpen,
  Users,
  Lightbulb,
  Code,
  Briefcase,
  Zap,
  Heart,
  TrendingUp,
  Calendar,
  User,
  Settings,
  Menu,
  X,
  Rss,
  Mail
} from 'lucide-react';
import { ToggleMode } from './ToggleMode';
import { useSearchStore } from '@/lib/search-store';

// TypeScript interfaces
interface BlogCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isNew?: boolean;
}

interface FeaturedPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  href: string;
}

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const searchQuery= useSearchStore((state)=> state.searchTerm);
  const setSearchQuery= useSearchStore((state)=> state.setSearchTerm)

  // Blog categories data
  const categories: BlogCategory[] = [
    {
      id: "web-development",
      name: "Web Development",
      description: "Frontend, backend, and full-stack development tutorials",
      icon: <Code className="w-4 h-4" />,
      href: "/category/web-development"
    },
    {
      id: "design",
      name: "Design",
      description: "UI/UX design principles and creative inspiration",
      icon: <Lightbulb className="w-4 h-4" />,
      href: "/category/design"
    },
    {
      id: "business",
      name: "Business",
      description: "Entrepreneurship, marketing, and growth strategies",
      icon: <Briefcase className="w-4 h-4" />,
      href: "/category/business"
    },
    {
      id: "productivity",
      name: "Productivity",
      description: "Tools and techniques to boost your efficiency",
      icon: <Zap className="w-4 h-4" />,
      href: "/category/productivity",
      isNew: true
    }
  ];

  // Featured posts data
  const featuredPosts: FeaturedPost[] = [
    {
      id: "1",
      title: "Building Modern React Applications with TypeScript",
      excerpt: "Learn how to leverage TypeScript's power in your React projects for better development experience.",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      href: "/post/react-typescript-guide"
    },
    {
      id: "2",
      title: "The Future of Web Design: Trends for 2024",
      excerpt: "Explore the latest design trends that are shaping the digital landscape this year.",
      author: "Alex Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Design",
      href: "/post/web-design-trends-2024"
    }
  ];

  const handleSearch = (): void => {
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`bg-white dark:bg-card border-b border-gray-200 sticky top-0 z-50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-300">BlogPost</h1>
              <p className="text-xs text-gray-500 dark:text-gray-300">Insights & Stories</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Categories */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {categories.map((category) => (
                          <NavigationMenuLink
                            key={category.id}
                            href={category.href}
                            className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center group-hover:bg-blue-100">
                                {category.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                  <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {category.name}
                                  </p>
                                  {category.isNew && (
                                    <Badge variant="secondary" className="text-xs">
                                      New
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                  {category.description}
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Featured */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Featured
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 mb-4">
                          <TrendingUp className="w-4 h-4 text-orange-500" />
                          <h3 className="font-semibold text-gray-900 dark:text-gray-300">Trending Posts</h3>
                        </div>
                        {featuredPosts.map((post) => (
                          <NavigationMenuLink
                            key={post.id}
                            href={post.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors "
                          >
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium text-gray-900 dark:hover:text-gray-900 line-clamp-2 dark:text-gray-300 ">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span className="flex items-center space-x-1">
                                  <User className="w-3 h-3" />
                                  <span>{post.author}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{post.date}</span>
                                </span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple Links */}
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          

          {/* Search & Actions */}
          <div className="flex items-center space-x-3">
            <ToggleMode />
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button size="sm" onClick={() => setIsSearchOpen(false)} variant="ghost">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:bg-gray-100"
                >
                  <Search className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Newsletter */}
            <Button size="sm" variant="ghost" className="hidden sm:flex hover:bg-gray-100">
              <Mail className="w-4 h-4 mr-2" />
              Newsletter
            </Button>

            {/* RSS */}
            <Button size="sm" variant="ghost" className="hover:bg-gray-100">
              <Rss className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              size="sm"
              variant="ghost"
              className="lg:hidden"
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" onClick={handleSearch}>
                  <Search className="w-4 h-4" />
                </Button>
              </div>

              {/* Mobile Categories */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-sm">Categories</h3>
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href={category.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                      {category.icon}
                    </div>
                    <span className="text-sm text-gray-700">{category.name}</span>
                    {category.isNew && (
                      <Badge variant="secondary" className="text-xs">New</Badge>
                    )}
                  </a>
                ))}
              </div>

              {/* Mobile Links */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <a href="/about" className="block text-sm text-gray-700 hover:text-blue-600">
                  About
                </a>
                <a href="/contact" className="block text-sm text-gray-700 hover:text-blue-600">
                  Contact
                </a>
                <a href="/newsletter" className="block text-sm text-gray-700 hover:text-blue-600">
                  Newsletter
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;