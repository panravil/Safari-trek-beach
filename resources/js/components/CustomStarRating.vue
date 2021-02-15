<template>
  <span class="star-rating">
    <!-- first star -->
    <span v-if="rating < 0.1" class="fa fa-star-o"></span>
    <span
      v-else-if="rating > 0.1 && rating < 0.5"
      class="fa fa-star-half-full checked"
    ></span>
    <span v-else class="fa fa-star checked"></span>

    <!-- second star -->
    <span v-if="rating < 1" class="fa fa-star-o"></span>
    <span v-else-if="rating < 1.5" class="fa fa-star-half-full checked"></span>
    <span v-else class="fa fa-star checked"></span>

    <!-- third star -->
    <span v-if="rating < 2" class="fa fa-star-o"></span>
    <span v-else-if="rating < 2.5" class="fa fa-star-half-full checked"></span>
    <span v-else class="fa fa-star checked"></span>

    <!-- fourth star -->
    <span v-if="rating < 3" class="fa fa-star-o"></span>
    <span v-else-if="rating < 3.5" class="fa fa-star-half-full checked"></span>
    <span v-else class="fa fa-star checked"></span>

    <!-- fifth star -->
    <span v-if="rating < 4" class="fa fa-star-o"></span>
    <span v-else-if="rating < 4.5" class="fa fa-star-half-full checked"></span>
    <span v-else class="fa fa-star checked"></span>
  </span>
</template>

<script>
export default {
  props: {
    rating: Number,
  },
  computed: {},
  data() {
    return {};
  },

  methods: {},
};
</script>
