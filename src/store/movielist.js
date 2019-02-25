import jsonp from 'jsonp'

export default {
    namespaced: true,
    state: {
        title: '',
        subjects: []
    },
    mutations: {
        setData(state, payload) {
            state.title = payload.title
            state.subjects = payload.subjects
            // console.log(state.subjects)
        }
    },
    actions: {
        setData(context, payload) {
            const Path = context.rootState.route.name;
            jsonp(`http://api.douban.com/v2/movie/${Path}`, (err, data) => {
                // console.log(data)
                context.commit('setData', data)
                // console.log(context)
            })
        }
    }
}