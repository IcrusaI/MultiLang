module.exports = class MultiLang {
  /**
   *
   * @param {Object} [settings={}]
   * @param {String} [settings.initial]
   * @param {Object} languages
   */
  constructor(settings = {}, languages) {
    this._langs = [];
    this._initial = settings.initial;

    Object.keys(languages).forEach(lang => {
      this._langs.push(lang);
      this[`_${lang}`] = languages[lang];
    });

    if (this._initial && this._langs.indexOf(this._initial) !== -1) {
      this._current = this._initial;
    } else {
      this._current = this._langs[0];
    }
  }

  get(name, lang = this._current) {
    let resolve = this[`_${lang}`];

    name.split(".").forEach(e => {
      resolve = resolve[e];
    });

    if (!resolve && lang !== this._initial) {
      return this.get(name, this._initial);
    }

    return resolve;
  }
}
