<template>
    <!--
            <app-container>
            <div class="main_contents">
                
            </div>
        </app-container>
    -->
    <div class="main_contents">
        <div class="SearchBox">
            <input type="text"
            placeholder="검색어 입력">
        </div>
    </div>
</template>

<script>
//import AppContainer from "@/components/components/AppContainer.vue";

export default {
    name: 'WorkBlock',

    components: {
        //AppContainer,
    },

    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.main_contents {
    width: 100%;
    height: 473px;
}

.SearchBox {
    display: flex;
    justify-content: center;
}
.search {
    position: relative;
    width: 80%;
  }
  
  input {
    margin-top: 200px;
    width: 60%;
    height: 100px;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 24px;
  }

</style>