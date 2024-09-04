const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;

suite('Unit Tests', () => {
    suite('American to British', function () {
        test('Mangoes are my favorite fruit.', function () {
            assert.equal(translator.us2gb('Mangoes are my favorite fruit.'), 'Mangoes are my <span class="highlight">favourite</span> fruit.')
        });
        test('I ate yogurt for breakfast.', function () {
            assert.equal(translator.us2gb('I ate yogurt for breakfast.'), 'I ate <span class="highlight">yoghurt</span> for breakfast.')
        });
        test("We had a party at my friend's condo.", function () {
            assert.equal(translator.us2gb("We had a party at my friend's condo."), "We had a party at my friend's <span class=\"highlight\">flat</span>.")
        });
        test("Can you toss this in the trashcan for me?", function () {
            assert.equal(translator.us2gb("Can you toss this in the trashcan for me?"), 'Can you toss this in the <span class="highlight">bin</span> for me?')
        });
        test("The parking lot was full.", function () {
            assert.equal(translator.us2gb("The parking lot was full."), 'The <span class="highlight">car park</span> was full.')
        });
        test("Like a high tech Rube Goldberg machine.", function () {
            assert.equal(translator.us2gb("Like a high tech Rube Goldberg machine."), 'Like a high tech <span class="highlight">Heath Robinson device</span>.')
        });
        test("To play hooky means to skip class or work.", function () {
            assert.equal(translator.us2gb("To play hooky means to skip class or work."), 'To <span class="highlight">bunk off</span> means to skip class or work.')
        });
        test("No Mr. Bond, I expect you to die.", function () {
            assert.equal(translator.us2gb("No Mr. Bond, I expect you to die."), 'No <span class="highlight">Mr</span> Bond, I expect you to die.')
        });
        test("Dr. Grosh will see you now.", function () {
            assert.equal(translator.us2gb("Dr. Grosh will see you now."), '<span class="highlight">Dr</span> Grosh will see you now.')
        });
        test("Lunch is at 12:15 today.", function () {
            assert.equal(translator.us2gb("Lunch is at 12:15 today."), 'Lunch is at <span class="highlight">12.15</span> today.')
        });
    })
    suite('British to American', function () {
        test('We watched the footie match for a while.', function () {
            assert.equal(translator.gb2us('We watched the footie match for a while.'), 'We watched the <span class="highlight">soccer</span> match for a while.')
        });
        test('Paracetamol takes up to an hour to work.', function () {
            assert.equal(translator.gb2us('Paracetamol takes up to an hour to work.'), '<span class="highlight">Tylenol</span> takes up to an hour to work.')
        });
        test("First, caramelise the onions.", function () {
            assert.equal(translator.gb2us("First, caramelise the onions."), "First, <span class=\"highlight\">caramelize</span> the onions.")
        });
        test("I spent the bank holiday at the funfair.", function () {
            assert.equal(translator.gb2us("I spent the bank holiday at the funfair."), "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.")
        });
        test("I had a bicky then went to the chippy.", function () {
            assert.equal(translator.gb2us("I had a bicky then went to the chippy."), "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-<span class=\"highlight\">fish-and-chip shop</span></span>.")
        });
        test("I've just got bits and bobs in my bum bag.", function () {
            assert.equal(translator.gb2us("I've just got bits and bobs in my bum bag."), "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.")
        });
        test("The car boot sale at Boxted Airfield was called off.", function () {
            assert.equal(translator.gb2us("The car boot sale at Boxted Airfield was called off."), "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.")
        });
        test("Have you met Mrs Kalyani?", function () {
            assert.equal(translator.gb2us("Have you met Mrs Kalyani?"), "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?")
        });
        test("Prof Joyner of King's College, London.", function () {
            assert.equal(translator.gb2us("Prof Joyner of King's College, London."), "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.")
        });
        test("Tea time is usually around 4 or 4.30.", function () {
            assert.equal(translator.gb2us("Tea time is usually around 4 or 4.30."), "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.")
        });
    });
    suite('Highlight', function () {
        test("Mangoes are my favorite fruit.", function () {
            const result = translator.us2gb("Mangoes are my favorite fruit.");
            assert.include(result, "<span class=\"highlight\">");
        });
        test("Yoghurt.", function () {
            const result = translator.us2gb("I ate yogurt for breakfast.");
            assert.include(result, "<span class=\"highlight\">");
        });
        test("Soccer", function () {
            const result = translator.gb2us("We watched the footie match for a while.");
            assert.include(result, "<span class=\"highlight\">");
        });
        test("Paracetamol", function () {
            const result = translator.gb2us("Paracetamol takes up to an hour to work.");
            assert.include(result, "<span class=\"highlight\">");
        });
    });
});
