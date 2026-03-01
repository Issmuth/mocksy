import Link from 'next/link';
import { Play, TrendingUp, Clock, Target, Award, Sparkles, ChevronRight, Brain, Activity } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto w-full p-6 lg:p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 mb-2">Welcome back, Sarah</h1>
          <p className="text-slate-500 text-lg">Ready to build your confidence for your next career-changing interview?</p>
        </div>
        <Link href="/setup" className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 px-6 rounded-full flex items-center gap-3 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 shrink-0">
          <Play size={18} fill="currentColor" />
          <span>Start Mock Session</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="size-12 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase bg-slate-50 px-3 py-1 rounded-full">Avg Score</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-slate-900">84<span className="text-2xl text-slate-400">%</span></span>
            <span className="text-emerald-500 text-sm font-medium mb-1">+4% this week</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="size-12 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center">
              <Target size={20} />
            </div>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase bg-slate-50 px-3 py-1 rounded-full">Sessions</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-slate-900">12</span>
            <span className="text-slate-500 text-sm font-medium mb-1">Completed</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="size-12 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center">
              <Award size={20} />
            </div>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase bg-slate-50 px-3 py-1 rounded-full">Top Skill</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-2xl font-bold text-slate-900">System Design</span>
          </div>
          <p className="text-slate-500 text-sm mt-2">Consistently scoring &gt;90%</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Clock size={20} className="text-slate-400" /> Recent Sessions
        </h2>
        <div className="space-y-4">
          {[
            { role: 'Senior Product Designer', company: 'TechFlow', date: 'Today', score: 88, type: 'Behavioral & Technical', icon: Brain, color: 'text-slate-900', bg: 'bg-slate-100' },
            { role: 'UX Lead', company: 'Innovate Inc', date: 'Yesterday', score: 76, type: 'Stress Interview', icon: Activity, color: 'text-slate-900', bg: 'bg-slate-100' },
            { role: 'Product Designer', company: 'StartupX', date: '3 days ago', score: 82, type: 'Technical', icon: Sparkles, color: 'text-slate-900', bg: 'bg-slate-100' },
          ].map((session, i) => (
            <Link href="/analysis" key={i} className="bg-white rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-all border border-slate-100 group">
              <div className="flex items-center gap-4">
                <div className={`size-14 rounded-full ${session.bg} ${session.color} flex items-center justify-center shrink-0`}>
                  <session.icon size={24} />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg">{session.role}</h3>
                  <p className="text-slate-500 text-sm">{session.company} • {session.type}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-48">
                <div className="text-right">
                  <div className="text-slate-900 font-bold text-xl">{session.score}%</div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider font-medium">{session.date}</div>
                </div>
                <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
