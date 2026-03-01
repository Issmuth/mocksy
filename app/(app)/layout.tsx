import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow flex flex-col relative">
          {children}
        </main>
      </div>
    </>
  );
}
