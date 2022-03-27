/* eslint-disable */
import { apolloClient } from '../../apolloProvider';
import gql from 'graphql-tag';

export default {
  state() {
    return {
      loading: false,
      data: [],
    };
  },
  mutations: {
    async getList(state, payload) {
      state.loading = true;
      const response = await apolloClient.query({
        query: gql`
          query Machines {
            machines {
              id
              name
              lastKnownPosition {
                latitude
                longitude
              }
            }
          }
        `,
      });
      state.loading = false;
      state.data = response.data.machines;
    },
  },
  actions: {
    fetchData(context, payload) {
      context.commit('getList');
    },
  },
  getters: {
    list(state) {
      return state.data;
    },
  },
};
