import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

function ContactInfo({ icon, title, value }: { 
  icon: React.ReactNode; 
  title: string; 
  value: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-[#007AFF]">{icon}</div>
      <div>
        <h4 className="font-semibold text-[#1C1C1E]">{title}</h4>
        <p className="text-[#3A3A3C]">{value}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Client Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Raghu,\n\nYou have received a new message from your portfolio website:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Please respond to this client inquiry at your earliest convenience.\n\n` +
      `Best regards,\nYour Portfolio Website`
    );
    const mailtoLink = `mailto:rvamshipulijala@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client will open to send the message.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C1C1E] mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#3A3A3C] mb-6">
              Have a project in mind? Let's work together to create something amazing.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-[#D1D1D6] focus:outline-none focus:border-[#007AFF] transition-colors duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-[#D1D1D6] focus:outline-none focus:border-[#007AFF] transition-colors duration-200"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-[#D1D1D6] focus:outline-none focus:border-[#007AFF] transition-colors duration-200"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#005BB5] transition-colors duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <ContactInfo
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              value="rvamshipulijala@gmail.com"
            />
            <ContactInfo
              icon={<Linkedin className="w-6 h-6" />}
              title="LinkedIn"
              value="linkedin.com/in/rv23"
            />
          </div>
        </div>
      </div>
    </section>
  );
}