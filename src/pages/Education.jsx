
const educationData = [
  {
    id: 1,
    degree: "Electrical and Electronics Engineering",
    university: "Konya Technical University",
    duration: "2014 - 2019",
    gpa: "",
    description: [
      
    ],
    achievements: ["TÜBİTAK 2242 - University Students Research Competition, 1st Place (Education Category)", "TEKNOFEST – TÜBİTAK University Students Research Competition, Participant"]
  }
];
export const Education=()=> {
  return (
    <section
  id="education"
  className="min-h-screen flex flex-col items-center justify-center text-white p-6 sm:p-10 lg:p-16"
>
  <h1 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
    Education
  </h1>

  {/* Education Items Container */}
  <div className="w-full max-w-4xl space-y-6">
    {educationData.map((item, index) => (
      <div 
        key={item.id} 
        className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-green-400 group-hover:text-green-300 transition-colors">
              {item.degree}
            </h2>
            <h3 className="text-lg text-gray-300 mt-1">
              <span className="font-medium text-white">{item.university}</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400">{item.duration}</span>
            </h3>
            {item.gpa && (
              <div className="mt-2">
                <span className="text-sm text-gray-400">GPA: </span>
                <span className="text-sm font-medium text-green-400">{item.gpa}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-1 h-16 bg-gradient-to-b from-green-500 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
        
        {item.description && (
          <div className="space-y-2 text-gray-200">
            {item.description.map((desc, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-400 mr-3 mt-1 text-sm">▸</span>
                <span className="leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>
        )}

        {item.achievements && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Achievements</h4>
            <div className="flex flex-wrap gap-2">
              {item.achievements.map((achievement, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</section>
  );
}