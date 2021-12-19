<template>
  <div>
    <van-card
      v-for="item in lessonList"
      :key="item.id"
      :price="item.price"
      :title="item.title"
      :thumb="item.poster"
    >
    <!-- :tag="formatCategory(item.category)" -->
      <template #tags>
        <van-tag type="danger">{{ formatCategory(item.category) }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script lang="ts">
import { THEME_TYPES, ILesson } from "@/typings";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    lessonList: {
      type: Array as PropType<ILesson[]>,
    },
  },
  setup(props) {
    // 封装format函数
    function formatCategory(type: number) {
      switch (type) {
        case 1:
          return "老年人主题";
        case 2:
          return "年轻人主题";
      }
    }
    return {
      formatCategory
    };
  },
});
</script>