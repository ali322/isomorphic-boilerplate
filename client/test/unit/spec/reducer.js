import eventReducer from '@/index/module/reducer'
import * as constants from '@/index/module/constant'

describe('index reducer', () => {
  it('should handle RESPONSE_EVENTS', () => {
    let action = {
      type: constants.RESPONSE_EVENTS,
      payload: [],
    }
    let nextState = eventReducer({ events: [] }, action)
    expect(nextState.eventsFetched).toBe(true)
  })
})
