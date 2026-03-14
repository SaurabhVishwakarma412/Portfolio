import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../utils/constants';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true, error: null });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
      
      setFormStatus({ submitted: true, submitting: false, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setFormStatus({ submitted: false, submitting: false, error: null });
      }, 5000);
    } catch (error) {
      setFormStatus({ submitted: false, submitting: false, error: 'Something went wrong. Please try again.' });
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-blue-400'
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-400'
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: 'Location',
      value: personalInfo.location,
      subValue: personalInfo.university,
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    { icon: <FiGithub size={18} />, url: personalInfo.github, label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <FiMail size={18} />, url: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.section 
      className="py-16 md:py-20 bg-gray-900"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Let's Work Together</h3>
            <p className="text-gray-400 mb-6">
              Have a project in mind? I'm always excited to work on new challenges.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-8 h-8 ${item.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                    <span className={item.color}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-blue-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <>
                        <p className="text-white">{item.value}</p>
                        {item.subValue && <p className="text-gray-500 text-xs">{item.subValue}</p>}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-gray-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-gray-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-gray-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {formStatus.submitted && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 text-sm">Message sent successfully!</p>
                </div>
              )}

              {formStatus.error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{formStatus.error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {formStatus.submitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;