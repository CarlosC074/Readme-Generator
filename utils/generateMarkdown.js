// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== ""){
    return `[${license}](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  else {return ' '}
}

function renderLicenseLink(license) {
  if (license !== '') {
     return `[license](#license) \n \n`;
 }
 else {
     return ' ';
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, userName) {
  const userLicense = license;
  const licenseBadge = renderLicenseBadge(license);
  if (userLicense !== '') {
    return `## license \n \n
    ${userLicense} License \n \n
    ${licenseBadge} \n \n
    © 2021 ${userName}} \n \n
    `
  }
  else {
    return ' ';
  }
}

function generateMarkdown(userName, projectName, description, installation, features, license) {
  return  `# ${projectName} \n \n
  ## Description \n \n
  ${description} \n \n
  ## Table of contents \n \n
  [Installation](#installation) \n
  [Features](#features) \n
  ${renderLicenseLink(license)}
  ## installation \n \n
  ${installation} \n \n
  ## features \n \n
  ${features} \n \n
  ${renderLicenseSection(license, userName)} \n \n`
}

module.exports = {renderLicenseBadge, renderLicenseSection, renderLicenseLink, generateMarkdown};
