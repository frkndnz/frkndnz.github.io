import { Github, ExternalLink, PlayCircle } from 'lucide-react';
const projects = [
  {
    id: 1,
    title: "HabitFlux: Sürdürülebilir Alışkanlık Takibi",
    description: "Günlük alışkanlıklarını takip et, istatistiklerle ne kadar yol katettiğini gör ve Gemini destekli yapay zeka sohbet robotundan kişiye özel tavsiyeler alarak kendini geliştir. Yönetici panelinden ise blog içeriklerini, kullanıcıları ve geri bildirimleri kolayca yönet, sistemdeki hataları takip et",
    technologies: ["React", "ASP.NET", "CQRS", "MSSQL", "Redux", "OpenAPI","Docker", "Azure", "Tailwind CSS","JWT"],
    
    video: "/videos/newVideo.mp4", // Kendi video dosyanızın yolunu buraya ekleyin
    image: "https://via.placeholder.com/600x400/FFC0CB/FFFFFF?text=E-Ticaret+Demo", // Video yoksa yedek görsel
    githubLink: "https://github.com/frkndnz/HabitsApp-CleanArchitecture",
    liveDemoLink: "https://habitflux.vercel.app/",
  }
 
];

export const Projects=()=> {
  return (
   <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl"> {/* Max genişliği azalttık */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Projelerim
        </h2>

        {/* Projeleri tek sütun halinde listeleme */}
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Video veya Resim Alanı için Aspect Ratio Box */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 oranı için padding-bottom: 56.25% */}
                <div className="absolute top-0 left-0 w-full h-full">
                  {project.video ? (
                    <video 
                      src={project.video} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      autoPlay 
                      loop     
                      muted    
                      playsInline 
                      controls={true} 
                      onError={(e) => { 
                        console.error("Video yüklenemedi:", e.target.src);
                        e.target.onerror = null; 
                        e.target.style.display = 'none'; 
                        // Alternatif görseli veya bir hata mesajını burada gösterebilirsiniz
                      }}
                    >
                      Tarayıcınız video etiketini desteklemiyor.
                    </video>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Butonlar */}
                <div className="flex justify-start gap-4 mt-auto">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-2 border border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 mr-2" /> GitHub
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a 
                      href={project.liveDemoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" /> Canlı Demo
                    </a>
                  )}
                  {project.video && !project.liveDemoLink && ( 
                     <a 
                      href={project.video} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-6 py-2 border border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
                    >
                      <PlayCircle className="w-5 h-5 mr-2" /> Videoyu İzle
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}