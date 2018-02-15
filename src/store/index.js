import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    deliveryCountry: 'DE',
    deliveryCountryNumber: '49',
    example: '',
    number: '',
    resultNumber: {
      raw: '',
      country: '',
      isValid: '',
      international: '',
      E164: '',
      type: '',
    },
  },
  mutations: {
    setCountry: (state, payload) => {
      state.deliveryCountry = payload;
    },
    setCountryNumber: (state, payload) => {
      state.deliveryCountryNumber = payload;
    },
    setNumber: (state, payload) => {
      state.number = payload;
    },
    calculateNumber: (state, payload) => {
      state.resultNumber = payload;
    },
    setExample: (state, payload) => {
      state.example = payload;
    },
  },
  getters: {
    number: state => state.number,
  },
});

export default store;
