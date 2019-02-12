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
                            <span class="fa fa-desktop mr-2"></span> Desktop
                        </template>
                        <router-link to="/preview" class="dropdown-item active"><span class="fa fa-desktop mr-2"></span> Desktop</router-link>
                        <router-link to="/preview-tablet" class="dropdown-item"><span class="fa fa-tablet mr-2"></span> Tablet</router-link>
                        <router-link to="/preview-mobile" class="dropdown-item"><span class="fa fa-mobile mr-2"></span> Mobile</router-link>
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

        <div class="embed-responsive">
            <iframe class="embed-responsive-item" src="//flash888.gpi-showroom.biz/"></iframe>
        </div>

    </section>
</template>

<script>
export default {
  name: "preview",
  beforeCreate: function() {
    document.body.className = "preview";
  }
};
</script>
