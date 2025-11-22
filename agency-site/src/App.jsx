import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Rocket, BrainCircuit, Smartphone, 
  ArrowLeft, Code2, LayoutGrid, Users, CheckCircle2, 
  MessageSquare, Zap, MapPin, GraduationCap, User
} from 'lucide-react';

// --- קונפיגורציה ---
const PHONE_NUMBER = "972500000000"; // וודא שהמספר שלך מעודכן כאן
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=היי אופק ותומר, אשמח לשמוע פרטים על בניית אתר/בוט`;

// --- רכיבי עזר ---

const Badge = ({ children, color = "indigo" }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-${color}-500/10 text-${color}-400 border border-${color}-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]`}>
    {children}
  </span>
);

const FounderCard = ({ name, role, location, degree, school, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
  >
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-5 mb-6">
        {/* אזור התמונה */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-500/30 group-hover:border-indigo-500 transition-colors shadow-lg bg-slate-800">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500">
                <User size={32} />
              </div>
            )}
          </div>
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full"></div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <p className="text-indigo-400 font-medium text-sm">{role}</p>
        </div>
      </div>

      <div className="space-y-4 mt-auto border-t border-slate-800/50 pt-6">
        <div className="flex items-start gap-3 text-slate-300">
          <div className="bg-slate-800 p-2 rounded-lg text-indigo-400 group-hover:text-white transition-colors">
            <MapPin size={18} />
          </div>
          <span className="mt-1 text-sm">{location}</span>
        </div>
        
        <div className="flex items-start gap-3 text-slate-300">
          <div className="bg-slate-800 p-2 rounded-lg text-indigo-400 group-hover:text-white transition-colors">
            <GraduationCap size={18} />
          </div>
          <div>
            <div className="font-bold text-white mt-1 text-sm">תואר ראשון במדעי המחשב</div>
            <div className="text-xs text-slate-500">{school}</div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const CodeTerminal = () => (
  <div className="bg-[#0F1623] border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl text-left mx-auto w-full transform hover:scale-[1.02] transition-transform duration-500 relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
    <div className="relative">
      <div className="flex gap-2 mb-4 border-b border-slate-800/60 pb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"/>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"/>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"/>
        <div className="ml-auto text-[10px] md:text-xs text-slate-500 font-mono">ProDevs.tsx</div>
      </div>
      
      <div className="font-mono text-[11px] md:text-sm leading-loose" dir="ltr">
        <p><span className="text-purple-400">const</span> <span className="text-yellow-200">Agency</span> <span className="text-white">=</span> {"{"}</p>
        <div className="pl-4 md:pl-6 border-l border-slate-800/50 ml-1">
          <p>team: <span className="text-blue-400">['Ofek', 'Tomer']</span>,</p>
          <p>stack: <span className="text-green-400">['React', 'Shopify', 'n8n', 'OpenAI']</span>,</p>
          <p>fuel: <span className="text-orange-400">'Coffee ☕'</span>,</p>
          <br className="hidden md:block"/>
          
          <p className="text-slate-500">// The secret sauce:</p>
          <p>launch: <span className="text-purple-400">async</span> (client) <span className="text-purple-400">=&gt;</span> {"{"}</p>
          <div className="pl-4 md:pl-6">
              <p><span className="text-purple-400">const</span> site = <span className="text-blue-400">await</span> build('Premium');</p>
              
              <p><span className="text-slate-500">// Inject Intelligence</span></p>
              <p><span className="text-blue-400">await</span> site.connectAI({"{"}</p>
              <div className="pl-4 text-cyan-300">
                model: 'GPT-4o',
                role: 'Sales_Agent'
              </div>
              <p>{"});"}</p>

              <p><span className="text-purple-400">return</span> {"{"}</p>
              <div className="pl-4">
                 speed: <span className="text-yellow-200">'100ms'</span>,
                 revenue: <span className="text-yellow-200">'Rising 📈'</span>
              </div>
              <p>{"};"}</p>
          </div>
          <p>{"}"}</p>
        </div>
        <p>{"};"}</p>
      </div>
    </div>
  </div>
);

const TypewriterText = () => {
  const words = ["חנויות Shopify", "דפי נחיתה", "בוטים חכמים", "אוטומציות"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden inline-block align-bottom min-w-[200px] text-indigo-400">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const ProcessStep = ({ number, title, description, isLast }) => (
  <div className="relative flex gap-6">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-slate-900 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold z-10 shrink-0">
        {number}
      </div>
      {!isLast && <div className="w-0.5 h-full bg-slate-800 my-2"></div>}
    </div>
    <div className="pb-12">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed max-w-md text-sm md:text-base">{description}</p>
    </div>
  </div>
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
      className={`${sizes[size]} group relative overflow-hidden bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1`}
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

  const openWhatsApp = () => window.open(WHATSAPP_URL, '_blank');

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden" dir="rtl">
      
      {/* רקע רשת טכנולוגי */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-violet-700/10 rounded-full blur-[128px]" />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/90 backdrop-blur-xl border-b border-slate-800/60' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-indigo-600/20 p-2 rounded-lg border border-indigo-500/30 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all">
              <Terminal size={20} className="text-indigo-400 group-hover:text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Pro<span className="text-indigo-500">Devs</span>.
            </span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">שירותים</a>
            <a href="#team" className="hover:text-white transition-colors">מי אנחנו</a>
            <a href="#process" className="hover:text-white transition-colors">תהליך עבודה</a>
          </div>
          
          <button onClick={openWhatsApp} className="bg-white text-slate-950 px-4 md:px-5 py-2 rounded-full font-bold text-sm hover:bg-indigo-50 transition-colors flex items-center gap-2">
            <MessageSquare size={16} />
            <span className="hidden md:inline">דבר איתנו</span>
            <span className="md:hidden">ווטסאפ</span>
          </button>
        </div>
      </nav>

      {/* Hero Section - SWAPPED & MOBILE FIXED */}
      <header className="relative z-10 pt-32 md:pt-48 pb-20 md:pb-32 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* שינוי עיצובי: 
             במחשב (lg): הטור הזה מופיע שני ב-HTML אבל בגלל ה-RTL הוא בצד שמאל.
             במובייל: הוספתי order-last לקוד כדי שהטקסט יופיע קודם.
          */}

          {/* Code Visual (עכשיו ראשון ב-HTML כדי להיות בימין ב-RTL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-last lg:order-none"
          >
             <CodeTerminal />
          </motion.div>

          {/* Text Content (עכשיו שני ב-HTML כדי להיות בשמאל ב-RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // מגיע משמאל
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left" // שינוי יישור טקסט לשמאל
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              צוות פיתוח בוטיק
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
              אנחנו בונים <br />
              <TypewriterText />
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              הצוות הטכנולוגי של העסק שלך.
              פיתוח Custom, איקומרס מתקדם וסוכני AI שהופכים גולשים ללקוחות משלמים.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button onClick={openWhatsApp} className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2">
                בואו נבנה משהו מטורף
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors font-medium">
                תיק עבודות
              </button>
            </div>
          </motion.div>

        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-6 border-t border-slate-800/50 bg-[#0B0F19]/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ארגז הכלים שלנו</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">יותר מסתם עיצוב יפה. מעטפת טכנולוגית מלאה לעסק שלך.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            <BentoCard 
              size="medium"
              title="Shopify Plus & Custom"
              subtitle="כתיבת קוד ייחודי (Liquid & React) לחנויות שרוצות להמיר יותר. אופטימיזציה למהירות וחווית קנייה שלא קיימת בתבניות."
              icon={Smartphone}
              delay={0.1}
            />
            <BentoCard 
              size="small"
              title="AI Agents"
              subtitle="בוטים חכמים לוואטסאפ ולטלגרם שמבינים שפה טבעית, עונים ללקוחות 24/7 וסוגרים עסקאות."
              icon={BrainCircuit}
              delay={0.2}
            />
            <BentoCard 
              size="small"
              title="React Landing Pages"
              subtitle="דפי נחיתה בטכנולוגיה מתקדמת. טעינה מיידית, אנימציות חלקות וביצועים מקסימליים."
              icon={LayoutGrid}
              delay={0.3}
            />
            <BentoCard 
              size="medium"
              title="אוטומציות עסקיות"
              subtitle="חיבור האתר למערכות CRM, סידור לידים אוטומטי (n8n/Make) וחיסכון של שעות עבודה ידנית."
              icon={Zap}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <Badge>הצוות שלנו</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">המוחות מאחורי הקוד</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              אנחנו לא רק בוני אתרים. אנחנו בוגרי מדעי המחשב שמבינים טכנולוגיה לעומק.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FounderCard 
              name="תומר גוזלן"
              role="Co-Founder & Developer"
              location="בית שאן"
              school="אוניברסיטת אריאל"
              image="/tom.jpeg"
              delay={0.1}
            />
            <FounderCard 
              name="אופק נעים"
              role="Co-Founder & Developer"
              location="פתח תקווה"
              school="המכללה למנהל ראשל״צ"
              image="/ofek.jpeg"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 relative z-10 bg-slate-900/30 my-12 md:my-24 md:rounded-[3rem] overflow-hidden mx-4 md:mx-6">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl relative z-20">
          <div className="text-center lg:text-right">
            <Badge>איך אנחנו עובדים?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-6">
              משיחת אפיון <br/>
              <span className="text-indigo-400">ועד להשקה מושלמת</span>
            </h2>
            <p className="text-slate-400 mb-8 text-base md:text-lg">
              כל פרויקט אצלנו עובר תהליך מדויק כדי להבטיח שהתוצאה הסופית תביא לך כסף.
            </p>
            <button onClick={openWhatsApp} className="text-white border-b border-indigo-500 pb-1 hover:text-indigo-400 transition-colors text-sm md:text-base">
              רוצה לשמוע עוד? דבר איתנו &larr;
            </button>
          </div>

          <div className="bg-slate-950/80 border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
            <ProcessStep 
              number="1"
              title="אפיון טכני ועסקי"
              description="נבין מי הלקוחות, מה המתחרים עושים, ואיזה פתרון טכנולוגי ייתן לך יתרון."
            />
            <ProcessStep 
              number="2"
              title="פיתוח ועיצוב"
              description="כתיבת הקוד, חיבור ה-AI ועיצוב הממשק. אתה מקבל עדכונים שוטפים."
            />
            <ProcessStep 
              number="3"
              title="השקה וגדילה"
              description="עלייה לאוויר, בדיקות ביצועים, חיבור דומיין ותמיכה טכנית."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-b from-indigo-900/20 to-slate-900/40 border border-indigo-500/20 rounded-[2rem] p-8 md:p-20 text-center backdrop-blur-sm overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">מוכנים לשדרג?</h2>
            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              שיחת ייעוץ קצרה עם אופק או תומר כדי להבין איך לבנות עבורכם את הנכס הדיגיטלי המושלם.
            </p>
            <button onClick={openWhatsApp} className="bg-white text-slate-950 px-8 md:px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-900/20 hover:shadow-indigo-900/40 hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto w-full md:w-auto">
              <MessageSquare size={20} />
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
        <p>© 2025 אופק ותומר. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
};

export default App;