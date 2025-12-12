const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
        <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg" required></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
      <p className="text-center mt-8 text-gray-500">Or email me at: rashid322001@gmail.com</p>
    </section>
  );
};

export default Contact;
