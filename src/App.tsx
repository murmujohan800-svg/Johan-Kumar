import { useState, useEffect } from 'react';
import { 
  Youtube, 
  Link as LinkIcon, 
  Bell, 
  Zap, 
  Share2, 
  CheckCircle2, 
  Play, 
  Clock, 
  BarChart3,
  ChevronRight,
  Instagram,
  Twitter,
  Github,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass p-8 rounded-2xl group cursor-pointer transition-all duration-300 hover:border-brand-neon/50"
  >
    <div className="w-12 h-12 rounded-xl bg-brand-neon/10 flex items-center justify-center mb-6 group-hover:bg-brand-neon/20 transition-colors">
      <Icon className="w-6 h-6 text-brand-neon" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const DashboardPreview = () => {
  return (
    <div className="relative mt-24 max-w-5xl mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-neon/20 to-brand-purple/20 blur-3xl opacity-30" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-2xl overflow-hidden shadow-2xl relative"
      >
        {/* Dashboard Header */}
        <div className="border-bottom border-white/10 p-4 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-xs font-mono text-gray-500">clipforge-dashboard-v1.0</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-6 w-24 bg-white/10 rounded-full" />
            <div className="h-8 w-8 rounded-full bg-brand-neon/20" />
          </div>
        </div>

        <div className="grid grid-cols-12 h-[500px]">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-white/10 p-4 space-y-4 hidden md:block">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-brand-neon/10' : 'bg-white/5'} w-full`} />
            ))}
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-9 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-lg font-semibold">Active Projects</h4>
              <button className="bg-brand-neon text-black px-4 py-1.5 rounded-lg text-sm font-bold">New Automation</button>
            </div>

            <div className="space-y-4">
              {/* Project Item */}
              <div className="glass p-4 rounded-xl flex items-center gap-4">
                <div className="w-24 h-14 bg-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Play className="w-4 h-4 text-white/50" />
                  <div className="absolute bottom-0 left-0 h-1 bg-brand-neon w-2/3" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">The Future of AI - Podcast Ep. 42</div>
                  <div className="text-xs text-gray-500">Uploaded 2h ago • 45:12</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-brand-neon">Processing...</div>
                  <div className="text-[10px] text-gray-500">8 clips detected</div>
                </div>
              </div>

              {/* Clips Grid */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="glass rounded-lg overflow-hidden group cursor-pointer">
                    <div className="aspect-[9/16] bg-white/5 relative">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <Play className="w-8 h-8 text-brand-neon" />
                      </div>
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/60 text-[10px] font-mono">
                        00:32
                      </div>
                    </div>
                    <div className="p-2 border-t border-white/10 flex justify-between items-center">
                      <span className="text-[10px] text-gray-400">Clip #{i}</span>
                      <div className="flex gap-1">
                        <CheckCircle2 className="w-3 h-3 text-brand-neon" />
                        <span className="text-[10px] text-brand-neon">Scheduled</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-neon selection:text-black">
      {/* Animated Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-neon/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-brand-neon rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
              <Zap className="text-black w-6 h-6 fill-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">ClipForge <span className="text-brand-neon">AI</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Dashboard', 'Pricing', 'Docs'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-brand-neon transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-gray-400 hover:text-white transition-colors">Log in</button>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-neon transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5">
              Start Free
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Features', 'Dashboard', 'Pricing', 'Docs'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">
                  {item}
                </a>
              ))}
              <hr className="border-white/10" />
              <button className="w-full bg-brand-neon text-black py-4 rounded-2xl font-bold text-lg">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-neon text-xs font-bold mb-8 animate-float">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-neon"></span>
              </span>
              NEW: AUTO-POST TO TIKTOK & REELS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Long Videos to Viral <br />
              <span className="neon-text">Shorts in Seconds.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              ClipForge AI automatically scans your YouTube videos, detects the most viral moments, 
              and creates high-engagement vertical clips. 100% Free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-brand-neon text-black px-8 py-4 rounded-full font-bold text-lg hover:neon-glow transition-all hover:scale-105 flex items-center justify-center gap-2">
                Start Free Automation <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Youtube className="w-5 h-5 text-red-500" /> Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <DashboardPreview />
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 mt-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to go viral.</h2>
            <p className="text-gray-400">Automate your content pipeline from upload to post.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={LinkIcon}
              title="Connect Channel"
              description="Paste your YouTube URL or login with Google. Connect your channel in seconds."
              delay={0.1}
            />
            <FeatureCard 
              icon={Bell}
              title="Detect Uploads"
              description="System automatically detects new uploads. No manual refresh needed, ever."
              delay={0.2}
            />
            <FeatureCard 
              icon={Zap}
              title="Auto-Clip AI"
              description="AI scans for viral moments using subtitles and engagement prediction. 9:16 ready."
              delay={0.3}
            />
            <FeatureCard 
              icon={Share2}
              title="Auto-Post"
              description="Automatically posts to YouTube Shorts, Instagram Reels, and TikTok."
              delay={0.4}
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 mt-40">
          <div className="glass rounded-[32px] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/10 blur-[100px] rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Free <br />Pricing.</h2>
                <p className="text-gray-400 text-lg mb-8">
                  We believe AI automation should be accessible to every creator. 
                  Get started today with our generous free plan.
                </p>
                <div className="space-y-4">
                  {[
                    '10 free clips per day',
                    'Auto captions included',
                    'No Watermark on free plan',
                    'Viral moment detection',
                    'Multi-platform auto-posting'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-neon/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-brand-neon" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-2xl border-brand-neon/30 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-neon text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  Current Plan
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-brand-neon uppercase tracking-widest">Free Forever</span>
                  <div className="text-6xl font-bold my-4">$0</div>
                  <p className="text-gray-400 mb-8">No credit card required</p>
                  <button className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-brand-neon transition-all">
                    Start Free Automation
                  </button>
                  <p className="text-[10px] text-gray-500 mt-4">By clicking, you agree to our Terms of Service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="max-w-7xl mx-auto px-6 mt-40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Clips Generated', value: '2.4M+' },
              { label: 'Active Creators', value: '50K+' },
              { label: 'Total Views', value: '850M+' },
              { label: 'Time Saved', value: '120K hrs' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-2 neon-text">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-brand-neon w-6 h-6 fill-brand-neon" />
                <span className="text-xl font-bold tracking-tight">ClipForge <span className="text-brand-neon">AI</span></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The world's first truly free AI video automation platform. 
                Built for creators, by creators.
              </p>
              <div className="flex gap-4">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-brand-neon cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-brand-neon cursor-pointer" />
                <Github className="w-5 h-5 text-gray-400 hover:text-brand-neon cursor-pointer" />
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-6">Product</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-brand-neon cursor-pointer">Features</li>
                <li className="hover:text-brand-neon cursor-pointer">Auto-Post</li>
                <li className="hover:text-brand-neon cursor-pointer">AI Captions</li>
                <li className="hover:text-brand-neon cursor-pointer">Pricing</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6">Resources</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-brand-neon cursor-pointer">Documentation</li>
                <li className="hover:text-brand-neon cursor-pointer">API Reference</li>
                <li className="hover:text-brand-neon cursor-pointer">Creator Blog</li>
                <li className="hover:text-brand-neon cursor-pointer">Community</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6">Legal</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-brand-neon cursor-pointer">Privacy Policy</li>
                <li className="hover:text-brand-neon cursor-pointer">Terms of Service</li>
                <li className="hover:text-brand-neon cursor-pointer">Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600">
            <p>© 2024 ClipForge AI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>Status: All Systems Operational</span>
              <span>Built with Gemini AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
