import Vue from 'vue'
import VueRouter from 'vue-router'
import moxios from 'moxios'
import sinon from 'sinon'
import mutations from '@/index/module/mutation.es6'
import actions from '@/index/module/action.es6'
import * as constants from '@/index/module/constant.es6'
import { proto } from '@/index/module/app'
import { testAction, renderedText } from '../fixture/util'

describe("mutations", () => {
    it(constants.CHANGE_FIELD, () => {
        let state = {}
        let payload = { name: 'repo', value: 'vuejs/vue' }
        mutations[constants.CHANGE_FIELD](state, payload)
        expect(state.repo).to.equal('vuejs/vue')
    })
})

describe("actions", () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    it('fetch repo', done => {
        let response = {
            "isFetched": true,
            "result": ['foo', 'bar']
        }
        let expectedMutations = [
            { type: constants.REQUEST_REPO },
            { type: constants.RESPONSE_REPO, payload: { res: response } }
        ]

        moxios.stubRequest('https://api.github.com/events', {
            status: 200,
            responseText: JSON.stringify(response)
        })

        testAction(actions.fetchRepo, [{ repo: 'redux' }], {}, actions, expectedMutations, done)
    })
})

describe("component", () => {
    beforeEach(() => {
        Vue.use(VueRouter)
    })
    it('index route', () => {
        const fetchRepo = sinon.spy()
        const rendered = renderedText({ ...proto,
            data: () => {
                return {
                    ...(proto.data ? proto.data() : {}),
                    repo: '',
                    events: [],
                    fetchRepo,
                }
            }
        }, {})

        expect(fetchRepo.callCount).to.equal(1)
    })
})
