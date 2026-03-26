import { browser } from "$app/environment";

export type Locale = "ru" | "en";

const translations: Record<Locale, Record<string, string>> = {
  ru: {
    "nav.about": "О враче",
    "nav.services": "Компетенции",
    "nav.booking": "Запись",
    "nav.contacts": "Личные контакты",
    "nav.bookNow": "Записаться",
    "nav.menu": "Меню",
    "nav.navigation": "Навигация по сайту",

    "hero.specialty": "Нейрохирург · Новосибирск",
    "hero.name": "Владислав",
    "hero.surname": "Кельмаков",
    "hero.experience":
      "17 лет в эндоскопической и малоинвазивной хирургии позвоночника и спинного мозга. Более 2000 операций. Член AOSpine, NASS, RASS.",
    "hero.yearsLabel": "лет опыта",
    "hero.operationsLabel": "операций",
    "hero.degreeLabel": "публикаций",
    "hero.ctaLabel": "Запишитесь на консультацию",
    "hero.bookBtn": "Записаться на приём",
    "hero.moreBtn": "Подробнее о враче",
    "hero.orCall": "или позвоните",

    "about.title": "О враче",
    "about.specialty":
      "Нейрохирург — эндоскопическая и малоинвазивная хирургия позвоночника, нейроонкология, интервенционное лечение боли",
    "about.bio":
      "Кельмаков Владислав Владимирович — нейрохирург с 17-летним опытом, специализирующийся на эндоскопической и малоинвазивной хирургии позвоночника и спинного мозга. Работал в ведущих федеральных центрах нейрохирургии России. Автор более 20 научных публикаций в российских и зарубежных журналах, включая The Spine Journal. Постоянный спикер международных конференций (Москва, Лиссабон, Ташкент, Бухара). Член AOSpine, NASS, RASS и Ассоциации нейрохирургов России.",
    "about.yearsExp": "Лет опыта",
    "about.operations": "Операций",
    "about.degree": "Публикаций",
    "about.category": "Обучено врачей",
    "about.degreeValue": "20+",
    "about.categoryValue": "100+",

    "about.higherEdu": "Кемеровский медицинский университет",
    "about.higherEduDesc": "Лечебный факультет, 2000–2006. Диплом специалиста.",
    "about.residency": "Ординатура по нейрохирургии",
    "about.residencyDesc":
      "Новокузнецкий ГИУВ, 2006–2008. Специализация по нейрохирургии.",
    "about.candidate": "Начало клинической практики",
    "about.candidateDesc":
      "Нейрохирург в клиниках Кемерово и Новокузнецка, 2008–2014.",
    "about.training": "Федеральный центр нейрохирургии",
    "about.trainingDesc":
      "Нейрохирург в ФГБУ «ФЦН» Минздрава России, Новосибирск, 2014–2021. Онкохирургия и эндоскопическая хирургия позвоночника.",
    "about.present": "2025–н.в.",
    "about.presentTitle": "Медика НСК, Новосибирск",
    "about.presentDesc":
      "Эндоскопическая хирургия позвоночника, хирургия опухолей спинного мозга, интервенционное лечение боли.",

    "about.photo1": "В операционной",
    "about.photo2": "В операционной",
    "about.photo3": "Владислав Владимирович",
    "about.photo4": "Владислав Владимирович",

    "services.title": "Компетенции",
    "services.subtitle":
      "Специализация — дегенеративные и онкологические заболевания позвоночника и спинного мозга. Эндоскопические и малоинвазивные методики.",

    "services.spine": "Эндоскопическая хирургия позвоночника",
    "services.spineDesc":
      "Трансфораминальная, интерламинарная и трансторакальная эндоскопия. Шейный, грудной, поясничный отделы. Минимальная травматизация — быстрое восстановление.",
    "services.oncology": "Нейроонкология",
    "services.oncologyDesc":
      "Хирургия опухолей позвоночника и спинного мозга (ImSCT, EmSCT). Резекция с интраоперационным нейромониторингом.",
    "services.hernia": "Спондилодез и декомпрессия",
    "services.herniaDesc":
      "Эндоскопический и малоинвазивный PLIF, TLIF, ALIF. Передняя шейная декомпрессия. Декомпрессия при стенозе позвоночного канала.",
    "services.secondOpinion": "Интервенционное лечение боли",
    "services.secondOpinionDesc":
      "Блокады под контролем УЗИ и рентгена. Радиочастотная денервация фасеточных суставов. Лечение хронического болевого синдрома.",
    "services.consultation": "Консультация",
    "services.consultationDesc":
      "Первичный осмотр, анализ МРТ/КТ, постановка диагноза. Разработка индивидуального плана лечения с учётом всех факторов.",
    "services.rehab": "Второе мнение",
    "services.rehabDesc":
      "Независимая экспертная оценка диагноза и назначенного лечения. Рекомендации по оптимальной тактике на основе международных стандартов.",

    "booking.title": "Запись на приём",
    "booking.subtitle": "Прием пациентов в клинике «Медика НСК», Новосибирск",
    "booking.address": "Адрес",
    "booking.hours": "Время приёма",
    "booking.map": "[ Карта ]",

    "contacts.title": "Личные контакты",
    "contacts.subtitle": "Свяжитесь любым удобным способом",
    "contacts.phone": "Телефон",
    "contacts.email": "Email",
    "contacts.telegram": "Telegram",

    "footer.copyright": "Все права защищены.",
    "footer.policy": "Политика конфиденциальности",
    "footer.disclaimer":
      "Информация на сайте носит справочный характер и не является публичной офертой. Консультации по телефону не ведутся.",
    "footer.neurosurgeon":
      "Нейрохирург · Эндоскопическая хирургия позвоночника",

    "doctor.fullName": "Владислав Кельмаков",
    "page.title": "Нейрохирург Кельмаков В.В. | Новосибирск",
    "page.description":
      "Нейрохирург с 17-летним опытом в Новосибирске. Эндоскопическая хирургия позвоночника, нейроонкология, интервенционное лечение боли. Более 2000 операций.",
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.booking": "Booking",
    "nav.contacts": "Contacts",
    "nav.bookNow": "Book Now",
    "nav.menu": "Menu",
    "nav.navigation": "Site navigation",

    "hero.specialty": "Neurosurgeon · Novosibirsk",
    "hero.name": "Vladislav",
    "hero.surname": "Kelmakov",
    "hero.experience":
      "17 years in endoscopic and minimally invasive spine and spinal cord surgery. Over 2,000 operations. Member of AOSpine, NASS, RASS.",
    "hero.yearsLabel": "years exp.",
    "hero.operationsLabel": "operations",
    "hero.degreeLabel": "publications",
    "hero.ctaLabel": "Book a consultation",
    "hero.bookBtn": "Book an Appointment",
    "hero.moreBtn": "More About the Doctor",
    "hero.orCall": "or call",

    "about.title": "About",
    "about.specialty":
      "Neurosurgeon — endoscopic and minimally invasive spine surgery, neuro-oncology, interventional pain management",
    "about.bio":
      "Vladislav Kelmakov is a neurosurgeon with 17 years of experience specializing in endoscopic and minimally invasive spine and spinal cord surgery. He has worked at leading federal neurosurgery centers in Russia. Author of over 20 scientific publications in Russian and international journals, including The Spine Journal. A regular speaker at international conferences in Moscow, Lisbon, Tashkent and Bukhara. Member of AOSpine, NASS, RASS, and the Russian Association of Neurosurgeons.",
    "about.yearsExp": "Years Exp.",
    "about.operations": "Operations",
    "about.degree": "Publications",
    "about.category": "Doctors Trained",
    "about.degreeValue": "20+",
    "about.categoryValue": "100+",

    "about.higherEdu": "Kemerovo State Medical University",
    "about.higherEduDesc":
      "General Medicine, 2000–2006. Medical specialist degree.",
    "about.residency": "Neurosurgery Residency",
    "about.residencyDesc":
      "Novokuznetsk GIUV, 2006–2008. Specialization in neurosurgery.",
    "about.candidate": "Clinical Practice Begins",
    "about.candidateDesc":
      "Neurosurgeon at hospitals in Kemerovo and Novokuznetsk, 2008–2014.",
    "about.training": "Federal Neurosurgery Center",
    "about.trainingDesc":
      "Neurosurgeon at FSBI Federal Neurosurgery Center, Novosibirsk, 2014–2021. Oncological and endoscopic spine surgery.",
    "about.present": "2025–present",
    "about.presentTitle": "Medika NSK, Novosibirsk",
    "about.presentDesc":
      "Endoscopic spine surgery, spinal cord tumor surgery, interventional pain management.",

    "about.photo1": "Operating room",
    "about.photo2": "Endoscopic spine surgery",
    "about.photo3": "Vladislav Kelmakov",
    "about.photo4": "Surgeon portrait",

    "services.title": "Services",
    "services.subtitle":
      "Specializing in degenerative and oncological diseases of the spine and spinal cord using endoscopic and minimally invasive techniques.",

    "services.spine": "Endoscopic Spine Surgery",
    "services.spineDesc":
      "Transforaminal, interlaminar, and transthoracic endoscopy. Cervical, thoracic, and lumbar spine. Minimal tissue trauma — fast recovery.",
    "services.oncology": "Neuro-oncology",
    "services.oncologyDesc":
      "Surgical treatment of spine and spinal cord tumors (ImSCT, EmSCT). Resection with intraoperative neurophysiological monitoring.",
    "services.hernia": "Fusion & Decompression",
    "services.herniaDesc":
      "Endoscopic and minimally invasive PLIF, TLIF, ALIF. Anterior cervical decompression. Decompression for spinal canal stenosis.",
    "services.secondOpinion": "Interventional Pain Management",
    "services.secondOpinionDesc":
      "Ultrasound- and fluoroscopy-guided nerve blocks. Radiofrequency denervation of facet joints. Treatment of chronic pain syndromes.",
    "services.consultation": "Consultation",
    "services.consultationDesc":
      "Initial examination, MRI/CT analysis, diagnosis. Development of a personalised treatment plan tailored to your case.",
    "services.rehab": "Second Opinion",
    "services.rehabDesc":
      "Independent expert review of your diagnosis and proposed treatment. Evidence-based recommendations aligned with international standards.",

    "booking.title": "Book an Appointment",
    "booking.subtitle": "Accepting patients at Medika NSK clinic, Novosibirsk",
    "booking.address": "Address",
    "booking.hours": "Office Hours",
    "booking.map": "[ Map ]",

    "contacts.title": "Contacts",
    "contacts.subtitle": "Reach out any way you prefer",
    "contacts.phone": "Phone",
    "contacts.email": "Email",
    "contacts.telegram": "Telegram",

    "footer.copyright": "All rights reserved.",
    "footer.policy": "Privacy Policy",
    "footer.disclaimer":
      "The information on this website is for reference purposes only and does not constitute a public offer. Phone consultations are not provided.",
    "footer.neurosurgeon": "Neurosurgeon · Endoscopic Spine Surgery",

    "doctor.fullName": "Vladislav Kelmakov",
    "page.title": "Neurosurgeon V. Kelmakov | Novosibirsk",
    "page.description":
      "Neurosurgeon with 17 years of experience in Novosibirsk. Endoscopic spine surgery, neuro-oncology, interventional pain management. Over 2,000 operations.",
  },
};

function getInitialLocale(): Locale {
  if (!browser) return "ru";
  return (localStorage.getItem("locale") as Locale) || "ru";
}

let currentLocale = $state<Locale>(getInitialLocale());

if (browser) {
  document.documentElement.lang = currentLocale;
}

export const locale = {
  get current() {
    return currentLocale;
  },
  set current(value: Locale) {
    currentLocale = value;
    if (browser) {
      localStorage.setItem("locale", value);
      document.documentElement.lang = value;
    }
  },
  setLocale(value: Locale) {
    currentLocale = value;
    if (browser) {
      localStorage.setItem("locale", value);
      document.documentElement.lang = value;
    }
  },
};

export function t(key: string): string {
  return translations[currentLocale][key] || key;
}

export const locales: { code: Locale; flag: string; label: string }[] = [
  { code: "ru", flag: "🇷🇺", label: "Русский" },
  { code: "en", flag: "🇬🇧", label: "English" },
];
