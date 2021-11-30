import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            transaction: {
                create: {
                    buy: "Buy",
                    sell: "Sell"
                }, 
                details: {
                    amountOffered: "offered amount"
                }
            },
            login: {
                title: "Login to your account",
                register: "Don't have an account?",
                registerLink: "Sign-up here",
                loginText: "Log In"
            },
            register: {
                title: "Create Account",
                subtitle: "Get started with your free account",
                createAccount: "Create Account",
                login: "Already have an account?",
                startOperating: "Start operating now"
            },
            navbar: {
                users: "Users",
                transactions: "Active Transactions",
                createTransactions: "Create Transaction"
            },
            users: {
                title: "Users",
                reputation: "Reputation",
                cvu: "CVU Number",
                wallet: "Wallet Address"
            }
        }
      },
      es: {
        translation: {
            transaction: {
                create: {
                    buy: "Comprar",
                    sell: "Vender"
                }, 
                details: {
                    amountOffered: "cantidad ofertada"
                }
            },
            login : {
                title: "Logueate a tu cuenta",
                register: "¿No tenés una cuenta?",
                registerLink: "Registrate acá",
                loginText: "Iniciá sesión"
            },
            register: {
                title: "Crear Cuenta",
                subtitle: "Comenzá con una cuenta gratis",
                createAccount: "Crear Cuenta",
                login: "¿Ya tenés cuenta?",
                startOperating: "Empezá a operar ahora"
            },
            navbar: {
                users: "Usuarios",
                transactions: "Transacciones Activas",
                createTransactions: "Crear Transacciones"
            },
            users: {
                title: "Usuarios",
                reputation: "Reputación",
                cvu: "Número de CVU",
                wallet: "Dirección de Billetera"
            }
        }
      }
    }
  });

export default i18n;