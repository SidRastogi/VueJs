<template>
  <section>
    <h1>Machine List</h1>

    <TransitionGroup tag="ul" name="fade" class="container">
      <div class="list">
        <div>Name</div>
        <li v-for="listdata in list" :key="listdata.id">
          {{ listdata.name }}
        </li>
      </div>
      <div class="list">
        <div>Last Known Position</div>
        <li v-for="listdata in list" :key="listdata.id">
          Latitude : {{ listdata.lastKnownPosition.latitude }} Longitude :
          {{ listdata.lastKnownPosition.longitude }}
        </li>
      </div>
    </TransitionGroup>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
          width: '1%',
          sortable: true,
        },
        {
          label: 'Last Known Position',
          field: 'lastKnown',
          width: '1%',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['list']),
  },
  methods: {
    ...mapActions(['fetchData']),
  },
  created() {
    this.fetchData();
  },
  updated() {
    console.log(this.list, 'hello');
  },
};
</script>

<style>
h1 {
  font-size: 30px;
}

.container {
  display: flex;
  flex-direction: row;
}

.list {
  width: 25vw;
  display: flex;
  flex-direction: column;
}
.list div {
  padding: 10px 10px 10px 10px;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid;
  border-radius: 10px;
}

.list li {
  padding: 10px 10px 10px 10px;
  list-style: none;
  font: 400;
  font-size: 18px;
}
</style>
