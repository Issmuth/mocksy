import Link from 'next/link';
import { FileText, Briefcase, Target, Brain, Code, Activity, ArrowRight, UploadCloud, CheckCircle2 } from 'lucide-react';

export default function SetupPage() {
  return (
    <div className="max-w-6xl mx-auto w-full p-6 lg:p-10">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold font-display text-slate-900 mb-4">Configure Your Session</h1>
        <p className="text-slate-500 text-lg">
          Give Mocksy the job description and your qualifications. Pick specific scopes you struggle with, and we&apos;ll tailor a mock interview to help you show your moxie.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Context */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
              <Briefcase size={18} className="text-slate-900" /> The Role (Job Description)
            </h3>
            <div className="relative bg-slate-50 rounded-2xl border border-slate-200 p-4 focus-within:border-slate-900 transition-colors h-48">
              <textarea 
                className="w-full h-full bg-transparent border-none resize-none focus:ring-0 text-slate-700 text-sm placeholder:text-slate-400 outline-none" 
                placeholder="Paste the job description here... Mocksy will extract key requirements to tailor the questions."
              ></textarea>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
              <FileText size={18} className="text-slate-900" /> Your Qualifications
            </h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-slate-900 bg-slate-50 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">Use Saved Profile</p>
                    <p className="text-slate-500 text-xs">Senior Product Designer resume</p>
                  </div>
                </div>
                <input type="radio" name="resume_source" className="accent-slate-900 size-5" defaultChecked />
              </label>
              
              <label className="flex items-center justify-between p-4 rounded-2xl border-2 border-slate-100 bg-white cursor-pointer hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                    <UploadCloud size={18} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">Upload New Resume</p>
                    <p className="text-slate-500 text-xs">PDF, DOCX up to 10MB</p>
                  </div>
                </div>
                <input type="radio" name="resume_source" className="accent-slate-900 size-5" />
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Scopes & Settings */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex-grow">
            <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
              <Target size={18} className="text-slate-900" /> Interview Scopes
            </h3>
            <p className="text-slate-500 text-sm mb-6">Select the specific areas you want to focus on to work on your limitations.</p>
            
            <div className="space-y-3">
              <label className="flex items-start gap-4 p-4 rounded-2xl border-2 border-slate-100 bg-white cursor-pointer hover:border-slate-300 transition-colors group has-[:checked]:border-slate-900 has-[:checked]:bg-slate-50">
                <div className="mt-1">
                  <input type="checkbox" className="accent-slate-900 size-5" defaultChecked />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Brain size={18} className="text-slate-900" />
                    <p className="text-slate-900 font-bold">Behavioral</p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">Focus on past experiences, conflict resolution, and cultural fit.</p>
                </div>
              </label>

              <label className="flex items-start gap-4 p-4 rounded-2xl border-2 border-slate-100 bg-white cursor-pointer hover:border-slate-300 transition-colors group has-[:checked]:border-slate-900 has-[:checked]:bg-slate-50">
                <div className="mt-1">
                  <input type="checkbox" className="accent-slate-900 size-5" defaultChecked />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Code size={18} className="text-slate-900" />
                    <p className="text-slate-900 font-bold">Technical</p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">Role-specific knowledge, system design, and problem-solving.</p>
                </div>
              </label>

              <label className="flex items-start gap-4 p-4 rounded-2xl border-2 border-slate-100 bg-white cursor-pointer hover:border-primary/50 transition-colors group has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <div className="mt-1">
                  <input type="checkbox" className="accent-primary size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Activity size={18} className="text-primary" />
                    <p className="text-slate-900 font-bold">Stress Interview</p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">High-pressure scenarios, rapid-fire questions, and challenging pushback to test resilience.</p>
                </div>
              </label>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end">
              <Link href="/practice" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3 transform hover:-translate-y-0.5 w-full sm:w-auto justify-center">
                <span>Start Mock Session</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
