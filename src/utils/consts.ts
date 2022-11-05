import figlet from "figlet";
import gradient from "gradient-string";
import { ProjectInfo } from "../types";

export const title = gradient.pastel.multiline(
  figlet.textSync("Dont Read Me Bro")
);

export function makeTitle(projectInfo: ProjectInfo) {
  const account = projectInfo.account.split(" ").join("%20");
  const project = projectInfo.project.split(" ").join("%20");
  return `
<a name="readme-top" />
<br />

<div align="center">
  <a href="https://github.com/${account}/${project}">
    <img src="https://github.com/yiremorlans/rendervous/blob/main/public/imgs/render-icon.png" alt="rendervous logo" width="50" height="50">
  </a>

  <h2 align="center">${projectInfo.project}</h2>

  <p align="center">
    ${projectInfo.description}
    <br />
    <a href="https://github.com/${project}/${project}"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/${project}">View Demo</a>
    ·
    <a href="https://github.com/${account}/${project}/issues">Report Bug</a>
    ·
    <a href="https://github.com/${account}/${project}/issues">Request Feature</a>
  </p>
</div>

${makeBadges(projectInfo)}

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    
  </ol>
</details>
  `;
}

export function makeFooter(projectInfo: ProjectInfo) {
  return `
## Contact

${projectInfo.account} - [@${projectInfo.account}](https://twitter.com/${projectInfo.account})

Project Link: [drmb](https://github.com/${projectInfo.account}/${projectInfo.project})

<p align="right">(<a href="#readme-top">back to top</a>)</p>
  `;
}

export function makeBadges(projectInfo: ProjectInfo) {
  const account = projectInfo.account.split(" ").join("%20");
  const project = projectInfo.project.split(" ").join("%20");
  return `
<div align="center">

  [![GitHub Stars](https://img.shields.io/github/stars/${account}/${project}.svg)](https://github.com/${account}/${project}/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/${account}/${project}.svg)](https://github.com/${account}/${project}/issues) [![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/${account}/${project}) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://${projectInfo.url})

</div>`;
}

export function makeLicense(projectInfo: ProjectInfo, license: string) {
  const account = projectInfo.account.split(" ").join("%20");
  const project = projectInfo.project.split(" ").join("%20");
  return `
## License

> You can check out the full license [here](https://github.com/${account}/${project}/LICENSE)

This project is licensed under the terms of the **${license}** license.
`;
}

export function makeCoffee(projectInfo: ProjectInfo) {
  return `
  
  ## Buy me a coffee

  Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)
  
  <a href="https://www.buymeacoffee.com/${projectInfo.account}" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
  `;
}
