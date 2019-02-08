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
                        <b-img-lazy src="https://source.unsplash.com/collection/993239/600x400" class="card-img-top" center fluid-grow blank-color="#CED4DA" alt="Card Title" />
                    </figure>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/1673600/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-indigo"></span> <span class="bg-purple"></span> <span class="bg-red"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/1513994/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-pink"></span> <span class="bg-orange"></span> <span class="bg-cyan"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/502925/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-green"></span> <span class="bg-yellow"></span> <span class="bg-blue"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/1891993/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-teal"></span> <span class="bg-orange"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/993239/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/1673600/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-indigo"></span> <span class="bg-purple"></span> <span class="bg-red"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/1513994/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-pink"></span> <span class="bg-orange"></span> <span class="bg-cyan"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/502925/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-green"></span> <span class="bg-yellow"></span> <span class="bg-blue"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/1891993/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-teal"></span> <span class="bg-orange"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/993239/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-black"></span> <span class="bg-red"></span> <span class="bg-white"></span></div>
                    </div>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/collection/1673600/600x400" img-alt="" img-top>
                    <div slot="footer">
                        <h6 class="heading">Card Title</h6>
                        <div class="float-right color-swatches"><span class="bg-indigo"></span> <span class="bg-purple"></span> <span class="bg-red"></span></div>
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
