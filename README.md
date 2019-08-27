![GPI Logo](https://github.com/MainSystemDev/GPIShowroom/blob/master/public/img/brand/logo.png)

# GPI Showroom

### Installation
1. **Fork this REPO** and go to your page to copy and Clone with SSH (or HTTPS) URL
2. Open Terminal
3. Go to your prefered directory i.e. `$ cd Codes`
4. `$ git clone [repo]` ex. `$ git clone git@github.com:[X-USER]/GPIShowroom.git`
5. `$ gpi`
6. `$ npm install`
7. `$ npm run dev`
8. Preview in browser `http://localhost:8081/`

<hr>

### File Structure

<p>Base structure, you’ll find the following directories and files:</p>

<pre class="highlight">
<code>|-- GPIShowroom/
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

### Production Build

1. `$ npm run build`
2. Set local domain on hosts i.e. `http://web.gpi.local`
2. Setup server on nginx config and point the root directory to `/dist`
