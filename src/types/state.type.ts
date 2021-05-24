export default interface State {
    temperature: number | null,
    mode: boolean | null,
    verticalSweeping: boolean | null,
    horizontalSweeping: boolean | null,
    [key: string]: any
}