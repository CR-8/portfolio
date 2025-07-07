import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ]

    const socialLinks = [
        { icon: Github, href: 'https://github.com/CR-8', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/pratyush-tiwari-cr8', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:pratyushtiwari446@gmail.com', label: 'Email' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-shrink-0"
                        >
                            <a 
                                href="#home" 
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('#home')
                                }}
                                className="text-xs font-mono font-semibold text-white tracking-[0.2em] uppercase hover:text-white/80 transition-colors"
                            >
                                Pratyush Tiwari
                            </a>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center">
                            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 p-1">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            scrollToSection(item.href)
                                        }}
                                        className="px-3 py-1.5 text-xs font-mono text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 relative"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="hidden md:flex items-center space-x-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + index * 0.05 }}
                                >
                                    <social.icon size={14} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                whileTap={{ scale: 0.95 }}
                            >
                                {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
                        >
                            <div className="px-4 py-4 space-y-1">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            scrollToSection(item.href)
                                        }}
                                        className="block px-3 py-2 text-xs font-mono text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                
                                {/* Mobile Social Links */}
                                <div className="flex items-center space-x-2 px-3 py-3 border-t border-white/10 mt-4">
                                    <span className="text-xs font-mono text-white/40 mr-2">Connect</span>
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 + index * 0.05 }}
                                        >
                                            <social.icon size={14} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    )
}

export default Navbar
