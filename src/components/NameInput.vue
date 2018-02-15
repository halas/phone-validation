<template>
  <div class="name-input">
    <label class="name-input__label" for="name">Your name</label>
    <fieldset class="name-input__fieldset">
      <input
        class="name-input__input"
        type="name"
        id="name"
        name="name"
        placeholder="john"
      >
    </fieldset>
  </div>
</template>

<style lang="scss" scoped>
    .name-input {

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

