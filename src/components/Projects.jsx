import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react'
import { portfolioData } from '../data/content.js'

const Projects = () => {
    const sectionRef = useRef(null)
    const [selectedProject, setSelectedProject] = useState(null)

    // Use projects from portfolio data
    const projects = portfolioData.projects.map((project, index) => ({
        ...project,
        category: project.techStack.includes('AI') || project.techStack.includes('OpenAI API') || project.techStack.includes('Google Gemini API') ? 'AI/ML' : 
                  project.techStack.includes('Next.js') || project.techStack.includes('Supabase') ? 'FinTech' : 'Web Development',
        image: "/api/placeholder/600/400",
        githubUrl: "#",
        liveUrl: "#",
        fullDescription: project.description,
        subtitle: project.role
    }))

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate project cards
            gsap.fromTo('.project-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: '.projects-grid',
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const openProjectModal = (project) => {
        setSelectedProject(project)
        document.body.style.overflow = 'hidden'
    }

    const closeProjectModal = () => {
        setSelectedProject(null)
        document.body.style.overflow = 'unset'
    }

    return (
        <section id="projects" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <motion.div 
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-4xl md:text-5xl font-mono font-bold mb-4 text-white"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-6"></div>
                    <p className="text-base text-zinc-400 max-w-2xl mx-auto font-mono leading-relaxed">
                        A curated collection of my recent work showcasing expertise in modern web development, 
                        artificial intelligence, and innovative software solutions.
                    </p>
                </motion.div>

                {/* Projects Bento Grid */}
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card group bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/25"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            {/* Project Image/Icon */}
                            <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                    <ExternalLink size={24} className="text-white/80" />
                                </div>
                                <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                                    <span className="text-[10px] uppercase tracking-wider text-zinc-300 font-mono">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-medium text-white mb-3 font-mono group-hover:text-zinc-200 transition-colors">
                                    {project.name}
                                </h3>
                                
                                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 font-mono leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span 
                                            key={tech}
                                            className="px-3 py-1 bg-zinc-800/80 text-zinc-300 text-[10px] font-mono rounded-full hover:bg-zinc-700 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="px-3 py-1 bg-zinc-800/80 text-zinc-300 text-[10px] font-mono rounded-full">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Action Links */}
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => openProjectModal(project)}
                                        className="text-sm font-mono text-white flex items-center gap-2 hover:text-zinc-300 transition-colors group px-3 py-1 rounded-md hover:bg-zinc-800/50"
                                    >
                                        View Details
                                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                    
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-400 hover:text-white transition-colors p-2 rounded-md hover:bg-zinc-800/50"
                                            aria-label="GitHub Repository"
                                        >
                                            <Github size={18} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-400 hover:text-white transition-colors p-2 rounded-md hover:bg-zinc-800/50"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <a
                        href={portfolioData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-700 text-zinc-300 text-sm font-mono rounded-lg hover:bg-zinc-800/50 hover:text-white hover:border-zinc-600 transition-all duration-200 backdrop-blur-sm"
                    >
                        <Github size={16} />
                        Explore More Projects
                        <ArrowRight size={16} className="transition-transform hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>

            {/* Enhanced Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeProjectModal}
                    >
                        <motion.div
                            className="bg-zinc-900/95 backdrop-blur-sm rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-zinc-700 shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative p-8 border-b border-zinc-800">
                                <button
                                    onClick={closeProjectModal}
                                    className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800"
                                >
                                    <X size={20} />
                                </button>
                                
                                <div className="pr-12">
                                    <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono bg-zinc-800 px-2 py-1 rounded">
                                        {selectedProject.category}
                                    </span>
                                    <h3 className="text-2xl font-medium text-white mt-4 mb-2 font-mono">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-zinc-400 text-base font-mono">{selectedProject.subtitle}</p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                {/* Project Preview */}
                                <div className="mb-8 h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                                    <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                        <ExternalLink size={32} className="text-white/80" />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-sm font-mono text-white mb-4 uppercase tracking-wider">Project Overview</h4>
                                    <p className="text-zinc-300 text-base leading-relaxed font-mono">
                                        {selectedProject.fullDescription}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-sm font-mono text-white mb-4 uppercase tracking-wider">Key Features</h4>
                                    <ul className="space-y-3">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-zinc-300 text-sm font-mono">
                                                <span className="text-green-400 mt-0.5">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-sm font-mono text-white mb-4 uppercase tracking-wider">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm font-mono hover:bg-zinc-700 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 bg-white text-black text-sm font-mono rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 font-medium"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 border border-zinc-700 text-white text-sm font-mono rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Github size={18} />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Projects
