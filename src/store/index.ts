import State from '../types/state.type'
import { createStore } from 'vuex'
import { get, set } from '@utils/index'

import {
    POWER_ON,
    POWER_OFF,
    TURN_UP,
    TURN_DOWN,
    CHANGE_VERTICAL_WINDSHIELD,
    CHANGE_HORIZONTAL_WINDSHIELD,
    INIT_AC,
    OPTIMUM_TEMPERATURE,
    CHANGE_MODE
} from './mutation-types'

const maxTemp = 32
const minTemp = 16

const store = createStore({
    state: {
        power: false,
        temperature: 26,
        cooling: true,
        heating: false,
        verticalSweeping: false,
        horizontalSweeping: false
    },
    mutations: {
        [INIT_AC](state, payload: State): void {
            let key: any
            for (key in payload) {
                if (payload[key] !== null) {
                    set(state, key, payload[key])
                }
                else {
                    if (key == 'mode') localStorage.setItem(key, state.cooling ? 'cooling' : 'heating')
                    else localStorage.setItem(key, get(state, key).toString())
                }
            }
        },
        [POWER_ON](state): void {
            state.power = true
        },
        [POWER_OFF](state): void {
            state.power = false
            state.horizontalSweeping = false
        },
        [TURN_UP](state): void {
            if (state.power && state.temperature < maxTemp) {
                state.temperature++
                localStorage.setItem('temperature', state.temperature.toString())
            }
        },
        [TURN_DOWN](state): void {
            if (state.power && state.temperature > minTemp) {
                state.temperature--
                localStorage.setItem('temperature', state.temperature.toString())
            }
        },
        [CHANGE_VERTICAL_WINDSHIELD](state): void {
            state.verticalSweeping = !state.verticalSweeping

            localStorage.setItem('verticalSweeping', state.verticalSweeping.toString())
        },
        [CHANGE_HORIZONTAL_WINDSHIELD](state): void {
            state.horizontalSweeping = !state.horizontalSweeping

            localStorage.setItem('horizontalSweeping', state.horizontalSweeping.toString())
        },
        [OPTIMUM_TEMPERATURE](state): void {
            state.temperature = 26
        },
        [CHANGE_MODE](state, mode: boolean): void {
            state.cooling = mode
            state.heating = !mode
            localStorage.setItem('mode', mode ? 'cooling' : 'heating')
        }
    }
})

export default store