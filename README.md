
# SwiftTranslator Test Automation Suite

Automated tests for the **SwiftTranslator** web application, which converts **Singlish to Sinhala**, using **Playwright**.

---

## Project Overview

This suite validates the functionality of SwiftTranslator, covering:

* **24 positive functional scenarios**
* **10 negative functional scenarios**
* **1 UI-related scenario**

---

## Prerequisites

Before running the tests, ensure the following are installed:

* **Node.js** (v16 or higher)
* **npm** (comes with Node.js)

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

Or extract the project zip file if downloaded.

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install chromium
```

---

## Project Structure

```
.
├── swift-translator-tests.spec.js    # Main test file
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
```

---

## Running the Tests

### Run All Tests

```bash
npm test
```

### Run Tests in Headed Mode (visible browser)

```bash
npm run test:headed
```

### Run Tests in Interactive UI Mode

```bash
npm run test:ui
```

### Run Tests in Debug Mode

```bash
npm run test:debug
```

### View HTML Test Report

```bash
npm run report
```

---

## Test Coverage

### Positive Functional Tests (24 scenarios)

Covers:

* **Sentence Structures:** Simple, compound, complex
* **Question Forms:** Interrogatives
* **Command Forms:** Direct and polite imperatives
* **Tense Variations:** Past, present, future
* **Negations:** Negative sentence forms
* **Greetings & Responses:** Conversational patterns
* **Mixed Language:** English words in Singlish
* **Punctuation & Formatting**
* **Numbers & Currency**

### Negative Functional Tests (10 scenarios)

Tests for robustness including:

* Missing or extra spaces
* Line breaks in input
* Informal slang
* Formatting or typographical errors
* Abbreviations and technical terms

### UI Test (1 scenario)

* Real-time output update validation as user types

---

## Test Data Structure

Each test case includes:

* **Test Case ID** (e.g., Pos_Fun_001)
* **Name**
* **Input** (Singlish)
* **Expected Output** (Sinhala)
* **Category**
* **Grammar Focus**
* **Length Type** (S/M/L)

---

## Configuration

Modify settings in `playwright.config.js`:

* **Default timeout:** 60s
* **Expect timeout:** 10s
* **Retries:** 0 (increase if needed)
* **Workers:** 1 (sequential execution)

---

## Troubleshooting

**Tests Failing:**

1. Network issues – check your connection
2. Website changes – verify selectors
3. Timeout errors – increase timeout

**Installation Issues:**

```bash
node --version      # Ensure Node.js v16+
npm cache clean --force
npm install
```

**Browser Issues:**

```bash
npx playwright install --force chromium
```

---

## Test Results

Saved in `test-results/`:

* **HTML report:** `test-results/html-report/`
* **JSON results:** `test-results/test-results.json`
* **Screenshots/Videos:** `test-results/artifacts/`

---

## Notes

* Tests run sequentially to avoid conflicts
* 2-second wait between tests for stability
* Screenshots/videos captured only on failure
* Base URL configured in `playwright.config.js`

---

## License

Educational project for **IT3040 - ITPM** assignment.

---

## Author

**BSc (Hons) in Information Technology – Year 3 Student**

---
