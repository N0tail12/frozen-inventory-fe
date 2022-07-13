<template>
  <a-row type="flex" justify="center" align="middle" style="background: #ececec; height: 100vh; padding-bottom: 150px">
    <a-col :md="6" :xs="24">
      <a-card style="border-radius: 5px" class="m-2 shadow">
        <h1>{{ $t("login") }}</h1>
        <ValidationObserver v-slot="{ handleSubmit }">
          <a-form id="form-login" @submit.prevent="handleSubmit(handleLogin)">
            <ValidationProvider :name="$t('username')" rules="required" v-slot="{ errors }">
              <a-form-item :label="$t('username')" :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                <a-input v-model="form.username" name="username-qcd" />
              </a-form-item>
            </ValidationProvider>
            <ValidationProvider :name="$t('password')" rules="required" v-slot="{ errors }">
              <a-form-item :label="$t('password')" :validate-status="errors[0] ? 'error' : 'success'" :help="errors[0]">
                <a-input v-model="form.password" type="password" name="password-qcd" />
              </a-form-item>
            </ValidationProvider>
            <a-button class="mt-3" type="primary" htmlType="submit" block>{{ "login" }}</a-button>
            <a-row class="mt-1">
              <nuxt-link style="float: right" to="/forgot-password">{{ $t("forgot_password") }}</nuxt-link>
            </a-row>
          </a-form>
        </ValidationObserver>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  layout: "guest",
  // middleware: "login",
  computed: {
    ...mapState({
      user: state => state.modules["author"].user
    })
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({
      login: "modules/author/login"
    }),
    async handleLogin() {
      try {
        let response = await this.login(this.form);
        localStorage.setItem("token", response.data);
        this.$router.push("/");
      } catch (error) {
        this.$notification.error({
          message: this.$t("login_failed"),
          description: "Ga",
          duration: 2.5
        });
      }
    }
  }
};
</script>

<style>
#form-login .ant-form-item-label {
  line-height: normal;
}
</style>
