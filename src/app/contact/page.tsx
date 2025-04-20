import { type Metadata } from "next";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Aniket Singh",
  description: "Get in touch with me through this contact form.",
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white py-16 px-4">
      {/* Section Heading */}
      <div className="text-center relative mb-24">
        <h1 className="text-[8rem] font-extrabold text-white opacity-10 tracking-tight leading-none absolute inset-0 flex items-center justify-center pointer-events-none select-none drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          Contact
        </h1>
        <h2 className="text-4xl font-extrabold relative z-10 drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]">
          Contact Me
        </h2>
        <p className="text-gray-400 relative z-10 mt-2">
          Below are the details to reach out to me!
        </p>
      </div>


      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {/* Address */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-full bg-[#1e1e1e] flex items-center justify-center shadow-lg">
            <MapPin className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="font-semibold text-lg">ADDRESS</h3>
          <p className="text-gray-400">Faridabad, Haryana</p>
        </div>

        {/* Contact Number */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-full bg-[#1e1e1e] flex items-center justify-center shadow-lg">
            <Phone className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="font-semibold text-lg">CONTACT NUMBER</h3>
          <p className="text-gray-400">+91 829-950-5767</p>
        </div>

        {/* Email Address */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-full bg-[#1e1e1e] flex items-center justify-center shadow-lg">
            <Mail className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="font-semibold text-lg">EMAIL ADDRESS</h3>
          <p className="text-gray-400">aniketkrsingh5678@gmail.com</p>
        </div>

        {/* Resume */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 rounded-full bg-[#1e1e1e] flex items-center justify-center shadow-lg">
            <Globe className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="font-semibold text-lg">DOWNLOAD RESUME</h3>
          <a
            href="https://drive.google.com/file/d/1dLfRhRIBaiuWg-xb8bJB4aKo0b7kFoPx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:underline text-lg"
          >
            Resume Link
          </a>
        </div>
      </div>
    </main>
  );
}
