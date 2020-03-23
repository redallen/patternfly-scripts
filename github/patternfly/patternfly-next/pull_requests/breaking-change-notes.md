## Changes from [#2837](https://github.com/patternfly/patternfly/pull/2837)
* removes `--pf-c-page__main-nav--PaddingBottom`
* removes `--pf-c-page__main-breadcrumb--md--PaddingTop`
* removes `--pf-c-page__main-nav--main-breadcrumb--PaddingTop`
* reduced spacer between breadcrumb and page section that is below it to `var(--pf-global--spacer--md)`

## Changes from [#2832](https://github.com/patternfly/patternfly/pull/2832)
* Update HEX color for `$pf-color-blue-600`
* Update HEX color for `$pf-color-blue-700`
* Update HEX color for `$pf-color-cyan-600`
* Update HEX color for `$pf-color-cyan-700`

## Changes from [#2826](https://github.com/patternfly/patternfly/pull/2826)
* changes `pf-c-context-selector__menu-input` to `pf-c-context-selector__menu-search`
* changes `pf-c-select__menu-input` to `pf-c-select__menu-search`
* changes `--pf-c-context-selector__menu-input--PaddingTop` to `--pf-c-context-selector__menu-search--PaddingTop`
* changes `--pf-c-context-selector__menu-input--PaddingRight` to `--pf-c-context-selector__menu-search--PaddingRight`
* changes `--pf-c-context-selector__menu-input--PaddingBottom` to `--pf-c-context-selector__menu-search--PaddingBottom`
* changes `--pf-c-context-selector__menu-input--PaddingLeft` to `--pf-c-context-selector__menu-search--PaddingLeft`
*  changes `--pf-c-context-selector__menu-input--BottomBorderColor` to `--pf-c-context-selector__menu-search--BorderBottomColor`
* changes `--pf-c-context-selector__menu-input--BottomBorderWidth` to `--pf-c-context-selector__menu-search--BorderBottomWidth`
* changes `--pf-c-select__menu-input--PaddingTop` to `--pf-c-select__menu-search--PaddingTop`
* changes `--pf-c-select__menu-input--PaddingRight` to `--pf-c-select__menu-search--PaddingRight`
* changes `--pf-c-select__menu-input--PaddingBottom` to `--pf-c-select__menu-search--PaddingBottom`
* changes `--pf-c-select__menu-input--PaddingLeft` to `--pf-c-select__menu-search--PaddingLeft`

## Changes from [#2823](https://github.com/patternfly/patternfly/pull/2823)
1. Changed max-width for `--pf-c-chip-group__label--Maxwidth` to 160px

## Changes from [#2818](https://github.com/patternfly/patternfly/pull/2818)
* `$pf-color-black-200` changes to `#f0f0f0`
* `$pf-color-black-600` changes to `#6a6e73`
* `$pf-global--BackgroundColor--200` changes to `$pf-color-black-200 `
* Removes `$pf-global--BackgroundColor--150` and `$pf-global--BackgroundColor--300`
  * Updated all components that use `$pf-global--BackgroundColor--150` or `$pf-global--BackgroundColor--300` to use  `$pf-global--BackgroundColor--200` instead

## Changes from [#2777](https://github.com/patternfly/patternfly/pull/2777)
* Changes compact data-list font-size to `--pf-global--FontSize--sm`

## Changes from [#2775](https://github.com/patternfly/patternfly/pull/2775)
* Changed compact table's header spacing from `--pf-global--spacer--md` top and bottom padding to `calc(var(--pf-global--spacer--sm) + var(--pf-global--spacer--xs))` top padding and `var(--pf-global--spacer--sm)` bottom padding.
* Changed compact table's responsive/grid spacers. All values changed from the default table's responsive spacers:
  * `<tr>` top/bottom padding changed to `var(--pf-global--spacer--sm)`
  * `<td>` top/bottom padding changed to `var(--pf-global--spacer--xs)`
  * `.pf-c-table__action` top/bottom margin set to `calc(var(--pf-global--spacer--xs) * -1);` to better align in the grid layout.
  * The expandable row toggle button's (`.pf-c-table__toggle .pf-c-button`) bottom margin set to`calc(#{pf-size-prem(6px)} * -1);` to reduce gap between toggle and expandable row content.

## Changes from [#2771](https://github.com/patternfly/patternfly/pull/2771)
- thing 1
- thing 2

## Changes from [#2763](https://github.com/patternfly/patternfly/pull/2763)
* Reduces spacers around tooltip

## Changes from [#2761](https://github.com/patternfly/patternfly/pull/2761)
* Reduces default spacing:
  * outer padding from `--pf-global--spacer--xl` to `--pf-global--spacer--lg`
  * space between title and description from `--pf-global--spacer--sm` to `--pf-global--spacer--xs`
  * space between description and body from `--pf-global--spacer--lg` to `--pf-global--spacer--md`
  * space between title and body from `--pf-global--spacer--lg` to `--pf-global--spacer--md`
  * space above footer from `--pf-global--spacer--xl` to `--pf-global--spacer--lg`

## Changes from [#2759](https://github.com/patternfly/patternfly/pull/2759)
* renames `--pf-c-card--m-compact__header--not-last-child--PaddingBottom` to `--pf-c-card--m-compact__header--not--last-child--PaddingBottom`
* renames `--pf-c-card__header--not-last-child--PaddingBottom` to `--pf-c-card__header--not--last-child--PaddingBottom`
* renames `--pf-c-card__header--not-last-child--PaddingBottom` to `--pf-c-card__header--not--last-child--PaddingBottom`

## Changes from [#2753](https://github.com/patternfly/patternfly/pull/2753)
* Removes
*  `--pf-c-form-control--success--check--Background`
*  `--pf-c-form-control--success--Background`
*  `--pf-c-form-control__select--arrow--Background`
*  `--pf-c-form-control__select--Background`
*  `--pf-c-form-control__select--invalid--Background`
*  `--pf-c-form-control__select--success--Background`