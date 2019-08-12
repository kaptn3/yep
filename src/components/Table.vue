<template>
  <section>
    <b-table
      :data="body"
      :columns="head"
      :hoverable="true"
      :loading="isLoading"
      :selected.sync="selected"
      :mobile-cards="true"
    />
    <b-modal
      :active.sync="isModalActive"
      :width="640"
    >
      <create-offer :id="selected.bid_id"/>
    </b-modal>
  </section>
</template>

<script>
  import CreateOffer from './CreateOffer';

  export default {
    components: { CreateOffer },
    props: {
      head: {
        type: Array,
        required: true
      },
      body: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isEmpty: false,
        isLoading: false,
        selected: {},
        isModalActive: false
      };
    },
    watch: {
      selected() {
        if (!this.selected['0']) {
          this.isModalActive = true;
        }
      },
      isModalActive() {
        if (!this.isModalActive) this.selected = { '0': '0' };
      }
    }
  };
</script>
