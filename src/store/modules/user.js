import UserService from '@/services/UserService.js'

export const namespaced = true

export const state = {
    users: [{
      id: 1,
      userName: 'aaaa',
      email: 'aaaa@hotmail.com',
      password: 'aaaa',
      country: 'canada',
      streetAddress: 'botelho de oliveira 51',
        city: 'rondonópolis',
      stateP: 'Mato Grosso',
      postalCode: '78735745',
      order: 1
    },
    {
      id: 2,
      userName: 'bbbb',
      email: 'bbbb@hotmail.com',
      password: 'bbbb',
      country: 'canada',
      streetAddress: 'botelho de oliveira 51',
        city: 'rondonópolis',
      stateP: 'Mato Grosso',
      postalCode: '78735745',
      order: 2
    },
    {
      id: 3,
      userName: 'cccc',
      email: 'ccccc@hotmail.com',
      password: 'cccc',
      country: 'canada',
      streetAddress: 'botelho de oliveira 51',
        city: 'rondonópolis',
      stateP: 'Mato Grosso',
      postalCode: '78735745',
      order: 3
    }],
    users2: [{
      id: 111,
      userName: 'zzzz',
      email: 'zzzzzz@hotmail.com',
      password: 'zzzz',
      country: 'canada',
      streetAddress: 'botelho de oliveira 51',
        city: 'rondonópolis',
      stateP: 'Mato Grosso',
      postalCode: '78735745',
      order: 111
    },
    {
      id: 222,
      userName: 'yyyy',
      email: 'yyyyy@hotmail.com',
      password: 'yyyy',
      country: 'canada',
      streetAddress: 'botelho de oliveira 51',
        city: 'rondonópolis',
      stateP: 'Mato Grosso',
      postalCode: '78735745',
      order: 222
    },
    {
      id: 333,
      userName: 'xxxx',
      email: 'xxxxxxx@hotmail.com',
      password: 'xxxx',
      country: 'canada',
      streetAddress: 'botelho de oliveira 51',
        city: 'rondonópolis',
      stateP: 'Mato Grosso',
      postalCode: '78735745',
      order: 333
    }],
    usersTotal: 0,
    user: {},
    perPage: 5
}
export const mutations = {
    ADD_USER(state, user) {
        state.users.push(user)
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_USERS2(state, users) {
        state.users2 = users
    },
    SET_USERS_TOTAL(state, usersTotal) {
        state.usersTotal = usersTotal
    },
    SET_USER(state, user) {
        state.user = user
    },
    UPDATE_USERS(){}
}
export const actions = {
    createUser({ commit, dispatch }, user) {
        return UserService.postUser(user)
            .then(() => {
                commit('ADD_USER', user)
                const notification = {
                    type: 'success',
                    message: 'Your user has been created!'
                }
                dispatch('notification/add', notification, { root: true })
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem creating your user: ' + error.message
                }
                dispatch('notification/add', notification, { root: true })
                throw error
            })
    },
    updateAllUsers({commit}, users) {
                console.log('actions 1')
                commit('SET_USERS', users)        
    },
    updateAllUsers2({commit}, users) {
                console.log('actions 2')
                commit('SET_USERS2', users)        
    },
    deleteAllUsers() {
                console.log('Dentro delete')
                UserService.clearAllUsers()
                console.log('saindo delete')
    },
    fetchUsers({ commit, dispatch, state }, { page }) {
        return UserService.getUsers(state.perPage, page)
            .then(response => {
                commit('SET_USERS_TOTAL', parseInt(response.headers['x-total-count']))
                commit('SET_USERS', response.data)
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching users: ' + error.message
                }
                dispatch('notification/add', notification, { root: true })
            })
    },
    fetchAllUsers({commit, dispatch}) {     
                return UserService.getAllUsers()
                    .then(response => {
                        commit('SET_USERS', response.data)                       
                    })
                    .catch(error => {
                        const notification = {
                            type: 'error',
                            message: 'There was a problem fetching users: ' + error.message
                        }
                        dispatch('notification/add', notification, { root: true })
                    })          
    },
    fetchUser({ commit, getters, state }, id) {
        if (id == state.user.id) {
            return state.user
        }
        var user = getters.getUserById(id)

        if (user) {
            commit('SET_USER', user)
            return user
        } else {
            return UserService.getUser(id).then(response => {
                commit('SET_USER', response.data)
                return response.data
            })
        }
    }
}

export const getters = {
    getUserById: state => id => {
        return state.users.find(user => user.id === id)
    }
}