## fix(page): reduce space between tertiary nav, breadcrumbs, main section [(#2837)](https://github.com/patternfly/patternfly/pull/2837)
* removes `--pf-c-page__main-nav--PaddingBottom`
* removes `--pf-c-page__main-breadcrumb--md--PaddingTop`
* removes `--pf-c-page__main-nav--main-breadcrumb--PaddingTop`
* reduced spacer between breadcrumb and page section that is below it to `var(--pf-global--spacer--md)`

## fix(colors): update cyan-600 cyan-700 blue-600 and blue-700 [(#2832)](https://github.com/patternfly/patternfly/pull/2832)
* Update HEX color for `$pf-color-blue-600`
* Update HEX color for `$pf-color-blue-700`
* Update HEX color for `$pf-color-cyan-600`
* Update HEX color for `$pf-color-cyan-700`

## style(table-cell-font-weight): update table cell font weight var name [(#2831)](https://github.com/patternfly/patternfly/pull/2831)
1. Changed `--pf-c-table--FontWeight` to `--pf-c-table-cell--FontWeight`

## fix(select/contextselector): update name for menu search [(#2826)](https://github.com/patternfly/patternfly/pull/2826)
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

## fix(chipgroup): modify max width for chip label [(#2823)](https://github.com/patternfly/patternfly/pull/2823)
1. Changed max-width for `--pf-c-chip-group__label--Maxwidth` to 160px

## fix(page-header-tools-margin): removed margin-top/bottom [(#2821)](https://github.com/patternfly/patternfly/pull/2821)
1. Removed `--pf-c-page__header-tools--MarginTop: var(--pf-global--spacer--sm);`
2. Removed `--pf-c-page__header-tools--MarginBottom: var(--pf-global--spacer--sm);`
3. Removed `margin-top`
4. Removed `margin-bottom`

## fix(color): updated black global and background global/component vars [(#2818)](https://github.com/patternfly/patternfly/pull/2818)
* `$pf-color-black-200` changes to `#f0f0f0`
* `$pf-color-black-600` changes to `#6a6e73`
* `$pf-global--BackgroundColor--200` changes to `$pf-color-black-200 `
* Removes `$pf-global--BackgroundColor--150` and `$pf-global--BackgroundColor--300`
  * Updated all components that use `$pf-global--BackgroundColor--150` or `$pf-global--BackgroundColor--300` to use  `$pf-global--BackgroundColor--200` instead

## fix(color): updated success-100, success-200, green-500 global vars [(#2817)](https://github.com/patternfly/patternfly/pull/2817)
* `$pf-color-green-500` changes to `#3e8635`
* `$pf-global--success-color--100` changes to `$pf-color-green-500`
* `$pf-global--success-color--200` changes to `$pf-color-green-700`

## fix(datalist): update compact font-size [(#2777)](https://github.com/patternfly/patternfly/pull/2777)
* Changes compact data-list font-size to `--pf-global--FontSize--sm`

## fix(table): update compact spacing [(#2775)](https://github.com/patternfly/patternfly/pull/2775)
* Changed compact table's header spacing from `--pf-global--spacer--md` top and bottom padding to `calc(var(--pf-global--spacer--sm) + var(--pf-global--spacer--xs))` top padding and `var(--pf-global--spacer--sm)` bottom padding.
* Changed compact table's responsive/grid spacers. All values changed from the default table's responsive spacers:
  * `<tr>` top/bottom padding changed to `var(--pf-global--spacer--sm)`
  * `<td>` top/bottom padding changed to `var(--pf-global--spacer--xs)`
  * `.pf-c-table__action` top/bottom margin set to `calc(var(--pf-global--spacer--xs) * -1);` to better align in the grid layout.
  * The expandable row toggle button's (`.pf-c-table__toggle .pf-c-button`) bottom margin set to`calc(#{pf-size-prem(6px)} * -1);` to reduce gap between toggle and expandable row content.

## fix(test): remove unused file [(#2771)](https://github.com/patternfly/patternfly/pull/2771)
- thing 1
- thing 2

## fix(tooltip): reduced space around component [(#2763)](https://github.com/patternfly/patternfly/pull/2763)
* Reduces spacers around tooltip

## fix(popover): reduced space between/around elements [(#2762)](https://github.com/patternfly/patternfly/pull/2762)
* Space around popover changed from `--pf-global--spacer--xl` to `--pf-global--spacer--md`
* Increased right padding of element displayed to the left of the close button to make more room for the close button. That padding changed from `--pf-global--spacer--xl` to `--pf-global--spacer--2xl`
* Title component size changes from `pf-m-xl` to `pf-m-md`
* Popover's `font-size` changed to `--pf-global--FontSize--sm`
* Space below title changed from `--pf-global--spacer--md` to `--pf-global--spacer--sm`
* Space above footer changed from `--pf-global--spacer--lg` to `--pf-global--spacer--md`

