const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: "Pos_Fun_001",
      name: "Simple present tense statement",
      input: "Mama udhenma naegitinavaa",
      expected: "මම උදෙන්ම නැගිටිනවා",
      category: "Daily language usage",
      grammar: "Simple sentence",
      length: "S",
    },
    {
      tcId: "Pos_Fun_002",
      name: "Mixed language sentence with English words",
      input: "Mama bookshop ekata gihin, poth list eka gaththaa",
      expected: "මම bookshop එකට ගිහින්, පොත් list එක ගත්තා",
      category: "Mixed Singlish + English",
      grammar: "Compound sentences (two ideas joined)",
      length: "S",
    },
    {
      tcId: "Pos_Fun_003",
      name: "Complex sentence with conditional structure",
      input: "Exam pass vennanam hodhata paadam karanna venavaa",
      expected: "Exam pass වෙන්නනම් හොදට පාඩම් කරන්න වෙනවා",
      category: "Daily language usage",
      grammar: "Complex sentences (cause/effect, conditions)",
      length: "S",
    },

    {
      tcId: "Pos_Fun_004",
      name: "Question about understanding",
      input: "oyaata kivva dheval theerenne naedhdha ?",
      expected: "ඔයාට කිව්ව දෙවල් තේරෙන්නෙ නැද්ද ?",
      category: "Daily language usage",
      grammar: "Interrogative (questions) forms",
      length: "S",
    },
    {
      tcId: "Pos_Fun_005",
      name: "Imperative command",
      input: "Idhiriyen navathinna !",
      expected: "ඉදිරියෙන් නවතින්න !",
      category: "Daily language usage",
      grammar: "Imperative (commands) forms",
      length: "S",
    },

   
    {
      tcId: "Pos_Fun_006",
      name: " Positive forms",
      input: "Ehema kaloth vaedee hariyi",
      expected: "එහෙම කලොත් වැඩේ හරියි",
      category: "Daily language usage",
      grammar: "Affirmative (positive) forms",
      length: "S",
    },

    {
      tcId: "Pos_Fun_007",
      name: "Negative forms",
      input: "Ehema kaloth vaedee hariyanne nae",
      expected: "එහෙම කලොත් වැඩේ හරියන්නේ නැ",
      category: "Daily language usage",
      grammar: "Negative forms",
      length: "S",
    },

    {
      tcId: "Pos_Fun_008",
      name: "Greetings",
      input: "Suba raathriyak !",
      expected: "සුබ රාත්‍රියක් !",
      category: "Daily language usage",
      grammar: "Greetings",
      length: "S",
    },

    

    {
      tcId: "Pos_Fun_009",
      name: "Polite question request",
      input: "karunaakaralaa mata paenak dhenna puluvandha ?",
      expected: "කරුනාකරලා මට පැනක් දෙන්න පුලුවන්ද ?",
      category: "Daily language usage",
      grammar: "Requests",
      length: "S",
    },

    {
      tcId: "Pos_Fun_010",
      name: "Polite response",
      input: "Hari, Mama dhennam",
      expected: "හරි, මම දෙන්නම්",
      category: "Daily language usage",
      grammar: "Responses ",
      length: "S",
    },

    {
      tcId: "Pos_Fun_011",
      name: "Compound sentence with multiple clauses",
      input:
        "Api Christmas valata party ekak dhaemmaa , party eka 12 noon venakam thibba api hodhata enjoy kalaa, api thaegi share karagaththa , Christmas carols kivvaa ,mama magee rata inna yaluvonta WhatsApp valin wish kalaa",

      expected:
        "අපි Christmas වලට party එකක් දැම්මා , party එක 12 noon වෙනකම් තිබ්බ අපි හොදට enjoy කලා, අපි තැගි share කරගත්ත , Christmas carols කිව්වා ,මම මගේ රට ඉන්න යලුවොන්ට WhatsApp වලින් wish කලා",

      category: "Daily language usage",
      grammar:
        "Formatting (spaces / line breaks / paragraph),English technical/brand terms embedded in Singlish ,Names / places / common English words",
      length: "L",
    },

    {
      tcId: "Pos_Fun_012",
      name: " English abbreviations and short forms ",
      input: "website ekata sign up venna OTP ekak onee",
      expected: "website එකට sign up වෙන්න OTP එකක් ඔනේ",
      category: "English abbreviations and short forms",
      grammar: "Simple present tense",
      length: "S",
    },

    {
      tcId: "Pos_Fun_013",
      name: "Singular/plural usage and pronoun variations",
      input: "mama magee vaedee kalaa , api naevathath ekata vaeda karamu.",
      expected: "මම මගේ වැඩේ කලා , අපි නැවතත් එකට වැඩ කරමු.",
      category: "Singular/plural usage and pronoun variations",
      grammar: "Present tense and Past tense",
      length: "S",
    },

    {
      tcId: "Pos_Fun_014",
      name: "Negation patterns",
      input: "mama eka dhanne naethi nisaa mata eeka karanna bae",
      expected: "මම එක දන්නෙ නැති නිසා මට ඒක කරන්න බැ",
      category: "Negation patterns",
      grammar: "Present tense",
      length: "S",
    },
    {
      tcId: "Pos_Fun_015",
      name: "Tense variations (past / present / future)",
      input: "mama iiyee gedhara hitiye nae , adha mama gedhara idhan assignment ekak karanavaa , heta ayeth campus yanava",
      expected: "මම ඊයේ ගෙදර හිටියෙ නැ , අද මම ගෙදර ඉදන් assignment එකක් කරනවා , හෙට අයෙත් campus යනව",
      category: "Tense variations (past / present / future)",
      grammar: "Present tense / Past tense / Future tense",
      length: "M",
    },

    {
      tcId: "Pos_Fun_016",
      name: "Repeated word expressions used for emphasis and Joined vs segmented word variations (with/without spaces)",
      input: "hari hari , mata oyaa  kiyana dhee theerenavaa , eth mama oyaa kiyana dhe ahanne nae",
      expected: "හරි හරි , මට ඔයා  කියන දේ තේරෙනවා , එත් මම ඔයා කියන දෙ අහන්නෙ නැ",
      category: "Repeated word expressions used for emphasis and Joined vs segmented word variations (with/without spaces)",
      grammar: "Compound sentence",
      length: "M",
    },

     {
     tcId: "Pos_Fun_017",
      name: 'Currency amount',
      input: 'mama aluth gavumak gaththaa Rs. 5000.00 kata.',
      expected: 'මම අලුත් ගවුමක් ගත්තා Rs. 5000.00 කට.',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },

     {
      tcId: "Pos_Fun_018",
      name: "Future tense plan with date format",
      input: "mama studies valata America yannava 2026-03-03 .",
      expected: "මම studies වලට America යන්නව 2026-03-03 .",
      category: "Mixed Singlish + English, Date format",
      grammar: "Future tense plan",
      length: "S",
    },
     {
      tcId: "Pos_Fun_019",
      name: "Polite request for joining a batch trip",
      input: "api batch trip eka hanthaanata yanavaa , oyaalath join venavadha apith ekka yanna ?",
      expected: "අපි batch trip එක හන්තානට යනවා , ඔයාලත් join වෙනවද අපිත් එක්ක යන්න ?",
      category: "Interrogative (question)",
      grammar: "Polite request",
      length: "S",
    },

     {
      tcId: "Pos_Fun_020",
      name: "Two activities connected",
      input: "api aluth gedharata heta yanavaa , ekata oona karana badu laesthi karanavaa dhaen",
      expected: "අපි අලුත් ගෙදරට හෙට යනවා , එකට ඕන කරන බඩු ලැස්ති කරනවා දැන්",
      category: "Daily language usage",
      grammar: "Compound sentence",
      length: "M",
    },
     {
      tcId: "Pos_Fun_021",
      name: "Polite question request",
      input: "mata aayeth eka kiyanna puluvandha ? mata oyaa kiyapu dheeval therennee nae",
      expected: "මට ආයෙත් එක කියන්න පුලුවන්ද ? මට ඔයා කියපු දේවල් තෙරෙන්නේ නැ",
      category: "Greeting / request / response",
      grammar: "Interrogative (question)",
      length: "M",
    },
     {
     tcId: "Pos_Fun_022",
      name: "Future tense plan",
      input: "mama heta nuvara yanavaa , perahaera balanna mama  podi kaalee idhan nuvara perahaera balanna yanavaa pavulee ayath ekka . api dhavas kihipayak naevathilaa innavaa nuvara.",
      expected: "මම හෙට නුවර යනවා , පෙරහැර බලන්න මම  පොඩි කාලේ ඉදන් නුවර පෙරහැර බලන්න යනවා පවුලේ අයත් එක්ක . අපි දවස් කිහිපයක් නැවතිලා ඉන්නවා නුවර.",
      category: "Daily language usage",
      grammar: "Future tense plan",
      length: "M",
    },
     {
      tcId: "Pos_Fun_023",
      name: "Past tense action",
      input: "api iiyee football plee kalaa",
      expected: "අපි ඊයේ football ප්ලේ කලා",
      category: "Daily language usage",
      grammar: "Past tense",
      length: "S",
    },
     {
      tcId: "Pos_Fun_024",
      name: "Small length conversation",
      input: "haayi , mama hodhin innavaa , oyaata kohomadha ?",
      expected: "හායි , මම හොදින් ඉන්නවා , ඔයාට කොහොමද ?",
      category: "Daily language usage",
      grammar: "Compound sentence",
      length: "S",
    },
  ], 


negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamaassingmentekakaralasubmitkarannaoneikmanin',
      expected: 'මම අසයින්මන්ට් එක කරල submit කරන්න ඔනේ ඉක්මනින්',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'Me tika ikmanta iwara karala gedara yamu , wahinnai yanne',
      expected: 'මේ ටික ඉක්මන්ට ඉවර කරලා ගෙදර යමු , වහින්නයි යන්නේ',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mage freetime eke mata film ekak balanna one',
      expected: 'මගේ freetime   එකේ මට film එකක් බලන්න ඔනේ',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Paragraph-style input',
      input: 'Sri Lanka dakunu Asiawe pihiti sundaara deshayaki. Mehe lassana werala, uyana, kandu saha nagara rasak atha. Sri Lankave janathawa mithrashili saha unusum mithuran wethi. Mehe sanskruthiya, ahara, ha aagama uththasava vishesayenma agaya karaniya ya. Kuda pradesayak wuda, Sri Lankawa athulath deshiya soduruthwa saha vyaparthika sancharaka kshethra nisa lowa pura janapriya we.',
      expected: 'ශ්‍රී ලංකා දකුණු ආසියාවේ පිහිටි සුන්දර දේශයකි. මෙහි ලස්සන වෙරළ, උයන, කඳු සහ නගර රැසක් ඇත. ශ්‍රී ලංකාවේ ජනතාව මිත්‍රශීලී සහ උණුසුම් මිතුරන් වෙති. මෙහි සංස්කෘතිය, ආහාර, හා ආගමික උත්සව විශේෂයෙන්ම අගය කරණීය ය. කුඩා ප්‍රදේශයක් වුවද, ශ්‍රී ලංකාව ඇතුළත් දේශීය සොඳුරුත්ව සහ ව්‍යාපෘතික සංචාරක ක්ෂේත්‍ර නිසා ලොව පුරා ජනප්‍රිය වේ.',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Compound sentence',
      length: 'L'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'eka supiri catch ekak machang',
      expected: 'එක සුපිරි catch එකක් මචන්',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'adooo man waradi poth tikak genalla class ekata',
      expected: 'අඩෝ මන් වැරදි පොත් ටිකක් ගෙනල්ලා class එකට',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'video eka mama WhatsApp walin send kala',
      expected: 'වීඩියෝ එක මම WhatsApp වලින් send කල',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Line breaks (multi-line input)',
      input: 'api udenma nagitala location ekata yanawa \n oyalath ikmanin enna \n naththam wade complete karanna wenne na ',
      expected: 'අපි උදෙන්ම නගිලා location එකට යනවා\nඔයාලත් ඉක්මනින් එන්න\nනැත්නම් වැඩේ complete කරන්න වෙනේ නෑ',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'L'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'Mata oyawa penne na,  oya koheda inne ?',
      expected: 'මට ඔයාව පෙන්නේ නැ, ඔයා කොහෙද ඉන්නේ ?',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'eii thawa podi welawakin wade patan gannawa ikmanta karala iwara karamu',
      expected: 'ඒයි තව පොඩි වේලාවකින් වැඩේ පටන් ගන්නවා ඉක්මනට කරලා ඉවර කරමු',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  ui: {
    tcId: 'Neg_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'aluth technologies valin apita kalaya ithuru karaganna puluvan, hamadema ikmanin karaganna puluvan.',
    partialInput: 'අලුත් technologies වලින් අපිට කලය ඉතුරු කරගන්න පුලුවන්, හමඩෙම ඉක්මනින් කරගන්න පුලුවන්.',
    expectedFull: 'අලුත් technologies වලින් අපිට කලය ඉතුරු කරගන්න පුලුවන්, හමඩෙම ඉක්මනින් කරගන්න පුලුවන්.',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'M'
  }
}; // Close the TEST_DATA object here

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
