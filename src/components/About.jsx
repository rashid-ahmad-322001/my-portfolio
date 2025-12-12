const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-6">
            I'm a java full stack developer with 1+ years hands on experience in web development. I love building scalable apps with React and modern tools.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Java</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> JDBC</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Servlet</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> JSP</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Hinernate</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Spring</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Spring Boot</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> SQL Data Base</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> HTML5 & CSS3</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Bootstrap</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Javascript</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> React JS</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Tailwind CSS</li>
            {/* Add more skills */}
          </ul>
        </div>
        <div className="text-center">
          <img src="../src/assets/Photo.jpg" alt="Photo..." className="rounded-full w-64 h-64 mx-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;
