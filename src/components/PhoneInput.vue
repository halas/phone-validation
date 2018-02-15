<template>
  <div class="phone-input">
    <label class="phone-input__label" for="phone-number">Your phone number</label>
    <fieldset
      class="phone-input__fieldset"
      v-bind:class="{ 'phone-input__fieldset--warning': showWarning }"
    >
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
        type="text"
        :value="number"
        @input="updateNumber"
        @blur="validate"
        id="phone-number"
        name="phone-number"
      >
      <span
        v-if="showExample"
        class="phone-input__example"
      >
        For example: +{{deliveryCountryNumber}} 123 456 789
      </span>
      <span
        v-if="showWarning"
        class="phone-input__warning"
      >
        Please just doubble check if the number is correct.
        <span class="phone-input__warning-link" @click="removeWarning">Yes, it is fine</span>
      </span>
    </fieldset>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { processNumber } from '../js/processNumber';

export default {
  data() {
    return {
      showExample: true,
      showWarning: false,
    };
  },
  computed: mapState([
    'number',
    'deliveryCountryNumber',
    'resultNumber',
  ]),
  methods: {
    updateDeliveryCuntryNumber(e) {
      this.$store.commit('setCountryNumber', e.target.value);
    },
    updateNumber(e) {
      const number = `+${this.$store.state.deliveryCountryNumber}${e.target.value.replace(/^[0]+/g, '')}`;
      const resultNumber = processNumber(number);
      this.$store.commit('setNumber', e.target.value);
      this.$store.commit('calculateNumber', resultNumber);
    },
    validate() {
      const isValidNow = this.$store.state.resultNumber.isValid;
      if (!isValidNow) {
        this.showExample = false;
        this.showWarning = true;
      }
    },
    removeWarning() {
      this.showWarning = false;
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
          position: relative;
          padding: 5px 5px 40px;
          // display: flex;
          // flex-direction: row;
          // flex-wrap: nowrap;
          // justify-content: flex-start;
          // align-items: center;
          border: 0;

          &--warning {
            background-color: yellow;
          }

        }

        &__input {
          height: 40px;
          padding: 5px;
          margin-left: 10px;

          &--country {
            width: 30px;
          }
        }

        &__example {
          position: absolute;
          bottom: 20px;
          left: 0;
          color: grey;
          font-size: 11px;
        }

        &__warning {
          position: absolute;
          bottom: 5px;
          left: 0;
          padding: 0 5px;
          font-size: 11px;
        }

        &__warning-link {
          text-decoration: underline;
          cursor: pointer;
        }
    }
</style>

