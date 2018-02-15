<template>
<div class="zendesk">
  <h3>Zendesk data:</h3>
  <pre class="ResultsField">
    <p>Phone nr: (international): {{ resultNumber.international }}</p>
    <p>Phone nr: (E.164 format): {{ resultNumber.E164 }}</p>
    <p>Phone nr given by customr: {{ resultNumber.raw }}</p>
    <p>Country: {{ resultNumber.country }}</p>
    <p>Is probably valid: {{ resultNumber.isValid }}</p>
  </pre>
</div>
</template>

<style lang="scss" scoped>
    .zendesk {
      border-top: 1px solid grey;
      background: lightgrey;
      padding: 0 20px;
    }
    .ResultsField {
      margin: 20px 0;
      width: 400px;
      height: 500px;
    }
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'resultNumber',
  ]),
};
</script>

