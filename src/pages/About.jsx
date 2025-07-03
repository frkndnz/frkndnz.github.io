
import { Code, Atom, Server, Database, Cloud, Palette, Monitor } from 'lucide-react';
export const About = () => {
  return (
    <section id="about" className="p-16 ">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-12">
          About
        </h2>

        <div className="flex flex-col md:flex-col items-center md:items-center gap-12">
          {/* Tanıtım Yazısı */}
          <div className="md:w-2/3 text-lg text-white leading-relaxed text-center md:text-left">
            <p className="mb-4">
              Software Developer with experience in building backend and full-stack applications using .NET and C#. Quick
              learner, problem solver, and team player eager to contribute to innovative software solutions
            </p>

          </div>

          {/* Uzmanlık Alanları / Yetenek Kartları */}
          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Frontend Kartı */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Monitor className="text-indigo-600 text-3xl mb-3 mx-auto md:mx-0" /> {/* Monitor ikonu */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">Frontend</h3>
              <p className="text-gray-600 text-center md:text-left">React, JavaScript, HTML5, CSS3, Tailwind CSS</p>
            </div>
            {/* Backend Kartı */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Server className="text-indigo-600 text-3xl mb-3 mx-auto md:mx-0" /> {/* Server ikonu */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">Backend</h3>
              <p className="text-gray-600 text-center md:text-left"> ASP.NET Core, .NET, Clean Arc, RESTful APIs</p>
            </div>
            {/* Veritabanları Kartı */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Database className="text-indigo-600 text-3xl mb-3 mx-auto md:mx-0" /> {/* Database ikonu */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">Databases</h3>
              <p className="text-gray-600 text-center md:text-left">MS SQL Server, PostgreSQL, Stored Procedures</p>
            </div>
            {/* DevOps & Diğer Kartı */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Cloud className="text-indigo-600 text-3xl mb-3 mx-auto md:mx-0" /> {/* Cloud ikonu */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">DevOps</h3>
              <p className="text-gray-600 text-center md:text-left">Docker, Git, GitHub, Azure</p>
            </div>
            {/* Genel Programlama/Çözüm Üretme Kartı (isteğe bağlı) */}

          </div>
        </div>
      </div>
    </section>
  );
}