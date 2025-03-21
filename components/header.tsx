"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Menu, X, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { name: "Sobre mí", href: "#about" },
    { name: "Tecnologías", href: "#technologies" },
    { name: "Proyectos", href: "#projects" },
    { name: "Educación", href: "#education" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden glow-border">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">K</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">Keven</h1>
              <p className="text-xs text-muted-foreground">Desarrollador Web</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex space-x-2">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>

          <Button size="icon" variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-md shadow-lg py-4"
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors py-2 border-b border-border/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name === "Sobre mí" && <Code className="h-4 w-4" />}
                  {item.name === "Tecnologías" && <Sparkles className="h-4 w-4" />}
                  {item.name === "Proyectos" && <Code className="h-4 w-4" />}
                  {item.name === "Educación" && <Code className="h-4 w-4" />}
                  {item.name === "Contacto" && <Mail className="h-4 w-4" />}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            <div className="flex space-x-4 mt-6 pt-4 border-t border-border/30">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all"
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

