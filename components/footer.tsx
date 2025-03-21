"use client"

import Link from "next/link"
import { ChevronUp, Heart, Code, Coffee } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-background"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden glow-border">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">K</div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gradient">Keven</h2>
                <p className="text-xs text-muted-foreground">Desarrollador Web</p>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h3 className="font-semibold mb-3 text-gradient">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-foreground/70 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-purple-500 rounded-full mr-2"></span>
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link
                    href="#technologies"
                    className="text-foreground/70 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-purple-500 rounded-full mr-2"></span>
                    Tecnologías
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-foreground/70 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-purple-500 rounded-full mr-2"></span>
                    Proyectos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-gradient">Más</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#education"
                    className="text-foreground/70 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-cyan-500 rounded-full mr-2"></span>
                    Educación
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-foreground/70 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-cyan-500 rounded-full mr-2"></span>
                    Contacto
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-purple-400 transition-colors flex items-center">
                    <span className="h-1 w-1 bg-cyan-500 rounded-full mr-2"></span>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-gradient">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-foreground/70 hover:text-purple-400 transition-colors flex items-center">
                    <span className="h-1 w-1 bg-pink-500 rounded-full mr-2"></span>
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/70 hover:text-purple-400 transition-colors flex items-center">
                    <span className="h-1 w-1 bg-pink-500 rounded-full mr-2"></span>
                    Términos de servicio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            &copy; {new Date().getFullYear()} Keven. Todos los derechos reservados.
          </p>

          <p className="text-foreground/60 text-sm mt-2 md:mt-0 flex items-center">
            Hecho con <Heart className="h-4 w-4 mx-1 text-pink-500" /> y{" "}
            <Coffee className="h-4 w-4 mx-1 text-amber-500" /> por <Code className="h-4 w-4 mx-1 text-purple-400" />{" "}
            Keven
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-foreground/70 hover:text-purple-400 transition-colors bg-purple-500/10 p-2 rounded-full"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

