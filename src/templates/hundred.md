## About The Project

<!-- project main image -->

<br>
<!-- project description here -->

DRMB is a README generator for developers who want the hardwork put into their project reflected in the projects README. Engineering software at any scale is a lot of work, DRMB is aimed at aleviating some of the workload by offering an elegant, simple solution for project README files. Simply enter the project details an viola!

### Built With

<!-- project technologies icons -->

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get the project running on your local machine, you will need Node.js and the following installation guide to get started.

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/whoadood/drmb.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run in dev mode (rollup compile on save)
   ```sh
   npm run dev
   ```
4. Link binary command
   ```sh
   npm link
   ```
5. Run CLI
   ```sh
   drmb
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

<!-- project demo images -->

![drmb-demo](https://user-images.githubusercontent.com/82413454/200122848-efb7ec04-694f-4e59-a7f2-70ee37a711eb.png)

<!-- project usage guide -->

- enter github username
- enter this project name
- enter this project url
- enter a description for this project
- let the magic happen

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

<!-- future plans for project -->

- [ ] Add templates
- [ ] Fine tune input prompts
- [ ] Add prompt for templates with preview links

<!-- link to github issues -->
<!-- See the [open issues](https://github.com/yiremorlans/rendervous/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

<!-- optimization plans -->

Notifications for new comments left on user post is currently in developement, as well as notifications to new posts by friends will be implemented in the near future as well. Planned future optimizations include ongoing improvements to the user interface and navigation. Users will be able to add friends to their profile, which will allow them to view all the posts specific to their friends.

## Lessons Learned

<!-- a few paragraphs about project learnings -->

I knew I wanted to incorporate an MVC structure to maintain organization during development but also to allow future improvements and features to be implemented post-production of rendervous. New features can easily be worked into a new or exisiting model (thanks mongoose), followed by logic and data retrieval within the controllers to then routing and paths be configured accordingly.

It was important to me to have a robust code base that would fascilitate incorporating new features, but also modularity so that the views could be swapped out to integrate a different front-end library, like React. TailwindCSS + DaisyUI combination offered components and additional UI support I had envisioned for a clean aesthetic and user friendly experience as part of rendervous' core features.

A good portion involved using package libraries' respective documentation to troubleshoot issues encountered along the way, like method-override to send put requests through forms making rendervous a RESTful application.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- [contributors-shield]: https://img.shields.io/github/contributors/yiremorlans/rendervous.svg?style=for-the-badge
[contributors-url]: https://github.com/yiremorlans/rendervous/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yiremorlans/rendervous.svg?style=for-the-badge
[forks-url]: https://github.com/yiremorlans/rendervous/network/members
[stars-shield]: https://img.shields.io/github/stars/yiremorlans/rendervous.svg?style=for-the-badge
[stars-url]: https://github.com/yiremorlans/rendervous/stargazers
[issues-shield]: https://img.shields.io/github/issues/yiremorlans/rendervous.svg?style=for-the-badge
[issues-url]: https://github.com/yiremorlans/rendervous/issues
[license-shield]: https://img.shields.io/github/license/yiremorlans/rendervous.svg?style=for-the-badge
[license-url]: https://github.com/yiremorlans/rendervous/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yiremorlans
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com -->
