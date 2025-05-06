import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          clinicHours: "Clinic Hours",
          sundayToThursday: "Sunday to Thursday",
          closed: "Closed",
          getYourCare: "Get your Care",
          submitText: "Submit",
          name: "Name",
          phone: "Phone Number",
          email: "Email",
          service: "Dental Service",
          message: "Leave a Message",
          preferredDate: "Preferred Date",
          preferredTime: "Preferred Time",
          selectService: "Select Service",
          selectTime: "Select Time",
          placeholderName: "Enter Your Name ..",
          placeholderPhone: "Enter Your Phone ..",
          placeholderEmail: "Enter Your Email ..",
          placeholderMessage: "Enter Your Message ..",
          formNote: "You can simply communicate with us by submitting this form and we will respond to you ASAP.",
          bookingError: "⚠️ Cannot book on Friday or Saturday",
          services: {
            select: "Select Service",
            implants: "Dental Implants",
            general: "General Dentistry",
            whitening: "Teeth Whitening",
            extraction: "Tooth Extraction",
            wisdom: "Wisdom Teeth Removal",
            repair: "Broken Tooth Repairs",
            smile: "Smile Makeover",
            surgery: "Oral Surgery",
            ortho: "Orthodontics"
          },
          days: {
            Friday: "Friday",
            Saturday: "Saturday"
          }
        }
      },
      ar: {
        translation: {
          clinicHours: "مواعيد العيادة",
          sundayToThursday: "من الأحد إلى الخميس",
          closed: "مغلق",
          getYourCare: "احصل على رعايتك",
          submitText: "إرسال",
          name: "الاسم",
          phone: "رقم الهاتف",
          email: "البريد الإلكتروني",
          service: "الخدمة",
          message: "اترك رسالة",
          preferredDate: "التاريخ المفضل",
          preferredTime: "الوقت المفضل",
          selectService: "اختر الخدمة",
          selectTime: "اختر الوقت",
          placeholderName: "ادخل اسمك ..",
          placeholderPhone: "ادخل رقم هاتفك ..",
          placeholderEmail: "ادخل بريدك الإلكتروني ..",
          placeholderMessage: "ادخل رسالتك ..",
          formNote: "يمكنك التواصل معنا ببساطة من خلال إرسال هذا النموذج وسنقوم بالرد عليك في أقرب وقت ممكن.",
          bookingError: "⚠️ لا يمكن الحجز يوم الجمعة أو السبت",
          services: {
            select: "اختر الخدمة",
            implants: "زراعة الأسنان",
            general: "طب الأسنان العام",
            whitening: "تبييض الأسنان",
            extraction: "خلع الأسنان",
            wisdom: "إزالة ضرس العقل",
            repair: "إصلاح الأسنان المكسورة",
            smile: "تجميل الابتسامة",
            surgery: "جراحة الفم",
            ortho: "تقويم الأسنان"
          },
          days: {
            Friday: "الجمعة",
            Saturday: "السبت"
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
