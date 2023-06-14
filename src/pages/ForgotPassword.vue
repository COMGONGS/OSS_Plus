<template>
    <div class="forgot-password">
      <div class="center-content">
        <div class="green-box">
        <h3>비밀번호 재설정</h3>
        <input type="text"
               v-model="email"
               placeholder="이메일"><br>
        <button v-on:click="sendPasswordResetEmail">비밀번호 재설정 이메일 전송</button>
        <p v-if="successMessage">{{ successMessage }}</p>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  
  export default {
    name: 'ForgotPassword',
    data() {
      return {
        email: '',
        successMessage: '',
        errorMessage: ''
      }
    },
    methods: {
      sendPasswordResetEmail() {
        firebase.auth().sendPasswordResetEmail(this.email)
            .then(() => {
              this.successMessage = '비밀번호 재설정 이메일이 전송되었습니다. 이메일을 확인해주세요.';
              this.errorMessage = '';
            })
            .catch((error) => {
              this.successMessage = '';
              this.errorMessage = error.message;
            });
      }
    }
  }
  </script>
  
  <style scoped>
  .forgot-password {
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
  
  button {
    margin-top: 10px;
    width: 70%;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid white;
  }
  
  input {
    margin: 40px 0;
    width: 90%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid white;
  }
  
  .center-content {
    text-align: center;
  
  }
  </style>