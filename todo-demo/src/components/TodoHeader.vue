<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="downFn"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    downFn() {
      this.$emit("create", this.task);
      this.task = "";
    },
  },
  computed: {
    isAll: {
      set(checked) {
        this.arr.forEach(obj => obj.isDone = checked);
      },
      get() {
        return this.arr.length !==0 && this.arr.every(obj => obj.isDone === true);
      },
    },
  },
  props: ["arr"]
};
</script>