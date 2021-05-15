let timeoutId: any;
let intervalId: any;

const noiseStartTime: number = 2;
const noiseDuration: number = 56;

export function playAudio(audio: HTMLAudioElement): void {
    audio.currentTime = 0
    audio.play()
}

export function playOpenSound(open: HTMLAudioElement, work: HTMLAudioElement): void {
    playAudio(open)

    timeoutId = setTimeout(() => {
        playWorkSound(work);
    }, 8000);
}

function playWorkSound(work: HTMLAudioElement): void {
    playAudio(work)

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