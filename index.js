// running app
const inquirer = require('inquirer');
const Engineer =require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const fs = require("fs");
const path = requrie("path");
const OUTPUT_DIR = path.resolver(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMembers = [];