import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react'

const Contact = () => {
    const sectionRef = useRef(null)
    const formRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'pratyushtiwari446@gmail.com',
            href: 'mailto:pratyushtiwari446@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 73074 64595',
            href: 'tel:+917307464595',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Lucknow, Uttar Pradesh, India',
            href: 'https://maps.google.com/?q=Lucknow,Uttar+Pradesh,India',
        }
    ]

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/CR-8',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/pratyush-tiwari-cr8',
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:pratyushtiwari446@gmail.com',
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate contact cards
            gsap.fromTo('.contact-card',
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Animate form
            gsap.fromTo(formRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            setSubmitStatus('error')
        }
        
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 5000)
    }

    return (
        <section id="contact" ref={sectionRef} className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono tracking-tight">
                        Get In <span className="text-white">Touch</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-white/20 mx-auto mb-8"></div>
                    <p className="text-base text-zinc-400 max-w-2xl mx-auto font-mono">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-6">
                    
                    {/* Contact Information - 2 cols */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* Contact Cards */}
                        <div className="grid gap-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="contact-card group flex p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="flex items-center gap-3 w-full">
                                        <div className="p-2 bg-zinc-800 rounded-md group-hover:bg-zinc-700 transition-colors">
                                            <info.icon size={18} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-zinc-400 text-xs uppercase tracking-wider font-mono">{info.label}</h3>
                                            <p className="text-white text-sm font-mono">
                                                {info.value}
                                            </p>
                                        </div>
                                        <ExternalLink size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div 
                            className="contact-card bg-zinc-900/50 p-4 rounded-lg border border-zinc-800"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-white text-sm font-mono mb-3">Connect with me</h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-zinc-800 rounded-md text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon size={16} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div 
                            className="contact-card bg-zinc-900/50 p-4 rounded-lg border border-zinc-800"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-white text-sm font-mono mb-2">Available for work</h3>
                            <p className="text-zinc-400 text-xs font-mono leading-relaxed">
                                I'm open for freelance projects and full-time opportunities. Let's collaborate and build something exceptional.
                            </p>
                        </motion.div>
                    </div>

                    {/* Contact Form - 3 cols */}
                    <motion.div
                        ref={formRef}
                        className="lg:col-span-3 bg-zinc-900/50 p-6 rounded-lg border border-zinc-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-mono text-white mb-5">Send a message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-zinc-400 text-xs font-mono mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white transition-all font-mono"
                                        placeholder="Your name"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-zinc-400 text-xs font-mono mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white transition-all font-mono"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-zinc-400 text-xs font-mono mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white transition-all font-mono"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-zinc-400 text-xs font-mono mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-white transition-all resize-vertical font-mono"
                                    placeholder="Your message..."
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 bg-white text-black font-mono text-sm rounded-md hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={14} />
                                    </>
                                )}
                            </motion.button>

                            {/* Status Messages */}
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-3 rounded-md text-center text-xs font-mono ${
                                        submitStatus === 'success' 
                                            ? 'bg-zinc-800 text-white border border-zinc-700' 
                                            : 'bg-zinc-800 text-red-400 border border-red-900/50'
                                    }`}
                                >
                                    {submitStatus === 'success' 
                                        ? 'Message sent successfully. I\'ll get back to you soon.' 
                                        : 'Error sending message. Please try again or contact me directly.'
                                    }
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
