export type ISOCode =
    | 'af-ZA'
    | 'am-ET'
    | 'ar-AE' | 'ar-BH' | 'ar-DZ' | 'ar-EG' | 'ar-IQ' | 'ar-JO' | 'ar-KW' | 'ar-LB' | 'ar-LY' | 'ar-MA' | 'ar-OM' | 'ar-QA' | 'ar-SA' | 'ar-SY' | 'ar-TN' | 'ar-YE'
    | 'arn-CL'
    | 'as-IN'
    | 'az-Cyrl-AZ' | 'az-Latn-AZ'
    | 'ba-RU'
    | 'be-BY'
    | 'bg-BG'
    | 'bn-BD' | 'bn-IN'
    | 'bo-CN'
    | 'br-FR'
    | 'bs-Cyrl-BA' | 'bs-Latn-BA'
    | 'ca-ES' | 'ca-ES-valencia'
    | 'chr-Cher-US'
    | 'co-FR'
    | 'cs-CZ'
    | 'cy-GB'
    | 'da-DK'
    | 'de-AT' | 'de-CH' | 'de-DE' | 'de-LI' | 'de-LU'
    | 'dsb-DE'
    | 'dv-MV'
    | 'el-GR'
    | 'en-029' | 'en-AU' | 'en-BZ' | 'en-CA' | 'en-GB' | 'en-IE' | 'en-IN' | 'en-JM' | 'en-MY' | 'en-NZ' | 'en-PH' | 'en-SG' | 'en-TT' | 'en-US' | 'en-ZA' | 'en-ZW'
    | 'es' | 'es-AR' | 'es-BO' | 'es-CL' | 'es-CO' | 'es-CR' | 'es-DO' | 'es-EC' | 'es-ES' | 'es-GT' | 'es-HN' | 'es-MX' | 'es-NI' | 'es-PA' | 'es-PE' | 'es-PR' | 'es-PY' | 'es-SV' | 'es-US' | 'es-UY'
    | 'et-EE'
    | 'eu-ES'
    | 'fa-IR'
    | 'fi-FI'
    | 'fil-PH'
    | 'fo-FO'
    | 'fr-BE' | 'fr-CA' | 'fr-CH' | 'fr-FR' | 'fr-LU' | 'fr-MC'
    | 'fy-NL'
    | 'ga-IE'
    | 'gl-ES'
    | 'gsw-FR'
    | 'gu-IN'
    | 'ha-Latn-NG'
    | 'haw-US'
    | 'he-IL'
    | 'hi-IN'
    | 'hr-BA' | 'hr-HR'
    | 'hsb-DE'
    | 'hu-HU'
    | 'hy-AM'
    | 'id-ID'
    | 'ig-NG'
    | 'ii-CN'
    | 'is-IS'
    | 'it-CH' | 'it-IT'
    | 'iu-Cans-CA' | 'iu-Latn-CA'
    | 'ja-JP'
    | 'ka-GE'
    | 'kk-KZ'
    | 'kl-GL'
    | 'km-KH'
    | 'kn-IN'
    | 'kok-IN'
    | 'ko-KR'
    | 'ku-Arab-IQ'
    | 'ky-KG'
    | 'lb-LU'
    | 'lo-LA'
    | 'lt-LT'
    | 'lv-LV'
    | 'mi-NZ'
    | 'mk-MK'
    | 'ml-IN'
    | 'mn-MN'
    | 'mn-Mong-CN'
    | 'moh-CA'
    | 'mr-IN'
    | 'ms-BN' | 'ms-MY'
    | 'mt-MT'
    | 'nb-NO'
    | 'ne-NP'
    | 'nl-BE' | 'nl-NL'
    | 'nn-NO'
    | 'nso-ZA'
    | 'oc-FR'
    | 'or-IN'
    | 'pa-Arab-PK' | 'pa-IN'
    | 'pl-PL'
    | 'prs-AF'
    | 'ps-AF'
    | 'pt-BR' | 'pt-PT'
    | 'qut-GT'
    | 'quz-BO' | 'quz-EC'
    | 'quz-PE'
    | 'rm-CH'
    | 'ro-RO'
    | 'ru-MO' | 'ru-RU'
    | 'rw-RW'
    | 'sa-IN'
    | 'sah-RU'
    | 'se-FI'
    | 'se-NO' | 'se-SE'
    | 'si-LK'
    | 'sk-SK'
    | 'sl-SI'
    | 'smj-NO' | 'smj-SE'
    | 'smn-FI'
    | 'sms-FI'
    | 'sq-AL'
    | 'sr-Cyrl-BA' | 'sr-Cyrl-CS' | 'sr-Cyrl-ME' | 'sr-Cyrl-RS' | 'sr-Latn-CS' | 'sr-Latn-ME' | 'sr-Latn-RS'
    | 'sv-FI' | 'sv-SE'
    | 'sw-KE'
    | 'syr-SY'
    | 'ta-IN' | 'ta-LK'
    | 'te-IN'
    | 'tg-Cyrl-TJ'
    | 'th-TH'
    | 'ti-ER' | 'ti-ET'
    | 'tk-TM'
    | 'tn-BW' | 'tn-ZA'
    | 'tr-TR'
    | 'tt-RU'
    | 'tzm-Latn-DZ' | 'tzm-Tfng-MA'
    | 'ug-CN'
    | 'uk-UA'
    | 'ur-PK'
    | 'uz-Cyrl-UZ' | 'uz-Latn-UZ'
    | 'vi-VN'
    | 'wo-SN'
    | 'xh-ZA'
    | 'yo-NG'
    | 'zh-CHS' | 'zh-CHT' | 'zh-CN' | 'zh-HK' | 'zh-MO' | 'zh-SG' | 'zh-TW'
    | 'zu-ZA'
    | (string & {});

