import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Code2, Clock, TrendingUp, Coffee, Zap, Star, Activity, ArrowUpRight, Terminal, Database, Cpu } from 'lucide-react'
import { portfolioData } from '../data/content.js'

const Hero = () => {
    const heroRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(new Date())
    const [isHovered, setIsHovered] = useState(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    // Get project data from portfolioData
    const projectsForGrid = portfolioData.projects.map(project => ({
        name: project.name,
        status: project.status,
        color: project.statusColor
    }))

    return (
        <section id="home" ref={heroRef} className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 via-transparent to-zinc-900/20"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <motion.div 
                                className="hero-text"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="font-mono text-sm text-zinc-400 tracking-wide">
                                    {portfolioData.personal.title.toUpperCase()}
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {portfolioData.personal.name.split(' ')[0]}
                                <br />
                                <span className="text-zinc-400">{portfolioData.personal.name.split(' ')[1]}</span>
                            </motion.h1>

                            <motion.p 
                                className="hero-text text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-mono"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {portfolioData.personal.heroDescription}
                            </motion.p>
                        </div>

                        {/* Action Buttons */}
                        <motion.div 
                            className="hero-text flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <button
                                onClick={scrollToAbout}
                                className="group px-6 py-3 bg-white text-black font-mono text-sm tracking-wide hover:bg-zinc-200 transition-colors flex items-center gap-2"
                            >
                                VIEW WORK
                                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>

                            <a
                                href="/resume.pdf"
                                download
                                className="group px-6 py-3 border border-zinc-700 text-white font-mono text-sm tracking-wide hover:border-zinc-500 transition-colors flex items-center gap-2"
                            >
                                DOWNLOAD CV
                                <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column - L-Shaped Bento Grid */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-4 gap-3 h-[600px]">
                            {/* Top Row - Location Card (Large) */}
                            <motion.div 
                                className="col-span-2 row-span-2 bg-zinc-900 border border-zinc-700 p-6 flex flex-col justify-between hover:border-zinc-500 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wide">Location</span>
                                    <ArrowUpRight size={12} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-white font-mono text-2xl">{portfolioData.personal.location.displayText}</p>
                                    <p className="text-zinc-500 font-mono text-sm">Remote Available</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-zinc-600" />
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                </div>
                            </motion.div>

                            {/* Status Card - Medium */}
                            <motion.div 
                                className="col-span-2 bg-green-900/20 border border-green-800/50 p-4 flex items-center justify-between hover:border-green-600/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <div className="space-y-1">
                                    <p className="text-green-400 font-mono text-xs uppercase tracking-wide">
                                        {portfolioData.personal.status.available ? 'Available' : 'Busy'}
                                    </p>
                                    <p className="text-white font-mono text-lg">{portfolioData.personal.status.text}</p>
                                </div>
                                <motion.div 
                                    className="w-3 h-3 bg-green-400 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Experience Card - Medium */}
                            <motion.div 
                                className="col-span-1 bg-purple-900/20 border border-purple-800/50 p-4 flex flex-col justify-between hover:border-purple-600/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wide">Experience</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-white font-mono text-3xl">{portfolioData.personal.experience.years}</p>
                                    <p className="text-zinc-400 font-mono text-xs">{portfolioData.personal.experience.description}</p>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={6} className="text-yellow-500 fill-current" />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Time Card - Small */}
                            <motion.div 
                                className="col-span-1 bg-blue-900/20 border border-blue-800/50 p-4 flex flex-col justify-between hover:border-blue-600/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                <div className="space-y-1">
                                    <p className="text-blue-400 font-mono text-xs uppercase tracking-wide">IST</p>
                                    <p className="text-white font-mono text-lg">
                                        {currentTime.toLocaleTimeString('en-US', { 
                                            hour12: false, 
                                            hour: '2-digit', 
                                            minute: '2-digit' 
                                        })}
                                    </p>
                                </div>
                                <Clock size={14} className="text-blue-600" />
                            </motion.div>

                            {/* Tech Stack Card - Large */}
                            <motion.div 
                                className="col-span-4 bg-cyan-900/20 border border-cyan-800/50 p-4 flex items-center justify-between hover:border-cyan-600/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <div className="space-y-1">
                                    <p className="text-cyan-400 font-mono text-xs uppercase tracking-wide">Tech Stack</p>
                                    <div className="flex gap-2 text-white font-mono text-sm">
                                        {portfolioData.skills.primary.map((tech, index) => (
                                            <span key={tech}>
                                                {tech}
                                                {index < portfolioData.skills.primary.length - 1 && <span className="ml-2">•</span>}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Terminal size={16} className="text-cyan-600" />
                                    <Database size={16} className="text-cyan-600" />
                                    <Cpu size={16} className="text-cyan-600" />
                                </div>
                            </motion.div>

                            {/* Projects Card - Medium */}
                            <motion.div 
                                className="col-span-2 bg-orange-900/20 border border-orange-800/50 p-4 flex flex-col justify-between hover:border-orange-600/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wide">Projects</span>
                                    <Activity size={12} className="text-orange-600" />
                                </div>
                                <div className="space-y-2">
                                    {projectsForGrid.map((project, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span className="text-white font-mono text-xs">{project.name}</span>
                                            <div className="flex items-center gap-1">
                                                <div className={`w-2 h-2 rounded-full ${project.color}`} />
                                                <span className="text-zinc-400 font-mono text-xs">{project.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Coffee Card - Small */}
                            <motion.div 
                                className="col-span-1 bg-yellow-900/20 border border-yellow-800/50 p-4 flex flex-col justify-between hover:border-yellow-600/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                            >
                                <div className="space-y-1">
                                    <p className="text-yellow-400 font-mono text-xs uppercase tracking-wide">Coffee</p>
                                    <p className="text-white font-mono text-2xl">{portfolioData.personal.stats.coffee}</p>
                                </div>
                                <Coffee size={14} className="text-yellow-600" />
                            </motion.div>

                            {/* Social Links Card - Medium */}
                            <motion.div 
                                className="col-span-1 bg-pink-900/20 border border-pink-800/50 p-4 flex flex-col justify-between hover:border-pink-600/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                            >
                                <div className="space-y-1">
                                    <p className="text-pink-400 font-mono text-xs uppercase tracking-wide">Connect</p>
                                    <p className="text-white font-mono text-xs">Let's collaborate</p>
                                </div>
                                <div className="flex gap-1">
                                    <motion.a 
                                        href={portfolioData.social.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 border border-zinc-700 hover:border-zinc-500 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github size={10} className="text-zinc-400 hover:text-white transition-colors" />
                                    </motion.a>
                                    <motion.a 
                                        href={portfolioData.social.linkedin} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1 border border-zinc-700 hover:border-zinc-500 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin size={10} className="text-zinc-400 hover:text-white transition-colors" />
                                    </motion.a>
                                    <motion.a 
                                        href={portfolioData.social.email} 
                                        className="p-1 border border-zinc-700 hover:border-zinc-500 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Mail size={10} className="text-zinc-400 hover:text-white transition-colors" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <motion.button
                        onClick={scrollToAbout}
                        className="flex flex-col items-center text-zinc-400 hover:text-white transition-colors group"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-xs font-mono mb-2 tracking-wide">
                            SCROLL
                        </span>
                        <ChevronDown size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero