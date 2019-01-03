<template>
    <div>

        <banner></banner>

        <section class="section section-light">
            <div class="container">
                <header class="header text-center">
                    <span class="header-sep gradient-primary mb-5"></span>
                    <h1 class="section-header display-2">Prometheus</h1>
                    <h5 class="sub-header">Powerful, Fast &amp; Reliable CMS</h5>
                </header>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <header class="header text-center">
                    <h1 class="section-header display-3">CMS Key Features</h1>
                    <span class="header-sep gradient-primary mt-4"></span>
                </header>
            </div>
        </section>

        <section class="section section-light">
            <div class="container">
                <header class="header text-center">
                    <h1 class="section-header display-2">Product Suite</h1>
                    <h5 class="sub-header">Most Innovative</h5>
                    <span class="header-sep gradient-primary mt-3"></span>
                </header>
            </div>
        </section>

        <section class="section pb-5">
            <div class="container">
                <header class="header text-center mb-4">
                    <h1 class="section-header">We Craft</h1>
                    <h5 class="sub-header">Get modern & responsive website</h5>
                    <span class="header-sep gradient-primary mt-3"></span>
                </header>

                <footer class="footer text-center mt-4">
                    <p>We let you test our complete suite of features — with zero risk.</p>
                    <button class="btn btn-primary">View more templates</button>
                </footer>
            </div>
        </section>

    </div>
</template>

<script>
    import Banner from "./components/Banner";
    
    export default {
        name: "home",
        components: {
            Banner,
        }
    };
</script>
