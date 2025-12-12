const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center px-4">
        <h2 className="text-6xl font-bold mb-4">Hi, I'm Rashid Shah</h2>
        <p className="text-xl mb-8">Full-Stack Java Developer </p>
        <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
