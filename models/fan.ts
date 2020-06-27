import { BaseDevice } from './device';
import { OnOffState } from './states/onoff';
import ( fanSpeedModeState, availableFanModes ) from './states/fanspeedmode';
import { fanSpeedPercentState } from './states/fanspeedpercent';

export type FanDevice = BaseDevice & {
    type: 'fan';
    fanSpeedControl: false;
    state: OnOffState;
};

export type FanDeviceWithFanSpeed = BaseDevice & {
    type: 'fan`';
    fanSpeedControl: true;
    availableSpeeds: availableFanSpeeds[];
    S1_Name: 
    state: FanSpeedState & OnOffState;
};
