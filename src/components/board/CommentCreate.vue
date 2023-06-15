<template>
  <div class="comment-create">
    <b-input-group :prepend="name"
                   class="mt-3">
      <b-form-textarea
        id="textarea"
        v-model="context"
        :placeholder="isSubComment ? '덧글에 덧글을 달아주세요~!' : '코멘트를 달아주세요~!'"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-input-group-append>
        <b-button variant="info"
                  @click="isSubComment ? createSubComment() : createComment()">
          작성하기
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
import data from "@/data";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "@/plugin/firebaseConfig";
export default {
  name: "CommentCreate",
  props: {
    contentId: Number,
    reloadComment: Function,
    reloadSubComments: Function,
    subCommentToggle: Function,
    isSubComment: Boolean,
    commentId: Number
  },
  data() {
    return {
      userEmail: "",
      context: ""
    };
  },
  created() {
    // Firebase 초기화
    firebase.initializeApp({
      firebaseConfig
    });

    // 현재 로그인한 사용자의 이메일 가져오기
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userEmail = user.email; // 사용자 이메일을 userEmail 변수에 할당
      }
    });
  },
  methods: {
    createComment() {
      const comment_id = data.Comment[data.Comment.length - 1].comment_id + 1;
      data.Comment.push({
        comment_id: comment_id,
        user_id: 0,
        content_id: this.contentId,
        context: this.context,
        created_at: new Date(),
        updated_at: null
      });
      this.reloadComment();
      // this.subCommentToggle();
      this.context = "";
    },
    createSubComment() {
      const subcomment_id =
        data.SubComment[data.SubComment.length - 1].subcomment_id + 1;
      data.SubComment.push({
        subcomment_id: subcomment_id,
        comment_id: this.commentId,
        user_id: 0,
        context: this.context,
        created_at: new Date(),
        updated_at: null
      });
      this.reloadSubComments();
      this.subCommentToggle();
      this.context = "";
    }
  }
};
</script>

<style scoped>
.comment-create {
  display: flex;
  margin-bottom: 1em;
}
</style>