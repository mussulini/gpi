<p align="center">
	<img src="https://raw.githubusercontent.com/mussulini/gpi/master/public/img/brand/logo.png" width="200">
</p>

##  Developer Machine Setup

### Installation
1. **Fork this REPO**
2. Go to your page to clone with SSH or HTTPS to your local machine or download the whole repo.
3. Open your Terminal or iTerm
4. Go to your prefered directory i.e. `$ cd Codes`
5. `$ git clone [repo]` ex. `$ git clone git@github.com:[X-USER]/gpi.git`
6. `$ gpi`
7. `$ npm install`
8. `$ npm run dev`
9. Preview in browser `http://localhost:8081/`

<hr>

### File Structure

<p>Base structure, you’ll find the following directories and files:</p>

<pre class="highlight">
<code>|-- gpi/
    |-- App.vue
    |-- main.js
    |-- router.js
    |-- assets
    |   |-- scss
    |   |   |-- style.scss
    |   |-- fonts
    |       |-- font-awesome
    |       |   |-- css
    |       |   |   |-- font-awesome.css
    |       |   |-- fonts
    |       |       |-- FontAwesome.otf
    |       |       |-- fontawesome-webfont.eot
    |       |       |-- fontawesome-webfont.svg
    |       |       |-- fontawesome-webfont.ttf
    |       |       |-- fontawesome-webfont.woff
    |       |       |-- fontawesome-webfont.woff2
    |-- components
    |   |-- Badge.vue
    |   |-- BaseButton.vue
    |   |-- BaseCheckbox.vue
    |   |-- BaseInput.vue
    |   |-- BaseNav.vue
    |   |-- BaseRadio.vue
    |   |-- BaseSlider.vue
    |   |-- BaseSwitch.vue
    |   |-- Card.vue
    |   |-- CloseButton.vue
    |   |-- Icon.vue
    |   |-- NavbarToggleButton.vue
    |-- layout
    |   |-- AppFooter.vue
    |   |-- AppHeader.vue
    |-- plugins
    |   |-- main.js
    |   |-- globalComponents.js
    |   |-- globalDirectives.js
    |-- views
        |-- Components.vue
        |-- Landing.vue
        |-- Login.vue
        |-- Profile.vue
        |-- Register.vue
        |-- components
            |-- Home.vue
            |-- Cms.vue
            |-- Showroom.vue
            |-- Contact.vue
            |-- Components.vue
            |-- Preview.vue
</code></pre>

<hr>

### How to setup local domain
* Add local domain to your etc/hosts, i.e.`[web.gpi.local]`
* Setup server on nginx config and point the root directory to `/dist` *(production build)*
* Restart nginx `sudo nginx -s reload`

### Production Build

1. `$ npm run build`
2. Copy this on any browser `http://web.gpi.local`
