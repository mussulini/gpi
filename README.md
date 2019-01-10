# GPI Showroom

### Installation

1. `$ git clone [repo]`
2. `$ npm install`
3. `$ npm run dev`
4. Preview in browser `http://localhost:8081/`

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
    |   |   |-- bootstrap
    |   |   |-- custom
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
    |-- layout/gpi
    |   |-- GpiFooter.vue
    |   |-- GpiHeader.vue
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
            |-- BasicElements.vue
            |-- Carousel.vue
            |-- CustomControls.vue
            |-- DownloadSection.vue
            |-- Examples.vue
            |-- Hero.vue
            |-- Icons.vue
            |-- Inputs.vue
            |-- JavascriptComponents.vue
            |-- Navigation.vue
</code></pre>

<hr>

### Production

1. `$ npm run build`
2. Set local domain on hosts i.e. `http://web.gpi.local`
2. Setup server on nginx config and point the root directory to `dist`
