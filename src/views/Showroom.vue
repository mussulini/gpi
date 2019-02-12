<template>
    <div class="showroom">

        <hero></hero>

        <nav class="navbar">
            <div class="container">
                <b-form inline>
                    <label class="mr-sm-2">Filter by</label>
                    <b-form-select
                        class="mb-2 mr-sm-3 mb-sm-0"
                        :value="null">
                        <option slot="first" :value="null">Popular Template</option>
                    </b-form-select>
                    <b-form-select
                        class="mb-2 mr-sm-3 mb-sm-0"
                        :value="null">
                        <option slot="first" :value="null">Layout</option>
                    </b-form-select>
                    <b-form-select
                        class="mb-2 mr-sm-3 mb-sm-0"
                        :value="null">
                        <option slot="first" :value="null">Color System</option>
                    </b-form-select>
                </b-form>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a href="#" class="btn btn-neutral"><i class="fa fa-th-large"></i></a></li>
                    <li class="nav-item"><a href="#" class="btn btn-link"><i class="fa fa-th"></i></a></li>
                </ul>
            </div>
        </nav>

        <div class="container card-templates">

            <b-card-group deck>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-01.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-02.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-03.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-04.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-05.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-06.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-07.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-08.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-09.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-10.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-05.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body>
                    <figure class="img-wrapper">
                        <b-img-lazy src="img/templates/thumbnails/tpl-02.jpg" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
            </b-card-group>

            <div class="text-center my-5">
                <button class="btn btn-primary">Load more</button>
            </div>
        </div>

    </div>
</template>

<script>
import Hero from "./components/ShowroomBanner";

export default {
  name: "showroom",
  beforeCreate: function() {
    document.body.className = "showroom";
  },
  components: {
    Hero
  }
};
</script>
