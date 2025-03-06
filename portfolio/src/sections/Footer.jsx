import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-white py-8 bg-transparent">
            <div className="container mx-auto px-4 ">
                <div className="flex space-x-4">
                    {/* Email */}
                    <a
                        href="mailto:rohitrrout00@gmail.com"
                        className="p-2 bg-black rounded-full text-white hover:bg-gray-800 transition"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/DrFranko0"
                        className="p-2 bg-black rounded-full text-white hover:bg-gray-800 transition"
                        aria-label="GitHub"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <Github size={20} />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/rohit-ranjan-rout-n"
                        className="p-2 bg-black rounded-full text-white hover:bg-gray-800 transition"
                        aria-label="LinkedIn"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}