import BaseView from "common/view";
import { autobound } from "es7-autobinder";
import log from 'core/logger';

export default class extends BaseView {
    constructor() {
        super();
        log.info('Init HomeView');
    }
}
