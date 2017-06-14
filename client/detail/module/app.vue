<template>
<div class="container">
    <div class="header header-with-btn"><button class="btn" @click="goBack"><i class="fa fa-arrow-left" /></button>{{event.name}}</div>
    <div class="content">
        <div class="detail">
            <img :src="event.avatar" alt="" />
            <p>Title: {{event.title}}</p>
            <p>Created at: {{event.created_at}}</p>
            <p>{{event.message}}</p>
        </div>
    </div>
</div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import * as actions from './action'
    export default {
        computed: {
            ...mapState({
                event: state => state.detail
            })
        },
        methods: {
            goBack(){
                window.history.back()
            },
            ...mapActions(Object.keys(actions))
        }
    }
</script>
