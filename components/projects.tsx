"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Una plataforma de comercio electrónico con carrito de compras, pagos y panel de administración.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Django", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, filtros y estadísticas.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Tailwind CSS", "Firebase"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Sitio web de portfolio personal con animaciones suaves y diseño responsivo.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ]

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background"></div>
      <div className="hero-glow opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-4">
            <Code className="h-4 w-4 mr-2" />
            <span>Proyectos Destacados</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Mis <span className="text-gradient">Proyectos</span> Recientes
          </h2>

          <p className="text-foreground/70 text-center mb-4 max-w-2xl">
            Estos son algunos de los proyectos en los que he trabajado, demostrando mis habilidades y experiencia en
            desarrollo web.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm border-purple-500/10 card-hover">
                <div className="relative h-48 w-full overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
                      <h4 className="text-white font-medium">{project.title}</h4>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-white rounded-full bg-white/10 hover:bg-white/20"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

