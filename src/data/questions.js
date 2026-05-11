export const backendQuestions = [
  {
    id: 1,
    question: "bcrypt nima uchun ishlatiladi?",
    keys: ["hash", "shifrlash", "xavfsiz", "kodlash", "hechlash"],
    idealAnswer: "Parolni hash qilish uchun."
  },
  {
    id: 2,
    question: "cors nima uchun kerak?",
    keys: ["frontend", "ulanishi", "ulash", "ulanish", "ruxsat", "cross", "origin"],
    idealAnswer: "Frontend va backend ulanishi uchun."
  },
  {
    id: 3,
    question: "dotenv nima vazifani bajaradi?",
    keys: [".env", "env", "secret", "maxfiy", "o'zgaruvchi"],
    idealAnswer: ".env dagi secretlarni ishlatish uchun."
  },
  {
    id: 4,
    question: "express nima?",
    keys: ["backend", "api", "framework", "server", "yaratish"],
    idealAnswer: "Backend va API yaratish uchun."
  },
  {
    id: 5,
    question: "joi nima uchun ishlatiladi?",
    keys: ["validation", "validatsiya", "tekshirish", "tekshiruv"],
    idealAnswer: "Malumotlarni validation qilish uchun."
  },
  {
    id: 6,
    question: "jsonwebtoken (JWT) nima?",
    keys: ["token", "avtorizatsiya", "identifikatsiya", "auth", "himoya"],
    idealAnswer: "Token yaratish uchun."
  },
  {
    id: 7,
    question: "mongoose nima?",
    keys: ["mongodb", "baza", "odm", "ulash", "ishlash"],
    idealAnswer: "MongoDB bilan ishlash uchun."
  },
  {
    id: 8,
    question: "swagger-jsdoc vazifasi nima?",
    keys: ["docs", "dokumentatsiya", "doc", "swagger"],
    idealAnswer: "Swagger docs yaratish uchun."
  },
  {
    id: 9,
    question: "swagger-ui-express nima uchun kerak?",
    keys: ["ui", "ko'rsatish", "interfeys", "oyna"],
    idealAnswer: "Swagger UI ko'rsatish uchun."
  },
  {
    id: 10,
    question: "nodemon paketi qanday vazifa bajaradi?",
    keys: ["restart", "avto", "auto", "qayta", "yangilash", "avtomatik"],
    idealAnswer: "Serverni auto restart qilish uchun."
  },
  {
    id: 11,
    question: "Node.js o'zi nima?",
    keys: ["runtime", "environment", "muhit", "javascript"],
    idealAnswer: "JavaScript kodlarini serverda ishlatish uchun runtime muhit."
  },
  {
    id: 12,
    question: "npm nima?",
    keys: ["package", "manager", "paket", "yuklash"],
    idealAnswer: "Node Package Manager - kutubxonalarni boshqarish vositasi."
  },
  {
    id: 13,
    question: "package.json fayli nima?",
    keys: ["sozlama", "paketlar", "skript", "script", "kutubxonalar"],
    idealAnswer: "Loyihaning sozlamalari va paketlari saqlanadigan fayl."
  },
  {
    id: 14,
    question: "node_modules papkasi vazifasi?",
    keys: ["kutubxona", "paket", "yuklangan", "library"],
    idealAnswer: "Loyihaga o'rnatilgan paketlar (librarylar) saqlanadi."
  },
  {
    id: 15,
    question: "fs moduli nima?",
    keys: ["fayl", "file", "o'qish", "yozish"],
    idealAnswer: "Fayllar tizimi bilan ishlash uchun (o'qish, yozish)."
  },
  {
    id: 16,
    question: "path moduli vazifasi?",
    keys: ["yo'l", "path", "manzil", "birlashtirish"],
    idealAnswer: "Fayl yo'llari (path) bilan ishlash uchun."
  },
  {
    id: 17,
    question: "http moduli nima?",
    keys: ["http", "server", "so'rov", "javob"],
    idealAnswer: "Node.js da HTTP server yaratish uchun."
  },
  {
    id: 18,
    question: "Event Loop nima?",
    keys: ["asinxron", "async", "navbat", "aylanma"],
    idealAnswer: "Asinxron jarayonlarni boshqaruvchi mexanizm."
  },
  {
    id: 19,
    question: "Callback nima?",
    keys: ["parametr", "qaytarish", "funksiya", "ichida"],
    idealAnswer: "Boshqa funksiyaga parametr sifatida beriladigan funksiya."
  },
  {
    id: 20,
    question: "Promise nima?",
    keys: ["kelajak", "natija", "va'da", "asinxron"],
    idealAnswer: "Asinxron jarayonning kelajakdagi holati."
  },
  {
    id: 21,
    question: "async/await maqsadi?",
    keys: ["promise", "oson", "sinxon", "kutish"],
    idealAnswer: "Promiselar bilan oson ishlash uchun."
  },
  {
    id: 22,
    question: "Middleware vazifasi?",
    keys: ["oraliq", "o'rta", "req", "res", "tekshirish"],
    idealAnswer: "So'rov va javob o'rtasida ishlaydigan oraliq funksiya."
  },
  {
    id: 23,
    question: "req.body da nima keladi?",
    keys: ["tana", "post", "malumot", "put"],
    idealAnswer: "Clientdan kelgan asosiy ma'lumotlar tanasi."
  },
  {
    id: 24,
    question: "req.params da nima olinadi?",
    keys: ["url", "parametr", "id", "o'zgaruvchi"],
    idealAnswer: "URL dagi dinamik parametrlar (masalan /users/:id)."
  },
  {
    id: 25,
    question: "req.query nima qaytaradi?",
    keys: ["url", "so'rov", "filter", "?", "qidiruv"],
    idealAnswer: "URL dagi so'rov (filter) belgilari (masalan ?id=1)."
  },
  {
    id: 26,
    question: "res.json() vazifasi?",
    keys: ["json", "javob", "format", "obyekt"],
    idealAnswer: "Javobni JSON formatida yuborish uchun."
  },
  {
    id: 27,
    question: "res.send() qanday ishlaydi?",
    keys: ["har", "qanday", "matn", "html", "javob"],
    idealAnswer: "Har qanday turdagi javobni yuborish uchun."
  },
  {
    id: 28,
    question: "res.status() nima qiladi?",
    keys: ["holat", "kod", "http", "200", "404"],
    idealAnswer: "HTTP status kodini belgilaydi."
  },
  {
    id: 29,
    question: "MongoDB arxitekturasi qanday?",
    keys: ["nosql", "hujjat", "document"],
    idealAnswer: "NoSQL va hujjatga (document) asoslangan."
  },
  {
    id: 30,
    question: "Collection nima?",
    keys: ["to'plam", "jadval", "hujjatlar"],
    idealAnswer: "Hujjatlar (documents) to'plami."
  },
  {
    id: 31,
    question: "Document (MongoDB) nimaga o'xshaydi?",
    keys: ["qator", "yozuv", "obyekt", "json"],
    idealAnswer: "Bitta ma'lumot yozuvi yoki obyektga."
  },
  {
    id: 32,
    question: "Schema (Mongoose) nima?",
    keys: ["struktura", "qolip", "shakl"],
    idealAnswer: "Ma'lumotlar strukturasini belgilovchi qolip."
  },
  {
    id: 33,
    question: "Model (Mongoose) qanday obyekt?",
    keys: ["schema", "baza", "ulanish", "crud"],
    idealAnswer: "Schema asosida baza bilan ishlovchi obyekt."
  },
  {
    id: 34,
    question: "CRUD so'zi ma'nosi?",
    keys: ["create", "read", "update", "delete", "yaratish", "o'qish", "yangilash", "o'chirish"],
    idealAnswer: "Create, Read, Update, Delete."
  },
  {
    id: 35,
    question: "HTTP GET metodi nima?",
    keys: ["olish", "o'qish", "ko'rish"],
    idealAnswer: "Ma'lumotni olish yoki o'qish uchun."
  },
  {
    id: 36,
    question: "HTTP POST metodi?",
    keys: ["yaratish", "qo'shish", "yuborish", "yangi"],
    idealAnswer: "Yangi ma'lumot yaratish uchun."
  },
  {
    id: 37,
    question: "HTTP PUT metodi?",
    keys: ["yangilash", "o'zgartirish", "tahrirlash", "to'liq"],
    idealAnswer: "Ma'lumotni to'liq yangilash uchun."
  },
  {
    id: 38,
    question: "HTTP DELETE metodi?",
    keys: ["o'chirish", "delete", "tashlash"],
    idealAnswer: "Ma'lumotni o'chirish uchun."
  },
  {
    id: 39,
    question: "200 Status Code ma'nosi?",
    keys: ["ok", "muvaffaqiyat", "yaxshi", "to'g'ri"],
    idealAnswer: "Muvaffaqiyatli (OK)."
  },
  {
    id: 40,
    question: "404 Status Code ma'nosi?",
    keys: ["topilmadi", "not", "found", "yo'q"],
    idealAnswer: "Ma'lumot topilmadi (Not Found)."
  }
];
