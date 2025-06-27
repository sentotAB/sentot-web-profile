import MyPic from "../assets/images/sentotpic2.jpg";

const MyProfile = () => {
  return (
    <section className="text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-center">
        {/* /* Image Section */}
        <div className="w-full sm:w-2/3 lg:w-1/2 flex justify-center">
          <img
            src={MyPic}
            alt="sentot image"
            className="w-full h-auto max-w-[800px] sm:max-w-[500px] lg:max-w-none rounded-full shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            MY PROFILE
          </h2>
          <div className="w-2/2 h-2 bg-blue-500"></div>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
          With a deep passion, precision and creativity. As a freelance web developer, 
          I craft elegant, fast, and scalable applications, ensuring seamless user experiences 
          through modern design and best coding practices.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
          From building cryptocurrency dashboards to developing AI-powered image classification systems, 
          my work reflects a commitment to innovation and efficiency. Whether designing intuitive interfaces or 
          optimizing complex algorithms, I bring a meticulous approach to every project.
          Driven by curiosity and a relentless pursuit of excellence, I continuously explore new technologies, 
          refining my skills to stay ahead in the ever-evolving digital landscape. using
          the <strong>Phyton</strong> and <strong>Javascript</strong>
          Languages. My expertise includes developing Artificial Intelligence Frameworks and LLM.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
  
            <strong>Let’s build something impactful together.</strong>
          </p>
          <div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              TOOLS PROFICIENCY
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Git & Github",
                "Python",
                "ReactJS",
                "Tailwind CSS",
                "PostgreSQL",
                "MySQL",
                "JavaScript",
                "HTML & CSS",
                "Microsoft Office",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default MyProfile;
