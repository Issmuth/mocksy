import Link from 'next/link';
import { FileText, UploadCloud, Link as LinkIcon, Github, Briefcase, Plus, X, ChevronDown, Search } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-6xl mx-auto w-full p-6 lg:p-10">
      <div className="mb-10">
        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Phase 01: Initialization</p>
        <h1 className="text-4xl lg:text-5xl font-serif mb-4 text-slate-900">THE PROFESSIONAL YOU</h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Let&apos;s calibrate your profile. Upload your resume to auto-fill details or manually input your professional DNA.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Resume Analysis */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold tracking-wide text-slate-900 uppercase">Resume Analysis</h3>
              <FileText className="text-slate-400" size={20} />
            </div>
            <p className="text-sm text-slate-500 mb-6">Upload your PDF to auto-extract experience.</p>
            
            <div className="border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="size-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-slate-600">
                <UploadCloud size={24} />
              </div>
              <h4 className="text-slate-900 font-bold mb-1">Drag & Drop Resume</h4>
              <p className="text-xs text-slate-500 font-mono">PDF, DOCX up to 10MB</p>
            </div>
            
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-0"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono font-bold">0%</span>
            </div>
          </div>

          {/* Digital Footprint */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold tracking-wide text-slate-900 uppercase mb-6 flex items-center gap-2">
              <LinkIcon size={18} className="text-slate-400" /> Digital Footprint
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-slate-400"><LinkIcon size={18} /></div>
                <input type="text" defaultValue="behance.net/johndoe" className="bg-transparent border-none outline-none text-sm text-slate-900 w-full font-mono font-medium" />
              </div>
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-slate-400"><Github size={18} /></div>
                <input type="text" placeholder="GitHub URL" className="bg-transparent border-none outline-none text-sm text-slate-900 w-full font-mono placeholder:text-slate-400 font-medium" />
              </div>
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="text-slate-400"><Briefcase size={18} /></div>
                <input type="text" placeholder="Personal Portfolio" className="bg-transparent border-none outline-none text-sm text-slate-900 w-full font-mono placeholder:text-slate-400 font-medium" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Core Competencies */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold tracking-wide text-slate-900 uppercase flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-primary"></div> Core Competencies
              </h3>
              <span className="text-xs text-slate-400 font-mono font-bold">TAGS</span>
            </div>
            
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
              <Search size={18} className="text-slate-400" />
              <input type="text" placeholder="Add a skill (e.g. UX Research, Python)" className="bg-transparent border-none outline-none text-sm text-slate-900 w-full font-mono placeholder:text-slate-400 font-medium" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold">
                UX Design <X size={14} className="cursor-pointer hover:text-primary/70" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-bold shadow-sm">
                Figma <X size={14} className="cursor-pointer hover:text-slate-900" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-bold shadow-sm">
                Prototyping <X size={14} className="cursor-pointer hover:text-slate-900" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-bold shadow-sm">
                User Testing <X size={14} className="cursor-pointer hover:text-slate-900" />
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex-grow">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold tracking-wide text-slate-900 uppercase flex items-center gap-2">
                <Briefcase size={20} className="text-slate-400" /> Experience
              </h3>
              <button className="text-slate-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-primary transition-colors bg-slate-50 px-3 py-1.5 rounded-full">
                <Plus size={14} /> ADD ROLE
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Role 1 */}
              <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-slate-900 font-bold text-lg">Senior Product Designer</h4>
                    <p className="text-slate-500 text-sm font-medium">TechFlow Systems</p>
                  </div>
                  <span className="text-xs text-slate-400 font-mono font-bold bg-slate-50 px-2 py-1 rounded">2021 - PRESENT</span>
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  Led design system architecture and improved user retention by 24% through iterative UX enhancements.
                </p>
                <div className="flex gap-2 mt-5">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">Leadership</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">Strategy</span>
                </div>
              </div>
              
              {/* Role 2 */}
              <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50 flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">UX Designer</h4>
                    <p className="text-slate-500 text-xs font-medium">Creative Pulse Agency</p>
                  </div>
                </div>
                <ChevronDown size={20} className="text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end items-center gap-6">
        <button className="text-slate-500 hover:text-slate-900 text-sm font-bold transition-colors">
          Save Draft
        </button>
        <Link href="/setup" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-full flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
          Continue to Mock <ChevronDown className="-rotate-90" size={18} />
        </Link>
      </div>
    </div>
  );
}
