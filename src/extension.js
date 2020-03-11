/*
 * Hide Dash
 *
 * Copyright (c) 2020 Payson Wallach
 *
 * Released under the terms of the GNU General Public License, version 3
 * (https://gnu.org/licenses/gpl.html)
 */

const Main = imports.ui.main;

let observer, x, width;

function init() {
  x = Main.overview.viewSelector.actor.x;
  width = Main.overview.viewSelector.actor.get_width();
}

function enable() {
  observer = Main.overview.connect("showing", () => {
    Main.overview._overview.dash.hide();
    Main.overview.viewSelector.actor.set_x(0);
    Main.overview.viewSelector.actor.set_width(0);
    Main.overview.viewSelector.actor.queue_redraw();
  });
}

function disable() {
  Main.overview.disconnect(observer);
  Main.overview._overview.dash.show();
  Main.overview.viewSelector.actor.set_x(x);
  Main.overview.viewSelector.actor.set_width(width);
  Main.overview.viewSelector.actor.queue_redraw();
}
