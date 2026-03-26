import { browser } from '$app/environment';

export type Locale = 'ru' | 'en';

const translations: Record<Locale, Record<string, string>> = {
  ru: {
    'nav.about': 'О враче',
    'nav.services': 'Услуги',
    'nav.booking': 'Запись',
    'nav.contacts': 'Контакты',
    'nav.bookNow': 'Записаться',
    'nav.menu': 'Меню',
    'nav.navigation': 'Навигация по сайту',
    'hero.specialty': 'Нейрохирург высшей категории',
    'hero.name': 'Владислав',
    'hero.surname': 'Кельмаков',
    'hero.experience': 'Более 15 лет опыта в хирургии позвоночника и головного мозга. Принимаю в Новосибирске.',
    'hero.yearsLabel': 'лет опыта',
    'hero.operationsLabel': 'операций',
    'hero.degreeLabel': 'учёная степень',
    'hero.ctaLabel': 'Запишитесь на консультацию',
    'hero.bookBtn': 'Записаться на приём',
    'hero.moreBtn': 'Подробнее о враче',
    'hero.orCall': 'или позвоните',
    'about.title': 'О враче',
    'about.specialty': 'Нейрохирург высшей категории, кандидат медицинских наук',
    'about.bio': 'Кельмаков Владислав Владимирович — один из ведущих нейрохирургов. Окончил МГМУ им. Сеченова с отличием. Стажировался в клиниках Германии и Израиля. Специализируется на малоинвазивной хирургии позвоночника, удалении опухолей головного мозга и лечении хронических болевых синдромов. Автор более 30 научных публикаций и патента на изобретение.',
    'about.yearsExp': 'Лет опыта',
    'about.operations': 'Операций',
    'about.degree': 'Учёная степень',
    'about.category': 'Категория',
    'about.higherEdu': 'Высшее образование',
    'about.higherEduDesc': 'Окончил МГМУ им. И.М. Сеченова с красным дипломом.',
    'about.residency': 'Ординатура по нейрохирургии',
    'about.residencyDesc': 'Прошел клиническую ординатуру в НМИЦ нейрохирургии им. ак. Н.Н. Бурденко.',
    'about.candidate': 'Кандидатская диссертация',
    'about.candidateDesc': 'Защитил диссертацию на тему малоинвазивного лечения грыж поясничного отдела.',
    'about.training': 'Международная стажировка',
    'about.trainingDesc': 'Стажировка в клинике Charité (Берлин) по хирургии основания черепа.',
    'about.present': 'Настоящее время',
    'about.presentTitle': 'Ведущий нейрохирург',
    'about.presentDesc': 'Оперирующий хирург, член Европейской ассоциации нейрохирургических обществ (EANS).',
    'about.photo1': 'Проведение микрохирургической операции',
    'about.photo2': 'Индивидуальный подход к каждому случаю',
    'about.photo3': 'Обмен опытом с коллегами',
    'about.degreeValue': 'к.м.н.',
    'about.categoryValue': 'Высшая',
    'services.title': 'Мои услуги',
    'services.subtitle': 'Специализируюсь на диагностике и лечении заболеваний нервной системы, включая хирургию позвоночника и нейроонкологию.',
    'services.spine': 'Хирургия позвоночника',
    'services.spineDesc': 'Лечение грыж межпозвонковых дисков, стеноза канала, нестабильности позвоночника. Малоинвазивные методики.',
    'services.oncology': 'Нейроонкология',
    'services.oncologyDesc': 'Удаление опухолей головного и спинного мозга (глиомы, менингиомы, невриномы) с использованием нейронавигации.',
    'services.hernia': 'Лечение грыж',
    'services.herniaDesc': 'Микродискэктомия, эндоскопическое удаление грыж. Быстрое восстановление и минимальный болевой синдром.',
    'services.secondOpinion': 'Второе мнение',
    'services.secondOpinionDesc': 'Экспертная оценка вашего диагноза и снимков МРТ/КТ. Рекомендации по дальнейшей тактике лечения.',
    'services.consultation': 'Консультация',
    'services.consultationDesc': 'Первичный осмотр, сбор анамнеза, назначение необходимых обследований и плана лечения.',
    'services.rehab': 'Реабилитация',
    'services.rehabDesc': 'Разработка индивидуальных программ восстановления после нейрохирургических операций.',
    'booking.title': 'Принимаю пациентов',
    'booking.subtitle': 'Приходите на консультацию в удобное время',
    'booking.address': 'Адрес приёма',
    'booking.hours': 'Время приёма',
    'booking.map': '[ Карта ]',
    'contacts.title': 'Контакты',
    'contacts.subtitle': 'Свяжитесь со мной любым удобным способом',
    'contacts.phone': 'Телефон',
    'contacts.email': 'Email',
    'contacts.telegram': 'Telegram',
    'footer.copyright': 'Все права защищены.',
    'footer.policy': 'Политика конфиденциальности',
    'footer.disclaimer': 'Информация на сайте носит справочный характер и не является публичной офертой. Консультации по телефону не ведутся.',
    'footer.neurosurgeon': 'Нейрохирург высшей категории',
    'doctor.fullName': 'Владислав Кельмаков',
    'page.title': 'Нейрохирург Кельмаков В.В. | Новосибирск',
    'page.description': 'Нейрохирург высшей категории в Новосибирске. Хирургия позвоночника и головного мозга. Опыт более 15 лет. Запись на консультацию.',
  },
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.booking': 'Booking',
    'nav.contacts': 'Contacts',
    'nav.bookNow': 'Book Now',
    'nav.menu': 'Menu',
    'nav.navigation': 'Site navigation',
    'hero.specialty': 'Top-category Neurosurgeon',
    'hero.name': 'Vladislav',
    'hero.surname': 'Kelmakov',
    'hero.experience': 'Over 15 years of experience in spine and brain surgery. Accepting patients in Novosibirsk.',
    'hero.yearsLabel': 'years exp.',
    'hero.operationsLabel': 'operations',
    'hero.degreeLabel': 'degree',
    'hero.ctaLabel': 'Book a consultation',
    'hero.bookBtn': 'Book an Appointment',
    'hero.moreBtn': 'More About the Doctor',
    'hero.orCall': 'or call',
    'about.title': 'About',
    'about.specialty': 'Top-category Neurosurgeon, PhD in Medicine',
    'about.bio': 'Kelmakov Vladislav Viktorovich is one of the leading neurosurgeons. Graduated from Sechenov Moscow State Medical University with honors. Trained at clinics in Germany and Israel. Specializes in minimally invasive spine surgery, brain tumor removal, and treatment of chronic pain syndromes. Author of more than 30 scientific publications and a patent for invention.',
    'about.yearsExp': 'Years Exp.',
    'about.operations': 'Operations',
    'about.degree': 'Degree',
    'about.category': 'Category',
    'about.higherEdu': 'Higher Education',
    'about.higherEduDesc': 'Graduated from Sechenov Moscow State Medical University with honors.',
    'about.residency': 'Neurosurgery Residency',
    'about.residencyDesc': 'Completed clinical residency at the Burdenko Neurosurgery Research Center.',
    'about.candidate': 'PhD Thesis',
    'about.candidateDesc': 'Defended dissertation on minimally invasive treatment of lumbar disc herniations.',
    'about.training': 'International Training',
    'about.trainingDesc': 'Training at Charité Clinic (Berlin) in skull base surgery.',
    'about.present': 'Present',
    'about.presentTitle': 'Lead Neurosurgeon',
    'about.presentDesc': 'Operating surgeon, member of the European Association of Neurosurgical Societies (EANS).',
    'about.photo1': 'Microsurgical operation',
    'about.photo2': 'Individual approach to each case',
    'about.photo3': 'Exchanging experience with colleagues',
    'about.degreeValue': 'PhD',
    'about.categoryValue': 'Highest',
    'services.title': 'Services',
    'services.subtitle': 'Specializing in diagnosis and treatment of nervous system diseases, including spine surgery and neuro-oncology.',
    'services.spine': 'Spine Surgery',
    'services.spineDesc': 'Treatment of intervertebral disc herniation, spinal stenosis, spinal instability. Minimally invasive techniques.',
    'services.oncology': 'Neuro-oncology',
    'services.oncologyDesc': 'Removal of brain and spinal cord tumors (gliomas, meningiomas, neuromas) using neuronavigation.',
    'services.hernia': 'Hernia Treatment',
    'services.herniaDesc': 'Microdiscectomy, endoscopic hernia removal. Fast recovery and minimal pain syndrome.',
    'services.secondOpinion': 'Second Opinion',
    'services.secondOpinionDesc': 'Expert evaluation of your diagnosis and MRI/CT scans. Recommendations for further treatment.',
    'services.consultation': 'Consultation',
    'services.consultationDesc': 'Initial examination, history taking, prescribing necessary tests and treatment plan.',
    'services.rehab': 'Rehabilitation',
    'services.rehabDesc': 'Development of individual recovery programs after neurosurgical operations.',
    'booking.title': 'I Accept Patients',
    'booking.subtitle': 'Come for a consultation at your convenience',
    'booking.address': 'Clinic Address',
    'booking.hours': 'Office Hours',
    'booking.map': '[ Map ]',
    'contacts.title': 'Contacts',
    'contacts.subtitle': 'Reach me any way you prefer',
    'contacts.phone': 'Phone',
    'contacts.email': 'Email',
    'contacts.telegram': 'Telegram',
    'footer.copyright': 'All rights reserved.',
    'footer.policy': 'Privacy Policy',
    'footer.disclaimer': 'The information on this website is for reference purposes only and is not a public offer. Phone consultations are not provided.',
    'footer.neurosurgeon': 'Top-category Neurosurgeon',
    'doctor.fullName': 'Vladislav Kelmakov',
    'page.title': 'Neurosurgeon V. Kelmakov | Novosibirsk',
    'page.description': 'Top-category neurosurgeon in Novosibirsk. Spine and brain surgery. Over 15 years of experience. Book a consultation.',
  },
};

function getInitialLocale(): Locale {
  if (!browser) return 'ru';
  return (localStorage.getItem('locale') as Locale) || 'ru';
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
      localStorage.setItem('locale', value);
      document.documentElement.lang = value;
    }
  },
  setLocale(value: Locale) {
    currentLocale = value;
    if (browser) {
      localStorage.setItem('locale', value);
      document.documentElement.lang = value;
    }
  },
};

export function t(key: string): string {
  return translations[currentLocale][key] || key;
}

export const locales: { code: Locale; flag: string; label: string }[] = [
  { code: 'ru', flag: '🇷🇺', label: 'Русский' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
];
