import Vue from 'vue'
import VueRouter from 'vue-router'
import moxios from 'moxios'
import sinon from 'sinon'
import mutations from '@/index/mutation'
import * as actions from '@/index/action'
import * as constants from '@/index/constant'
import app from '@/index/app.vue'
import { testAction, renderedText, createVM, destoryVM, triggerEvent } from '../fixture/util'

describe("mutations", () => {
    it(constants.RESPONSE_EVENTS, () => {
        let state = {}
        mutations[constants.RESPONSE_EVENTS](state)
        expect(state.eventsFetched).to.equal(true)
    })
})
