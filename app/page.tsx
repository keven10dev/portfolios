"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import AboutMe from "@/components/about-me"
import Technologies from "@/components/technologies"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-75 blur-lg animate-pulse"></div>
          <div className="relative w-16 h-16 rounded-full border-4 border-purple-500/50 border-t-transparent animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background relative overflow-hidden"
    >
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none"></div>
      <Header />
      <AboutMe />
      <Technologies />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </motion.main>
  )
}

