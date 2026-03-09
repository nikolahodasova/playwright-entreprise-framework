# Playwright Enterprise Test Framework

End-to-end test automation framework built with Playwright and TypeScript.

This project demonstrates a scalable automation architecture used in modern QA teams, including Page Object Model, fixtures-based dependency injection, CI integration, visual testing, and Allure reporting.

---

## 🚀 Tech Stack

* Playwright
* TypeScript
* Node.js
* Allure Reporting
* GitHub Actions CI
* Docker

---

## 🏗️ Framework Architecture

```
tests/
  smoke/
  regression/
  api/
  visual/

pages/
fixtures/
utils/
test-data/
config/
storage/
```

Architecture follows best practices used in enterprise automation frameworks:

* Page Object Model
* Dependency Injection via Playwright Fixtures
* Externalized Test Data
* Parallel execution support
* Visual regression testing

---

## 🧪 Test Types

This framework includes several types of automated tests:

* **Smoke tests** – critical functionality checks
* **Regression tests** – full functional coverage
* **API tests** – backend endpoint validation
* **Visual tests** – UI layout verification

---

## ⚙️ Installation

Clone repository:

```
git clone <repo-url>
cd playwright-enterprise-framework
```

Install dependencies:

```
npm install
```

Install browsers:

```
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:

```
npx playwright test
```

Run smoke tests only:

```
npx playwright test --grep @smoke
```

Run visual tests:

```
npx playwright test --grep @visual
```

---

## 📊 Reporting

Generate Allure report:

```
allure generate allure-results --clean
allure open
```

Playwright HTML report is also generated automatically.

---

## 🔁 CI Pipeline

Tests run automatically using **GitHub Actions** on every push.

CI includes:

* dependency installation
* Playwright browser setup
* automated test execution
* artifact upload (reports)

---

## 📦 Docker Support

Framework can be executed inside Docker:

```
docker build -t playwright-tests .
docker run playwright-tests
```

---

## 📚 Key Features

* Page Object Model architecture
* Playwright fixtures for dependency injection
* Parallel test execution
* Storage state authentication
* Visual regression testing
* Hybrid API + UI testing
* CI/CD integration

---

## 👩‍💻 Author

Nikola Hodásová
QA Automation learning project focused on building a scalable Playwright framework architecture.
