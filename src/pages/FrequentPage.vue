<template>
  <div class="fre-page">
    <BannerPage
        title="자주하는 질문"
    />
    <div class="header">
    </div>
    <div class="content">
      <div class="post"
           v-for="post in posts"
           :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </div>
    </div>
    <div class="footer"
         v-if="showForm">
      <h3>글 작성하기</h3>
      <form @submit.prevent="addPost">
        <label for="title">제목:</label>
        <input type="text"
               id="title"
               v-model="newPost.title"
               required>
        <label for="content">내용:</label>
        <textarea id="content"
                  v-model="newPost.content"
                  required></textarea>
      </form>
    </div>
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'FAQPage',

  components: {
    BannerPage
  },
  data() {
    return {
      showForm: false,
      posts: [
        { id: 1, title: 'Q. 상담사는 어디서 등록하나요?',  content: 'A. 상당사 등록하기에서 등록하면 됩니다!' },
        { id: 2, title: 'Q. 뭐시기뭐시기',  content: 'A.몰라요!' },
        { id: 3, title: 'Q.이게 대체 뭐람!',  content: 'A.글쎄요?!' }
      ],
      newPost: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    addPost() {
      this.posts.push({
        id: this.posts.length + 1,
        title: this.newPost.title,
        author: this.newPost.author,
        content: this.newPost.content
      });
      this.newPost.title = '';
      this.newPost.content = '';
      this.showForm = false;
    }
  }
};
</script>

<style lang='scss'>
.faq-page {
  margin-top: 50px;
}

.board {
  width: 400px;
  border: 1px solid #ccc;
  padding: 10px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  margin-top: 10px;
}

.post {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.footer {
  margin-top: 10px;
}
</style>