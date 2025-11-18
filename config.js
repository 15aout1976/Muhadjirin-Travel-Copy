// config.js
// ⚠️ CLIENTS ONLY EDIT THIS FILE — NO HTML/JS KNOWLEDGE NEEDED

window.SHARQIA_CONFIG = {
  // ── Agency Identity ───────────────────────────────────────
  agency: {
    name: "وكالة المهاجرين ترافل للعمرة والأسفار",
    tagline: "معتمرونا... أمانة بين أيدينا",
    logoIcon: "logo.png", // Font Awesome class (e.g., "fas fa-mosque")
    copyrightYear: "2025"
  },

  // ── Contact Info ──────────────────────────────────────────
  contact: {
    phone: "213560460296+",           // For call links
    whatsapp: "213560460296",         // Without "+" (for wa.me)
    email: "almohajirintravel05@gmail.com",
    address: "أمام بلدية باتنة،الزمالة،باتنة،الجزائر",
    workingHours: "السبت - الخميس: 8 صباحاً - 8 مساءً<br>الجمعة: 10 صباحاً - 4 عصراً"
  },

  // ── Packages (Dynamic) ────────────────────────────────────
  packages: [
    {
      name: "الباقة الأساسية",
      price: "13 مليون و 500",
      isFeatured: false,
      features: [
        "استخراج تأشيرة العمرة",
        "تذاكر الطيران ذهاب وعودة",
        "الإقامة في فنادق 3 نجوم",
        "النقل الداخلي بين المشاعر",
        "دليل مناسك العمرة"
      ]
    },
    {
      name: "الباقة المميزة",
      price: "18 مليون و 500 ألف",
      isFeatured: true,
      features: [
        "كل ما في الباقة الأساسية",
        "الإقامة في فنادق 4 نجوم قريبة من الحرم",
        "وجبات طعام يومية",
        "مرشد ديني مرافق",
        "تأمين صحي شامل",
        "زيارة للأماكن الدينية في المدينة المنورة"
      ]
    },
    {
      name: "الباقة الفاخرة",
      price: "26 مليون و 500 ألف",
      isFeatured: false,
      features: [
        "كل ما في الباقة المميزة",
        "الإقامة في فنادق 5 نجوم على بعد خطوات من الحرم",
        "وجبات طعام فاخرة وبوفيه مفتوح",
        "خدمة الضيافة الفاخرة",
        "تنقلات بسيارات فاخرة",
        "برنامج ديني متكامل"
      ]
    }
  ],

  // ── Google Drive Media Gallery ────────────────────────────
  googleDrive: {
    folderId: "1ABC123xyz...", // ← CLIENT replaces this
    apiKey: "AIzaSy..."        // ← CLIENT replaces this
  },

  // ── Social Links ──────────────────────────────────────────
  social: {
    facebook: "https://www.facebook.com/share/1Adfyp9AMr/",
    tiktok: "https://www.tiktok.com/@el_mohajrine.travel?_r=1&_t=ZS-91HylxsPzbp",
    instagram: "https://www.instagram.com/el_mohajrine.travel05?igsh=MWU0Z3Yzbmpma3ZlOA==",
    whatsapp: "https://wa.me/213560460296"
  },

  // ── SEO Metadata ──────────────────────────────────────────
  seo: {
    title: "وكالة المهاجرين للعمرة والأسفار - معتمرونا... أمانة بين أيدينا",
    description: "نقدم باقات متكاملة للعمرة بأسعار مناسبة وخدمة مميزة. احجز رحلتك الروحية الآن.",
    keywords: "العمرة, وكالة عمرة, رحلات عمرة, تأشيرة عمرة, العمرة من الجزائر"
  },

  // ── Chatbot Responses ─────────────────────────────────────
  chatbot: {
    welcome: "السلام عليكم! أنا مساعد وكالة المهاجرين للعمرة والأسفار. كيف يمكنني مساعدتك اليوم؟",
    fallback: "للاستفسار، تواصل معنا عبر الواتساب: +213661671460"
  }
};