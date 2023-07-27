const chalk = require("chalk");
const pkg = require("../package.json");

console.log(`

${chalk.green("Hey there! 👋")}

Thanks for giving the ${pkg.name} a try. 🎉
To get you going really quickly this project includes a setup step.

${chalk.yellow.bold("npm run setup")} automates the creation of
  the appropriate environment files for Contentful.

When this is done run:

${chalk.yellow(
  "npm run dev"
)} to start a development environment at ${chalk.green("localhost:8000")}

or

${chalk.yellow(
  "npm run build"
)} to create a production ready static site in ${chalk.green("./public")}

For further information check the readme of the project
(https://github.com/contentful/starter-gatsby-blog)

`);
