
const experienceData = [
  {
    id: 1,
    role: "Software Developer",
    company: "Toon Games",
    duration: "Apr 2024 - Jan 2025",
    description: [
      "Developed core gameplay systems using C# and design patterns, enabling scalable architecture",
      "Improved game performance by resolving bugs and optimizing MSSQL queries",
      "Designed intuitive UI components, enhancing player experience",
      "Used Git for collaborative development, ensuring smooth team workflow"
    ]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Lecten",
    duration: "Oct 2021 - Sep 2023",
    description: [
      "Built core gameplay systems in Unity with C#, including AI and interactive mechanics",
      "Integrated APIs/SDKs (auth, leaderboards, analytics) to boost game features and engagement",
      "Resolved gameplay bugs and optimized systems for performance and stability",
      "Participated in Agile sprints, contributing to planning and team coordination"
    ]
  }
];
export const Experience=()=> {
  return (
   <section
  id="experience"
  className="min-h-screen flex flex-col items-center justify-center text-white p-6 sm:p-10 lg:p-16"
>
  <h1 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
    My Experience
  </h1>

  {/* Experience Items Container */}
  <div className="w-full max-w-4xl space-y-6">
    {experienceData.map((item, index) => (
      <div 
        key={item.id} 
        className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
              {item.role}
            </h2>
            <h3 className="text-lg text-gray-300 mt-1">
              <span className="font-medium text-white">{item.company}</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400">{item.duration}</span>
            </h3>
          </div>
          <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        <ul className="space-y-2 text-gray-200">
          {item.description.map((desc, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1 text-sm">▸</span>
              <span className="leading-relaxed">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
  );
}