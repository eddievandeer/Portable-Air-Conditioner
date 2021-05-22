import { createStore } from 'vuex'

import {
    POWER_ON,
    POWER_OFF,
    TURN_UP,
    TURN_DOWN,
    CHANGE_VERTICAL_WINDSHIELD,
    CHANGE_HORIZONTAL_WINDSHIELD,
    OPTIMUM_TEMPERATURE,
    CHANGE_MODE
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
        [CHANGE_HORIZONTAL_WINDSHIELD](state): void {
            state.horizontalSweeping = !state.horizontalSweeping
        },
        [OPTIMUM_TEMPERATURE](state): void {
            state.temperature = 26
        },
        [CHANGE_MODE](state, mode: boolean): void {
            state.cording = mode
            state.heating = !mode
        }
    }
})

export default store