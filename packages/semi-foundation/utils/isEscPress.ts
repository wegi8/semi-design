import { get } from 'lodash';
import { ESC_KEY } from './keyCode';

function isEscPress<T extends { key: string }>(e: T) {
    return get(e, 'key') === ESC_KEY ? true : false;
}

export default isEscPress;