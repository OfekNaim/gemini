import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Rocket, BrainCircuit, Smartphone, 
  ArrowLeft, Code2, LayoutGrid, Users 
} from 'lucide-react';

// --- רכיבי עזר ---

const Badge = ({ children, color = "indigo" }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>
    {children}
  </span>
);

const BentoCard = ({ title, subtitle, icon: Icon, size = "small", delay = 0 }) => {
  const sizes = {
    small: "col-span-1",
    medium: "col-span-1 md:col-span-2",
    large: "col-span-1 md:row-span-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${sizes[size]} group relative overflow-hidden bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10`}
    >
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-500">
        <Icon size={140} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="bg-slate-800/50 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
          <Icon className="text-indigo-300 group-hover:text-white" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- הדף הראשי ---

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden" dir="rtl">
      
      {/* רקע נושם */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-violet-700/10 rounded-full blur-[128px]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-indigo-600/20 p-2 rounded-lg border border-indigo-500/30 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all">
              <Terminal size={20} className="text-indigo-400 group-hover:text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Pro<span className="text-indigo-500">Devs</span>.
            </span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">מה אנחנו עושים</a>
            <a href="#process" className="hover:text-white transition-colors">התהליך</a>
            <a href="#tech" className="hover:text-white transition-colors">טכנולוגיה</a>
          </div>
          
          <button className="bg-white text-slate-950 px-5 py-2 rounded-full font-bold text-sm hover:bg-indigo-50 transition-colors">
            צור קשר
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-40 pb-32 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
              <Users size={14} />
              <span>צוות פיתוח בוטיק – אופק & תומר</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              לא עוד סוכנות שיווק. <br />
              אנחנו <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">צוות פיתוח.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              בניית נכסים דיגיטליים ברמה של בית תוכנה.
              חנות Shopify ודפי נחיתה שמשלבים קוד מתקדם, בינה מלאכותית ואוטומציות שמגדילות רווחים.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2">
                לבדיקת התאמה לפרויקט
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors font-medium">
                צפה בתיק העבודות
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Bento Grid Services */}
      <section id="services" className="relative z-10 py-24 px-6 bg-slate-950/50 border-t border-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">הסטאק הטכנולוגי שלנו</h2>
            <p className="text-slate-400 max-w-xl mx-auto">אנחנו משלבים בין תשתיות איקומרס חזקות לבין כוח העיבוד של AI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <BentoCard 
              size="medium"
              title="Premium Shopify Development"
              subtitle="אנחנו לא סתם מתקינים תבנית. אנחנו כותבים קוד (Liquid & React) כדי ליצור חווית קנייה ייחודית, מהירה בטירוף, שמבדלת את המותג שלך מכל החנויות הגנריות."
              icon={Smartphone}
              delay={0.1}
            />
            <BentoCard 
              size="small"
              title="AI Agents Integration"
              subtitle="שילוב סוכני מכירות מבוססי AI שעובדים 24/7 בוואטסאפ ובאתר, עונים ללקוחות וסוגרים עסקאות."
              icon={BrainCircuit}
              delay={0.2}
            />
            <BentoCard 
              size="small"
              title="High-End Landing Pages"
              subtitle="דפי נחיתה שנראים מיליון דולר. שימוש באנימציות ומיקרו-אינטראקציות כדי להשאיר רושם בלתי נשכח."
              icon={LayoutGrid}
              delay={0.3}
            />
            <BentoCard 
              size="medium"
              title="Full-Stack Performance"
              subtitle="אופטימיזציה ברמת השרת והקוד. אנחנו דואגים שהאתר יעמוד בעומסים, יקודם בגוגל (SEO טכני) ויטוס בכל מכשיר."
              icon={Rocket}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Us - Code Section */}
      <section className="py-24 relative z-10 bg-[#0B0F19]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Code Visual */}
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-20 rounded-full"></div>
            <div className="relative bg-[#0F1623] border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden group">
              {/* Window Controls */}
              <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"/>
                <div className="w-3 h-3 rounded-full bg-green-500/80"/>
                <div className="ml-auto text-xs text-slate-500 font-mono">ProDevs.config.ts</div>
              </div>
              
              {/* Code Content */}
              <div className="font-mono text-sm leading-loose">
                <p><span className="text-purple-400">const</span> <span className="text-yellow-200">AgencyTeam</span> <span className="text-white">=</span> {"{"}</p>
                <div className="pl-6 border-l border-slate-800/50 ml-1">
                  <p>partners: <span className="text-blue-400">['Ofek', 'Tomer']</span>,</p>
                  <p>specialty: <span className="text-green-400">'eCommerce & AI'</span>,</p>
                  <p>experience: <span className="text-orange-400">Infinity</span>,</p>
                  <br/>
                  <p><span className="text-slate-500">// The secret sauce:</span></p>
                  <p>method: <span className="text-purple-400">async</span> () <span className="text-purple-400">=&gt;</span> {"{"}</p>
                  <div className="pl-6">
                     <p><span className="text-purple-400">await</span> buildPremiumSite();</p>
                     <p><span className="text-purple-400">await</span> integrateAI();</p>
                     <p><span className="text-purple-400">return</span> <span className="text-yellow-200">"Massive Growth 🚀"</span>;</p>
                  </div>
                  <p>{"}"}</p>
                </div>
                <p>{"};"}</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <Badge>ProDevs Studio</Badge>
            <h2 className="text-4xl font-bold text-white mt-6 mb-6 leading-tight">
              שני מוחות טכנולוגיים <br/> 
              <span className="text-indigo-400">שעובדים בשבילך</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg">
              <p>
                הבעיה בשוק היא שרוב בוני האתרים הם מעצבים גרפיים שלמדו כלי No-Code. הם יודעים לעשות "יפה", אבל הם לא מבינים איך המערכת עובדת מתחת למכסה המנוע.
              </p>
              <p>
                אנחנו ב-ProDevs מגיעים מעולם הפיתוח ומדעי המחשב. אנחנו לא רק בונים חנות, אנחנו בונים מכונה משומנת שעובדת מהר, מתממשקת למערכות חיצוניות, ומבינה את הלקוחות שלך באמצעות AI.
              </p>
              
              <div className="flex items-center gap-8 mt-8">
                <div className="flex -space-x-4">
                   <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center border-4 border-[#0B0F19] text-white font-bold">O</div>
                   <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center border-4 border-[#0B0F19] text-white font-bold">T</div>
                </div>
                <div className="text-sm font-medium text-white">
                  Ofek & Tomer<br/>
                  <span className="text-slate-500 font-normal">Founders & Developers</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-b from-indigo-900/20 to-slate-900/40 border border-indigo-500/20 rounded-[2rem] p-12 md:p-20 text-center backdrop-blur-sm overflow-hidden relative">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">מוכנים לקחת את העסק לשלב הבא?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              בואו נדבר. שיחת ייעוץ קצרה עם אופק או תומר כדי להבין איך אנחנו יכולים לבנות עבורכם את הנכס הדיגיטלי המושלם.
            </p>
            <button className="bg-white text-slate-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl shadow-indigo-900/20">
              דבר איתנו בווטסאפ
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 bg-[#0B0F19] relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2 opacity-70">
          <Terminal size={16} />
          <span className="font-semibold">ProDevs</span>
        </div>
        <p>© 2025 ProDevs Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;