<template>
  <div class="email-input">
    <label class="email-input__label" for="email">Your email address</label>
    <fieldset class="email-input__fieldset">
      <input
        class="email-input__input"
        type="email"
        id="email"
        name="email"
        placeholder="john@mail.de"
      >
    </fieldset>
  </div>
</template>

<style lang="scss" scoped>
    .email-input {

        &__label {
          display: block;
          font-weight: bold;
          font-size: 1.2em;
          margin-bottom: 15px;
        }

        &__fieldset {
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border: 0;

        }

        &__input {
          height: 40px;
          padding: 5px;

        }
    }
</style>

