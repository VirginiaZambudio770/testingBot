#TestingBot
This proyect tests the login of this page

#Technologies applied
testcafe
Javascript
Node.js
dotenv

#folders
pom/data for Constants
pom/tests for all the test files
pom/pages for all pages files
.env file for security values


#How to Install-
Open a terminal
CLone the respository: git clone https://github.com/vzambudio/testingbot.git
Access to the repository folder
cd testing.bot

#Install dependencies
npm install
npm init -y
npm install --save-dev testcafe
npm install testcafe@latest --save-dev

#Github
Add .env and node_modules folders to git ignore file

#How to use it
Run the tests with the command line: npx testcafe firefox pom/tests/Login.test.js
or Run the Scripts: 
Use npm run test:smoke for smoke tests
Use npm run test:regression for regression tests
