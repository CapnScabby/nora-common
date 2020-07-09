import { BaseDevice } from './device';
import { OnOffState } from './states/onoff';
import { FanSpeedModeState, FanSpeedMode } from './states/fanspeedmode';
import { FanSpeedPercentState } from './states/fanspeedpercent';

interface FanBase {
    type: 'fan';
    fanSpeedControl: false;
    state: OnOffState;
}

interface FanDeviceWithFanSpeedPercent {
    type: 'fan';
    fanSpeedControl: true;
    state: FanSpeedPercentState & OnOffState;
}

interface FanDeviceWithFanSpeedMode {
    type: 'fan';
    fanSpeedControl: true;
    availableFanSpeedModes: FanSpeedMode[];
    state: FanSpeedModeState & OnOffState;
}

interface FanDeviceWithFanSpeedModeAndFanSpeedPercent {
    type: 'fan';
    fanSpeedControl: true;
    availableFanSpeedModes: FanSpeedMode[];
    state: FanSpeedPercentState & FanSpeedModeState & OnOffState;
}

export type FanDevice = BaseDevice & (FanBase | FanDeviceWithFanSpeedPercent | FanDeviceWithFanSpeedMode | FanDeviceWithFanSpeedModeAndFanSpeedPercent);
