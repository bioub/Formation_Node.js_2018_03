'use strict';

import format from 'date-fns/format';

export class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} container
   */
  constructor(container) {
    this._container = container;
  }

  _render() {
    const now = new Date();
    this._container.innerText = format(now, 'HH:mm:ss');
  }

  start() {
    this._render();
    this.id = setInterval(this._render.bind(this), 1000);
  }

  stop() {
    clearInterval(this.id);
    this.id = null;
  }
}
