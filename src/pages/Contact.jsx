
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
export const Contact=()=> {
  return (
    <section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center text-white p-6 sm:p-10 lg:p-16"
>
  <h1 className="text-4xl sm:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
    Contact Me
  </h1>

  {/* Contact Info Container */}
  <div className="w-full max-w-4xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Email */}
      <div className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-900 rounded-full flex items-center justify-center mr-4">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-teal-400">Email</h3>
            <p className="text-gray-300">deniz.furkann@outlook.com</p>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-900 rounded-full flex items-center justify-center mr-4">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-teal-400">Phone</h3>
            <p className="text-gray-300">+90 537 254 7425</p>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-900 rounded-full flex items-center justify-center mr-4">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-teal-400">Location</h3>
            <p className="text-gray-300">Ankara, Turkey</p>
          </div>
        </div>
      </div>

      {/* GitHub */}
      <div className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-900 rounded-full flex items-center justify-center mr-4">
            <Github className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-teal-400">GitHub</h3>
            <a 
              href="https://github.com/frkndnz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              github.com/frkndnz
            </a>
          </div>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="group bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 md:col-span-2">
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-900 rounded-full flex items-center justify-center mr-4">
            <Linkedin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-teal-400">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/furkandenizz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              linkedin.com/in/furkandenizz/
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center mt-12">
      <div className="inline-block bg-gradient-to-r from-gray-800 to-teal-700 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-2">Let's Work Together!</h3>
        <p className="text-purple-100">
          I'm always interested in hearing about new projects and opportunities.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}