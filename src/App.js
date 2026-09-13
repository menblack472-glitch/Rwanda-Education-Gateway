import React, { useState, useEffect } from 'react';
import { Menu, X, Star, LogOut, Trash2, CheckCircle } from 'lucide-react';

export default function EducationGateway() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    program: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('applications');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  const universities = [
    {
      id: 1,
      name: 'ANIS',
      fullName: 'Université Anis pour la Technologie et le Management',
      rating: 4.6,
      reviews: 245,
      emoji: '💻',
      color: '#FF6B6B',
      description: 'متخصصة في التكنولوجيا والإدارة',
      programs: ['Computer Science', 'Business Admin', 'Software Engineering']
    },
    {
      id: 2,
      name: 'UniLAK',
      fullName: 'Université Libre de Kigali',
      rating: 4.4,
      reviews: 312,
      emoji: '🏫',
      color: '#4ECDC4',
      description: 'جامعة حرة برامج عملية متقدمة',
      programs: ['Engineering', 'Medicine', 'Law']
    },
    {
      id: 3,
      name: 'ULK',
      fullName: 'Université de Layina Kigali',
      rating: 4.3,
      reviews: 198,
      emoji: '🎓',
      color: '#FFE66D',
      description: 'برامج مبتكرة وتعليم تفاعلي',
      programs: ['Finance', 'IT', 'Architecture']
    },
    {
      id: 4,
      name: 'Mount Kenya',
      fullName: 'Mount Kenya University - Rwanda',
      rating: 4.5,
      reviews: 287,
      emoji: '⛰️',
      color: '#95E1D3',
      description: 'برامج أكاديمية متنوعة',
      programs: ['Accounting', 'Nursing', 'Marketing']
    }
  ];

  const handleAdminLogin = (password) => {
    if (password === '1234') {
      setIsAdminLoggedIn(true);
      setShowPasswordInput(false);
      setAdminPassword('');
    } else {
      alert('كلمة المرور خاطئة!');
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString('ar-EG'),
      status: 'جديد'
    };
    setApplications([newApplication, ...applications]);
    setSubmitted(true);
    setFormData({ fullName: '', email: '', phone: '', university: '', program: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const deleteApplication = (id) => {
    setApplications(applications.filter(app => app.id !== id));
  };

  const updateStatus = (id, status) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status } : app
    ));
  };

  // الصفحة الرئيسية
  if (activeTab === 'home' && !isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 shadow-2xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="text-white">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
                  🌟 Rwanda Education Gateway
                </h1>
                <p className="text-yellow-200 font-semibold">Opening Doors to Education ✨</p>
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden bg-white/20 hover:bg-white/30 p-2 rounded-lg transition"
              >
                {menuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
              </button>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} md:block bg-black/40 backdrop-blur-md border-b border-purple-500/50`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-2 py-4">
              {universities.map(uni => (
                <button
                  key={uni.id}
                  onClick={() => { setActiveTab(`uni-${uni.id}`); setMenuOpen(false); }}
                  className="px-6 py-2 rounded-lg font-bold text-white hover:bg-white/20 transition transform hover:scale-105"
                  style={{ backgroundColor: uni.color + '20', borderLeft: `3px solid ${uni.color}` }}
                >
                  {uni.emoji} {uni.name}
                </button>
              ))}
              <button
                onClick={() => { setActiveTab('form'); setMenuOpen(false); }}
                className="px-6 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg transition"
              >
                📝 تقديم طلب
              </button>
              <button
                onClick={() => setShowPasswordInput(true)}
                className="px-6 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg transition"
              >
                👨‍💼 Admin
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            اختر مستقبلك <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-red-300 bg-clip-text text-transparent">الآن! 🚀</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-8">أفضل الجامعات في رواندا - معلومات شاملة وتقديم مباشر</p>
          <button
            onClick={() => setActiveTab('form')}
            className="px-10 py-4 text-2xl font-bold rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white hover:shadow-2xl transition transform hover:scale-110"
          >
            ابدأ رحلتك 🎓
          </button>
        </section>

        {/* Universities Grid */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-5xl font-black text-white mb-12 text-center">الجامعات المتاحة ⭐</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {universities.map(uni => (
              <div
                key={uni.id}
                onClick={() => setActiveTab(`uni-${uni.id}`)}
                className="group cursor-pointer"
              >
                <div
                  className="p-8 rounded-2xl text-center text-white hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
                  style={{ background: `linear-gradient(135deg, ${uni.color} 0%, ${uni.color}cc 100%)` }}
                >
                  <div className="text-6xl mb-4">{uni.emoji}</div>
                  <h4 className="text-2xl font-bold mb-2">{uni.name}</h4>
                  <p className="text-sm opacity-90 mb-4">{uni.description}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className={i < Math.floor(uni.rating) ? 'fill-yellow-300 text-yellow-300' : 'text-white/30'} />
                    ))}
                  </div>
                  <p className="text-xs mt-2 opacity-75">({uni.reviews} تقييم)</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="bg-gradient-to-r from-purple-900 to-black mt-20 py-12 border-t border-purple-500/50">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">📞 تواصل معنا</h3>
            <p className="text-xl mb-2">📧 menblack472@gmail.com</p>
            <p className="text-xl mb-2">📱 +250 738 866 281</p>
            <p className="text-xl">⏰ 8 صباحاً - 11 مساءً</p>
          </div>
        </footer>
      </div>
    );
  }

  // صفحة التقديم
  if (activeTab === 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveTab('home')}
              className="text-white font-bold text-lg hover:text-yellow-300 transition"
            >
              ← العودة للرئيسية
            </button>
          </div>
        </header>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h2 className="text-4xl font-black text-white mb-2">📝 نموذج التقديم</h2>
            <p className="text-gray-300 mb-8">ملء البيانات وسنتواصل معك مباشرة!</p>

            {submitted && (
              <div className="bg-green-500/30 border-2 border-green-400 text-green-200 px-6 py-4 rounded-xl mb-8 flex items-center gap-3">
                <CheckCircle size={24} />
                <div>
                  <p className="font-bold">✅ تم استقبال طلبك بنجاح!</p>
                  <p className="text-sm">سيتم التواصل معك قريباً على البريد والهاتف</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-bold mb-3">الاسم الكامل *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  required
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-bold mb-3">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-3">رقم الهاتف *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition"
                    placeholder="+250 738 866 281"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-bold mb-3">الجامعة *</label>
                  <select
                    name="university"
                    value={formData.university}
                    onChange={handleFormChange}
                    required
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white focus:border-yellow-400 focus:outline-none transition"
                  >
                    <option value="" style={{ backgroundColor: '#1f2937', color: '#fff' }}>-- اختر جامعة --</option>
                    {universities.map(uni => (
                      <option key={uni.id} value={uni.name} style={{ backgroundColor: '#1f2937', color: '#fff' }}>
                        {uni.emoji} {uni.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-bold mb-3">التخصص المفضل</label>
                  <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleFormChange}
                    className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition"
                    placeholder="مثال: Computer Science"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-bold mb-3">رسالة إضافية</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="4"
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition resize-none"
                  placeholder="أي استفسارات أو معلومات إضافية..."
                />
              </div>

              <button
                type="submit"
                className="w-full p-4 rounded-xl bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white font-black text-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                📤 إرسال الطلب الآن
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }

  // صفحة Admin
  if (isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-black text-white">👨‍💼 لوحة التحكم - الطلبات</h1>
            <button
              onClick={() => {
                setIsAdminLoggedIn(false);
                setActiveTab('home');
              }}
              className="flex items-center gap-2 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition"
            >
              <LogOut size={20} /> تسجيل الخروج
            </button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white mb-4">📊 إحصائيات</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <p className="text-sm opacity-75">إجمالي الطلبات</p>
                <p className="text-4xl font-black">{applications.length}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                <p className="text-sm opacity-75">مقبول</p>
                <p className="text-4xl font-black">{applications.filter(a => a.status === 'مقبول').length}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-6 text-white">
                <p className="text-sm opacity-75">قيد الدراسة</p>
                <p className="text-4xl font-black">{applications.filter(a => a.status === 'قيد الدراسة').length}</p>
              </div>
            </div>
          </div>

          {applications.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center border border-white/20">
              <p className="text-2xl text-gray-300 font-bold">لم تصل أي طلبات حتى الآن 📭</p>
            </div>
          ) : (
            <div className="space-y-4">
              {applications.map(app => (
                <div
                  key={app.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-2">{app.fullName}</h3>
                      <div className="space-y-1 text-gray-300">
                        <p>📱 <span className="font-bold">{app.phone}</span></p>
                        <p>📧 {app.email}</p>
                        <p>🎓 {app.university} - {app.program || 'لم يتم التحديد'}</p>
                        <p>📅 {app.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                        className="px-4 py-2 rounded-lg bg-white/20 text-white font-bold border border-white/30 focus:outline-none"
                      >
                        <option value="جديد">🆕 جديد</option>
                        <option value="قيد الدراسة">⏳ قيد الدراسة</option>
                        <option value="مقبول">✅ مقبول</option>
                        <option value="مرفوض">❌ مرفوض</option>
                      </select>
                      <button
                        onClick={() => deleteApplication(app.id)}
                        className="px-4 py-2 rounded-lg bg-red-500/30 hover:bg-red-600 text-red-200 font-bold border border-red-500/50 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                  {app.message && (
                    <div className="bg-white/5 rounded-lg p-3 border-l-4 border-yellow-400 text-gray-300">
                      <p className="text-sm opacity-75">ملاحظات:</p>
                      <p>{app.message}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }

  // صفحة Admin Login
  if (showPasswordInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-md w-full mx-4 shadow-2xl">
          <h2 className="text-3xl font-black text-white mb-2 text-center">🔐 Admin Login</h2>
          <p className="text-gray-300 mb-8 text-center">كلمة المرور: 1234</p>
          
          <input
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin(adminPassword)}
            placeholder="أدخل كلمة المرور"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition mb-6"
          />
          
          <div className="flex gap-4">
            <button
              onClick={() => handleAdminLogin(adminPassword)}
              className="flex-1 p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:shadow-lg transition"
            >
              دخول
            </button>
            <button
              onClick={() => {
                setShowPasswordInput(false);
                setAdminPassword('');
              }}
              className="flex-1 p-3 rounded-xl bg-red-500/30 text-red-200 font-bold hover:bg-red-600 transition"
            >
              إلغاء
            </button>
          </div>
        </div>
      </div>
    );
  }

  // صفحات الجامعات
  const uni = universities.find(u => u.id === parseInt(activeTab.split('-')[1]));
  if (uni) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900">
        <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <button
              onClick={() => setActiveTab('home')}
              className="text-white font-bold text-lg hover:text-yellow-300 transition"
            >
              ← العودة للرئيسية
            </button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 py-12">
          <div
            className="p-12 rounded-3xl text-white text-center mb-12"
            style={{ background: `linear-gradient(135deg, ${uni.color} 0%, ${uni.color}cc 100%)` }}
          >
            <div className="text-8xl mb-4">{uni.emoji}</div>
            <h2 className="text-5xl font-black mb-4">{uni.name}</h2>
            <p className="text-xl opacity-90 mb-6">{uni.fullName}</p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={30} className={i < Math.floor(uni.rating) ? 'fill-yellow-300 text-yellow-300' : 'text-white/30'} />
              ))}
            </div>
            <p className="text-lg">⭐ {uni.rating} / 5 ({uni.reviews} تقييم)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-black text-white mb-6">📚 البرامج المتاحة</h3>
              <div className="space-y-3">
                {uni.programs.map((prog, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white">
                    <span className="text-2xl">✨</span>
                    <span className="font-bold">{prog}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-black text-white mb-6">🎁 الفوائع الحصرية</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">📱</span>
                  <div>
                    <p className="font-bold text-white">SIM Card مجاني</p>
                    <p className="text-sm text-gray-300">شريحة هاتفية مجانية</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">📡</span>
                  <div>
                    <p className="font-bold text-white">نت مجاني</p>
                    <p className="text-sm text-gray-300">إنترنت عالي السرعة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🏨</span>
                  <div>
                    <p className="font-bold text-white">استضافة فندقية</p>
                    <p className="text-sm text-gray-300">سكن آمن ومريح</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('form')}
            className="w-full p-6 rounded-2xl bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white font-black text-2xl hover:shadow-2xl transition transform hover:scale-105"
          >
            📝 تقديم طلب الآن
          </button>
        </section>
      </div>
    );
  }
}
