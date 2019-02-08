<template>
    <section>

        <b-navbar type="dark" variant="dark">
            <div class="container-fluid">
                <router-link to="/showroom">
                    <span class="fa fa-long-arrow-left mr-2"></span> Go Back
                </router-link>
                <div class="mx-auto">
                    <b-dropdown variant="link">
                        <template slot="button-content">
                            <span class="fa fa-mobile mr-2"></span> Mobile
                        </template>
                        <router-link to="/preview" class="dropdown-item"><span class="fa fa-desktop mr-2"></span> Desktop</router-link>
                        <router-link to="/preview-tablet" class="dropdown-item"><span class="fa fa-tablet mr-2"></span> Tablet</router-link>
                    </b-dropdown>
                    <b-dropdown variant="link">
                        <template slot="button-content">
                            100%
                        </template>
                        <b-dropdown-item href="#">50%</b-dropdown-item>
                        <b-dropdown-item href="#">75%</b-dropdown-item>
                    </b-dropdown>
                    <a href="" class="btn btn-link">
                        <span class="fa fa-undo"></span>
                    </a>
                </div>
            </div>
        </b-navbar>

        <div class="embed-responsive embed-responsive-mobile">
            <label class="text-center small">360 x 640</label>
            <iframe class="embed-responsive-item" src="//mtpl2.gpi-showroom.biz/"></iframe>
        </div>

    </section>
</template>

<script>
export default {
  name: "preview-mobile",
  beforeCreate: function() {
    document.body.className = "preview";
  }
};
</script>