export interface MultiLangSettings {
  initial?: ISOCode;
  debug?: boolean;
}

export interface LangData {
  [key: string]: string | LangData;
}

export interface NumberFormatOptions extends Intl.NumberFormatOptions {
  style?: 'decimal' | 'currency' | 'percent';
  currency?: string;
}

export interface DateFormatOptions extends Intl.DateTimeFormatOptions {}

export interface RelativeTimeFormatOptions {
  numeric?: 'always' | 'auto';
  style?: 'long' | 'short' | 'narrow';
}

export class MultiLang {
  private langs: ISOCode[] = [];
  private current: ISOCode;
  private data: Partial<Record<ISOCode, LangData>> = {};
  private readonly debug: boolean;
  private readonly initial?: ISOCode;

  constructor(settings: MultiLangSettings = {}, languages: Partial<Record<ISOCode, LangData>>) {
    if (Object.keys(languages).length === 0) {
      throw new Error("Language list cannot be empty");
    }

    this.debug = settings.debug ?? false;
    this.initial = settings.initial;

    Object.entries(languages).forEach(([lang, langData]) => {
      const code = lang as ISOCode;
      this.langs.push(code);
      this.data[code] = langData;
    });

    if (this.initial && this.langs.includes(this.initial)) {
      this.current = this.initial;
    } else {
      this.current = this.langs[0];
    }
  }

  /**
   * Sets the current language. Custom or regional codes are allowed,
   * as long as at least one language from the fallback chain is loaded.
   *
   * @param lang ISO language code (e.g., 'ru_RU')
   */
  public setLang(lang: ISOCode): void {
    const fallbackChain = this.getLangChain(lang);
    const hasLoadedLang = fallbackChain.some(code => this.langs.includes(code));

    if (!hasLoadedLang) {
      throw new Error(`Language ${lang} and its fallbacks are not loaded`);
    }

    this.current = lang;
  }

  /**
   * Returns the currently active language code.
   */
  public getLang(): ISOCode {
    return this.current;
  }

  /**
   * Returns a list of all loaded languages.
   */
  public getAvailableLangs(): ISOCode[] {
    return [...this.langs];
  }

  /**
   * Adds a new language or merges data into an existing one.
   *
   * @param lang ISO language code.
   * @param data Language dictionary.
   */
  public addLang(lang: ISOCode, data: LangData): void {
    if (this.langs.includes(lang)) {
      this.data[lang] = { ...this.data[lang], ...data };
    } else {
      this.langs.push(lang);
      this.data[lang] = data;
    }
  }

  /**
   * Checks if a translation key exists in the specified or current language.
   *
   * @param key Dot-notated key (e.g., 'menu.settings.title').
   * @param lang Optional language code to check against.
   */
  public has(key: string, lang: ISOCode = this.current): boolean {
    return this.get(key, lang) !== undefined;
  }

  /**
   * Lists all translation keys in the specified or current language.
   *
   * @param lang Language code (defaults to current).
   * @returns Array of flattened keys.
   */
  public listKeys(lang: ISOCode = this.current): string[] {
    const flatten = (obj: LangData, path = ''): string[] => {
      return Object.entries(obj).reduce<string[]>((acc, [k, v]) => {
        const newPath = `${path}${k}`;
        if (typeof v === 'object' && v !== null) {
          acc.push(...flatten(v, `${newPath}.`));
        } else {
          acc.push(newPath);
        }
        return acc;
      }, []);
    };

    const langData = this.data[lang];
    return langData ? flatten(langData) : [];
  }

