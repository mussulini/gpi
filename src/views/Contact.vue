<template>
  <section class="container pt-5 mt-5">

    <b-tabs pills>
        <b-tab title="Contact Form" active>

            <b-card>

                <b-form @submit="onSubmit" v-if="show">

                    <b-form-group
                        class="has-feedback"
                        label="Full Name"
                        label-for="fullName">
                        <b-form-input
                            id="fullName"
                            type="text"
                            v-model="form.name"
                            required></b-form-input>
                    </b-form-group>

                    <b-row>
                        <b-col sm="6">
                            <b-form-group
                                class="has-feedback"
                                label="Phone"
                                label-for="phone">
                                <b-form-input
                                    id="phone"
                                    type="tel"
                                    v-model="form.phone"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group
                                class="has-feedback"
                                label="Skype ID"
                                label-for="skype">
                                <b-form-input
                                    id="skype"
                                    type="text"
                                    v-model="form.skype"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>

                    <b-form-group
                        class="has-feedback"
                        label="Email Address"
                        label-for="emailAddress">
                        <b-form-input
                            id="emailAddress"
                            type="email"
                            v-model="form.email"
                            required></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="Message"
                        label-for="message">
                        <b-form-textarea
                            id="message"
                            v-model="text"
                            :rows="3"
                            :max-rows="6"></b-form-textarea>
                    </b-form-group>

                    <div class="text-right">
                        <b-button type="submit" variant="primary">Submit</b-button>
                    </div>

                </b-form>

            </b-card>

        </b-tab>
        <b-tab title="Sales Inquiry">

            <b-card>
                <h1 class="heading-title text-center">Sales Inquiry</h1>
            </b-card>

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
  data() {
    return {
      form: {
        name: "",
        phone: "",
        skype: "",
        name: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
