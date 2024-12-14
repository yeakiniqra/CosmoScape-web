"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Rocket } from 'lucide-react'
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    setIsMounted(true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore Cosmos' },
    { href: '/gallery', label: 'Image Gallery' },
    { href: '/missions', label: 'NASA Missions' }
  ];

  // Prevent hydration errors by rendering nothing on server
  if (!isMounted) {
    return null;
  }

  return (
    <motion.nav 
      initial={false}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }}
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-black/30 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
           <Image
              src="/logo.png"
              alt="Cosmos Logo"
              width={100}
              height={100}
            />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={link.href} 
                  className="
                    text-white/80 hover:text-white 
                    transition-colors duration-300
                    bg-white/10 hover:bg-white/20 
                    px-3 py-2 rounded-md
                  "
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-md rounded-b-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className="
                        block text-white/80 hover:text-white 
                        hover:bg-white/20 
                        px-3 py-2 rounded-md
                        transition-colors duration-300
                      "
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}