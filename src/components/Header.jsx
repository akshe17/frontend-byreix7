import { HelpCircle } from "lucide-react";
import logo from "../assets/images/logo.jpg";

export default function Header() {
  return (
        <div className="flex justify-between items-center mb-8">
           <div className="flex items-center gap-3">
             <img src={logo} alt="ByreiX Logo" className="w-12 h-12 rounded-lg" />
             <h1 className="text-3xl font-extrabold tracking-wide text-yellow-300">
               ByreiX
             </h1>
           </div>
           <button className="flex items-center gap-2 bg-yellow-300 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition">
             <HelpCircle size={18} /> HELP
           </button>
         </div>
  );
}
