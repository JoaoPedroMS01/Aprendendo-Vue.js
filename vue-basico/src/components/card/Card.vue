<template>
  <div class="card">
    <img
      src="data:image/jpeg;base64,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"
      alt=""
    />
    <h4>
        <slot name="nome"></slot>
    </h4>
    <p class="valor">
        <slot name="valor"></slot>
    </p>
    <p>
        <slot name="observacao"></slot>
    </p>
    <div>
        <slot name="acoes"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0 0.3);
        max-width: 300px;
        margin: 5px;
        margin-bottom: 15px;
        text-align: center;
        padding: 10px;
    }

    .valor {
        color: gray;
        font-size: 22px;
    }

    .icones-tabela {
        margin: 5px;
        cursor: pointer;
        color: var(--cor-primaria);
    }
</style>