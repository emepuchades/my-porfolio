import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import logoC from "../assets/2.png";
import { Mail } from "lucide-react";
import Earth from "../components/Earth";

function Contact() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm: text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-center md:text-left">
              <img src={logoC} className="mb-4"/>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect!</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out for collaborations or just a friendly
                chat.
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-6 h-6 text-purple-600 mr-2" />
                <a
                  href="mailto:maria.puchades@gmail.com"
                  className="text-purple-600 hover:text-purple-800 transition duration-150 ease-in-out"
                >
                  maria.puchades@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-80 md:h-[500px]">
            <Canvas>
              <ambientLight intensity={1.5} />
              <pointLight position={[10, 10, 10]} intensity={2} />
              <hemisphereLight intensity={1} groundColor="#ffffff" />
              <Earth />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
