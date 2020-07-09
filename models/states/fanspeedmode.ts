import { State } from './state';

export type FanSpeedMode = 'S1' | 'S2' | 'S3' | 'S4';

export interface FanSpeedModeState extends State {
     fanSpeedMode: FanSpeedMode;
}
