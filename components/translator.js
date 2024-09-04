const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

function invertDict(dictionary) {
    const invertedDict = {};

    for (const [key, value] of Object.entries(dictionary)) {
        invertedDict[value] = key; // The key-value pair are inverted
    }

    return invertedDict; // Inverted dictionary is returned after the loop finishes
}

function upperFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}

class Translator {
    us2gb(text) {
        Object.keys(americanOnly).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi'); // regex to match full words only
            text = text.replace(regex, `<span class="highlight">${americanOnly[key]}</span>`);
        });

        Object.keys(americanToBritishSpelling).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            text = text.replace(regex, `<span class="highlight">${americanToBritishSpelling[key]}</span>`);
        });

        Object.keys(americanToBritishTitles).forEach(key => {
            const regex = new RegExp(key, 'gi'); // Regex to match the title with punctuation or end of string
            text = text.replace(regex, `<span class="highlight">${upperFirst(americanToBritishTitles[key])}</span>`);
        });

        const textRegex = /(\d+):(\d+)/g;
        text = text.replace(textRegex, `<span class="highlight">$1.$2</span>`);

        return text;
    }

    gb2us(text) {
        let britishToAmericanSpelling = invertDict(americanToBritishSpelling);
        let britishToAmericanTitles = invertDict(americanToBritishTitles);

        Object.keys(britishOnly).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi'); // Regex to match full words only
            text = text.replace(regex, `<span class="highlight">${britishOnly[key]}</span>`);
        });

        Object.keys(britishToAmericanSpelling).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            text = text.replace(regex, `<span class="highlight">${britishToAmericanSpelling[key]}</span>`);
        });

        Object.keys(britishToAmericanTitles).forEach(key => {
            const regex = new RegExp(`\\b${key}\\b`, 'gi');
            text = text.replace(regex, `<span class="highlight">${upperFirst(britishToAmericanTitles[key])}</span>`);
        });

        const textRegex = /(\d+).(\d+)/g;
        text = text.replace(textRegex, `<span class="highlight">$1:$2</span>`);

        return text;
    }
}

module.exports = Translator;