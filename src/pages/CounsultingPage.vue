<template>
  <div class="counsulting">
    <BannerPage title="Counsulting" />

    <div class="table-container">
      <b-table
          striped
          hover
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          :fields="fields"
          @row-clicked="rowClick"
      ></b-table>

      <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          align="center"
      ></b-pagination>
    </div>

    <div class="button-container">
      <b-button @click="writeContent">글쓰기</b-button>
    </div>
  </div>
</template>

<script>
import BannerPage from '@/components/blocks/BannerPage.vue';
import data from "@/data/index.js";

export default {
  name: 'CounsultingPage',

  components: {
    BannerPage
  },
  data() {
    let contentItems = data.Content.sort((a, b) => {
      return b.content_id - a.content_id;
    }); // 내림차순

    // User 와 Content 의 user_id 의 같은 번호를 찾아 Content 에 기존자료 + 'user_name' 으로 추가한다.
    let items = contentItems.map(contentItem => {
      return {
        ...contentItem,
        user_name: data.User.filter(userItem => {
          return contentItem.user_id === userItem.user_id;
        })[0].name
      };
    });

    return {
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 보여줄 갯수
      // bootstrap 'b-table' 필드 설정
      fields: [
        {
          key: "content_id",
          label: "번호"
        },
        {
          key: "title",
          label: "제목"
        },
        {
          key: "user_name",
          label: "글쓴이"
        },
        {
          key: "created_at",
          label: "작성일"
        }
      ],
      items: items
    };
  },
  methods: {
    rowClick(item) {
      this.$router.push({
        path: `/board/detail/${item.content_id}`
      });
    },
    writeContent() {
      this.$router.push({
        path: `/board/create`
      });
    }
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
}
</script>

<style lang="scss">
.counsulting {
  margin-top: 50px;

  .table-container {
    margin-top: 100px;

  }

  .button-container {
    display: flex;
    justify-content: flex-start;
    margin-left: 1800px;
  }

  .b-table tbody td {
    background-color: #23C6A2; /* 원하는 배경색으로 변경 */
  }

}
</style>