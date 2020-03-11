<div align="center">
  <h1>Hide Dash</h1>
  <p>Hide the dash from the activities overview.</p>
  <a href=https://github.com/paysonwallach/gnome-shell-hide-dash/release/latest>
    <img src=https://img.shields.io/github/v/release/paysonwallach/gnome-shell-hide-dash?style=flat-square>
  </a>
  <a href=https://github.com/paysonwallach/gnome-shell-hide-dash/blob/master/LICENSE>
    <img src=https://img.shields.io/github/license/paysonwallach/gnome-shell-hide-dash?style=flat-square>
  </a>
  <a href=https://buymeacoffee.com/paysonwallach>
    <img src=https://img.shields.io/badge/donate-Buy%20me%20a%20coffe-yellow?style=flat-square>
  </a>
  <br>
  <br>
</div>

[Hide Dash](https://github.com/paysonwallach/gnome-shell-hide-dash/) is a fork of [gnome-shell-extension-hide-dash](https://github.com/xenatt/gnome-shell-extension-hide-dash) with support for GNOME Shell 3.36+.

## Installation

### From Zip

Download the [latest release](https://github.com/paysonwallach/gnome-shell-hide-dash/releases/latest), and extract the extension:

```sh
rm -rf ~/.local/share/gnome-shell/extensions/hide-dash@paysonwallach.com
unzip -o gnome-shell-hide-dash@paysonwallach.com.zip -d ~/.local/share/gnome-shell/extensions/hide-dash@paysonwallach.com
```

### From source using [`meson`](http://mesonbuild.com/)

Clone this repository or download the [latest release](https://github.com/paysonwallach/gnome-shell-hide-dash/releases/latest).

```sh
git clone https://github.com/paysonwallach/gnome-shell-hide-dash.git
```

Configure the build directory at the root of the project.

```sh
meson --prefix=$HOME/.local build
```

Install with `ninja`.

```sh
ninja -C build install
```

## Loading the extension

Restart GNOME shell.

- **X11/Xorg:** <kbd>Alt</kbd> + <kbd>F2</kbd> + `restart` or `r`
- **Wayland:** Log out and log back in

Enable the extension with [GNOME Tweaks](https://gitlab.gnome.org/GNOME/gnome-tweaks) or `gnome-extensions`.

```sh
gnome-extensions enable hide-dash@paysonwallach.com
```

## License

[Hide Dash](https://github.com/paysonwallach/gnome-shell-hide-dash) is licensed under the [GNU General Public License, version 3](https://github.com/paysonwallach/gnome-shell-hide-dash/blob/master/LICENSE).
