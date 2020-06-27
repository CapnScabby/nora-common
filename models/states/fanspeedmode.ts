import { State } from './state';

export type availableFanSpeedModes = 'S1' | 'S2' | 'S3' | 'S4';

export interface FanSpeedModeState extends State {
     currentFanSpeedMode: availableFanSpeedModes[];
}