## fix(modal): reduced spacing [(#2761)](https://github.com/patternfly/patternfly/pull/2761)
* Reduces default spacing:
  * outer padding from `--pf-global--spacer--xl` to `--pf-global--spacer--lg`
  * space between title and description from `--pf-global--spacer--sm` to `--pf-global--spacer--xs`
  * space between description and body from `--pf-global--spacer--lg` to `--pf-global--spacer--md`
  * space between title and body from `--pf-global--spacer--lg` to `--pf-global--spacer--md`
  * space above footer from `--pf-global--spacer--xl` to `--pf-global--spacer--lg`

## fix(accordion): updated spacing, removed box shadow and shadow variation [(#2760)](https://github.com/patternfly/patternfly/pull/2760)
* Reduces left/right padding from `--pf-global--spacer--xl` to `--pf-global--spacer--md`
* Removes the box shadow and outer padding. Removes vars:
  * `--pf-c-accordion--BorderWidth`
  * `--pf-c-accordion--BoxShadow`
  * `--pf-c-accordion--PaddingTop`
  * `--pf-c-accordion--PaddingBottom`
* Removes `.pf-m-no-box-shadow` variation

## fix(card): renamed vars, updated docs [(#2759)](https://github.com/patternfly/patternfly/pull/2759)
* renames `--pf-c-card--m-compact__header--not-last-child--PaddingBottom` to `--pf-c-card--m-compact__header--not--last-child--PaddingBottom`
* renames `--pf-c-card__header--not-last-child--PaddingBottom` to `--pf-c-card__header--not--last-child--PaddingBottom`
* renames `--pf-c-card__header--not-last-child--PaddingBottom` to `--pf-c-card__header--not--last-child--PaddingBottom`

## refactor(tabs): updated to new tab design [(#2757)](https://github.com/patternfly/patternfly/pull/2757)
- The tabs component was refactored, see the file list for details on what changed 
https://github.com/patternfly/patternfly/pull/2757/files

1. Removes `--pf-c-tabs__item--hover--Color`
2. Updates `--pf-c-tabs__button--Color` to `var(--pf-global--Color--200)`
3. Removes `--pf-c-tabs__button--FontWeight`
4. Removes `--pf-c-tabs__button--Background`
5. Updates `--pf-c-tabs__button--OutlineOffset` to `calc(-1 * #{pf-size-prem(6px)})`
6. Updates `--pf-c-tabs__button--PaddingRight` to `var(--pf-global--spacer--md)`
7. Updates `--pf-c-tabs__button--PaddingLeft` to `var(--pf-global--spacer--md)`
8. Updates `--pf-c-tabs__scroll-button--Width` to `var(--pf-global--spacer--2xl)`
9. Removes `--pf-c-tabs__scroll-button--ZIndex`
10. Removes `--pf-c-tabs__scroll-button--m-secondary--hover--Color`
11. Removes `--pf-c-tabs__scroll-button--m-secondary-right--m-start-current--Color`
12. Removes `--pf-c-tabs__scroll-button--m-secondary--nth-of-type-1--BoxShadow`
13. Removes `--pf-c-tabs__scroll-button--m-secondary--nth-of-type-2--BoxShadow`
14. Removes `--pf-c-tabs__item--BackgroundColor`
15. Removes `--pf-c-tabs__item--BorderColor`
16. Removes `--pf-c-tabs__item--BorderWidth`
17. Removes `--pf-c-tabs__item--m-current--ZIndex`
18. Removes `--pf-c-tabs__item--m-current--Color`
19. Removes `--pf-c-tabs__item--m-current--BorderTopWidth`
20. Removes`.pf-m-start`
21. Removes `.pf-m-end`
22. Removes `.pf-m-start-current`
23. Removes `.pf-m-end-current`

- Moved item border to button::before border
- Scroll buttons are inline with items rather than above

## fix(form-control): enabled success/invalid states for readonly controls [(#2753)](https://github.com/patternfly/patternfly/pull/2753)
* Removes
*  `--pf-c-form-control--success--check--Background`
*  `--pf-c-form-control--success--Background`
*  `--pf-c-form-control__select--arrow--Background`
*  `--pf-c-form-control__select--Background`
*  `--pf-c-form-control__select--invalid--Background`
*  `--pf-c-form-control__select--success--Background`