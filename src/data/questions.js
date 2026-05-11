export const backendQuestions = [
  {
    id: 1,
    question: "bcrypt nima uchun ishlatiladi?",
    keys: ["hash", "shifrlash", "xavfsiz", "kodlash", "hechlash"],
    idealAnswer: "Parolni hash qilish uchun.",
    options: ["Parolni hash qilish uchun", "Malumotlar bazasini ulash uchun", "Token yaratish uchun", "API yaratish uchun"],
    answer: "Parolni hash qilish uchun"
  },
  {
    id: 2,
    question: "cors nima uchun kerak?",
    keys: ["frontend", "ulanishi", "ulash", "ulanish", "ruxsat", "cross", "origin"],
    idealAnswer: "Frontend va backend ulanishi uchun.",
    options: ["Xavfsizlik tokenlarini saqlash uchun", "Frontend va backend ulanishi uchun", "Parollarni tekshirish uchun", "Fayllarni yuklash uchun"],
    answer: "Frontend va backend ulanishi uchun"
  },
  {
    id: 3,
    question: "dotenv nima vazifani bajaradi?",
    keys: [".env", "env", "secret", "maxfiy", "o'zgaruvchi"],
    idealAnswer: ".env dagi secretlarni ishlatish uchun.",
    options: ["Serverni ishga tushiradi", ".env dagi secretlarni ishlatish uchun", "Fayllarni o'qish uchun", "Router yaratish uchun"],
    answer: ".env dagi secretlarni ishlatish uchun"
  },
  {
    id: 4,
    question: "express nima?",
    keys: ["backend", "api", "framework", "server", "yaratish"],
    idealAnswer: "Backend va API yaratish uchun.",
    options: ["Frontend framework", "Ma'lumotlar bazasi", "Backend va API yaratish uchun framework", "Testing kutubxonasi"],
    answer: "Backend va API yaratish uchun framework"
  },
  {
    id: 5,
    question: "joi nima uchun ishlatiladi?",
    keys: ["validation", "validatsiya", "tekshirish", "tekshiruv"],
    idealAnswer: "Malumotlarni validation qilish uchun.",
    options: ["Serverni auto restart qilish", "Fayl tizimi bilan ishlash", "Malumotlarni validation qilish uchun", "Tokenlarni tekshirish uchun"],
    answer: "Malumotlarni validation qilish uchun"
  },
  {
    id: 6,
    question: "jsonwebtoken (JWT) nima?",
    keys: ["token", "avtorizatsiya", "identifikatsiya", "auth", "himoya"],
    idealAnswer: "Token yaratish uchun.",
    options: ["Token yaratish uchun", "Parollarni saqlash uchun", "Ma'lumotlar bazasi ishlashi", "API docs yaratish uchun"],
    answer: "Token yaratish uchun"
  },
  {
    id: 7,
    question: "mongoose nima?",
    keys: ["mongodb", "baza", "odm", "ulash", "ishlash"],
    idealAnswer: "MongoDB bilan ishlash uchun.",
    options: ["PostgreSQL uchun ORM", "MongoDB bilan ishlash uchun", "Server yaratish", "Parol hashlovchi"],
    answer: "MongoDB bilan ishlash uchun"
  },
  {
    id: 8,
    question: "swagger-jsdoc vazifasi nima?",
    keys: ["docs", "dokumentatsiya", "doc", "swagger"],
    idealAnswer: "Swagger docs yaratish uchun.",
    options: ["UI ko'rsatish", "Ma'lumotlarni tekshirish", "Swagger docs yaratish uchun", "Test yozish"],
    answer: "Swagger docs yaratish uchun"
  },
  {
    id: 9,
    question: "swagger-ui-express nima uchun kerak?",
    keys: ["ui", "ko'rsatish", "interfeys", "oyna"],
    idealAnswer: "Swagger UI ko'rsatish uchun.",
    options: ["API yaratish", "Swagger UI ko'rsatish uchun", "Xatolarni ushlash", "Baza interfeysi"],
    answer: "Swagger UI ko'rsatish uchun"
  },
  {
    id: 10,
    question: "nodemon paketi qanday vazifa bajaradi?",
    keys: ["restart", "avto", "auto", "qayta", "yangilash", "avtomatik"],
    idealAnswer: "Serverni auto restart qilish uchun.",
    options: ["Serverni auto restart qilish uchun", "Serverni xavfsiz qilish", "Malumot saqlash", "Log o'qish"],
    answer: "Serverni auto restart qilish uchun"
  },
  {
    id: 11,
    question: "Node.js o'zi nima?",
    keys: ["runtime", "environment", "muhit", "javascript"],
    idealAnswer: "JavaScript kodlarini serverda ishlatish uchun runtime muhit.",
    options: ["Brauzer", "JavaScript runtime environment", "Faqat frontend", "Ma'lumotlar bazasi"],
    answer: "JavaScript runtime environment"
  },
  {
    id: 12,
    question: "npm nima?",
    keys: ["package", "manager", "paket", "yuklash"],
    idealAnswer: "Node Package Manager - kutubxonalarni boshqarish vositasi.",
    options: ["Node Package Manager", "New Project Module", "Network Protocol", "Node Process Manager"],
    answer: "Node Package Manager"
  },
  {
    id: 13,
    question: "package.json fayli nima?",
    keys: ["sozlama", "paketlar", "skript", "script", "kutubxonalar"],
    idealAnswer: "Loyihaning sozlamalari va paketlari saqlanadigan fayl.",
    options: ["Loyihaning sozlamalari va paketlarini saqlash uchun", "HTML kodlarini saqlash", "Baza arxitekturasi", "Faqat parollar"],
    answer: "Loyihaning sozlamalari va paketlarini saqlash uchun"
  },
  {
    id: 14,
    question: "node_modules papkasi vazifasi?",
    keys: ["kutubxona", "paket", "yuklangan", "library"],
    idealAnswer: "Loyihaga o'rnatilgan paketlar (librarylar) saqlanadi.",
    options: ["Yuklab olingan paketlar (librarylar) saqlanadi", "Loyiha rasmlari saqlanadi", "Faqat backend kodlar", "Brauzer keshi"],
    answer: "Yuklab olingan paketlar (librarylar) saqlanadi"
  },
  {
    id: 15,
    question: "fs moduli nima?",
    keys: ["fayl", "file", "o'qish", "yozish"],
    idealAnswer: "Fayllar tizimi bilan ishlash uchun (o'qish, yozish).",
    options: ["Fayllar tizimi bilan ishlash", "Serverni xavfsiz qilish", "Tarmoq bilan ishlash", "Bazaga ulanish"],
    answer: "Fayllar tizimi bilan ishlash"
  },
  {
    id: 16,
    question: "path moduli vazifasi?",
    keys: ["yo'l", "path", "manzil", "birlashtirish"],
    idealAnswer: "Fayl yo'llari (path) bilan ishlash uchun.",
    options: ["Marshrutlarni boshqarish", "Fayl yo'llari (path) bilan ishlash", "Tarmoqni tekshirish", "Tokenlarni tekshirish"],
    answer: "Fayl yo'llari (path) bilan ishlash"
  },
  {
    id: 17,
    question: "http moduli nima?",
    keys: ["http", "server", "so'rov", "javob"],
    idealAnswer: "Node.js da HTTP server yaratish uchun.",
    options: ["HTTP server yaratish uchun", "Fayllarni o'chirish", "Parollarni tekshirish", "Bazaga ulanish"],
    answer: "HTTP server yaratish uchun"
  },
  {
    id: 18,
    question: "Event Loop nima?",
    keys: ["asinxron", "async", "navbat", "aylanma"],
    idealAnswer: "Asinxron jarayonlarni boshqaruvchi mexanizm.",
    options: ["Asinxron operatsiyalarni boshqaruvchi mexanizm", "Sinxron kodlar tizimi", "Baza turi", "Framework arxitekturasi"],
    answer: "Asinxron operatsiyalarni boshqaruvchi mexanizm"
  },
  {
    id: 19,
    question: "Callback nima?",
    keys: ["parametr", "qaytarish", "funksiya", "ichida"],
    idealAnswer: "Boshqa funksiyaga parametr sifatida beriladigan funksiya.",
    options: ["Boshqa funksiyaga parametr sifatida beriladigan funksiya", "Xatolarni ushlash moduli", "Serverni to'xtatuvchi kod", "Baza so'rovi"],
    answer: "Boshqa funksiyaga parametr sifatida beriladigan funksiya"
  },
  {
    id: 20,
    question: "Promise nima?",
    keys: ["kelajak", "natija", "va'da", "asinxron"],
    idealAnswer: "Asinxron jarayonning kelajakdagi holati.",
    options: ["Sinxron funksiya", "Asinxron jarayonning kelajakdagi holatini ifodalovchi obyekt", "Fayl yuklovchi", "Router yaratuvchi"],
    answer: "Asinxron jarayonning kelajakdagi holatini ifodalovchi obyekt"
  },
  {
    id: 21,
    question: "async/await maqsadi?",
    keys: ["promise", "oson", "sinxon", "kutish"],
    idealAnswer: "Promiselar bilan oson ishlash uchun.",
    options: ["Promiselar bilan oson ishlash uchun", "HTML ni render qilish", "Serverni tezlashtirish", "Xatolarni o'chirish"],
    answer: "Promiselar bilan oson ishlash uchun"
  },
  {
    id: 22,
    question: "Middleware vazifasi?",
    keys: ["oraliq", "o'rta", "req", "res", "tekshirish"],
    idealAnswer: "So'rov va javob o'rtasida ishlaydigan oraliq funksiya.",
    options: ["Faqat baza modeli", "So'rov va javob o'rtasida ishlaydigan funksiya", "Frontend ulanishi", "Fayllarni yuklash moduli"],
    answer: "So'rov va javob o'rtasida ishlaydigan funksiya"
  },
  {
    id: 23,
    question: "req.body da nima keladi?",
    keys: ["tana", "post", "malumot", "put"],
    idealAnswer: "Clientdan kelgan asosiy ma'lumotlar tanasi.",
    options: ["Fayl hajmi", "Mijozdan kelayotgan ma'lumotlar tanasi", "Server javobi", "Token kodi"],
    answer: "Mijozdan kelayotgan ma'lumotlar tanasi"
  },
  {
    id: 24,
    question: "req.params da nima olinadi?",
    keys: ["url", "parametr", "id", "o'zgaruvchi"],
    idealAnswer: "URL dagi dinamik parametrlar (masalan /users/:id).",
    options: ["URL dagi o'zgaruvchilar (masalan: /users/:id)", "Formadan kelganlar", "Server porti", "Query so'rovlar"],
    answer: "URL dagi o'zgaruvchilar (masalan: /users/:id)"
  },
  {
    id: 25,
    question: "req.query nima qaytaradi?",
    keys: ["url", "so'rov", "filter", "?", "qidiruv"],
    idealAnswer: "URL dagi so'rov (filter) belgilari (masalan ?id=1).",
    options: ["Fayl formati", "URL oxiridagi so'rovlar (masalan: ?name=Ali)", "Parollar ro'yxati", "Server IP"],
    answer: "URL oxiridagi so'rovlar (masalan: ?name=Ali)"
  },
  {
    id: 26,
    question: "res.json() vazifasi?",
    keys: ["json", "javob", "format", "obyekt"],
    idealAnswer: "Javobni JSON formatida yuborish uchun.",
    options: ["HTML javob qaytaradi", "JSON formatida javob qaytaradi", "Faylni yuklaydi", "Serverni to'xtatadi"],
    answer: "JSON formatida javob qaytaradi"
  },
  {
    id: 27,
    question: "res.send() qanday ishlaydi?",
    keys: ["har", "qanday", "matn", "html", "javob"],
    idealAnswer: "Har qanday turdagi javobni yuborish uchun.",
    options: ["Har qanday turdagi javobni qaytaradi (matn, html, json)", "Faqat xatolarni", "Token saqlaydi", "Fayl o'chiradi"],
    answer: "Har qanday turdagi javobni qaytaradi (matn, html, json)"
  },
  {
    id: 28,
    question: "res.status() nima qiladi?",
    keys: ["holat", "kod", "http", "200", "404"],
    idealAnswer: "HTTP status kodini belgilaydi.",
    options: ["Faqat 200 qaytaradi", "HTTP status kodini belgilash uchun", "Baza holati", "Token yaroqliligi"],
    answer: "HTTP status kodini belgilash uchun"
  },
  {
    id: 29,
    question: "MongoDB arxitekturasi qanday?",
    keys: ["nosql", "hujjat", "document"],
    idealAnswer: "NoSQL va hujjatga (document) asoslangan.",
    options: ["SQL baza", "NoSQL hujjatga asoslangan ma'lumotlar bazasi", "Frontend qism", "Fayl xeshlash"],
    answer: "NoSQL hujjatga asoslangan ma'lumotlar bazasi"
  },
  {
    id: 30,
    question: "Collection nima?",
    keys: ["to'plam", "jadval", "hujjatlar"],
    idealAnswer: "Hujjatlar (documents) to'plami.",
    options: ["Bitta ma'lumot", "Hujjatlar to'plami (SQL dagi jadvalga o'xshash)", "Fayllar to'plami", "Bitta massiv"],
    answer: "Hujjatlar to'plami (SQL dagi jadvalga o'xshash)"
  },
  {
    id: 31,
    question: "Document (MongoDB) nimaga o'xshaydi?",
    keys: ["qator", "yozuv", "obyekt", "json"],
    idealAnswer: "Bitta ma'lumot yozuvi yoki obyektga.",
    options: ["HTML fayl", "Bitta ma'lumot yozuvi (SQL dagi qatorga o'xshash)", "Foydalanuvchilar ro'yxati", "Parol"],
    answer: "Bitta ma'lumot yozuvi (SQL dagi qatorga o'xshash)"
  },
  {
    id: 32,
    question: "Schema (Mongoose) nima?",
    keys: ["struktura", "qolip", "shakl"],
    idealAnswer: "Ma'lumotlar strukturasini belgilovchi qolip.",
    options: ["Fayl tizimi formati", "Ma'lumotlar bazasidagi hujjat strukturasini belgilaydi", "Token o'qish", "Frontend dizayni"],
    answer: "Ma'lumotlar bazasidagi hujjat strukturasini belgilaydi"
  },
  {
    id: 33,
    question: "Model (Mongoose) qanday obyekt?",
    keys: ["schema", "baza", "ulanish", "crud"],
    idealAnswer: "Schema asosida baza bilan ishlovchi obyekt.",
    options: ["Schema asosida ma'lumotlar bazasi bilan ishlash obyekti", "Faqat validatsiya", "Fayllar arxitekturasi", "URL boshqaruvi"],
    answer: "Schema asosida ma'lumotlar bazasi bilan ishlash obyekti"
  },
  {
    id: 34,
    question: "CRUD so'zi ma'nosi?",
    keys: ["create", "read", "update", "delete", "yaratish", "o'qish", "yangilash", "o'chirish"],
    idealAnswer: "Create, Read, Update, Delete.",
    options: ["Create, Read, Update, Delete", "Copy, Run, Upload, Download", "Catch, Return, Use, Do", "Connect, Route, Update, Disconnect"],
    answer: "Create, Read, Update, Delete"
  },
  {
    id: 35,
    question: "HTTP GET metodi nima?",
    keys: ["olish", "o'qish", "ko'rish"],
    idealAnswer: "Ma'lumotni olish yoki o'qish uchun.",
    options: ["Yangi qo'shish", "Ma'lumotni o'qish/olish uchun", "O'chirish", "Yangilash"],
    answer: "Ma'lumotni o'qish/olish uchun"
  },
  {
    id: 36,
    question: "HTTP POST metodi?",
    keys: ["yaratish", "qo'shish", "yuborish", "yangi"],
    idealAnswer: "Yangi ma'lumot yaratish uchun.",
    options: ["O'qish", "Yangi ma'lumot qo'shish/yuborish uchun", "Qisman o'zgartirish", "Fayl o'chirish"],
    answer: "Yangi ma'lumot qo'shish/yuborish uchun"
  },
  {
    id: 37,
    question: "HTTP PUT metodi?",
    keys: ["yangilash", "o'zgartirish", "tahrirlash", "to'liq"],
    idealAnswer: "Ma'lumotni to'liq yangilash uchun.",
    options: ["Parol yuborish", "Ma'lumotni to'liq yangilash uchun", "Ma'lumotni o'qish", "O'chirish"],
    answer: "Ma'lumotni to'liq yangilash uchun"
  },
  {
    id: 38,
    question: "HTTP DELETE metodi?",
    keys: ["o'chirish", "delete", "tashlash"],
    idealAnswer: "Ma'lumotni o'chirish uchun.",
    options: ["Ma'lumotni o'chirish uchun", "Fayl yaratish", "Foydalanuvchi qo'shish", "Xatoni yashirish"],
    answer: "Ma'lumotni o'chirish uchun"
  },
  {
    id: 39,
    question: "200 Status Code ma'nosi?",
    keys: ["ok", "muvaffaqiyat", "yaxshi", "to'g'ri"],
    idealAnswer: "Muvaffaqiyatli (OK).",
    options: ["Serverda xatolik", "Topilmadi", "Muvaffaqiyatli (OK)", "Ruxsat etilmagan"],
    answer: "Muvaffaqiyatli (OK)"
  },
  {
    id: 40,
    question: "404 Status Code ma'nosi?",
    keys: ["topilmadi", "not", "found", "yo'q"],
    idealAnswer: "Ma'lumot topilmadi (Not Found).",
    options: ["Server ishdan to'xtadi", "Ma'lumot topilmadi (Not Found)", "Muvaffaqiyatli", "Parol noto'g'ri"],
    answer: "Ma'lumot topilmadi (Not Found)"
  }
];
