<template>
  <div class="sign-up">
    <p>회원가입</p>
    <input type="text"
           v-model="email"
           placeholder="email"><br>
    <input type="password"
           v-model="password"
           placeholder="password"><br>
    <button v-on:click="signUp">가입하기</button>
    <span>또는 <router-link to="/login">로그인</router-link>으로 돌아가기</span>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function(user) {
            alert('회원가입 완료!')
          },
          function(err) {
            alert('에러 : ' + err.message)
          }
      );
    }
  }
}
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 20px;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 15px;
}
</style>