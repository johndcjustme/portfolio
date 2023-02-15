/*
 * Add some magic to Pico docs
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2022 - Licensed under MIT
 */

// Imports
import themeSwitcher from './theme-switcher.js';

// Theme switcher
themeSwitcher.addButton({
  tag: 'BUTTON',
  class: 'contrast switcher theme-switcher',
  target: '.switcher',
});

themeSwitcher.init();

// Toggle navigation