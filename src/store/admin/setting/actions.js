export default {
    drawerAction ( context, payload ) {
        context.commit('drawerCommit', !context.state.drawer)
    }
}