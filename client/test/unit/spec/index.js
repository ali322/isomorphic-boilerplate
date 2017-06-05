import Vue from 'vue'
import VueRouter from 'vue-router'
import moxios from 'moxios'
import sinon from 'sinon'
import mutations from '@/index/module/mutation'
import * as actions from '@/index/module/action'
import * as constants from '@/index/module/constant'
import app from '@/index/module/app.vue'
import { testAction, renderedText, createVM, destoryVM, triggerEvent } from '../fixture/util'

describe("mutations", () => {
    it(constants.RESPONSE_EVENTS, () => {
        let state = {}
        mutations[constants.RESPONSE_EVENTS](state)
        expect(state.eventsFetched).to.equal(true)
    })
})

describe("actions", () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    it('should RESPONSE_EVENTS when fetched', done => {
        let ret = {
            status: 'ok',
            data: []
        }
        let expectedMutations = [
            { type: constants.REQUEST_EVENTS },
            { type: constants.RESPONSE_EVENTS, payload: ret.data }
        ]

        moxios.stubRequest('/mock/events', {
            status: 200,
            responseText: JSON.stringify(ret)
        })

        testAction(actions.fetchEvents, [], {}, actions, expectedMutations, done)
    })
})

describe("component", () => {
    let vm, fetchEvents
    beforeEach(() => {
        fetchEvents = sinon.spy()
        vm = createVM({ ...app, methods: { ...app.methods, fetchEvents }, computed: {} })
    })
    afterEach(() => {
        destoryVM(vm)
    })
    it('should render correct', () => {
        expect(vm.$el.querySelectorAll('.content').length).to.equal(1)
    })
    it('should call handleRefresh once after click', done => {
        const button = vm.$el.querySelector('.refresh-btn')
        triggerEvent(button, 'click')
        vm.$nextTick(() => {
            expect(fetchEvents.callCount).to.equal(2)
            done()
        })
    })
})
