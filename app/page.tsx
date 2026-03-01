import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-10 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-primary"></div>
          <h2 className="text-xl font-bold tracking-tight font-display text-slate-900">mocksy</h2>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Log in
          </Link>
          <Link href="/login" className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-sm">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Your AI Interview Coach
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">
          Show your <span className="text-primary italic">moxie</span> in your next interview.
        </h1>
        
        <p className="text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
          Upload your resume and job description. Mocksy creates personalized mock interviews to build your confidence and help you land your dream job.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/login" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
            Start Practicing Free <ArrowRight size={20} />
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-left">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="size-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-6">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Tailored Sessions</h3>
            <p className="text-slate-500">Practice behavioral, technical, or stress interviews based on your specific needs.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="size-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-6">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Real-time Feedback</h3>
            <p className="text-slate-500">Get instant analysis on your answers, pacing, and areas for improvement.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="size-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-6">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Resume Integration</h3>
            <p className="text-slate-500">Mocksy analyzes your resume to ask highly relevant and challenging questions.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
