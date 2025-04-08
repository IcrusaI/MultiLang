# 🌍 MultiLang

A lightweight multilingual utility for JavaScript/TypeScript applications.

Лёгкая утилита для мультиязычности в приложениях на JavaScript/TypeScript.

---

## ✨ Features / Возможности

- ✅ Easy language switching
- 🔁 Fallback logic (e.g., `ru_BY` → `ru` → `en`)
- 📚 Nested dictionary support
- 🧠 Variable substitution in strings
- 🌐 Built-in number, date and relative time formatting

---

## 🚀 Installation / Установка

```bash
npm install multi-lang-lib
```

---

## 🛠 Usage / Использование

```ts
import { MultiLang } from 'multi-lang-lib';

const i18n = new MultiLang(
  { initial: 'en', debug: true },
  {
    en: {
      greeting: "Hello, {name}",
      menu: { settings: { title: "Settings" } }
    },
    ru: {
      greeting: "Привет, {name}"
    },
    ru_RU: {
      greeting: "Здорово, {name}"
    }
  }
);

i18n.setLang('ru_RU');

console.log(i18n.get('greeting', undefined, { name: 'Артем' }));
// → Здорово, Артем

console.log(i18n.get('menu.settings.title'));
// → Settings (fallback to 'en')
```

---

## 🌍 Formatters / Форматирование

### `formatNumber()`

```ts
i18n.setLang('fr-FR');
i18n.formatNumber(1234567.89); // → "1 234 567,89"

i18n.formatNumber(1234.56, { style: 'currency', currency: 'EUR' });
// → "1 234,56 €"
```

### `formatDate()`

```ts
i18n.formatDate(new Date(), { dateStyle: 'long' });
// → "8 avril 2025"
```

### `formatRelative()`

```ts
i18n.formatRelative(-1, 'day'); // → "yesterday" / "вчера"
```

---

## 📘 API Reference / Документация

| Method                | Description (EN)                                      | Описание (RU)                            |
|-----------------------|--------------------------------------------------------|-------------------------------------------|
| `setLang(lang)`       | Set current language                                   | Установить текущий язык                   |
| `getLang()`           | Get current language                                   | Получить текущий язык                     |
| `addLang(lang, data)` | Add or update language                                 | Добавить или обновить язык                |
| `get(key)`            | Get translated string with optional variables          | Получить перевод по ключу                 |
| `has(key)`            | Check if key exists                                    | Проверить, существует ли ключ             |
| `listKeys(lang?)`     | Get all available keys for a language                  | Получить список всех ключей               |
| `formatNumber()`      | Format numbers using locale                            | Форматировать числа по локали             |
| `formatDate()`        | Format date using locale                               | Форматировать дату по локали              |
| `formatRelative()`    | Format relative time using locale                      | Относительное форматирование времени      |

---

## 🔪 Tests / Тесты

```bash
npm test
```

---

## 🛆 Build / Сборка

```bash
npm run build
```

---

## 📄 License / Лицензия

[MIT](./LICENSE) © [Артем Баженов (IcrusaI)](https://github.com/IcrusaI)