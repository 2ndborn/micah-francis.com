# Micah-Francis.com Testing
Visit the deployed site: [micah-francis.com](https://2ndborn.github.io/micah-francis.com/)
## CONTENTS
## AUTOMATED TESTING
### W3C Validator
[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.
* [Home page](./docs/assets/validator.w3.org_nu_home.webp) - Error aren't fixable because of the React Single Page Application.
* [About me page](./docs/assets/validator.w3.org_nu_aboutme.webp) - Error aren't fixable because of the React Single Page Application.
* [Portfolio page](./docs/assets/validator.w3.org_nu_portfolio.webp) - Error aren't fixable because of the React Single Page Application.
* [App.css](./docs/assets/validator.w3.org_nu_app.css.webp)
* [Index.css](./docs/assets/validator.w3.org_nu_index.css.webp)
* [Home.css](./docs/assets/validator.w3.org_nu_home.css.webp)
* [Aboutme.css](./docs/assets/validator.w3.org_nu_aboutme.css.webp)
* [Portfolio.css](./docs/assets/validator.w3.org_nu_portfolio.css.webp)
* [Navbar.css](./docs/assets/validator.w3.org_nu_navbar.css.webp)
* [Footer.css](./docs/assets/validator.w3.org_nu_footer.css.webp)
## MANUAL TESTING
### Testing User Stories

`Navigation`
| Goals | How are they achieved? | Evidence |
| :--- | :--- | :--- |
| I want to gain access to the Home, About me and Portfolio pages via the nav bar, | A Navbar within a hamburger menu links to all pages of the site is utilised. | ![Navbar]() |
| I want to able to visually identify what page I am on using the nav bar so that I can know what page I am on. | Active page has a font color of hsl(300,  100%,  40%)| ![Navbar]() |

`Home Page`
|  Goals | How are they achieved? | Evidence |
| :--- | :--- | :--- |
| I want to be able to view introductory page, so that I can can understand the theme of the website. | Users are introduced to a home page that says "Micah Francis Fullstack Developer" | ![Image of homepage]() |

`About me`
| Goal | How  is this achieved | Evidence |
| --- | --- | --- |
| I want to read a short bio, so that I understand the owners background and level of experience.|Users can scroll through the owners Executive statement, Education, Skills and Work experience, with a "See more" button if they want to learn more.  |![image of the owners bio]()|


`Gallery`
| Goal | How  is this achieved | Evidence |
| --- | --- | --- |
| I want to view the owners work, so that I can understand the range their capabilities.|Users can view a range of the owners web development projects|![Image of various picture]()|
| I want to have links to the live sites and the GitHub site, so I can experience the site and look at the code|Users can click image icons to visit either the live site or the GitHub site.|![image of the individual image]()|

`Contact`
| Goal | How  is this achieved | Evidence |
| --- | --- | --- |
| I want to be able to contact the owner, so that I can book or enquire about a consultation.|User can contact the owner via WhatsApp, Email, LinkedIn and GitHub by clicking one of the 4 button in the footer of each page.|![Image of the Contact page]()|

`General`
| Goal | How  is this achieved | Evidence |
| --- | --- | --- |
| I want to be able see the contact details of the user throughout the site, so that I can use alternative means to make contact.|Users can see the owners Email and Mobile number in the footer.|![Image of the Footer]()|
| I want the app to function across multiple devices, so that I can access and use it without restrictions regardless of the device I'm on.|Users can access the site on multiply devices.|![Homepage]()|
- - -

### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * MSI Summit 13 AI+ Evo A2VMTG
  * HP
  * Google Chromebook
* Mobile Devices:
  * iPhone 13 pro
  * Google Pixel 6 Pro

Devices tested the site using the following browsers:

* Google Chrome
* Edge
* Firefox
* Opera 

Additional testing was taken by friends and family on a variety of devices and screen sizes.

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
|**`Navbar`**|
| Home navlink | When clicked, the user is taken to the Home page | Clicked the Home navlink | Navigated to the Home page | ✅ |
| About Me navlink | When clicked, the user is taken to the About Me page | Clicked the About Me navlink | Navigated to the About Me page | ✅ |
| Portfolio navlink | When clicked, the user is taken to the Portfolio page | Clicked the Portfolio navlink | Navigated to the Portfolio page | ✅ |
| Hover effect on nav items | When hovering over a nav item, it increases in size and changes colour | Hovered over nav items | Items increased in size and changed to **hsl(300, 100%, 40%)** | ✅ |
| --- | --- | --- | --- | --- |
|**`Footer`**|
| Icon hover | When hovering over an icon, it changes to a lighter colour to indicate interaction | Hovered over icons | Icons changed to **hsl(300, 100%, 40%)** | ✅ |
| WhatsApp button | When clicked, WhatsApp opens with the message “Hi Micah” | Clicked the WhatsApp button | WhatsApp opened with the message “Hi Micah” | ✅ |
| Email button | When clicked, the user’s email client opens with a new message starting with “Hi Micah” | Clicked the Email button | Email client opened with a new message containing “Hi Micah” | ✅ |
| LinkedIn/GitHub buttons | When clicked, a new tab opens with the owner’s LinkedIn or GitHub page | Clicked the LinkedIn/GitHub buttons | LinkedIn/GitHub opened in a new tab | ✅ |
| --- | --- | --- | --- | --- |
|**`Home Page`**|
| See Portfolio button | When clicked, the user is taken to the Portfolio page | Clicked the “See Portfolio” button | Portfolio page rendered | ✅ |
| See About Me button | When clicked, the user is taken to the About Me page | Clicked the “See About Me” button | About Me page rendered | ✅ |
|**`About Me Page`**|
| All “See more” buttons | When hovering over the buttons, they highlight to **hsl(300, 100%, 40%)** | Hovered over buttons | Buttons highlighted correctly | ✅ |
| Executive Statement | When clicking “See more,” additional text is revealed | Clicked “See more” | Additional paragraph displayed | ✅ |
| All carousels | After 10 seconds of no interaction, the carousel moves to the next card | Did not interact with the screen | Next card appeared after 10 seconds | ✅ |
| All carousels | When interacting with a card, the carousel pauses | Hovered over cards | Carousel paused and did not advance | ✅ |
| All carousels | If “See more” is clicked on a new card, the previously expanded card collapses | Expanded one card, moved to another, clicked “See more” | Previous card collapsed as expected | ✅ |
| All carousels | Clicking “See more” expands the card to reveal additional content | Clicked “See more” | Additional content displayed | ✅ |
| --- | --- | --- | --- | --- |
|**`Portfolio Page`**|
| Search bar | When typing a language, the carousel filters projects by that language/framework and the dots update accordingly | Typed languages used across projects | Carousel filtered correctly and dots updated | ✅ |
| Search bar | When typing a language that does not exist, the message *“No projects found using the ‘[language]’ language.”* is displayed | Typed “adf” | Message displayed correctly | ✅ |
| Language icons | When hovering over language icons, the language name appears above | Hovered over icons | Language names appeared above icons | ✅ |
| Website/GitHub buttons | When hovering, buttons expand and highlight to **hsl(300, 100%, 40%)** | Hovered over buttons | Buttons expanded and highlighted | ✅ |
| Website/GitHub buttons | When clicked, a new tab opens with the website or GitHub repository | Clicked buttons | New tab opened with correct destination | ✅ |
| Portfolio carousel | After 10 seconds, the carousel moves to the next card | Watched the carousel | Next card appeared after 10 seconds | ✅ |
