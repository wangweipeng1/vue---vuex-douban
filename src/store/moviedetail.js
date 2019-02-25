import jsonp from 'jsonp'

export default {
    namespaced: true,
    state: {
        movie: {
            images: {
                large: ''
            }
        }
    },
    mutations: {
        getMovie (state, payload) {
            state.movie = payload
        }
    },
    actions: {
        getMovie (context, payload) {
            const ID = context.rootState.route.params.id
            jsonp(`https://api.douban.com/v2/movie/subject/${ID}`, (err, data) => {
                context.commit('getMovie', data)
            })
        }
    }
}