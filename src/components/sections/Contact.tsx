import { useState } from "react";
import { CONTACT_DETAILS } from "../../constant/app.constant";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Your quantum signal has been sent! We'll respond soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-23 bg-dark-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text p-2">Let's Connect</h2>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-start">
          {/* Left Section: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass-morphism p-8 max-w-xl mx-auto neon-border rounded-xl transform transition-all">
              <div className="mb-2">
                <label className="block text-white mb-2 text-lg text-start">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white mb-2 text-lg text-start">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white mb-2 text-lg text-start">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-field"
                  placeholder="Your message"
                  style={{ maxHeight: "200px", minHeight: "100px" }}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-3 px-6 text-lg">
                Send Quantum Signal
              </button>
            </form>
          </div>

          {/* Right Section: Contact Info */}
          <div className="text-white text-center md:text-left space-y-8">
            {CONTACT_DETAILS.map((contact) => (
              <div key={contact.id} className="glass-morphism p-6 neon-border rounded-2xl transform transition-all hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{contact.icon}</div>
                  <div>
                    <p className="text-xl font-semibold">{contact.title}</p>
                    {contact.link ? (
                      <a href={contact.link} className="text-blue-400 text-lg hover:text-blue-300 transition-colors">
                        {contact.text}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-lg">{contact.text}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
