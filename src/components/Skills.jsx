import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioData } from '../data/content.js'

const Skills = () => {
    const sectionRef = useRef(null)
    const skillsRef = useRef(null)

    const skillCategories = [
        {
            title: "Frontend",
            icon: "⟨⟩",
            skills: [
                { name: "React.js", level: 90 },
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "Tailwind CSS", level: 85 },
                { name: "Bootstrap", level: 80 }
            ]
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express.js", level: 80 },
                { name: "RESTful APIs", level: 85 },
                { name: "MongoDB", level: 75 },
                { name: "PostgreSQL", level: 60 }
            ]
        },
        {
            title: "AI & Tools",
            icon: "⚡",
            skills: [
                { name: "Google Gemini API", level: 85 },
                { name: "OpenAI APIs", level: 80 },
                { name: "Git", level: 90 },
                { name: "Postman", level: 85 },
                { name: "VS Code", level: 95 }
            ]
        },
        {
            title: "Frameworks",
            icon: "△",
            skills: [
                { name: "Next.js", level: 80 },
                { name: "Django", level: 75 },
                { name: "Vite", level: 85 },
                { name: "Manim", level: 70 },
                { name: "FFmpeg", level: 65 }
            ]
        }
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            // Animate skill bars
            gsap.fromTo('.skill-bar',
                { width: 0 },
                {
                    width: (i, target) => target.getAttribute('data-width') + '%',
                    duration: 1.2,
                    ease: 'power2.out',
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: skillsRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Animate skill cards
            gsap.fromTo('.skill-category',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: skillsRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="skills" ref={sectionRef} className="py-24 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div 
                    className="text-left mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-mono font-bold tracking-tight text-white mb-6">
                        <span className="text-neutral-500">/</span> skills
                    </h2>
                    <p className="text-sm text-neutral-400 max-w-2xl font-mono">
                        A curated list of technologies and tools I work with daily to build modern applications
                    </p>
                </motion.div>

                {/* Skills Bento Grid */}
                <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className="skill-category bg-neutral-900/50 p-6 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center mb-6 gap-3">
                                <span className="text-sm font-mono text-neutral-500">{category.icon}</span>
                                <h3 className="text-base font-mono font-medium text-white">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name} className="skill-item">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-neutral-300 font-mono">{skill.name}</span>
                                            <span className="text-xs text-neutral-500 font-mono tabular-nums">{skill.level}%</span>
                                        </div>
                                        
                                        <div className="relative h-1 bg-neutral-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="skill-bar absolute top-0 left-0 h-full bg-white rounded-full"
                                                data-width={skill.level}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: skillIndex * 0.08, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div 
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-base font-mono font-medium text-white mb-6">Other tools & technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioData.skills.tools.map((tech, index) => (
                            <motion.span
                                key={tech}
                                className="px-3 py-1 bg-neutral-900 text-neutral-400 rounded-md text-xs font-mono border border-neutral-800 hover:border-neutral-600 hover:text-white transition-all duration-200"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -1 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
