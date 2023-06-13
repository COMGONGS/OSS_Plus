<template>
  <div class="sign-up">
    <div class="green-box">
    <p>회원가입</p>
    <input type="text"
           v-model="email"
           placeholder="email"><br>
    <input type="password"
           v-model="password"
           placeholder="password"><br>
    <input type="password"
           v-model="confirmPassword"
           placeholder="비밀번호 재입력"><br>
    <button v-on:click="signUp">가입하기</button>
    <span>또는 <router-link to="/login">로그인</router-link>으로 돌아가기</span>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    signUp() {
      if (this.password !== this.confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(function(user) {
            alert('회원가입 완료! 사용자 정보: ' + JSON.stringify(user.user.email))
          })
          .catch(function(err) {
            alert('에러 : ' + err.message)
          });
    }
  }
}
</script>

<style scoped>
.sign-up {
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
  margin-top: 20px;
  font-size: 20px;
  border-radius: 10px;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 15px;
}
</style>
