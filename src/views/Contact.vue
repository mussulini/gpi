<template>
  <section class="container pt-5 mt-5">

    <b-tabs pills>
        <b-tab title="Contact Form" active>

            <b-card>

                <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                    <b-form-group label="Full Name"
                                    label-for="fullName">
                        <b-form-input id="fullName"
                                    type="text"
                                    v-model="form.name"
                                    required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group label="Email Address"
                                    label-for="emailAddress">
                        <b-form-input id="emailAddress"
                                    type="email"
                                    v-model="form.email"
                                    required>
                        </b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>

                </b-form>

            </b-card>

        </b-tab>
        <b-tab title="Sales Inquiry">

            <h1 class="heading">Sales Inquiry</h1>

        </b-tab>
    </b-tabs>

  </section>

</template>

<script>
export default {
  name: "contact",
  beforeCreate: function() {
    document.body.className = "contact";
  },
  data () {
    return {
      form: {
        email: '',
        name: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
}
</script>
