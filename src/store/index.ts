import { createStore } from 'vuex'

import {
    POWER_ON,
    POWER_OFF,
    TURN_UP,
    TURN_DOWN,
    CHANGE_VERTICAL_WINDSHIELD,
    STOP_VERTICAL_WINDSHIELD,
    CHANGE_HORIZONTAL_WINDSHIELD,
} from './mutation-types'

const maxTemp = 32
const minTemp = 16

const store = createStore({
    state: {
        power: false,
        temperature: 26,
        cording: true,
        heating: false,
        verticalSweeping: false,
        horizontalSweeping: false
    },
    mutations: {
        [POWER_ON](state): void {
            state.power = true
            state.verticalSweeping = true
            state.horizontalSweeping = true
        },
        [POWER_OFF](state): void {
            state.power = false
            state.horizontalSweeping = false
        },
        [TURN_UP](state): void {
            if (state.power && state.temperature < maxTemp) {
                state.temperature++
            }
        },
        [TURN_DOWN](state): void {
            if (state.power && state.temperature > minTemp) {
                state.temperature--
            }
        },
        [CHANGE_VERTICAL_WINDSHIELD](state): void {
            state.verticalSweeping = !state.verticalSweeping
        },
        [STOP_VERTICAL_WINDSHIELD](state) {
            state.verticalSweeping = false
        },
        [CHANGE_HORIZONTAL_WINDSHIELD](state): void {
            state.horizontalSweeping = !state.horizontalSweeping
        }
    }
})

export default store