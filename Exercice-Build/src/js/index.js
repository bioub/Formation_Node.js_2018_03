'use strict';

import { Horloge } from './horloge';

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();

divElt.addEventListener('click', () => {
  import('./horloge-utils').then((utils) => {
    utils.toggle(clock);
  });
});
