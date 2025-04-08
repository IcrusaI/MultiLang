import { MultiLang } from '../src/MultiLang';

describe('MultiLang', () => {
    const languages = {
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
    };

    it('should return translated string with vars', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        i18n.setLang('ru_RU');
        expect(i18n.get('greeting', undefined, { name: 'Артем' })).toBe('Здорово, Артем');
    });

    it('should fallback to base lang (ru)', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        i18n.setLang('ru_BY');
        expect(i18n.get('greeting', undefined, { name: 'Артем' })).toBe('Привет, Артем');
    });

    it('should fallback to initial lang (en)', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        i18n.setLang('de_DE');
        expect(i18n.get('menu.settings.title')).toBe('Settings');
    });

    it('should list all keys in a language', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        expect(i18n.listKeys('en')).toEqual(expect.arrayContaining([
            'greeting',
            'menu.settings.title'
        ]));
    });

    it('should support adding new language', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        i18n.addLang('de', { greeting: "Hallo, {name}" });
        i18n.setLang('de');
        expect(i18n.get('greeting', undefined, { name: 'Karl' })).toBe('Hallo, Karl');
    });

    it('should throw if lang and its fallbacks are not loaded', () => {
        const i18n = new MultiLang({}, { ru: { hello: "привет" } });
        expect(() => i18n.setLang('xx_XX')).toThrow(
            'Language xx_XX and its fallbacks are not loaded'
        );
    });

    it('should return undefined and log warning for missing key (with debug=true)', () => {
        const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
        const i18n = new MultiLang({ initial: 'en', debug: true }, languages);

        const result = i18n.get('non.existing.key');
        expect(result).toBeUndefined();
        expect(spy).toHaveBeenCalledWith(expect.stringContaining('Missing key "non.existing.key"'));
        spy.mockRestore();
    });

    // ---------------------
    // Formatting extensions
    // ---------------------

    it('should format numbers correctly', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        i18n.setLang('fr-FR');
        const result = i18n.formatNumber(1234567.89);
        expect(typeof result).toBe('string');
        expect(result).toMatch(/[1  ]?234 567[,.]89/); // space or nbsp depending on environment
    });

    it('should format currency correctly', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        i18n.setLang('en-US');
        const result = i18n.formatNumber(1234.56, { style: 'currency', currency: 'USD' });
        expect(result).toMatch(/\$1,234\.56/);
    });

    it('should format date correctly', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        i18n.setLang('ru-RU');
        const result = i18n.formatDate(new Date('2025-04-08'), {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        expect(typeof result).toBe('string');
        expect(result).toMatch(/8.*апреля.*2025/i);
    });

    it('should format relative time', () => {
        const i18n = new MultiLang({ initial: 'en' }, languages);
        i18n.setLang('en-US');
        const result = i18n.formatRelative(-1, 'day');
        expect(result).toMatch(/yesterday|1 day ago/i);
    });
});