# Cypress Setup
1. Install NodeJS [Check Node Version node -v]
2. Install NPM [Check NPM Version npm -v]
3. Create a blank project folder
4. Open the folder through VS Code
5. Open Terminal and run the following commands
6. npm init -y [Initialize the project]
7. npm install cypress -–save-dev [Install Cypress]
8. npx  cypress -v [Check Cypress Version]
9. npx cypress verify [Verify Cypress Installation]
10. npx cypress open [Open Cypress]
11. cypress run e2e [Run All Tests with Browser Headless]
12. cypress run --spec cypress/e2e/change_password/change_password.cy.js [To run specific suit]
13. cypress run --headed --spec cypress/e2e/change_password/change_password.cy.js [To run specific suit with head]
14. cypress run --browser chrome [Run in Chrome Browser]
15. cypress run e2e --headed [Run with Browser Head AND WILL GENERATE HTML REPORT]
16. Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
17. npx cypress run --record --key ba743240-2eda-4f48-af79-9a757bd52bf1
18. npx cypress run --record
19. npm install --save-dev cypress-file-upload

# Working Files and Folders
1. e2e [To write All Tests]
2. Fixtures >> JSON file [For constant values]
3. PageObjects [For Page Object Model]
4. Support >> Commands.js [For Base Settings]
5. cypress.conf.js [For Test Run Related Configuration]
6. cypress run --e2e --headed --reporter mochawesome [Run with generate Mocha reports]
7. cypress/test-report/*.json > cypress/test-report/output.json