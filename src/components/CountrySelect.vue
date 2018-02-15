<template>
  <div class="countrySelect">
    <label
      for="country"
      class="countrySelect__label"
    >Delivery Country:</label>
    <select
      @change="setCountryNumber"
      class="countrySelect__select"
      name="country"
      id="country"
    >
      <option value="DE">Germany</option>
      <option value="GB">UK</option>
      <option value="US">US</option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getCountryNumber } from '../js/processNumber';

export default {
  computed: mapState([
    'deliveryCountry',
  ]),
  methods: {
    setCountryNumber(e) {
      const countryCode = e.target.value;
      this.$store.commit('setCountry', e.target.value);
      const countryNumber = getCountryNumber(countryCode);
      this.$store.commit('setCountryNumber', countryNumber);
    },
  },

};
</script>

<style lang="scss" scoped>
  .countrySelect {
    position: absolute;
    top: 7px;
    right: 20px;

    &__label {
      color: white;
      text-transform: uppercase;
      margin-right: 10px;
    }

    &__select {
      font-size: 20px;
    }
  }
</style>

