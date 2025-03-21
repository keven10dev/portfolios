import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Download, Code, Sparkles, Star } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="relative pt-32 pb-16 min-h-screen flex items-center">
      <div className="hero-glow"></div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6">
              <Code className="h-4 w-4 mr-2" />
              <span>Desarrollador Web Junior</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hola, soy <span className="text-gradient glow-text">Keven</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6 font-light">
              Creando experiencias web <span className="text-accent font-medium">impactantes</span>
            </h2>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-purple-500/20 rounded-lg blur"></div>
              <p className="relative bg-background/80 backdrop-blur-sm rounded-lg p-4 text-lg text-foreground/80 mb-8 leading-relaxed border border-purple-500/10">
                Soy un desarrollador web junior apasionado por crear experiencias digitales atractivas y funcionales.
                Con un enfoque en tecnologías modernas como React.js y Django, me especializo en construir aplicaciones
                web responsivas y centradas en el usuario.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="relative group overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300 group-hover:opacity-90"></span>
                <span className="relative flex items-center">
                  Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>

              <Button size="lg" variant="outline" className="border-purple-500/50 hover:bg-purple-500/10">
                <Download className="mr-2 h-4 w-4" /> Descargar CV
              </Button>
            </div>

            <div className="flex items-center mt-8 space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                  MR
                </div>
                <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-xs">
                  AL
                </div>
              </div>
              <div className="text-sm text-foreground/60">
                Colaborando con <span className="text-purple-400">equipos talentosos</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 glow-border">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Keven - Desarrollador Web Junior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-lg border border-purple-500/20 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  <div>
                    <div className="text-sm font-medium">Experiencia</div>
                    <div className="text-xs text-foreground/60">2+ años</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-card p-3 rounded-lg border border-purple-500/20 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-purple-400" />
                  <div>
                    <div className="text-sm font-medium">Proyectos</div>
                    <div className="text-xs text-foreground/60">15+ completados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

