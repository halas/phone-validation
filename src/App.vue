<template>
  <div class="container" id="app">
    <CountrySelect />
    <div class="inputs">
      <h2 class="header">Checkout form</h2>
      <NameInput />
      <PhoneInput />
      <EmailInput />
    </div>
    <div class="results">
      <h2 class="header">Thank you page and zendesk data</h2>
      <ThankYou />
      <ResultsField />
    </div>
  </div>
</template>

<script>
import CountrySelect from './components/CountrySelect';
import NameInput from './components/NameInput';
import PhoneInput from './components/PhoneInput';
import EmailInput from './components/EmailInput';
import ThankYou from './components/ThankYou';
import ResultsField from './components/ResultsField';

export default {
  components: { CountrySelect, NameInput, PhoneInput, EmailInput, ResultsField, ThankYou },
};
</script>

<style lang="scss" scoped>
  .header {
    font-size: 2rem;
    display: block;
  }
  .container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 400px 400px;
    grid-gap: 20px;
  }
  .inputs,
  .results {
    display: grid;
    padding: 20px 100px;
    grid-template-columns: 100%;
    grid-template-rows: 100px;
    grid-gap: 20px;
    width: 50%;
  }
  .inputs {
    justify-self: end;
  }
  .results {
    justify-self: start;
  }
</style>

