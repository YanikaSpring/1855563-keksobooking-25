import { ads } from './data.js';
import {createCard} from './offer.js';
import {switchFormState} from './form.js';

const mapCanvas = document.querySelector('#map-canvas');

const card = createCard(ads[4]);

switchFormState(true);
mapCanvas.appendChild(card);

