'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      // Get Data
      const text = req.body.text;
      const locale = req.body.locale;

      // If text is empty
      if (text === "") {
        res.json({ error: 'No text to translate' });
      }

      // If not text or locale provided
      if (!text || !locale) {
        res.json({ error: 'Required field(s) missing' });
      }

      // Translation
      let translation;
      if (locale == 'american-to-british') {
        translation = translator.us2gb(text);
      } else if (locale == 'british-to-american') {
        translation = translator.gb2us(text);
      } else {
        // If wrong locale provided
        res.json({ error: 'Invalid value for locale field' });
      }

      // If no translation needed
      if (text === translation) {
        translation = 'Everything looks good to me!';
      }

      // JSON file is returned
      res.json({ text: text, translation: translation });
    });
};
