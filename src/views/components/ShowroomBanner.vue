<template>

    <section class="section section-hero">

        <vue-tiny-slider id="customize"
            :mouse-drag="true"
            :lazyload="true"
            :autoplayButtonOutput="false"
            :loop="true"
            :navAsThumbnails="true"
            :autoplay="true"
            mode="gallery"
            navContainer="#customize-thumbnails"
            controlsContainer="#customize-controls">

            <div class="items container-fluid">
                <div class="row no-gutters">
                    <div class="col">
                        <h1 class="heading-title text-white">Joker88</h1>
                        <span class="header-sep gradient-primary"></span>
                        <figcaption>Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord.</figcaption>
                        <router-link to="/preview" class="btn btn-primary">Live Demo</router-link>
                    </div>
                    <figure class="col img-wrapper">
                        <b-img src="img/templates/thumbnails/tpl-01.jpg" fluid-grow rounded alt="" />
                    </figure>
                </div>
                <div class="bg" style="background-image:url('img/templates/thumbnails/tpl-01.jpg')"></div>
            </div>

            <div class="items container-fluid">
                <div class="row no-gutters">
                    <div class="col">
                        <h1 class="heading-title text-white">Next88</h1>
                        <span class="header-sep gradient-primary"></span>
                        <figcaption>Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord.</figcaption>
                        <router-link to="/preview" class="btn btn-primary">Live Demo</router-link>
                    </div>
                    <figure class="col img-wrapper">
                        <b-img src="img/templates/thumbnails/tpl-02.jpg" fluid-grow rounded alt="" />
                    </figure>
                </div>
                <div class="bg" style="background-image:url('img/templates/thumbnails/tpl-02.jpg')"></div>
            </div>

            <div class="items container-fluid">
                <div class="row no-gutters">
                    <div class="col">
                        <h1 class="heading-title text-white">Hot88</h1>
                        <span class="header-sep gradient-primary"></span>
                        <figcaption>Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord.</figcaption>
                        <router-link to="/preview" class="btn btn-primary">Live Demo</router-link>
                    </div>
                    <figure class="col img-wrapper">
                        <b-img src="img/templates/thumbnails/tpl-03.jpg" fluid-grow rounded alt="" />
                    </figure>
                </div>
                <div class="bg" style="background-image:url('img/templates/thumbnails/tpl-03.jpg')"></div>
            </div>

            <div class="items container-fluid">
                <div class="row no-gutters">
                    <div class="col">
                        <h1 class="heading-title text-white">Alpha88</h1>
                        <span class="header-sep gradient-primary"></span>
                        <figcaption>Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord.</figcaption>
                        <router-link to="/preview" class="btn btn-primary">Live Demo</router-link>
                    </div>
                    <figure class="col img-wrapper">
                        <b-img src="img/templates/thumbnails/tpl-04.jpg" fluid-grow rounded alt="" />
                    </figure>
                </div>
                <div class="bg" style="background-image:url('img/templates/thumbnails/tpl-04.jpg')"></div>
            </div>

            <div class="items container-fluid">
                <div class="row no-gutters">
                    <div class="col">
                        <h1 class="heading-title text-white">Ace88</h1>
                        <span class="header-sep gradient-primary"></span>
                        <figcaption>Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord.</figcaption>
                        <router-link to="/preview" class="btn btn-primary">Live Demo</router-link>
                    </div>
                    <figure class="col img-wrapper">
                        <b-img src="img/templates/thumbnails/tpl-05.jpg" fluid-grow rounded alt="" />
                    </figure>
                </div>
                <div class="bg" style="background-image:url('img/templates/thumbnails/tpl-05.jpg')"></div>
            </div>

        </vue-tiny-slider>

        <div class="customize-tools">
            <div class="d-inline-block">
                <div id="customize-controls">
                    <a role="button" class="btn btn-link" data-controls="prev">
                        <span class="data-icon icon-arrow-left"></span>
                    </a>
                    <a role="button" class="btn btn-link" data-controls="next">
                        <span class="data-icon icon-arrow-right"></span>
                    </a>
                </div>

                <h6 class="heading">Gallery</h6>
                <ul id="customize-thumbnails" class="list-inline thumbnails">
                    <li data-nav="0" aria-label="Carousel Page 0" aria-controls="customize" class="list-inline-item active">
                        <div class="img-wrapper"><b-img src="img/templates/thumbnails/tpl-01.jpg" width="140" fluid rounded /></div>
                    </li>
                    <li data-nav="1" aria-label="Carousel Page 1" aria-controls="customize" class="list-inline-item">
                        <div class="img-wrapper"><b-img src="img/templates/thumbnails/tpl-02.jpg" width="140" fluid rounded /></div>
                    </li>
                    <li data-nav="2" aria-label="Carousel Page 2" aria-controls="customize" class="list-inline-item">
                        <div class="img-wrapper"><b-img src="img/templates/thumbnails/tpl-03.jpg" width="140" fluid rounded /></div>
                    </li>
                    <li data-nav="3" aria-label="Carousel Page 3" aria-controls="customize" class="list-inline-item">
                        <div class="img-wrapper"><b-img src="img/templates/thumbnails/tpl-04.jpg" width="140" fluid rounded /></div>
                    </li>
                    <li data-nav="4" aria-label="Carousel Page 4" aria-controls="customize" class="list-inline-item">
                        <div class="img-wrapper"><b-img src="img/templates/thumbnails/tpl-05.jpg" width="140" fluid rounded /></div>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</template>

<script>
import VueTinySlider from "vue-tiny-slider";

export default {
  components: {
    VueTinySlider
  }
};
</script>
