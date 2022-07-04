# Guillem Curcó test automation

This is an automation project made to test Orange Bank Google results

## Required software
1. ChromeDriver installed and added to your path
2. npm installed

## Installation

Install packages:

```bash
npm install
```

## Usage

To execute the tests on the console:
```javascript
npm run test
```
In case that the test is not initialized, try to add the absolute path on package.json:
``` javascript
{
  "name": "automation-test",
  "version": "1.0.0",
  "scripts": {
    "test": "node_modules/.bin/cucumber-js -f @cucumber/pretty-formatter features/test.feature"
  },
}
```
Replace "test" value to:
``` javascript
{
  "name": "automation-test",
  "version": "1.0.0",
  "scripts": {
    "test": "C:/Users/GuillemCurco/IdeaProjects/automation-test/node_modules/.bin/cucumber-js -f @cucumber/pretty-formatter features/test.feature"
  },
}
```