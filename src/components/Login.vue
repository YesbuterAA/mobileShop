<template>
    <div>
      <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="login">登录</van-button>
  </div>
</van-form>
    </div>
</template>

<script>
import Vue from 'vue'
import { Form, Field, Button} from 'vant'
import axios from 'axios'
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.prototype.axios
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    login () {
      axios({
        url: 'http://localhost:5001/login',
        params: {
          id:1
        }
      })
    }
  }
}
</script>