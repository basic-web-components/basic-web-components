/*jslint node: true */
'use strict';

const fs = require('fs');
const path = require('path');

//
// allPackages is the global array of npm-publishable packages in this monorepo.
// This is all folders inside the ./packages folder that start with the prefix
// "basic-".
//
const PACKAGE_FOLDER = './packages';
const allPackages = fs.readdirSync(PACKAGE_FOLDER).filter(fileName => {
  const filePath = path.join(PACKAGE_FOLDER, fileName);
  const stat = fs.statSync(filePath);
  return stat && stat.isDirectory() && fileName.startsWith('basic-');
});

module.exports = allPackages;