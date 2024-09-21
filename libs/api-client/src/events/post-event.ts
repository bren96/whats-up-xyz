import { EventData } from './types';

export function postEvent(payload: EventData) {
  console.log('postEvent', { payload });
}
