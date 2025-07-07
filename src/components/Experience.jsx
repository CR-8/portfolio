import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building, Calendar, MapPin, GraduationCap, Briefcase, Users, ChevronRight, X, Eye, Clock, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/content.js'

// Enhanced Experience Card Component
const ExperienceCard = ({ experience, index, isVisible, onClick }) => {
    const IconComponent = experience.icon
    
    return (
        <motion.div
            data-index={index}
            className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:border-zinc-800 hover:shadow-md hover:shadow-black/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 20 
            }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => onClick(experience)}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-900/50 rounded-lg flex items-center justify-center">
                        <IconComponent size={18} className="text-white" />
                    </div>
                    <div>
                        <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                            {experience.type}
                        </span>
                        <h3 className="text-sm font-medium text-white font-mono">
                            {experience.position}
                        </h3>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400 font-mono">
                        {experience.duration}
                    </span>
                    <ArrowUpRight size={16} className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>

            {/* Company & Location */}
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <Building size={12} className="text-neutral-500" />
                    <span className="text-xs text-neutral-300 font-mono">{experience.company}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-neutral-500" />
                    <span className="text-xs text-neutral-300 font-mono">{experience.location}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed font-mono mb-4">
                {Array.isArray(experience.description) ? experience.description[0] : experience.description}
            </p>

            {/* Key Points */}
            <div className="space-y-2 mb-4">
                {(Array.isArray(experience.description) ? experience.description : [experience.description]).slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-neutral-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-xs text-neutral-400 font-mono leading-relaxed">{point}</span>
                    </div>
                ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1">
                {Object.keys(portfolioData.skills).slice(0, 3).map((tech) => (
                    <span 
                        key={tech}
                        className="px-2 py-1 bg-zinc-900/50 text-neutral-300 text-xs rounded-md font-mono"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}

// Stats Component
const ExperienceStats = () => {
    const [isVisible, setIsVisible] = useState(false)
    const stats = [
        { 
            label: 'Years Experience', 
            value: portfolioData.personal.experience.years, 
            description: 'Professional Development' 
        },
        { 
            label: 'Projects Completed', 
            value: `${portfolioData.personal.stats.projects}+`, 
            description: 'Delivered Solutions' 
        },
        { 
            label: 'Leadership Roles', 
            value: `${portfolioData.experience.length}`, 
            description: 'Team Management' 
        },
        { 
            label: 'Technical Skills', 
            value: `${portfolioData.skills.primary.length}+`, 
            description: 'Core Technologies' 
        }
    ]

    return (
        <motion.div 
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsVisible(true)}
        >
            <div className="mb-6">
                <h3 className="text-lg font-medium text-white font-mono mb-2">
                    Career Overview
                </h3>
                <p className="text-sm text-neutral-400 font-mono">
                    Professional metrics and achievements
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                    <motion.div 
                        key={index} 
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="text-3xl font-mono text-white mb-1">
                            {stat.value}
                        </div>
                        <div className="text-xs text-neutral-400 font-mono uppercase tracking-wider mb-1">
                            {stat.label}
                        </div>
                        <div className="text-xs text-neutral-500 font-mono">
                            {stat.description}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

// Timeline Component
const TimelineSummary = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const timeline = [
        { year: '2023', event: 'Started B.Tech', type: 'education' },
        { year: '2023', event: 'Robotics Club', type: 'work' },
        { year: '2024', event: 'CSI Team', type: 'work' },
        { year: '2024', event: 'Matrix Intern', type: 'work' },
        { year: '2027', event: 'Graduation', type: 'education' }
    ]

    return (
        <motion.div 
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >
            <div className="mb-6">
                <h3 className="text-lg font-medium text-white font-mono mb-2">
                    Timeline
                </h3>
                <p className="text-sm text-neutral-400 font-mono">
                    Key milestones and progression
                </p>
            </div>
            
            <div className="space-y-4">
                {timeline.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="flex items-center gap-4 group cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-8 h-8 bg-zinc-900/50 rounded-lg flex items-center justify-center">
                            <span className="text-xs text-neutral-300 font-mono">{item.year}</span>
                        </div>
                        <div className="flex-1">
                            <div className="text-sm text-white font-mono">
                                {item.event}
                            </div>
                            <div className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                                {item.type}
                            </div>
                        </div>
                        {hoveredIndex === index && (
                            <Clock size={14} className="text-neutral-500" />
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

// Experience Modal
const ExperienceModal = ({ experience, isOpen, onClose }) => {
    if (!isOpen || !experience) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-zinc-900/50 rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto border border-zinc-800"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="relative p-6 border-b border-zinc-800">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-neutral-500 hover:text-neutral-300 transition-colors"
                            >
                                <X size={20} />
                            </button>
                            
                            <div className="pr-8">
                                <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                                    {experience.type}
                                </span>
                                <h3 className="text-xl font-medium text-white mt-2 mb-1 font-mono">
                                    {experience.position}
                                </h3>
                                <p className="text-neutral-300 text-sm font-mono">{experience.company}</p>
                                <p className="text-neutral-400 text-xs font-mono">{experience.duration}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="mb-6">
                                <h4 className="text-sm font-mono text-white mb-3 uppercase tracking-wider">
                                    Description
                                </h4>
                                <div className="space-y-3">
                                    {experience.description.map((desc, index) => (
                                        <p key={index} className="text-neutral-300 text-sm leading-relaxed font-mono">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-mono text-white mb-3 uppercase tracking-wider">
                                        Location
                                    </h4>
                                    <p className="text-neutral-300 text-sm font-mono flex items-center gap-2">
                                        <MapPin size={14} className="text-neutral-400" />
                                        {experience.location}
                                    </p>
                                </div>
                                
                                <div>
                                    <h4 className="text-sm font-mono text-white mb-3 uppercase tracking-wider">
                                        Duration
                                    </h4>
                                    <p className="text-neutral-300 text-sm font-mono flex items-center gap-2">
                                        <Calendar size={14} className="text-neutral-400" />
                                        {experience.duration}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Section Header
const SectionHeader = () => (
    <div className="text-center mb-16">
        <div className="inline-block mb-4 px-3 py-1 bg-zinc-900/50 rounded-md border border-zinc-800">
            <span className="text-xs text-white font-mono tracking-wider">EXPERIENCE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white font-mono">
            Professional Journey
        </h2>
        <div className="w-16 h-px bg-neutral-700 mx-auto mb-6" />
        <p className="text-sm text-neutral-400 max-w-lg mx-auto font-mono leading-relaxed">
            A comprehensive overview of my professional experience and educational background
        </p>
    </div>
)

// Call to Action
const CallToAction = () => (
    <motion.div 
        className="bg-zinc-900/50 text-white rounded-xl p-8 md:col-span-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
    >
        <h3 className="text-lg font-medium mb-2 font-mono">
            Ready to Collaborate?
        </h3>
        <p className="text-sm text-neutral-400 font-mono mb-6 max-w-md mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
        </p>
        <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 font-mono text-sm rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
            Get in Touch
            <ArrowUpRight size={16} />
        </button>
    </motion.div>
)

// Custom Hook for Intersection Observer
const useIntersectionObserver = (setVisibleCards) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index
                        if (index) {
                            setVisibleCards(prev => new Set(prev).add(parseInt(index)))
                        }
                    }
                })
            },
            { threshold: 0.1, rootMargin: '-50px' }
        )

        const cards = document.querySelectorAll('[data-index]')
        cards.forEach(card => observer.observe(card))

        return () => observer.disconnect()
    }, [setVisibleCards])
}

// Main Experience Component
const Experience = () => {
    const sectionRef = useRef(null)
    const [visibleCards, setVisibleCards] = useState(new Set())
    const [selectedExperience, setSelectedExperience] = useState(null)

    // Transform portfolio data
    const experienceData = [
        ...portfolioData.experience.map(exp => ({
            type: exp.type.toLowerCase() === 'internship' ? 'internship' : 'work',
            position: exp.position,
            company: exp.company,
            location: exp.location,
            duration: exp.duration,
            description: exp.description,
            icon: exp.type.toLowerCase() === 'internship' ? Briefcase : Users
        })),
        ...portfolioData.education.map(edu => ({
            type: 'education',
            position: edu.degree,
            company: edu.institution,
            location: edu.institution.includes('Dr.') ? 'Uttar Pradesh, India' : 'Lucknow',
            duration: edu.status,
            description: [
                edu.current ? 
                    'Pursuing Bachelor of Technology with specialization in Data Science.' :
                    'Completed senior secondary education with focus on Science stream.',
                edu.current ?
                    'Building strong foundation in computer science fundamentals and data analytics.' :
                    'Developed strong analytical and problem-solving skills through rigorous coursework.'
            ],
            icon: GraduationCap
        }))
    ]

    useIntersectionObserver(setVisibleCards)

    return (
        <section id="experience" ref={sectionRef} className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader />

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Stats */}
                    <ExperienceStats />
                    
                    {/* Timeline */}
                    <TimelineSummary />
                    
                    {/* Experience Cards */}
                    {experienceData.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                            index={index}
                            isVisible={visibleCards.has(index)}
                            onClick={setSelectedExperience}
                        />
                    ))}                    
                </div>
                {/* Call to Action */}
                <CallToAction />

                {/* Modal */}
                <ExperienceModal 
                    experience={selectedExperience}
                    isOpen={!!selectedExperience}
                    onClose={() => setSelectedExperience(null)}
                />
            </div>
        </section>
    )
}

export default Experience
