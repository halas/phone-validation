<template>
  <div class="thankYou">
    <h3>Thank you page confirmation:</h3>
    <span class="thankYou__label">Your phone number:</span>
    <span class="thankYou__number">{{resultNumber.international}}</span>

  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'resultNumber',
  ]),
};
</script>

