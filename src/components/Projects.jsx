import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const Projects = () => {
  return (
    <section className="text-white min-h-screen flex flex-col justify-between px-4 md:px-6 py-12">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          MY LATEST PROJECTS
        </h2>
        <div className="w-1000 h-2 bg-gray-500 mb-12 "></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={project1}
              alt="project1"
              className="w-full h-auto object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-medium mb-2">
            Face Recognition System
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            A face recognition system identifies and verifies individuals using AI, 
            enhancing security, access control, banking, healthcare, and retail applications.
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={project2}
              alt="project2"
              className="w-full h-75 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-medium mb-2">
            Virtual Assistant
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Manu is an AI-powered virtual assistant designed for the manufacturing industry. 
            It streamlines operations, optimizes workflows, and enhances productivity by providing real-time insights, predictive maintenance, and intelligent automation. 
            With an intuitive interface and seamless integration, Manu helps businesses improve efficiency and decision-making in factory environments.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center">
            <img
              src={project3}
              alt="project3"
              className="w-full h-100 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-medium mb-2">
            Recommendation System
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            A recommendation system in manufacturing production uses AI and data analytics to optimize workflows, predict maintenance needs, and suggest efficient production strategies. 
    It enhances decision-making by analyzing historical data, detecting patterns, and recommending improvements to reduce downtime, improve resource allocation, and boost overall productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
