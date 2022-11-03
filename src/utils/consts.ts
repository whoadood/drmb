import figlet from "figlet";
import gradient from "gradient-string";
import { ProjectInfo } from "../types";

export const title = gradient.pastel.multiline(
  figlet.textSync("Dont Read Me Bro")
);

export function makeBadges(projectInfo: ProjectInfo) {
  return `[![GitHub Stars](https://img.shields.io/github/stars/${projectInfo.account}/${projectInfo.project}.svg)](https://github.com/${projectInfo.account}/${projectInfo.project}/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/${projectInfo.account}/${projectInfo.project}.svg)](https://github.com/${projectInfo.account}/${projectInfo.project}/issues) [![Current Version](https://img.shields.io/badge/version-1.0.7-green.svg)](https://github.com/${projectInfo.account}/${projectInfo.project}) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://${projectInfo.url})`;
}

export function makeLicense(projectInfo: ProjectInfo, license: string) {
  return `
## License

> You can check out the full license [here](https://github.com/${projectInfo.account}/${projectInfo.project}/LICENSE)

This project is licensed under the terms of the **${license}** license.
`;
}

export function makeCoffee(projectInfo: ProjectInfo) {
  return `
  ---
  
  ## Buy me a coffee

  Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)
  
  <a href="https://www.buymeacoffee.com/${projectInfo.account}" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
  `;
}
