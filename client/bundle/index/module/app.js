import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import actions from './action.es6'

const template = `
<div class="common-container">
    <div class="panel panel-default">
        <div class="panel-heading">Github Events</div>
        <div class="panel-body">
            <div class="input-group">
                <input type="text" class="form-control" :value="repo" @input="handleChange" />
                <span class="input-group-addon" @click="handleQuery"><i class="fa fa-search" /></span>
            </div>
        </div>
        <div class="search-icon"></div>
        <div class="events">
            <div class="event" v-for="event in events" key={event.id}>
                <div class="event-title">
                    <img :src="event.actor.avatar_url" alt="" />
                    <span>
                    <p><a v-bind:href="'/user/' + event.actor.display_login">{{event.actor.display_login}}</a></p>
                    <p>{{event.created_at}}</p>
                    </span>
                </div>
                <p>{{event.type.replace('Event','').toLowerCase()}} In <b>{{event.repo.name}}</b></p>
            </div>
        </div>
    </div>
</div>
`

export const proto = {
    methods: {
        handleChange(e) {
            e && e.preventDefault()
            this.changeField({ name: "repo", value: e.target.value });
        },
        handleQuery() {
            this.fetchRepo({
                repo: this.repo
            })
        }
    },
    created() {
        this.fetchRepo({ repo: this.repo })
    },
    template
}

const Events = Vue.component('events',{
    ...proto,
    methods:{
        ...proto.methods,
        ...mapActions(Object.keys(actions)),
    },
    computed:{
        ...proto.computed,
        ...mapState({
            repo: state => state.index.repo,
            events: state => state.index.events,
        })
    }
})

export default Events
