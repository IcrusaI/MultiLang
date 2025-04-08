import { MultiLang } from '../src/MultiLang';

const i18n = new MultiLang(
    { initial: 'en', debug: true },
    {
        en: {
            hello: "Hello, {name}",
            menu: {
                settings: {
                    title: "Settings"
                }
            }
        },
        ru: {
            hello: "Привет, {name}"
        },
        ru_RU: {
            hello: "Здорово, {name}"
        }
    }
);

console.log(i18n.get('hello', 'ru_RU', { name: 'Артем' }));  // Здорово, Артем
console.log(i18n.get('menu.settings.title'));                // Settings (fallback на en)
console.log(i18n.has('menu.settings.title'));                // true
console.log(i18n.listKeys('en'));                            // ['hello', 'menu.settings.title']