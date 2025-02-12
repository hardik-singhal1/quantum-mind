import { APPROACH_STEPS } from "../../constant/app.constant";

const AboutUS = () => {
  return (
    <section id="services" className="py-23 bg-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text p-2">
            Our Quantum Approach
          </h2>
          <p className="text-xl max-w-5xl mx-auto text-gray-300 mt-6">
            We don't just solve problems, we reimagine possibilities through a unique blend of quantum thinking, advanced analytics, and strategic innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {APPROACH_STEPS.map((step, index) => (
            <div
              key={index}
              className="glass-morphism p-8 rounded-2xl text-center neon-border transform transition-all hover:scale-105"
            >
              <div className="text-5xl mb-6 p-2 gradient-text">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
