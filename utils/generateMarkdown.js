// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const userLicense = license;

  if(userLicense !== null){
    return `[${data.projectname}](https://img.shields.io/badge/license-${userLicense}-brightgreen)`;
  }
  else {return ' '}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const userLicense = license;
  
  if (userLicense !== null) {
    return `## license \n \n
    ${userLicense} License \n \n
    © ${data.year} ${data.name} \n \n
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {renderLicenseBadge, renderLicenseSection, generateMarkdown};
