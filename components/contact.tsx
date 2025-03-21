"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)

    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/5 to-background"></div>
      <div className="hero-glow opacity-30"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-4">
            <MessageSquare className="h-4 w-4 mr-2" />
            <span>Ponte en Contacto</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Contacto</span>
          </h2>

          <p className="text-foreground/70 text-center mb-4 max-w-2xl">
            ¿Interesado en trabajar juntos? Completa el formulario a continuación y me pondré en contacto contigo lo
            antes posible.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-purple-500/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium mb-1 flex items-center">
                        <User className="h-4 w-4 mr-2 text-purple-400" />
                        Nombre
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="bg-background/50 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium mb-1 flex items-center">
                        <AtSign className="h-4 w-4 mr-2 text-purple-400" />
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="bg-background/50 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                  </div>
                  <div className="mb-4 space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-purple-400" />
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Asunto de tu mensaje"
                      required
                      className="bg-background/50 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                  <div className="mb-6 space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium mb-1 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-purple-400" />
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tu mensaje..."
                      rows={5}
                      required
                      className="bg-background/50 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                  <Button type="submit" className="w-full relative group overflow-hidden" disabled={isSubmitting}>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300 group-hover:opacity-90"></span>
                    <span className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-purple-500/10 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gradient">Información de contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:keven@example.com"
                        className="text-foreground/70 hover:text-purple-400 transition-colors"
                      >
                        keven@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <a href="tel:+123456789" className="text-foreground/70 hover:text-cyan-400 transition-colors">
                        +1 (234) 567-89
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-foreground/70">Ciudad de México, México</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-4">Redes sociales</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-3 rounded-full bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

