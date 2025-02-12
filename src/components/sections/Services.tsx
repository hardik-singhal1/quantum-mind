import { SERVICES } from "../../constant/app.constant";

const Services = () => {
  return (
    <section id="services" className="py-23 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold gradient-text p-2">
          Our Quantum Digital Services
        </h2>
          <p className="text-xl max-w-5xl mx-auto text-gray-300 mt-6">
            QuantumMind Solutions is a premier AI-driven digital marketing agency based in India, specializing in AI automation,
            branding, social media management, and SEO. Founded by tech-savvy innovators, we deliver data-driven strategies that enhance online presence and drive customer engagement, ensuring measurable success for businesses of all sizes.
          </p>

        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="glass-morphism p-8 rounded-2xl text-center neon-border transform transition-all hover:scale-105"
            >
              <div className="text-5xl mb-6 p-2 gradient-text">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
