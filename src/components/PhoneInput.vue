<template>
  <div class="phone-input">
    <label class="phone-input__label" for="phone-number">Your phone number</label>
    <fieldset class="phone-input__fieldset">
      <span>+</span>
      <input
        class="phone-input__input phone-input__input--country"
        type="text"
        :value="deliveryCountryNumber"
        tabindex="-1"
        @input="updateDeliveryCuntryNumber"
      >
      <input
        class="phone-input__input"
        type="text" :value="number"
        @input="updateNumber"
        id="phone-number"
        name="phone-number"
      >
    </fieldset>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { processNumber } from '../js/processNumber';

export default {
  computed: mapState([
    'number',
    'deliveryCountryNumber',
  ]),
  methods: {
    updateDeliveryCuntryNumber(e) {
      this.$store.commit('setCountryNumber', e.target.value);
    },
    updateNumber(e) {
      const number = `+${this.$store.state.deliveryCountryNumber}${e.target.value.replace(/^[0]+/g, '')}`;
      const resultNumber = processNumber(number);
      this.$store.commit('calculateNumber', resultNumber);
    },
  },
};
</script>

<style lang="scss" scoped>
    .phone-input {

        &__label {
          display: block;
          font-weight: bold;
          font-size: 1.2em;
          margin-bottom: 15px;
        }

        &__fieldset {
          padding: 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border: 0;

        }

        &__input {
          height: 40px;
          padding: 5px;
          margin-left: 10px;

          &--country {
            width: 50px;
          }
        }
    }
</style>

