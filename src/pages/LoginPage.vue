<template>
  <div class="login-container">
    <div class="login">
      <div class="green-box">
        <h3>Login</h3>
        <input type="text"
               v-model="email"
               placeholder="email"><br>
        <input type="password"
               v-model="password"
               placeholder="password"><br>
        <button v-on:click="login">로그인</button>
        <p v-if="userEmail">Logged in as: {{ userEmail }}</p>
        <p v-else>
          만약 계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!
          <br>
          <router-link to="/forgotpassword">비밀번호를 잊으셨나요?</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      userEmail: ''
    }
  },
  methods: {
    login() {
      signInWithEmailAndPassword(this.$firebase.auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            this.userEmail = user.email;
            alert('로그인 완료!');
          })
          .catch((err) => {
            alert('에러 : ' + err.message);
          });
    }
  }
}
</script>

<!-- Styles ... -->


<style scoped>
.login {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.green-box {
  background-color: #23C6A2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  border-radius: 10px;
}

input {
  margin: 10px 0;
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
}

button {
  margin-top: 20px;
  width: 60%;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid white;
}

p {
  margin-top: 40px;
  font-size: 15px;
  text-align: center;

}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>