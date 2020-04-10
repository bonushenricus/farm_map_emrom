<?php
/**
 * @file
 * Farm Map hooks implemented by the Farm Map EmRom module.
 */

/**
 * Implements hook_farm_map_behaviors().
 */
function farm_map_emrom_farm_map_behaviors() {
  return array(
    'farm_map_emrom' => array(
      'js' => 'farmOS.map.behaviors.farm_map_emrom.js',
    ),
  );
}

/**
 * Implements hook_farm_map_view().
 */
function farm_map_emrom_farm_map_view($name, $element) {
  farm_map_add_behavior('farm_map_emrom');
}
