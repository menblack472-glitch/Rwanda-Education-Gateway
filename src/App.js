import React, { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';

export default function EducationGateway() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    program: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const universities = [
    {
      id: 1,
      name: 'ANIS',
      fullName: 'Université Anis pour la Technologie et le Management',
      rating: 4.6,
      reviews: 245,
      image: '🏛️',
      coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      description: 'متخصصة في التكنولوجيا والإدارة، تتمتع بسمعة عالية في البحث العلمي',
      location: 'كيغالي، رواندا',
      phone: '+250 788 123 456',
      website: 'www.anis.ac.rw',
      programs: [
        { name: 'Computer Science', duration: '4 سنوات', fees: '3,500 USD/سنة', requirements: 'شهادة ثانوية + اختبار قبول' },
        { name: 'Business Administration', duration: '4 سنوات', fees: '3,000 USD/سنة', requirements: 'شهادة ثانوية + اختبار قبول' },
        { name: 'Software Engineering', duration: '4 سنوات', fees: '3,800 USD/سنة', requirements: 'شهادة ثانوية + IELTS 5.5' }
      ],
      livingCosts: {
        housing: '200-400 USD/شهر',
        food: '150-250 USD/شهر',
        transport: '20-50 USD/شهر',
        other: '100-200 USD/شهر'
      },
      benefits: [
        { icon: '📱', title: 'SIM Card مجاني', desc: 'شريحة هاتفية مجانية عند الالتحاق' },
        { icon: '📡', title: 'نت مجاني', desc: 'إنترنت عالي السرعة طوال السنة الدراسية' },
        { icon: '🏨', title: 'استضافة فندقية', desc: 'سكن آمن ومريح بالقرب من الحرم الجامعي' }
      ]
    },
    {
      id: 2,
      name: 'UniLAK',
      fullName: 'Université Libre de Kigali',
      rating: 4.4,
      reviews: 312,
      image: '📚',
      coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&fit=crop',
      description: 'جامعة حرة رائدة في تقديم تعليم عالي الجودة مع تركيز على التطبيقات العملية',
      location: 'كيغالي، رواندا',
      phone: '+250 788 234 567',
      website: 'www.unilak.ac.rw',
      programs: [
        { name: 'Engineering', duration: '4 سنوات', fees: '3,600 USD/سنة', requirements: 'شهادة ثانوية + رياضيات متقدمة' },
        { name: 'Medicine', duration: '6 سنوات', fees: '5,500 USD/سنة', requirements: 'شهادة ثانوية + اختبار طب' },
        { name: 'Law', duration: '4 سنوات', fees: '2,800 USD/سنة', requirements: 'شهادة ثانوية + اختبار قبول' }
      ],
      livingCosts: {
        housing: '250-450 USD/شهر',
        food: '180-280 USD/شهر',
        transport: '30-60 USD/شهر',
        other: '120-220 USD/شهر'
      },
      benefits: [
        { icon: '📱', title: 'SIM Card مجاني', desc: 'شريحة هاتفية مجانية عند الالتحاق' },
        { icon: '📡', title: 'نت مجاني', desc: 'إنترنت عالي السرعة طوال السنة الدراسية' },
        { icon: '🏨', title: 'استضافة فندقية', desc: 'سكن آمن ومريح بالقرب من الحرم الجامعي' }
      ]
    },
    {
      id: 3,
      name: 'ULK',
      fullName: 'Université de Layina Kigali',
      rating: 4.3,
      reviews: 198,
      image: '🎓',
      coverImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop',
      description: 'جامعة حديثة تركز على البرامج المبتكرة والتعليم التفاعلي',
      location: 'كيغالي، رواندا',
      phone: '+250 788 345 678',
      website: 'www.ulk.ac.rw',
      programs: [
        { name: 'Finance', duration: '4 سنوات', fees: '2,900 USD/سنة', requirements: 'شهادة ثانوية + اختبار قبول' },
        { name: 'Information Technology', duration: '4 سنوات', fees: '3,400 USD/سنة', requirements: 'شهادة ثانوية + IELTS 5.0' },
        { name: 'Architecture', duration: '5 سنوات', fees: '3,700 USD/سنة', requirements: 'شهادة ثانوية + اختبار رسم' }
      ],
      livingCosts: {
        housing: '180-350 USD/شهر',
        food: '140-230 USD/شهر',
        transport: '25-45 USD/شهر',
        other: '90-180 USD/شهر'
      },
      benefits: [
        { icon: '📱', title: 'SIM Card مجاني', desc: 'شريحة هاتفية مجانية عند الالتحاق' },
        { icon: '📡', title: 'نت مجاني', desc: 'إنترنت عالي السرعة طوال السنة الدراسية' },
        { icon: '🏨', title: 'استضافة فندقية', desc: 'سكن آمن ومريح بالقرب من الحرم الجامعي' }
      ]
    },
    {
      id: 4,
      name: 'Mount Kenya University',
      fullName: 'Mount Kenya University - Rwanda',
      rating: 4.5,
      reviews: 287,
      image: '⛰️',
      coverImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=400&fit=crop',
      description: 'فرع من جامعة كينية عريقة، متخصصة في البرامج الأكاديمية المتنوعة',
      location: 'كيغالي، رواندا',
      phone: '+250 788 456 789',
      website: 'www.mku.ac.rw',
      programs: [
        { name: 'Accounting', duration: '4 سنوات', fees: '2,700 USD/سنة', requirements: 'شهادة ثانوية + اختبار قبول' },
        { name: 'Nursing', duration: '4 سنوات', fees: '4,200 USD/سنة', requirements: 'شهادة ثانوية + اختبار طبي' },
        { name: 'Marketing', duration: '4 سنوات', fees: '2,600 USD/سنة', requirements: 'شهادة ثانوية' }
      ],
      livingCosts: {
        housing: '200-380 USD/شهر',
        food: '160-260 USD/شهر',
        transport: '28-50 USD/شهر',
        other: '110-190 USD/شهر'
      },
      benefits: [
        { icon: '📱', title: 'SIM Card مجاني', desc: 'شريحة هاتفية مجانية عند الالتحاق' },
        { icon: '📡', title: 'نت مجاني', desc: 'إنترنت عالي السرعة طوال السنة الدراسية' },
        { icon: '🏨', title: 'استضافة فندقية', desc: 'سكن آمن ومريح بالقرب من الحرم الجامعي' }
      ]
    }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ fullName: '', email: '', phone: '', university: '', program: '', message: '' });
      setSubmitted(false);
      setActiveTab('home');
    }, 3000);
  };

  const UniversityCard = ({ uni }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
        <img 
          src={uni.coverImage} 
          alt={uni.name}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <div className="text-white">
            <div className="text-4xl mb-2">{uni.image}</div>
            <h3 className="text-2xl font-bold">{uni.name}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-sm opacity-75 text-gray-600 mb-3">{uni.fullName}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < Math.floor(uni.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
            ))}
          </div>
          <span className="text-sm text-gray-600">({uni.reviews})</span>
        </div>
        
        <p className="text-gray-700 mb-4 text-sm">{uni.description}</p>

        <div className="mb-4 space-y-2">
          {uni.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs bg-blue-50 p-2 rounded">
              <span className="text-lg">{benefit.icon}</span>
              <div>
                <p className="font-semibold text-blue-700">{benefit.title}</p>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => {
            setActiveTab(`uni-${uni.id}`);
            setMenuOpen(false);
          }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
        >
          التفاصيل الكاملة
        </button>
      </div>
    </div>
  );

  const UniversityDetail = ({ uni }) => (
    <div className="space-y-6">
      <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
        <img 
          src={uni.coverImage}
          alt={uni.name}
          className="w-full h-full object-cover"
          onError={(e) => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
          <div className="text-white">
            <div className="text-7xl mb-4">{uni.image}</div>
            <h2 className="text-4xl font-bold">{uni.name}</h2>
            <p className="text-lg opacity-90">{uni.fullName}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">🎁 الميزات</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {uni.benefits.map((benefit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-300">
              <div className="text-5xl mb-3">{benefit.icon}</div>
              <h4 className="font-bold text-lg text-green-700 mb-2">{benefit.title}</h4>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">📚 البرامج</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {uni.programs.map((prog, idx) => (
            <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-lg text-blue-700">{prog.name}</h4>
              <div className="mt-2 space-y-1 text-sm text-gray-700">
                <p><strong>المدة:</strong> {prog.duration}</p>
                <p><strong>الرسوم:</strong> {prog.fees}</p>
                <p><strong>المتطلبات:</strong> {prog.requirements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">💰 تكاليف المعيشة</h3>
        <div className="grid md:grid-cols-2 gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
          {Object.entries(uni.livingCosts).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="font-semibold">{key === 'housing' ? 'السكن' : key === 'food' ? 'الطعام' : key === 'transport' ? 'النقل' : 'أخرى'}:</span>
              <span className="text-green-600 font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-bold mb-3">📞 الاتصال:</h3>
        <p>📞 {uni.phone}</p>
        <p>🌐 {uni.website}</p>
      </div>

      <button
        onClick={() => {
          setActiveTab('form');
          setFormData(prev => ({ ...prev, university: uni.name }));
        }}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-bold text-lg"
      >
        تقديم الآن
      </button>

      <button
        onClick={() => setActiveTab('home')}
        className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 py-2 rounded-lg font-semibold"
      >
        العودة
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Rwanda Education Gateway</h1>
              <p className="text-sm opacity-90">Opening Doors to Education</p>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-white hover:bg-opacity-20 rounded"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <nav className={`${menuOpen ? 'block' : 'hidden'} md:block bg-white border-b`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-2 py-3">
            <button onClick={() => { setActiveTab('home'); setMenuOpen(false); }} className={`px-4 py-2 rounded font-semibold ${activeTab === 'home' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
              الرئيسية
            </button>
            {universities.map(uni => (
              <button
                key={uni.id}
                onClick={() => { setActiveTab(`uni-${uni.id}`); setMenuOpen(false); }}
                className={`px-4 py-2 rounded font-semibold ${activeTab === `uni-${uni.id}` ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                {uni.name}
              </button>
            ))}
            <button onClick={() => { setActiveTab('form'); setMenuOpen(false); }} className={`px-4 py-2 rounded font-semibold ${activeTab === 'form' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
              التقديم
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-4xl font-bold mb-4">مرحباً بك</h2>
              <p className="text-lg opacity-90">بوابة التعليم الرواندية - اكتشف الجامعات الأفضل</p>
              <button
                onClick={() => setActiveTab('form')}
                className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
              >
                ابدأ التقديم
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {universities.map(uni => (
                <UniversityCard key={uni.id} uni={uni} />
              ))}
            </div>
          </div>
        )}

        {universities.map(uni => (
          activeTab === `uni-${uni.id}` && <UniversityDetail key={uni.id} uni={uni} />
        ))}

        {activeTab === 'form' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">نموذج التقديم</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  ✅ تم استقبال طلبك! سنتواصل معك قريباً.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">الاسم الكامل *</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleFormChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="أدخل اسمك" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">البريد *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleFormChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="بريدك" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">الهاتف *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="+250..." />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">الجامعة *</label>
                  <select name="university" value={formData.university} onChange={handleFormChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="">-- اختر --</option>
                    {universities.map(uni => (
                      <option key={uni.id} value={uni.name}>{uni.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">البرنامج</label>
                  <input type="text" name="program" value={formData.program} onChange={handleFormChange} className="w-full p-3 border rounded-lg" placeholder="مثال: Computer Science" />
                </div>

                <div>
                  <label className="block font-semibold mb-2">رسالة إضافية</label>
                  <textarea name="message" value={formData.message} onChange={handleFormChange} rows="4" className="w-full p-3 border rounded-lg" placeholder="أي استفسارات..." />
                </div>

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg">
                  إرسال
                </button>
              </form>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold mb-3">📞 تواصل معنا</h3>
                <p>📧 menblack472@gmail.com</p>
                <p>📱 +250 738 866 281</p>
                <p>⏰ 8 صباحاً - 11 مساءً</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white mt-12 text-center py-8">
        <h3 className="text-xl font-bold mb-2">Rwanda Education Gateway</h3>
        <p>Opening Doors to Education</p>
        <p className="mt-4 text-sm opacity-50">© 2024 جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
