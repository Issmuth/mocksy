import Link from 'next/link';
import { TrendingUp, CheckCircle2, AlertTriangle, Filter, Download, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export default function AnalysisPage() {
  return (
    <div className="max-w-5xl mx-auto w-full p-6 lg:p-10">
      <div className="mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-4">Session Analysis</h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Mocksy has analyzed your session to help determine your limitations. Here are pointers on what to work on and suggested better replies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Score Card */}
        <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-lg">
          <div>
            <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Moxie Score</p>
            <div className="flex items-end gap-4 mb-6">
              <span className="text-7xl font-bold text-white leading-none">88<span className="text-4xl text-slate-400">%</span></span>
              <div className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-sm font-bold mb-2">
                <TrendingUp size={16} /> +5%
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              You are in the top 15% of candidates for this role. Your consistency across questions was a key factor today.
            </p>
          </div>
          
          <div className="flex gap-8 mt-8 pt-8 border-t border-white/10">
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                <span>Confidence</span>
                <span className="text-white">92/100</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[92%] rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                <span>Technical</span>
                <span className="text-white">78/100</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[78%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths & Focus Areas */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-slate-900 font-bold flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 size={20} />
              </div>
              Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Strong eye contact maintained throughout the session.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Clear articulation of system design concepts.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-slate-900 font-bold flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>
              Focus Areas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Pacing was slightly fast during the introduction.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Used filler words like &quot;um&quot; when transitioning topics.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Question-by-Question Breakdown</h2>
          <div className="flex gap-4 text-slate-500">
            <button className="hover:text-slate-900 transition-colors bg-white p-2 rounded-full shadow-sm"><Filter size={20} /></button>
            <button className="hover:text-slate-900 transition-colors bg-white p-2 rounded-full shadow-sm"><Download size={20} /></button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Question 1 - Expanded */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-6 flex items-start gap-4 cursor-pointer">
              <div className="size-10 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div className="flex-grow">
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Behavioral</p>
                <h4 className="text-lg font-bold text-slate-900">Tell me about a time you had a conflict with a coworker.</h4>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="px-4 py-1.5 rounded-full border border-amber-200 text-amber-700 text-xs font-bold bg-amber-50">Needs Polish</span>
                <ChevronUp size={20} className="text-slate-400" />
              </div>
            </div>
            
            <div className="px-6 pb-6 pt-2 border-t border-slate-100">
              <div className="mb-6">
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Your Answer Snippet</p>
                <p className="text-slate-600 italic text-sm leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  &quot;...so I, uh, told him that I didn&apos;t think his idea would work. We kinda argued for a bit, but eventually, I just did it my way because we were running out of time and I knew it was the right call for the project deadline...&quot;
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h5 className="text-primary text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                  <Sparkles size={16} /> Mocksy&apos;s Suggested Reply
                </h5>
                <p className="text-sm text-slate-700 mb-4">
                  Your limitation here is focusing too much on unilateral decision making. Emphasize <span className="text-primary font-bold">collaboration</span> instead. Try framing it as a compromise:
                </p>
                <div className="bg-white p-5 rounded-xl border border-primary/10 text-sm text-slate-800 leading-relaxed shadow-sm">
                  &quot;I expressed my concerns about the potential technical debt with his approach. We had a constructive debate, and given the tight deadline, I proposed a compromise where we implemented the core feature my way to ensure stability, while documenting his approach for a future refactor.&quot;
                </div>
              </div>
            </div>
          </div>

          {/* Question 2 - Collapsed */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
            <div className="size-10 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center font-bold text-sm shrink-0">2</div>
            <div className="flex-grow">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Technical</p>
              <h4 className="text-lg font-bold text-slate-900">Explain the concept of RESTful APIs to a non-technical stakeholder.</h4>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="px-4 py-1.5 rounded-full border border-emerald-200 text-emerald-700 text-xs font-bold bg-emerald-50">Excellent</span>
              <ChevronDown size={20} className="text-slate-400" />
            </div>
          </div>

          {/* Question 3 - Collapsed */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all">
            <div className="size-10 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center font-bold text-sm shrink-0">3</div>
            <div className="flex-grow">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">System Design</p>
              <h4 className="text-lg font-bold text-slate-900">Design a URL shortening service like Bit.ly.</h4>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-700 text-xs font-bold bg-slate-50">Good</span>
              <ChevronDown size={20} className="text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-dashed shadow-sm">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">Ready for another round?</h3>
          <p className="text-slate-500 text-sm">Practice makes perfect. Try a different question set.</p>
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-8 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors">
            Review Transcript
          </button>
          <Link href="/setup" className="flex-1 sm:flex-none px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors text-center shadow-md">
            New Session
          </Link>
        </div>
      </div>
    </div>
  );
}
