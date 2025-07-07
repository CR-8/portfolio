import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    const socialLinks = [
        { icon: Github, href: 'https://github.com/CR-8', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/pratyush-tiwari-cr8', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:pratyushtiwari446@gmail.com', label: 'Email' }
    ]

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="bg-black border-t border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 py-16">
                
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
                    
                    {/* Brand Card */}
                    <motion.div
                        className="md:col-span-5 bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-800/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="font-mono text-2xl font-bold text-white mb-4">
                            &lt;PT /&gt;
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed font-mono">
                            Full-stack developer crafting digital experiences with modern technologies.
                        </p>
                    </motion.div>

                    {/* Social Links Card */}
                    <motion.div
                        className="md:col-span-3 bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-800/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white text-sm font-mono font-semibold mb-4">Connect</h4>
                        <div className="flex gap-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-neutral-800 border border-neutral-700 rounded hover:bg-white hover:text-black transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <social.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links Card */}
                    <motion.div
                        className="md:col-span-4 bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-800/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white text-sm font-mono font-semibold mb-4">Navigation</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        scrollToSection(link.href)
                                    }}
                                    className="text-neutral-400 hover:text-white text-sm font-mono px-2 py-1 rounded hover:bg-neutral-800 transition-all duration-300"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info Card */}
                    <motion.div
                        className="md:col-span-8 bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-800/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white text-sm font-mono font-semibold mb-4">Contact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-neutral-800 border border-neutral-700 rounded">
                                    <Mail size={12} className="text-neutral-400" />
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-xs font-mono">Email</p>
                                    <a 
                                        href="mailto:pratyushtiwari446@gmail.com"
                                        className="text-white text-xs font-mono hover:text-neutral-300 transition-colors"
                                    >
                                        pratyushtiwari446@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-neutral-800 border border-neutral-700 rounded">
                                    <Phone size={12} className="text-neutral-400" />
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-xs font-mono">Phone</p>
                                    <a 
                                        href="tel:+917307464595"
                                        className="text-white text-xs font-mono hover:text-neutral-300 transition-colors"
                                    >
                                        +91 73074 64595
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-neutral-800 border border-neutral-700 rounded">
                                    <MapPin size={12} className="text-neutral-400" />
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-xs font-mono">Location</p>
                                    <p className="text-white text-xs font-mono">Lucknow, UP, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Back to Top Card */}
                    <motion.button
                        onClick={scrollToTop}
                        className="md:col-span-4 bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:bg-white hover:text-black transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-sm font-mono">Back to top</span>
                            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </motion.button>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="text-neutral-500 text-xs font-mono">
                        © {currentYear} Pratyush Tiwari. All rights reserved.
                    </div>
                    <div className="text-neutral-500 text-xs font-mono">
                        Built with React & Tailwind CSS
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
