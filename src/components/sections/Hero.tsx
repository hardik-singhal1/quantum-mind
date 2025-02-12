import { ParticlesComponent } from "../common/Particles";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
      {/* Particles background in Hero section */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesComponent /> {/* Particle component inside Hero */}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 gradient-text leading-tight p-2">
          Digital Transformation Reimagined
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Bridging quantum thinking with digital strategy to unlock business potential.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#services" className="btn-primary">Explore Solutions</a>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
