import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
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
    await emailjs.send(
      "service_iancwra",
      "template_bezhmdh",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "opZT5lCAIpkLiccP7"
    );

    setFormStatus({ submitted: true, submitting: false, error: null });
    setFormData({ name: '', email: '', message: '' });

  } catch (error) {
    setFormStatus({
      submitted: false,
      submitting: false,
      error: "Failed to send message. Try again."
    });
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
  className="py-16 md:py-20 bg-gradient-to-br from-[#181435] to-[#2d1c43]"
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="container mx-auto px-4">
    <SectionHeading title="Get In Touch" />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

      {/* LEFT SIDE */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-3">Let's Work Together</h3>
        <p className="text-indigo-300 mb-6">
          Have a project in mind? I'm always excited to work on new challenges.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              
              <div className={`w-10 h-10 ${item.color} bg-white/10 rounded-xl flex items-center justify-center`}>
                {item.icon}
              </div>

              <div>
                <p className="text-indigo-300 text-sm">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-white hover:text-purple-300 transition">
                    {item.value}
                  </a>
                ) : (
                  <>
                    <p className="text-white">{item.value}</p>
                    {item.subValue && <p className="text-indigo-400 text-xs">{item.subValue}</p>}
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
              className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-indigo-300 hover:bg-purple-500/20 hover:text-white transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg">

        <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:border-purple-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:border-purple-400"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Your message..."
            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:border-purple-400 resize-none"
          />

          {/* Success */}
          {formStatus.submitted && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
              <p className="text-green-400 text-sm">Message sent successfully!</p>
            </div>
          )}

          {/* Error */}
          {formStatus.error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm">{formStatus.error}</p>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={formStatus.submitting}
            className="w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            {formStatus.submitting ? (
              "Sending..."
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