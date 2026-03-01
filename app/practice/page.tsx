import Link from 'next/link';
import { MicOff, Pause, SkipForward, PhoneOff, Activity } from 'lucide-react';

export default function PracticePage() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">
        <div className="mb-6 flex flex-col items-center">
          <div className="size-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-3 shadow-sm">
            <div className="size-6 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>
          </div>
          <span className="text-slate-500 font-mono text-xs tracking-widest uppercase font-bold">Mocksy is listening...</span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight max-w-3xl">
          &quot;Let&apos;s test your resilience. Tell me about a time you completely failed a project and your manager was furious. How did you recover?&quot;
        </h1>
        <p className="text-primary text-base md:text-lg mb-8 flex items-center gap-2 justify-center font-medium">
          <Activity size={18} /> Stress Interview Mode Active
        </p>

        {/* Audio Visualizer (Static representation) */}
        <div className="flex items-center justify-center gap-1.5 h-16 md:h-20 mb-10">
          {[...Array(21)].map((_, i) => {
            // Create a symmetric wave pattern
            const height = Math.sin((i / 20) * Math.PI) * 100;
            const isCenter = i >= 8 && i <= 12;
            return (
              <div 
                key={i} 
                className={`w-1.5 md:w-2 rounded-full ${isCenter ? 'bg-slate-900' : 'bg-slate-300'}`}
                style={{ height: `${Math.max(10, height)}%` }}
              ></div>
            );
          })}
        </div>

        {/* Progress & Timer */}
        <div className="w-full max-w-md mb-8">
          <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
            <span>Question 2 of 5</span>
            <span>40% Complete</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-slate-900 w-[40%] rounded-full"></div>
          </div>

          <div className="inline-flex items-center justify-center gap-3 bg-white border border-slate-200 shadow-sm rounded-full px-6 py-2.5">
            <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-lg font-mono text-slate-900 font-bold tracking-wider">02:45</span>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white shadow-md border border-slate-100 rounded-full p-1.5 flex items-center gap-1">
          <button className="flex flex-col items-center justify-center w-16 h-14 md:w-20 md:h-16 rounded-full hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-colors">
            <MicOff size={18} className="mb-1" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Mute</span>
          </button>
          <button className="flex flex-col items-center justify-center w-16 h-14 md:w-20 md:h-16 rounded-full hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-colors">
            <Pause size={18} className="mb-1" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Pause</span>
          </button>
          
          <div className="w-px h-8 bg-slate-200 mx-1"></div>
          
          <button className="flex flex-col items-center justify-center w-16 h-14 md:w-20 md:h-16 rounded-full hover:bg-slate-50 text-slate-500 hover:text-slate-900 transition-colors">
            <SkipForward size={18} className="mb-1" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Next</span>
          </button>
          
          <Link href="/analysis" className="flex flex-col items-center justify-center w-20 h-14 md:w-24 md:h-16 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors ml-1 md:ml-2">
            <PhoneOff size={18} className="mb-1" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider">End</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
