# Vending Machine Change Calculator - TDD

[![Tests and Coverage](https://github.com/Raghunandan-45/Vending-machine-TDD/actions/workflows/test.yml/badge.svg)](https://github.com/Raghunandan-45/Vending-machine-TDD/actions/workflows/test.yml)

> A Test-Driven Development example with modern JavaScript testing tools

## 🚀 Features

- ✅ Test-Driven Development with Vitest
- ✅ Code Coverage with V8
- ✅ CI/CD with GitHub Actions
- ✅ Modern ES6+ JavaScript

## 🧪 Running Tests Locally
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:ui       # Interactive UI
npm run coverage      # Coverage report
```

## 📊 Example
```javascript
getChange(215, 300);  // Returns [50, 20, 10, 5]
// Paid: £3.00 for £2.15 item
// Change: 85p = 50p + 20p + 10p + 5p
```

## 🎯 TDD Process

1. **Red** - Write a failing test
2. **Green** - Write minimal code to pass
3. **Refactor** - Improve code quality

## 🛠️ Tech Stack

- **Vitest** - Lightning-fast test runner
- **@vitest/coverage-v8** - Native code coverage
- **GitHub Actions** - Automated CI/CD pipeline