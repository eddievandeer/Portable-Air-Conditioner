let timeoutId: any;
let intervalId: any;

const noiseStartTime: number = 2;
const noiseDuration: number = 56;

export function playDi(di: HTMLAudioElement): void {
    di.play()
}

export function playOpenSound(open: HTMLAudioElement, work: HTMLAudioElement): void {
    open.currentTime = 0
    open.play()

    timeoutId = setTimeout(() => {
        playWorkSound(work);
    }, 8000);
}

function playWorkSound(work: HTMLAudioElement): void {
    work.currentTime = 0
    work.play()

    timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
            work.currentTime = noiseStartTime
        }, noiseDuration * 1000)
    }, noiseStartTime * 1000)
}

export function playTurnOffSound(open: HTMLAudioElement, work: HTMLAudioElement): void {
    if (timeoutId) clearTimeout(timeoutId)
    if (intervalId) clearInterval(intervalId)

    open.pause()

    work.currentTime = noiseStartTime + noiseDuration - 2
}