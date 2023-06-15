<template>
  <div class="board-container">
    <div class="input-container">
      <b-input v-model="subject"
               placeholder="제목을 입력해주세요."></b-input>
    </div>
    <div class="input-container">
      <b-form-textarea v-model="context"
                       placeholder="내용을 입력해 주세요"
                       rows="6"
                       max-rows="12"></b-form-textarea>
    </div>
    <br>
    <b-button @click="updateMode ? updateContent() : uploadContent()">저장</b-button>&nbsp;
    <b-button @click="cancel()">취소</b-button>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name: 'BoardCreate',
  data() {
    return {
      subject: '',
      context: '',
      user_id: 0,
      created_at: '',
      updated_at: null,
      updateObject: null,
      updateMode: this.$route.params.contentId > 0,
    }
  },
  created() {
    if (this.$route.params.contentId > 0) {
      const contentId = Number(this.$route.params.contentId)
      this.updateObject = data.Content.filter(contentItem => contentItem.content_id === contentId)[0]
      this.subject = this.updateObject.title;
      this.context = this.updateObject.context;
      this.created_at = this.updateObject.created_at;
    } else {
      // 새로운 게시물의 경우 created_at 값 설정
      this.created_at = new Date().toISOString().split('T')[0];
    }
  },
  methods: {
    uploadContent() { // 저장
      let contentItems = data.Content.sort((a, b) => { return b.content_id - a.content_id });
      const content_id = contentItems[0].content_id + 1; // 마지막 데이터의 id + 1

      data.Content.push({
        content_id: content_id,
        user_id: this.user_id,
        title: this.subject,
        context: this.context,
        created_at: this.created_at,
        updated_at: this.updated_at
      })

      this.$router.push({
        path: '../pages/ConsultingPage'
      })
    },
    updateContent() { // 수정
      this.updateObject.title = this.subject;
      this.updateObject.context = this.context;
      this.$router.push({
        path: '../pages/ConsultingPage'
      })
    },
    cancel() {
      this.$router.push({
        path: '../pages/ConsultingPage'
      })
    }
  }
}
</script>

<style>
.board-container {
  margin-top: 80px;
}

.input-container {
  margin-bottom: 20px;
}
</style>