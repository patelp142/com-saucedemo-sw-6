$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4024960700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successful with valid credentials",
  "description": "",
  "id": "login-page-test;user-should-login-successful-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter email id in email field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see text Products",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iEnterEmailIdInEmailField()"
});
formatter.result({
  "duration": 337792000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 135575500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 166333300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldSeeTextProducts()"
});
formatter.result({
  "duration": 117147600,
  "status": "passed"
});
formatter.after({
  "duration": 967565700,
  "status": "passed"
});
formatter.before({
  "duration": 2785724800,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "I am on login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "User should see six products are displayed on homepage",
  "description": "",
  "id": "login-page-test;user-should-see-six-products-are-displayed-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter email id in email field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see six products are displayed on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iEnterEmailIdInEmailField()"
});
formatter.result({
  "duration": 161046200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 176031200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 129005800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldSeeSixProductsAreDisplayedOnHomePage()"
});
formatter.result({
  "duration": 91664500,
  "status": "passed"
});
formatter.after({
  "duration": 807617300,
  "status": "passed"
});
});