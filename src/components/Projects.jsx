const Projects = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description: "A cool Spotify Clone using HTML CSS.",
      link: "https://github.com/yourusername/spotifyClone",
      image: "../src/assets/spotify_clone.png"
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
