
import { Doctor, Article, Testimonial } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "Dr. Aqil Ağayev",
    specialty: "Qulaq Burun Boğaz cərrahı, Otonevroloq",
    image: "./public/image/doctor.png",
    experience: "12 il",
    patients: 1500,
    reviews: 45,
    position: "Qulaq Burun Boğaz Cərrahı, Otonevroloq",
    center: "Başgicəllənmə Mərkəzi",
    education: [
      "2002–2008-ci illərdə Azərbaycan Tibb Universitetində Müalicə işi fakültəsində ali tibbi təhsil almışdır.",
      "2008–2009-cu illərdə Azərbaycan Tibb Universitetinin Tədris-Terapevtik Klinikasında internatura keçmişdir.",
      "2010-cu ildə Qulaq Burun Boğaz xəstəlikləri üzrə ixtisas kurslarını tamamlamışdır.",
      "2012-ci ildə otonevrologiya sahəsində beynəlxalq təlim və seminarlarda iştirak etmişdir.",
      "2015-ci ildən etibarən mütəmadi olaraq yerli və beynəlxalq elmi konfranslarda iştirak edir."
    ],
    focusAreas: [
      "Otonevrologiya və vestibulyar pozğunluqların diaqnostikası",
      "Başgicəllənmə, vertiqo və balans problemlərinin müalicəsi",
      "Daxili və orta qulaq xəstəlikləri",
      "Qulaq cərrahiyyəsi və mikrocerrahi müdaxilələr",
      "Eşitmə itkisinin diaqnozu və müalicəsi",
      "Vestibulyar reabilitasiya"
    ]
  },
  {
    id: 2,
    name: "Dr. Nigar Muradova",
    specialty: "Qulaq Burun Boğaz cərrahı, Otonevroloq",
    image: "./public/image/doctor2.png",
    experience: "5 il",
    patients: 0,
    reviews: 0,
    position: "Qulaq Burun Boğaz Cərrahı, Otonevroloq",
    center: "Başgicəllənmə Mərkəzi",
    education: [
      "2010-cu ildə Azərbaycan Tibb Universitetini fərqlənmə diplomu ilə bitirmişdir.",
      "2010–2011-ci illərdə Qulaq Burun Boğaz ixtisası üzrə internatura keçmişdir.",
      "2015-ci ildə Türkiyə, İzmir Ege Universitetində Qulaq Burun Boğaz ixtisaslaşma təhsili almışdır.",
      "2018–2019-cu illərdə Türkiyə, Ankara Başkent Universitetinin Nörotoloji Klinikasında təkmilləşdirmə proqramında iştirak etmişdir.",
      "Bir sıra beynəlxalq seminar və konqreslərin iştirakçısıdır."
    ],
    focusAreas: [
      "Pediatrik LOR əməliyyatları (Tonzillektomiya, Adenoidektomiya, Qulaq pərdəsinə tüp taxılması)",
      "Septoplastika (burun çəpərinin cərrahi korreksiyası)",
      "Burun balıqqulaqlarına radiofrekans tətbiqi",
      "Burun sınıqlarının açıq və qapalı üsulla bərpası",
      "Polipotomiya və FESS (funksional endoskopik sinus cərrahiyyəsi)",
      "Estetik və funksional rinoplastika",
      "Qulaq seyvanının plastik əməliyyatları",
      "Timpanoplastika və miringoplastika",
      "Mastoid xəstəliklərinin cərrahi müalicəsi",
      "Stapedektomiya və eşitmə bərpa əməliyyatları",
      "Anadangəlmə və qazanılmış qulaq törəmələri",
      "Xoanal atreziya əməliyyatları"
    ]
  },
  {
    id: 3,
    name: "Dr. Nuray Şükürova",
    specialty: "Qulaq Burun Boğaz cərrahı",
    image: "./public/image/doctor3.png",
    experience: "8 il",
    patients: 800,
    reviews: 12,
    position: "Qulaq Burun Boğaz Həkimi",
    center: "LOR Mərkəzi",
    education: [
      "2005–2011-ci illərdə Azərbaycan Tibb Universitetində ali tibbi təhsil almışdır.",
      "2011–2012-ci illərdə Qulaq Burun Boğaz ixtisası üzrə internatura keçmişdir.",
      "Peşəkar fəaliyyət dövründə müxtəlif ixtisasartırma kurslarında iştirak etmişdir."
    ],
    focusAreas: [
      "Rinit və allergik burun xəstəlikləri",
      "Kəskin və xroniki sinusitlərin müalicəsi",
      "Eşitmə problemlərinin diaqnostikası",
      "Boğaz və badamcıq xəstəlikləri",
      "Uşaqlarda və böyüklərdə LOR müayinələri"
    ]
  },
  {
    id: 4,
    name: "Dr. Kamilə Allahverdiyeva",
    specialty: "Qulaq Burun Boğaz həkimi",
    image: "./public/image/doctor4.png",
    experience: "15 il",
    patients: 2200,
    reviews: 67,
    position: "Baş Həkim",
    center: "LOR Hospital",
    education: [
      "Azərbaycan Tibb Universitetini bitirmişdir.",
      "Qulaq Burun Boğaz ixtisası üzrə uzunmüddətli klinik təcrübəyə malikdir.",
      "Tibb elmləri namizədi elmi dərəcəsini almışdır.",
      "Bir çox elmi məqalə və tibbi tədqiqatların müəllifidir."
    ],
    focusAreas: [
      "Ümumi LOR xəstəliklərinin diaqnostika və müalicəsi",
      "Kompleks xəstələrin idarə olunması",
      "Klinik nəzarət və tibbi komandanın rəhbərliyi",
      "Profilaktik müayinələr və konsultasiyalar"
    ]
  }
];


export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "TİMPANOMETRİYA",
    date: "21 mart 2025",
    category: "Qulaq xəstəlikləri",
    image: "./public/image/TİMPANOMETRİYA.png",
  },
  {
    id: 2,
    title: "Skrininq Bera",
    date: "12 iyun 2024",
    category: "Burun xəstəlikləri",
    image: "./public/image/bera.png"
  },
  {
    id: 3,
    title: "Tez-tez boğaz ağrısı yaşayırsınız?",
    date: "1 avqust 2023",
    category: "Baş-Boyun cərrahiyyəsi",
    image: "./public/image/sorethroat.png"
  },
  {
    id: 4,
    title: "Lor əməliyyatı zamanı anesteziya",
    date: "28 mart 2025",
    category: "Lor əməliyyatı zamanı anesteziya",
    image: "./public/image/anesteziya.jpeg"
  },
  {
    id: 4,
    title: "Lor əməliyyatı zamanı anesteziya",
    date: "28 mart 2025",
    category: "Lor əməliyyatı zamanı anesteziya",
    image: "./public/image/anesteziya.jpeg"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aysel Bəşirli",
    comment: "Biz buranı çox sevdik, xidmətlərindən çox razı qaldıq. Hər kəsə tövsiyə edirik.",
    rating: 5
  },
  {
    id: 2,
    name: "Fuad Əliyev",
    comment: "Peşəkar kollektiv və yüksək səviyyəli xidmət. Hər şey üçün təşəkkürlər.",
    rating: 5
  },
  {
    id: 3,
    name: "Nərgiz Məmmədova",
    comment: "Uşağımın müalicəsi üçün müraciət etdik, çox məmnun qaldıq.",
    rating: 5
  }
];
