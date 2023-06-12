<template>
  <div class="registercounselor-page">
    <BannerPage title="상담사 등록하기" />
    <div class="maincontents">
      <!--이 부분에 상담사 목록 나열 table 추가 하기-->
      <div class="register-area">
        <div class="form-title">
          <h1>상담사 정보 입력</h1>
        </div>
        <form action=""
        class="form-style">
          <div class="input-name">
            <input id="name" 
            type="text" 
            placeholder=" 이름">
          </div>
          <div class="input-age">
            <input id="age" 
            type="number" 
            placeholder=" 만 나이">
          </div>
          <div class="input-gender">
            <p id="gender-tile">성별</p>
            <input name="gender" 
            id="female" 
            type="radio">여성
            <input name="gender" 
            id="male" 
            type="radio">남성
          </div>
          <div class="input-no">
            <input id="no" 
            type="text"
            placeholder=" 자격증 발급 번호">
          </div>
          <div class="input-img">
            <label for="profile-img">
              <p>프로필 사진 등록</p>
            </label>
            <input id="profile-img" 
            type="file">
          </div>
          <div class="input-address">
            <input type="text" 
            v-model="postcode" 
            placeholder=" 우편번호">
            <input type="button" 
            @click="execDaumPostcode()" 
            value=" 우편번호 찾기"><br>
            <input type="text" 
            v-model="address"
            placeholder=" 주소"><br>
            <input type="text" 
            v-model="extraAddress"
            placeholder=" 상세주소">
          </div>
          <div class="input-intro">
            <textarea id="intro" 
            type="text" 
            placeholder=" 자기소개 작성">
            </textarea>
          </div>
          <div class="input-keyword">
            <label for="keyword">
              <p>키워드 선택</p>
            </label>
            <input id="keyword1" 
            type="checkbox">
            <label for="keyword1">
              <p>우울증</p>
            </label>
            <input id="keyword2" 
            type="checkbox">
            <label for="keyword2  ">
              <p>트라우마</p>
            </label>
            <input id="keyword3" 
            type="checkbox">
            <label for="keyword3">
              <p>조울증</p>
            </label>
          </div>
          <br>
          <div class="submit-button">
            <input id="submit-bt"
            type="submit" 
            value="등록하기">
          </div>
        </form>
      </div>
    </div>
    <div class="line">
    </div>
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'RegisterCounselorPage"',

  components: {
    BannerPage
  },

  data() {
    return {
      postcode: "",
      address: "",
      extraAddress: "",
    }
  },
  methods: {
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
        },
      }).open();
    },
  },
}
</script>

<style lang='scss'>
.registercounselor-page {
  margin-top: 50px;
}

.maincontents {
  display: flex;
  height: 1300px;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.register-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: teal;
  width: 45%;
  height: 1100px;
  border-radius: 50px;
}

.form-title {
  margin-top: 50px;
}

.form-style {
  width: 60%;
}

.input-name {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#name {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border-width: 0;
}

.input-age {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#age {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border-width: 0;
}

.input-gender {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-no {

}

#no {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border-width: 0;
}

.input-img {
  margin-top: 40px;
}

.input-address {
  margin-top: 40px;
}

.input-intro {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#intro {
  width: 100%;
  height: 150px;
  word-break: break-all;
  resize: none;
  border-radius: 10px;
  border-width: 0;
}

.input-keyword {
  margin-top: 40px;
}

.submit-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

#submit-bt {
  width: 200px;
  height: 60px;
}

.line {
  width: 100%;
  height: 10px;
  background-color: teal;
}
</style>