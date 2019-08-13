<template>
  <section>
    <b-table
      :data="body"
      :columns="head"
      :hoverable="true"
      :loading="loading"
      :selected.sync="selected"
      :mobile-cards="true"
    >
      <template slot="empty">
        <section class="content has-text-grey has-text-centered">
          <p>Данные не найдены</p>
        </section>
      </template>
    </b-table>
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
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
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
