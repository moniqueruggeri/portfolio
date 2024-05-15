import { submitForm } from './forms.js';
import { menuButton } from './menu-button.js';
import { sliderIndex, sliderPortfolio } from './slider.js';

window.onload = function() {
    sliderIndex();
}
sliderPortfolio();
submitForm();
menuButton();