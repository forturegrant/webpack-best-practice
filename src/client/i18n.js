import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // 这里是我们的翻译文本
          welcome: 'Welcome to my website',
          author: `Author is：<1>code and beast</1>`,
        }
      },
      zh: {
        translation: {
          welcome: '欢迎来到我的网站',
          author: `作者是：<1>代码与野兽</1>`,
        }
      }
    }
  });

export default i18n;
