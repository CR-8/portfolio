import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Database, Palette, Zap } from 'lucide-react'
import { portfolioData } from '../data/content.js'

const About = () => {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)

    const highlights = [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: `${portfolioData.personal.experience.years} year of experience building scalable web applications`
        },
        {
            icon: Zap,
            title: "AI Integration",
            description: "Specialized in Google Gemini AI, OpenAI APIs, and modern AI tools"
        },
        {
            icon: Database,
            title: "Backend Architecture",
            description: "Strong foundation in Node.js, Express.js, and database design"
        },
        {
            icon: Palette,
            title: "Modern UI/UX",
            description: "Passionate about clean design and user-centric experiences"
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in animation
            gsap.fromTo('.about-content', 
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Highlight cards animation
            gsap.fromTo('.highlight-card',
                { opacity: 0, y: 15 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: '.highlights-grid',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="about" ref={sectionRef} className="py-24 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <motion.div 
                    className="about-content text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-mono tracking-tight font-semibold mb-6 text-white">
                        About
                    </h2>
                    <div className="w-12 h-[1px] bg-zinc-700 mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-14 items-start">
                    
                    {/* Content */}
                    <div ref={contentRef} className="space-y-8">
                        <motion.div 
                            className="about-content"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-mono font-medium text-white mb-6">
                                Passionate about creating digital experiences
                            </h3>
                            
                            <div className="space-y-5 text-zinc-400 text-base leading-relaxed">
                                <p>
                                    I'm a full-stack web developer with <span className="text-white font-medium">{portfolioData.personal.experience.years} year of hands-on experience </span> 
                                    building responsive, scalable, and AI-powered web applications. My journey in tech started with a curiosity 
                                    about how digital products can solve real-world problems.
                                </p>
                                
                                <p>
                                    Currently pursuing <span className="text-white font-medium">{portfolioData.education[0].degree} </span> 
                                    from {portfolioData.education[0].institution}, I've developed a strong foundation in modern web technologies 
                                    and have practical experience working with cutting-edge tools.
                                </p>
                                
                                <p>
                                    What sets me apart is my passion for <span className="text-white font-medium">AI integration</span> and 
                                    <span className="text-white font-medium"> minimal UI design</span>. I believe in creating products that are 
                                    not just functional, but also visually stunning and user-friendly.
                                </p>
                            </div>

                            <motion.div 
                                className="flex flex-wrap gap-2 mt-8"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                {[...portfolioData.skills.frontend.slice(0, 3), ...portfolioData.skills.backend.slice(0, 2), 'AI APIs'].map((tech, index) => (
                                    <span 
                                        key={tech}
                                        className="px-3 py-1 bg-zinc-900 text-zinc-300 rounded-md text-xs font-mono border border-zinc-800"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Bento Grid Highlights */}
                    <div className="highlights-grid grid sm:grid-cols-2 gap-3">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="highlight-card bg-zinc-900/80 p-5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                            >
                                <div className="mb-3">
                                    <item.icon 
                                        size={20} 
                                        className="text-zinc-400" 
                                    />
                                </div>
                                <h4 className="text-sm font-mono font-medium text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-zinc-500 text-xs leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div 
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {[
                        { number: `${portfolioData.personal.stats.projects}+`, label: 'Projects Completed' },
                        { number: `${portfolioData.personal.experience.years}`, label: 'Years Experience' },
                        { number: `${portfolioData.skills.primary.length}+`, label: 'Technologies' },
                        { number: '100%', label: 'Client Satisfaction' }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="p-5 bg-zinc-900/50 rounded-lg border border-zinc-800"
                            whileHover={{ y: -3 }}
                        >
                            <div className="text-2xl font-mono font-medium text-white mb-1">
                                {stat.number}
                            </div>
                            <div className="text-zinc-500 text-xs font-mono">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About
