import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from "@emailjs/browser";
function Footer() {
  const currentYear = new Date().getFullYear();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
    .send(
      "service_bpmv6jn",  // Replace with your EmailJS Service ID
      "template_xq92o3l", // Replace with your EmailJS Template ID
      formData,
      "Ez8MlotziM8_dKdB9"  // Replace with your EmailJS Public Key
    )
    .then(
      (response) => {
        alert("Email sent successfully!");
        console.log("Success:", response);
        setSubmitStatus('success');
        setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        alert("Failed to send email.");
        setSubmitStatus('error');
        console.log("Error:", error);
      }
    );
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="pl-0">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <a href="mailto:sankethuta@gmail.com" className="flex items-center gap-3 hover:text-purple-400 transition duration-300">
                  <Mail size={20} />
                  <span className="text-sm break-all">sankethuta@gmail.com</span>
                </a>
                <a href="tel:+16824067951" className="flex items-center gap-3 hover:text-purple-400 transition duration-300">
                  <Phone size={20} />
                  <span className="text-sm">+1 (682) 406-7951</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/sanketh-uta" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-purple-400 transition duration-300">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sanketh-bolishetti-01494b1a7/" target="_blank" rel="noopener noreferrer"
                   className="hover:text-purple-400 transition duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#projects" className="block hover:text-purple-400 transition duration-300">Projects</a>
                <a href="#experience" className="block hover:text-purple-400 transition duration-300">Experience</a>
                <a href="#skills" className="block hover:text-purple-400 transition duration-300">Skills</a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send Me a Message <span className="text-emerald-400">/</span> Have any suggestion</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {/* {submitStatus === 'success' && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
              )} */}
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sanketh Bolishetti. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;