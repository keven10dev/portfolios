"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, Building } from "lucide-react"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      id: 1,
      type: "education",
      title: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica",
      period: "2018 - 2022",
      description: "Formación en desarrollo de software, bases de datos, redes y sistemas operativos.",
    },
    {
      id: 2,
      type: "certification",
      title: "Full Stack Web Development",
      institution: "Bootcamp Coding Academy",
      period: "2022",
      description: "Programa intensivo de 12 semanas enfocado en React, Node.js y bases de datos.",
    },
    {
      id: 3,
      type: "certification",
      title: "Python Django Developer",
      institution: "Udemy",
      period: "2023",
      description: "Curso completo sobre desarrollo web con Django y despliegue en producción.",
    },
    {
      id: 4,
      type: "certification",
      title: "React & Redux Masterclass",
      institution: "Coursera",
      period: "2023",
      description: "Curso avanzado sobre React, Redux y mejores prácticas en desarrollo frontend.",
    },
  ]

  return (
    <section id="education" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background"></div>
      <div className="side-glow"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-4">
            <GraduationCap className="h-4 w-4 mr-2" />
            <span>Formación Académica</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Educación y <span className="text-gradient">Certificaciones</span>
          </h2>

          <p className="text-foreground/70 text-center mb-4 max-w-2xl">
            Mi formación académica y certificaciones profesionales que respaldan mis conocimientos y habilidades.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-purple-500/10 card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-lg bg-purple-500/10">
                      {item.type === "education" ? (
                        <GraduationCap className="h-6 w-6 text-purple-400" />
                      ) : (
                        <Award className="h-6 w-6 text-cyan-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="bg-purple-500/5 border-purple-500/20 text-purple-400 flex items-center"
                        >
                          <Calendar className="h-3 w-3 mr-1" />
                          {item.period}
                        </Badge>
                      </div>
                      <p className="text-accent font-medium mb-2 flex items-center">
                        <Building className="h-4 w-4 mr-2 text-foreground/60" />
                        {item.institution}
                      </p>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

