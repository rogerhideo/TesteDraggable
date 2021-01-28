
export const namespaced = true

export const state = {
    elements: [
      {
        id: 1,
        name: "Shrek",
        elements: []
      },
      {
        id: 2,
        name: "Fiona",
        elements: [
          {
            id: 4,
            name: "Lord Farquad",
            elements: []
          },
          {
            id: 5,
            name: "Prince Charming",
            elements: []
          }
        ]
      },
      {
        id: 3,
        name: "Donkey",
        elements: []
      }
]
}
 
export const mutations = { 
    updateElements: (state, payload) => {
      state.elements = payload;
    }
  }
export const actions = {
    updateElements: ({ commit }, payload) => {
      console.log('update action')
      commit("updateElements", payload);
    }
  }

 