  /**
   * Retrieves a translated string by key with fallback support and optional variable substitution.
   *
   * @param key Dot-notated translation key (e.g., 'menu.settings.title').
   * @param lang Language code (defaults to current).
   * @param vars Optional map of variables to substitute in the string.
   * @returns Translated string or undefined if not found.
   */
  public get(key: string, lang: ISOCode = this.current, vars?: Record<string, string>): string | undefined {
    const fallbackChain = this.getLangChain(lang);

    for (const langCode of fallbackChain) {
      const result = this.deepGet(this.data[langCode], key);
      if (typeof result === 'string') {
        return vars ? this.format(result, vars) : result;
      }
    }

    if (this.debug) {
      console.warn(`[MultiLang] Missing key "${key}" in "${lang}"`);
    }

    return undefined;
  }

  /**
   * Internal utility to deeply access a property via dot notation.
   *
   * @param obj Language data object.
   * @param path Dot-notated key path (e.g., 'a.b.c').
   * @returns Value at the specified path, if found.
   */
  private deepGet(obj: LangData | undefined, path: string): string | undefined {
    if (!obj) return undefined;
    const parts = path.split('.');
    let current: string | LangData | undefined = obj;

    for (const part of parts) {
      if (typeof current === 'object' && current !== null && part in current) {
        current = current[part];
      } else {
        return undefined;
      }
    }

    return typeof current === 'string' ? current : undefined;
  }

  /**
   * Builds the fallback language chain: lang → base → initial.
   *
   * @param lang The requested language.
   * @returns Array of fallback language codes in priority order.
   */
  private getLangChain(lang: ISOCode): ISOCode[] {
    const chain: ISOCode[] = [];

    if (this.langs.includes(lang)) chain.push(lang);

    const base = lang.split('_')[0] as ISOCode;
    if (base !== lang && this.langs.includes(base)) chain.push(base);

    if (this.initial && !chain.includes(this.initial)) {
      chain.push(this.initial);
    }

    return chain;
  }

  /**
   * Replaces variables in a string with their values.
   *
   * @param template The template string (e.g., 'Hello, {name}').
   * @param vars A key-value map of variables.
   * @returns Formatted string.
   */
  private format(template: string, vars: Record<string, string>): string {
    return template.replace(/{(\w+)}/g, (_, key) => {
      return vars[key] ?? `{${key}}`;
    });
  }

  /**
   * Formats a number using locale-aware options (e.g. currency, percent).
   *
   * @param value The numeric value to format.
   * @param options Intl.NumberFormat options.
   * @param lang Language code (defaults to current).
   * @returns Formatted number string.
   */
  public formatNumber(
      value: number,
      options: NumberFormatOptions = {},
      lang: ISOCode = this.current
  ): string {
    try {
      const locale = lang.replace('_', '-');
      const formatter = new Intl.NumberFormat(locale, options);
      return formatter.format(value);
    } catch (e) {
      if (this.debug) {
        console.warn(`[MultiLang] Failed to format number for "${lang}":`, e);
      }
      return value.toString();
    }
  }

  /**
   * Formats a date or time value using locale-aware options.
   *
   * @param date Date object, timestamp or ISO string.
   * @param options Intl.DateTimeFormat options.
   * @param lang Language code (defaults to current).
   * @returns Formatted date string.
   */
  public formatDate(
      date: Date | number | string,
      options: DateFormatOptions = {},
      lang: ISOCode = this.current
  ): string {
    try {
      const locale = lang.replace('_', '-');
      const formatter = new Intl.DateTimeFormat(locale, options);
      return formatter.format(new Date(date));
    } catch (e) {
      if (this.debug) {
        console.warn(`[MultiLang] Failed to format date for "${lang}":`, e);
      }
      return new Date(date).toLocaleString();
    }
  }

  /**
   * Formats a relative time string (e.g. "yesterday", "in 2 days").
   *
   * @param value Numeric offset (e.g. -1 = "yesterday", 1 = "tomorrow").
   * @param unit Time unit (e.g. 'day', 'month', 'year').
   * @param options Intl.RelativeTimeFormat options.
   * @param lang Language code (defaults to current).
   * @returns Formatted relative time string.
   */
  public formatRelative(
      value: number,
      unit: Intl.RelativeTimeFormatUnit,
      options: RelativeTimeFormatOptions = {},
      lang: ISOCode = this.current
  ): string {
    try {
      const locale = lang.replace('_', '-');
      const formatter = new Intl.RelativeTimeFormat(locale, options);
      return formatter.format(value, unit);
    } catch (e) {
      if (this.debug) {
        console.warn(`[MultiLang] Failed to format relative time for "${lang}":`, e);
      }
      return `${value} ${unit}`;
    }
  }
}