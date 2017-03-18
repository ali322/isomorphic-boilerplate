<script>
import { mapState, mapActions } from 'vuex'
import actions from './action.es6'

export default {
    computed:{
        ...mapState({
            user:state=>state.user.user
        })
    },
    methods:{
        ...mapActions(Object.keys(actions)),
        goback(){
            history.back()
        }
    }
}
</script>

<template>
<div class="common-container">
    <div class="panel panel-default">
    <div class="panel-heading common-header"><button class="back-button" @click="goback()">&lt;</button>{{user.id}}</div>
    <div class="panel-body">
        <div class="user-title">
        <img :src="user.avatar_url" alt="" />
        <span>
        <p>{{user.login}}</p>
        <p>{{user.created_at}}</p>
        </span>
    </div>
    </div>
    </div>
</div>
</template>
