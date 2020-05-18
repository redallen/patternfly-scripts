## PatternFly 4.0 release notes

Hey Fliers, we've been busy for the past 9 weeks working on significant changes to PatternFly's HTML and CSS...

**Table of contents**
- [Global](#global)
  - [Colors](#colors)
  - [Mobile first](#mobile-first)
  - [Old shield styles](#old-shield-styles)
  - [Default font](#default-font)
  - [Directory structure](#directory-structure)
  - [Code changes](#code-changes)
- [Components](#components)
  - [About modal box](#about-modal-box)
  - [Accordion](#accordion)
  - [Alert](#alert)
  - [Application launcher](#application-launcher)
  - [Backdrop](#backdrop)
  - [Breadcrumb](#breadcrumb)
  - [Button](#button)
  - [Card](#card)
  - [Chip](#chip)
  - [Chip group](#chip-group)
  - [Clipboard copy](#clipboard-copy)
  - [Content](#content)
  - [Context selector](#context-selector)
  - [Data list](#data-list)
  - [Drawer](#drawer)
  - [Dropdown](#dropdown)
  - [Empty state](#empty-state)
  - [Expandable section (previously Expandable)](#expandable-section-(previously-expandable))
  - [File upload](#file-upload)
  - [Form](#form)
  - [Form control](#form-control)
  - [Input group](#input-group)
  - [Label](#label)
  - [Login](#login)
  - [Modal box](#modal-box)
  - [Nav](#nav)
  - [Notification drawer](#notification-drawer)
  - [Options menu](#options-menu)
  - [Page](#page)
  - [Pagination](#pagination)
  - [Popover](#popover)
  - [Radio](#radio)
  - [Select](#select)
  - [Simple list](#simple-list)
  - [Skip to content](#skip-to-content)
  - [Switch](#switch)
  - [Tabs](#tabs)
  - [Table](#table)
  - [Toolbar (previously Data toolbar)](#toolbar-(previously-data-toolbar))
  - [Tooltip](#tooltip)
  - [Wizard](#Wizard)
- [Layouts](#layouts)

### Global
#### Colors
We've updated colors to be ??? @mceledonia

#### Mobile first
We've made components mobile-first by using min-width rather than max-width. The components that are now mobile-first are: background image, data list, data toolbar, form, login, page, toolbar, and wizard. [(#2816)](https://github.com/patternfly/patternfly/pull/2816) (One component that cannot satisfy this is the table. At the mobile viewport, native/default properties are modified to achieve a grid based layout. To overwrite these changes would require adding back native properties to the table. For that reason, the table will remain the exception to a “mobile-first” approach.)

We've changed the breakpoint at which we hide the vertical nav to be 1200px [(#2962)](https://github.com/patternfly/patternfly/pull/2962) rather than 768px. The overall page chrome and some individual components' horizontal spacing becomes more compact at this breakpoint (true of the old breakpoint and the new), so applications may find that custom elements that aligned with the old page chrome may not align now since the chrome spacing changes at 1200px instead of 768px. An application may need to make updates to match the chrome's spacing at the new breakpoint.

#### Old shield styles
We've made shield styles optional by default [(#2872)](https://github.com/patternfly/patternfly/pull/2872). The "shield" styles were intended to help resolve styling issues when using PF3 and PF4 together, but shouldn't be necessary for most PF users and is causing issues (https://github.com/patternfly/patternfly/issues/2276 as an example) as PatternFly evolves. See the PR for more details.

#### Default font
We've updated the default font to be Red Hat instead of Overpass. To use the old font, use `.pf-m-overpass-font`.

#### Directory structure
We've cleaned up our root directory a little in [(#2960)](https://github.com/patternfly/patternfly/pull/2960). If you're compiling or importing more internal parts of PatternFly, you'll likely need to update your imports:
- `patternfly-common.css` to `base/patternfly-common.css`
- `patternfly-fa-icons.css` to `base/patternfly-fa-icons.css`
- `patternfly-fonts.css to` to `base/patternfly-fonts.css`
- `patternfly-globals.css` to `base/patternfly-globals.css`
- `patternfly-icons.css` to `base/patternfly-icons.css`
- `patternfly-pf-icons.css` to `base/patternfly-pf-icons.css`
- `patternfly-shield-inheritable.css` to `base/patternfly-shield-inheritable.css`
- `patternfly-shield-noninheritable.css` to `base/patternfly-shield-noninheritable.css`
- `patternfly-themes.css` to `base/patternfly-themes.css`
- `patternfly-variables.css` to `base/patternfly-variables.css`
- Removed `patternfly-imports.scss`

#### Code changes
Removed classes:
- `.pf-m-no-padding-mobile`
  - Instead, use new class `.pf-m-no-padding{-on-[breakpoint]}` which removes padding from the main page section at an optional breakpoint.
  - Instead, use new class `.pf-m-padding{-on-[breakpoint]}` which modifies the main page section to add padding back in at a specified breakpoint. Should be used with `.pf-mno-padding`.
- `.pf-m-redhat-font`
  - This is now the default.

Removed variables:
- `--pf-global--BackgroundColor--150`
- `--pf-global--BackgroundColor--300`
  - These can be updated to use `--pf-global--BackgroundColor--200`/`$pf-global--BackgroundColor--200` instead. However you might want to consult your visual designer first.
- All bootstrap variables [(#2871)](https://github.com/patternfly/patternfly/pull/2871)
  - These are no longer part of building the standard patternfly CSS. If you still need these, you can import `sass-utilities/bs-variables.scss` manually.
- `--pf-global--link--FontWeight` 
- `--pf-global--FontFamily--redhatfont--sans-serif`
- `--pf-global--FontFamily--redhatfont--heading--sans-serif`
- `--pf-global--FontFamily--redhatfont--monospace`
- `--pf-global--FontWeight--redhatfont--bold`
- `--pf-global--golden-ratio` and `$pf-global--golden-ratio`

Updated variables:
- `$pf-global--gutter` now has the value  `$pf-global--spacer--md`
- `$pf-global--gutter--md` now has the value `$pf-global--spacer--lg`
- `$pf-color-green-500` from `#467f40` to `#3e8635`
- `$pf-global--success-color--100` from `$pf-color-light-green-400` to `$pf-color-green-500`
- `$pf-global--success-color--200` from `$pf-color-light-green-600` to `$pf-color-green-700`
- `$pf-color-black-200` from `#ededed` to `#f0f0f0`
- `$pf-color-black-600` from `#737679` to `#6a6e73`
- `$pf-global--BackgroundColor--200` to `$pf-color-black-200`
- `$pf-color-blue-600` from `#004368` to `#002952 `
- `$pf-color-blue-700` from `#002235` to `#001223 `
- `$pf-color-cyan-600` from `#003d44` to `#002323`
- `$pf-color-cyan-700` from `#001f22` to `#000f0f `
- Update global shadows, add xl, update shadow utility [(#2854)](https://github.com/patternfly/patternfly/pull/2854)
- `$pf-color-blue-50` from `#def3ff` to `#e7f1fa`
- Added new cyan, gold, green, red colors [(#2906)](https://github.com/patternfly/patternfly/pull/2906)
- `$pf-color-green-50` to `#f3faf2`

### Components

Our components have seen many CSS variables changed, removed, and renamed. Removed and renamed variables may require changes to your CSS and HTML.

**Visual changes**
Many of our components have had spacing in and around them reduced. Components like Tabs have undergone visual breaking changes.

**Renamed and removed components**
- DataToolbar has been renamed to Toolbar.
- The old Toolbar layout has been removed in favor of PageHeaderTools.
- Expandable has been renamed to ExpandableSection

#### About modal box
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)

Removed classes:
- `.pf-m-hover`
  - The `:hover` selector still has styles applied to it.

#### Accordion
- Updated spacing, removed box shadow and shadow variation [(#2760)](https://github.com/patternfly/patternfly/pull/2760)
  - Reduces left/right padding on toggle and expanded content.
  - Removes the box shadow and outer top/bottom padding.
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Cleaned up vars [(#3016)](https://github.com/patternfly/patternfly/pull/3016)

Updated markup:
- Added `span.pf-c-accordion__toggle-icon` wrapper to toggle icon [(#2927)](https://github.com/patternfly/patternfly/pull/2927)

Removed classes:
- `.pf-m-no-box-shadow`
- `.pf-m-hover`
- `.pf-m-active`
- `.pf-m-focus`
  - The `:hover`, `:active` and `:focus` selectors still have styles applied to it.

Renamed variables:
- `--pf-c-accordion__toggle--BorderLeftColor` to `--pf-c-accordion__toggle--before--BackgroundColor`
- `--pf-c-accordion__toggle--m-expanded--BorderWidth` to `--pf-c-accordion__toggle--before--Width`
- `--pf-c-accordion__toggle--m-expanded--BorderLeftColor` to `--pf-c-accordion__toggle--m-expanded--before--BackgroundColor`
- `--pf-c-accordion__toggle-text--hover--Color` to `--pf-c-accordion__toggle--hover__toggle-text--Color`
- `--pf-c-accordion__toggle-text--active--Color` to `--pf-c-accordion__toggle--active__toggle-text--Color`
- `--pf-c-accordion__toggle-text--active--FontWeight` to `--pf-c-accordion__toggle--active__toggle-text--FontWeight`
- `--pf-c-accordion__toggle-text--focus--Color` to `--pf-c-accordion__toggle--focus__toggle-text--Color`
- `--pf-c-accordion__toggle-text--focus--FontWeight` to `--pf-c-accordion__toggle--focus__toggle-text--FontWeight`
- `--pf-c-accordion__toggle-text--expanded--Color` to `--pf-c-accordion__toggle--m-expanded__toggle-text--Color`
- `--pf-c-accordion__toggle-text--expanded--FontWeight` to `--pf-c-accordion__toggle--m-expanded__toggle-text--FontWeight`
- `--pf-c-accordion__expanded-content--BorderLeftColor` to `--pf-c-accordion__expanded-content-body--before--BackgroundColor`
- `--pf-c-accordion__expanded-content--m-expanded--BorderWidth` to `--pf-c-accordion__expanded-content-body--before--Width`
- `--pf-c-accordion__expanded-content--m-expanded--BorderLeftColor` to `--pf-c-accordion__expanded-content--m-expanded__expanded-content-body--before--BackgroundColor`
- `--pf-c-accordion__toggle--m-expanded__toggle-icon--Transform` to `--pf-c-accordion__toggle--m-expanded__toggle-icon--Rotate` 


Updated variables:
- `--pf-global--spacer--xl` to `--pf-global--spacer--md`

Removed variables:
- `--pf-c-accordion--BorderWidth`
- `--pf-c-accordion--BoxShadow`
- `--pf-c-accordion--PaddingTop`
- `--pf-c-accordion--PaddingBottom`
- `--pf-c-accordion__toggle-text--hover--FontWeight`
- `--pf-c-accordion__toggle-icon--LineHeight`


#### Alert
- Update styling for better accessibility [(#2921)](https://github.com/patternfly/patternfly/pull/2921)
  - The only action that should go in `.pf-c-alert__action` is the close button. All other actions should be in a new element with the class `pf-c-alert__action-group` that should be appended to `.pf-c-alert`

Renamed variables:
- `--pf-c-alert--grid-template-columns` to `--pf-c-alert--GridTemplateColumns`
- `--pf-c-alert__action--Transform` to `--pf-c-alert__action--TranslateY`

Updated variables:
- `$pf-global--info-color--100` from `$pf-color-blue-200` to  `$pf-color-blue-300`

Removed variables:
- `--pf-c-alert--grid-template-rows`
- `--pf-c-alert__icon--Padding`
- `--pf-c-alert__icon--BackgroundColor`
- `--pf-c-alert__title--FontSize`
- `--pf-c-alert__title--PaddingTop`
- `--pf-c-alert__title--PaddingRight`
- `--pf-c-alert__title--PaddingBottom`
- `--pf-c-alert__title--PaddingLeft`
- `--pf-c-alert__description--PaddingRight`
- `--pf-c-alert__description--PaddingBottom`
- `--pf-c-alert__description--PaddingLeft`
- `--pf-c-alert__description--MarginTop`
- `--pf-c-alert__action--PaddingTop`
- `--pf-c-alert__action--PaddingRight`
- `--pf-c-alert--m-success__icon--BackgroundColor`
- `--pf-c-alert--m-danger__icon--BackgroundColor`
- `--pf-c-alert--m-warning__icon--BackgroundColor`
- `--pf-c-alert--m-warning__icon--FontSize`
- `--pf-c-alert--m-info__icon--BackgroundColor`
- `--pf-c-alert--m-inline--BorderColor`
- `--pf-c-alert--m-inline--BorderStyle`
- `--pf-c-alert--m-inline--BorderTopWidth`
- `--pf-c-alert--m-inline--BorderRightWidth`
- `--pf-c-alert--m-inline--BorderBottomWidth`
- `--pf-c-alert--m-inline--BorderLeftWidth`
- `--pf-c-alert--m-inline--before--Width`
- `--pf-c-alert--m-inline--before--Top`
- `--pf-c-alert--m-inline--before--Bottom`
- `--pf-c-alert--m-inline--before--BackgroundColor`
- `--pf-c-alert--m-inline__icon--FontSize`
- `--pf-c-alert--m-inline__icon--Color`
- `--pf-c-alert--m-inline__icon--BackgroundColor`
- `--pf-c-alert--m-inline__icon--PaddingTop`
- `--pf-c-alert--m-inline__icon--PaddingRight`
- `--pf-c-alert--m-inline__icon--PaddingBottom`
- `--pf-c-alert--m-inline__icon--PaddingLeft`
- `--pf-c-alert--m-inline--m-warning__icon--FontSize`
- `--pf-c-alert--m-inline--m-success__icon--Color`
- `--pf-c-alert--m-inline--m-success--before--BackgroundColor`
- `--pf-c-alert--m-inline--m-danger__icon--Color`
- `--pf-c-alert--m-inline--m-danger--before--BackgroundColor`
- `--pf-c-alert--m-inline--m-warning__icon--Color`
- `--pf-c-alert--m-inline--m-warning--before--BackgroundColor`
- `--pf-c-alert--m-inline--m-info__icon--Color`
- `--pf-c-alert--m-inline--m-info--before--BackgroundColor`

#### Application launcher
- Applied external link icon class to icon wrapper [(#2904)](https://github.com/patternfly/patternfly/pull/2904)
- Removed separator in favor of divider component [(#2944)](https://github.com/patternfly/patternfly/pull/2944)
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Cleaned up variables [(#3012)](https://github.com/patternfly/patternfly/pull/3012)

Updated markup:
- Moves the class `.pf-c-app-launcher__menu-item-external-icon` from the external link icon itself to a `<span>` that wraps the external link icon. Any instances of the external link icon should be wrapped in a `<span>` and the `.pf-c-app-launcher__menu-item-external-icon` class should be moved from the icon to the `<span>`.

Removed classes:
- `.pf-c-app-launcher__separator`
- `.pf-m-hover`
- `.pf-m-active`
- `.pf-m-focus`
- `.pf-m-disabled`
  - The `:hover`, `:active`, `:focus`, and `:disabled` selectors still have styles applied to it.
- `--pf-c-app-launcher__group--PaddingTop`
- `--pf-c-app-launcher__group--first-child--PaddingTop`

Renamed variables:
- `--pf-c-app-launcher--m-top__menu--Transform` to `--pf-c-app-launcher--m-top__menu--TranslateY`
- `--pf-c-app-launcher__menu-item-external-icon--Transform` to `--pf-c-app-launcher__menu-item-external-icon--TranslateY`

Removed variables:
- `--pf-c-app-launcher__menu--BorderWidth`
- `--pf-c-app-launcher__separator--Height`
- `--pf-c-app-launcher__separator--BackgroundColor`
- `--pf-c-app-launcher__separator--MarginTop`
- `--pf-c-app-launcher__separator--MarginBottom`
- `--pf-c-app-launcher__separator--Height`

#### Backdrop
- Removed blur [(#3009)](https://github.com/patternfly/patternfly/pull/3009)

Renamed variables:
- `--pf-c-backdrop--Color` to `--pf-c-backdrop--BackgroundColor`

Removed variables:
- `--pf-c-backdrop--BackdropFilter`

#### Breadcrumb
- Added word-break, display link and icon inline, move divider [(#2916)](https://github.com/patternfly/patternfly/pull/2916)
  - The text will now break if there is a long string in an item link that is wider than the viewport
  - The divider is displayed before the link text, instead of after it.
  - The divider will also always appear inline with the item text instead of wrapping to a new line in some cases.
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)

Updated markup:
- Any reference to the divider element `.pf-c-breadcrumb__item-divider` will need to be moved in the markup to come before the breadcrumb link element `.pf-c-breadcrumb__link` instead of after it.

Removed classes:
- `.pf-m-hover`
  - The `:hover` selector still has styles applied to it.

Renamed variables:
- `--pf-c-breadcrumb__item-divider--MarginLeft` to `--pf-c-breadcrumb__item-divider--MarginRight`

Removed variables:
- `--pf-c-breadcrumb__item--FontWeight`
- `--pf-c-breadcrumb__link--FontWeight`

#### Button
- Adds the modifiers `.pf-mstart` and `.pf-mend` to position `pf-c-button__icon` in the button component depending on whether it comes before or after text. We made this change so that we could safely position the icon before or after text, without needing to introduce a new class that wraps the text. **If you are using a button with an icon, you will need to use one of these modifiers to style the icon .**
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Cleaned up vars [(#3028)](https://github.com/patternfly/patternfly/pull/3028)
- Updated control variation disabled state [(#3049)](https://github.com/patternfly/patternfly/pull/3049)

Removed classes:
- `.pf-c-button__text`
- `.pf-m-hover`
- `.pf-m-focus`
  - The `:hover` and `:focus` selectors still have styles applied to them.

Renamed variables:
- `--pf-c-button--BorderColor` to `--pf-c-button--after--BorderColor`
- `--pf-c-button--BorderWidth` to `--pf-c-button--after--BorderWidth`
- `--pf-c-button--hover--BorderWidth` to `--pf-c-button--hover--after--BorderWidth`
- ` --pf-c-button--focus--BorderWidth` to `--pf-c-button--focus--after--BorderWidth`
- `--pf-c-button--active--BorderWidth` to `--pf-c-button--active--after--BorderWidth`
- `--pf-c-button--disabled--BorderColor` to `--pf-c-button--disabled--after--BorderColor`
- `--pf-c-button--m-secondary--BorderColor` to `--pf-c-button--m-secondary--after--BorderColor`
- `--pf-c-button--m-secondary--hover--BorderColor` to `--pf-c-button--m-secondary--hover--after--BorderColor`
- `--pf-c-button--m-secondary--focus--BorderColor` to `--pf-c-button--m-secondary--focus--after--BorderColor`
- `--pf-c-button--m-secondary--active--BorderColor` to `--pf-c-button--m-secondary--active--after--BorderColor`
- `--pf-c-button--m-tertiary--BorderColor` to `--pf-c-button--m-tertiary--after--BorderColor`
- `--pf-c-button--m-tertiary--hover--BorderColor` to `--pf-c-button--m-tertiary--hover--after--BorderColor`
- `--pf-c-button--m-tertiary--focus--BorderColor` to `--pf-c-button--m-tertiary--focus--after--BorderColor`
- `--pf-c-button--m-tertiary--active--BorderColor` to `--pf-c-button--m-tertiary--active--after--BorderColor`
- `--pf-c-button--m-control--disabled--after--BorderTopColor`
- `--pf-c-button--m-control--disabled--after--BorderRightColor`
- `--pf-c-button--m-control--disabled--after--BorderBottomColor`
- `--pf-c-button--m-control--disabled--after--BorderLeftColor`

Removed variables:
- `--pf-c-button__icon--MarginRight`
- `--pf-c-button__text--icon--MarginLeft`

Updated classes:
- Link and Plain buttons now define `background-color: transparent` by default and on hover, focus, and active states.
- The control button now sets a white background and default text color for its normal, hover, focus, and active states.
  - As part of these button updates, the `:active` CSS selectors in the button component's stylesheet were moved after `:focus`, so that if the `:focus` and `:active` pseudo selectors declare styles on the same CSS properties for an element, the `:active` styles will now be visible when the element is `:active`. No changes are needed to consume this change, however any `:active` styles that may have been overridden by the `:focus` styles coming later in the stylesheet may now be visible.

#### Card
- Renamed vars, updated docs [(#2759)](https://github.com/patternfly/patternfly/pull/2759)
  - Renamed variables that were improperly named. Any reference to the old variable should simply be updated to reference the new variable.
- Moved __header to __title, __head to __header [(#3035)](https://github.com/patternfly/patternfly/pull/3035)

Updated markup:
- `.pf-c-card__header` has been renamed to `.pf-c-card__title`
  - `.pf-c-title` and the title size modifiers should be removed from `.pf-c-card__title`.
- `.pf-c-card__head` has been renamed to `.pf-c-card__header` 
- `.pf-c-card__head-main` has been renamed to `.pf-c-card__header-main`

Renamed variables:
- `--pf-c-card--m-compact__header--not-last-child--PaddingBottom` to `--pf-c-card--m-compact__header--not--last-child--PaddingBottom`
- `--pf-c-card__header--not-last-child--PaddingBottom` to `--pf-c-card__header--not--last-child--PaddingBottom`
- `--pf-c-card__header--not-last-child--PaddingBottom` to `--pf-c-card__header--not--last-child--PaddingBottom`
- `--pf-c-card--m-compact__header--not--last-child--PaddingBottom` to `--pf-c-card--m-compact__title--not--last-child--PaddingBottom`
- `--pf-c-card__header--FontFamily` to `--pf-c-card__title--FontFamily`
- `--pf-c-card__header--FontWeight` to `--pf-c-card__title--FontWeight`
- `--pf-c-card__header--not--last-child--PaddingBottom` to `--pf-c-card__title--not--last-child--PaddingBottom`
- `--pf-c-card__header--not--last-child--PaddingBottom` to `--pf-c-card__title--not--last-child--PaddingBottom`

#### Chip
- Refactor styles [(#2941)](https://github.com/patternfly/patternfly/pull/2941)
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Adjusted chip top/bottom padding, chip group margin in select [(#3079)](https://github.com/patternfly/patternfly/pull/3079)

Updated markup:
- The "x" icon in the close button changed from `fa-times-circle` to `fa-times`

Removed classes:
- `.pf-m-read-only`
  - Use the plain variant instead.
- `.pf-m-hover`
- `.pf-m-active`
- `.pf-m-focus`
  - The `:hover`, `:active` and `:focus` selectors still have styles applied to them.

Renamed variables:
- `--pf-c-chip--BorderColor` to `--pf-c-chip--before--BorderColor`
- `--pf-c-chip--BorderWidth` to `--pf-c-chip--before--BorderWidth`
- `--pf-c-chip--BorderRadius` to `--pf-c-chip--before--BorderRadius`
- `--pf-c-chip--m-overflow--c-button--hover--BorderColor` to `--pf-c-chip--m-overflow--hover--before--BorderColor`
- `--pf-c-chip--m-overflow--c-button--active--BorderColor` to `--pf-c-chip--m-overflow--active--before--BorderColor`
- `--pf-c-chip--m-overflow--c-button--focus--BorderColor` to `--pf-c-chip--m-overflow--focus--before--BorderColor`
- `--pf-c-chip--c-badge--MarginLeft` to `--pf-c-chip__c-badge--MarginLeft`

Removed variables:
- `--pf-c-chip--m-read-only--PaddingTop`
- `--pf-c-chip--m-read-only--PaddingRight`
- `--pf-c-chip--m-read-only--PaddingBottom`
- `--pf-c-chip--m-overflow--BackgroundColor`
- `--pf-c-chip--m-overflow--PaddingLeft`
- `--pf-c-chip--m-overflow--BorderWidth`
- `--pf-c-chip--m-overflow--c-button--BorderRadius`
- `--pf-c-chip--m-overflow--c-button--BorderWidth`
- `--pf-c-chip--m-overflow--c-button--PaddingLeft`
- `--pf-c-chip--m-overflow--c-button--PaddingRight`
- `--pf-c-chip--m-overflow--c-button--hover--BorderWidth`
- `--pf-c-chip--m-overflow--c-button--hover--BorderColor`
- `--pf-c-chip--m-overflow--c-button--active--BorderWidth`
- `--pf-c-chip--m-overflow--c-button--active--BorderColor`
- `--pf-c-chip--m-overflow--c-button--focus--BorderWidth`
- `--pf-c-chip--m-overflow--c-button--focus--BorderColor`
- `--pf-c-select__toggle-wrapper--c-chip--c-button--PaddingTop`
- `--pf-c-select__toggle-wrapper--c-chip--c-button--PaddingBottom`

Updated variables:
- `--pf-c-chip--BorderColor` from `var(--pf-global--secondary-color--100)` to `var(--pf-global--BorderColor--300)`

#### Chip group
- Clarify chip group behavior [(#2961)](https://github.com/patternfly/patternfly/pull/2961)
- No longer nests [(#3058)](https://github.com/patternfly/patternfly/pull/3058)

Updated markup:
- The outer `.pf-c-chip-group` element should now always be a `<div>`. All instances of `.pf-c-chip-group` should be updated to be a `<div>`.
- `.pf-c-chip-group__label` is now a `<span>` instead of a heading element.
- `.pf-c-chip-group__label` should have an `id` value that will be used as the value for `aria-labelledby` on the `ul.pf-c-chip-group__list` element.
- Since the text in `.pf-c-chip-group__label` is read to screen readers via `aria-labelledby` on the `pf-c-chip-group__list` element, `.pf-c-chip-group__label` should now also have `aria-hidden="true"`.
- The list of chips inside of a chip group should be wrapped in a `<ul>` with the class `pf-c-chip-group__list`. 
- `.pf-c-chip-group__list` should have a (redundant) `role="list"` assigned. This is needed for screen readers to announce the list properly.
- Chips inside of `.pf-c-chip-group__list` should each be wrapped with a `li.pf-c-chip-group__list-item` element. 
- Chips are now a `<div>` by default now. When used in a chip-group, `div.pf-c-chip` is a child of `ul.pf-c-chip-group__list > li.pf-c-chip-group__list-item`
- Plain chip groups (no label)
```pug
div.chip-group
  ul.chip-group-list[aria-label="foo"][role="list"]
    li.chip-group-list-item
       div.chip
```
- Chip groups with label
```pug
div.chip-group
  span.chip-group-title[aria-hidden="true"][id="foo"]
  ul.chip-group-list[aria-labelledby="foo"][role="list"]
    li.chip-0-list-item
       div.chip
    li.chip-group-list-item
       div.chip
```

Renamed classes:
- `.pf-mtoolbar` to `.pf-mcategory`

Renamed variables:
- `--pf-c-chip-group--m-toolbar-PaddingTop` to `--pf-c-chip-group--m-category--PaddingTop`
- `--pf-c-chip-group--m-toolbar-PaddingRight` to `--pf-c-chip-group--m-category--PaddingRight`
- `--pf-c-chip-group--m-toolbar-PaddingBottom` to `--pf-c-chip-group--m-category--PaddingBottom`
- `--pf-c-chip-group--m-toolbar-PaddingLeft` to `--pf-c-chip-group--m-category--PaddingLeft`
- `--pf-c-chip-group--m-toolbar-BorderRadius` to `--pf-c-chip-group--m-category--BorderRadius`
- `--pf-c-chip-group--m-toolbar--BackgroundColor` to `--pf-c-chip-group--m-category--BackgroundColor`
- `--pf-c-chip-group--MarginBottom` to `--pf-c-chip-group__list--MarginBottom`
- `--pf-c-chip-group__label--PaddingRight` to `--pf-c-chip-group__label--MarginRight`
- `--pf-c-chip-group__label--Maxwidth` to `--pf-c-chip-group__label--Maxwidth`
- `--pf-c-chip-group--c-chip--MarginRight` to `--pf-c-chip-group__list-item--MarginRight`
- `--pf-c-chip-group--c-chip--MarginBottom` to `--pf-c-chip-group__list-item--MarginBottom`

Removed variables:
- `--pf-c-chip--m-overflow--hover--before--BorderColor`
- `--pf-c-chip--m-overflow--active--before--BorderColor`
- `--pf-c-chip--m-overflow--focus--before--BorderColor`
- `--pf-c-chip--m-overflow--hover--before--BorderColor`
- `--pf-c-chip--m-overflow--active--before--BorderColor`
- `--pf-c-chip--m-overflow--focus--before--BorderColor`
- `--pf-c-chip-group--MarginRight`
- `--pf-c-chip-group--MarginBottom`
- `--pf-c-chip-group__li--m-toolbar--MarginRight`
- `--pf-c-chip-group__label--PaddingTop`
- `--pf-c-chip-group__label--PaddingBottom`
- `--pf-c-chip-group__label--PaddingLeft`

Updated variables:
- Changed max-width for `--pf-c-chip-group__label--Maxwidth` to 160px

#### Clipboard copy
- Replaced expandable box-shadow with border [(#2856)](https://github.com/patternfly/patternfly/pull/2856)
  - This change replaces the expandable content's box-shadow with a border and removes the transparent border around the expandable content box.
- Replaced copy button with button component [(#2922)](https://github.com/patternfly/patternfly/pull/2922)

Updated markup:
- Removes the elements with classes `.pf-c-clipboard-copy__group-toggle` and `.pf-c-clipboard-copy__group-copy`. All instances of these elements should be removed from your application and replaced with the button control component `.pf-c-button.pf-m-control`.

Renamed variables:
- `--pf-c-clipboard-copy__group-toggle-icon--Transition` to `--pf-c-clipboard-copy__toggle-icon--Transition`
- `--pf-c-clipboard-copy--m-expanded__group-toggle-icon--Transform` to `--pf-c-clipboard-copy--m-expanded__toggle-icon--Transform`
- `--pf-c-clipboard-copy--m-expanded__toggle-icon--Transform` to `--pf-c-clipboard-copy--m-expanded__toggle-icon--Rotate`

Removed variables:
- `--pf-c-clipboard-copy__expandable-content--BorderWidth`
- `--pf-c-clipboard-copy__expandable-content--BoxShadow`
- `--pf-c-clipboard-copy__group-toggle--PaddingRight`
- `--pf-c-clipboard-copy__group-toggle--PaddingLeft`
- `--pf-c-clipboard-copy__group-toggle--BorderWidth`
- `--pf-c-clipboard-copy__group-toggle--BorderTopColor`
- `--pf-c-clipboard-copy__group-toggle--BorderRightColor`
- `--pf-c-clipboard-copy__group-toggle--BorderBottomColor`
- `--pf-c-clipboard-copy__group-toggle--BorderLeftColor`
- `--pf-c-clipboard-copy__group-toggle--hover--BorderBottomColor`
- `--pf-c-clipboard-copy__group-toggle--active--BorderBottomWidth`
- `--pf-c-clipboard-copy__group-toggle--active--BorderBottomColor`
- `--pf-c-clipboard-copy__group-toggle--focus--BorderBottomWidth`
- `--pf-c-clipboard-copy__group-toggle--focus--BorderBottomColor`
- `--pf-c-clipboard-copy__group-toggle--m-expanded--BorderBottomWidth`
- `--pf-c-clipboard-copy__group-toggle--m-expanded--BorderBottomColor`
- `--pf-c-clipboard-copy__group-toggle--OutlineOffset`
- `--pf-c-clipboard-copy__group-copy--PaddingRight`
- `--pf-c-clipboard-copy__group-copy--PaddingLeft`
- `--pf-c-clipboard-copy__group-copy--BorderWidth`
- `--pf-c-clipboard-copy__group-copy--BorderTopColor`
- `--pf-c-clipboard-copy__group-copy--BorderRightColor`
- `--pf-c-clipboard-copy__group-copy--BorderBottomColor`
- `--pf-c-clipboard-copy__group-copy--BorderLeftColor`
- `--pf-c-clipboard-copy__group-copy--hover--BorderBottomColor`
- `--pf-c-clipboard-copy__group-copy--active--BorderBottomWidth`
- `--pf-c-clipboard-copy__group-copy--active--BorderBottomColor`
- `--pf-c-clipboard-copy__group-copy--focus--BorderBottomWidth`
- `--pf-c-clipboard-copy__group-copy--focus--BorderBottomColor`


#### Content
- Updated margin to NOT be on first-child or last-child [(#2930)](https://github.com/patternfly/patternfly/pull/2930)
  - If you are using `pf-c-content` in your application you may need to check to see if this change impacts the UI. 
  - The margin-bottom has been removed when the element is last-child for `<h1> - <h6>`
  - The margin-top has been removed from  `<ol>` and `<ul>`.

Removed variables:
- `--pf-c-content--blockquote--FontWeight`
- `--pf-c-content--small--FontWeight`
- `--pf-c-content--ol--MarginTop`
- `--pf-c-content--ul--MarginTop`

#### Context selector
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)

Updated markup:
- Added `span.pf-c-context-selector__toggle-icon` wrapper to toggle icon [(#2927)](https://github.com/patternfly/patternfly/pull/2927)

Removed classes:
- `.pf-m-hover`
- `.pf-m-focus`
- `.pf-mdisabled`
  - The `:hover`, `:active`, `:focus`, and `:disabled` selectors still have styles applied to them.

Renamed variables:
- `pf-c-context-selector__menu-input` to `pf-c-context-selector__menu-search`
- `pf-c-select__menu-input` to `pf-c-select__menu-search`
- `--pf-c-context-selector__menu-input--PaddingTop` to `--pf-c-context-selector__menu-search--PaddingTop`
- `--pf-c-context-selector__menu-input--PaddingRight` to `--pf-c-context-selector__menu-search--PaddingRight`
- `--pf-c-context-selector__menu-input--PaddingBottom` to `--pf-c-context-selector__menu-search--PaddingBottom`
-  `--pf-c-context-selector__menu-input--PaddingLeft` to `--pf-c-context-selector__menu-search--PaddingLeft`
- `--pf-c-context-selector__menu-input--BottomBorderColor` to `--pf-c-context-selector__menu-search--BorderBottomColor`
- `--pf-c-context-selector__menu-input--BottomBorderWidth` to `--pf-c-context-selector__menu-search--BorderBottomWidth`

Removed variables:
- `--pf-c-context-selector__menu--BorderWidth`

#### Data list
- Update compact font-size [(#2777)](https://github.com/patternfly/patternfly/pull/2777)
- Changed expanded content shadow to a border [(#2885)](https://github.com/patternfly/patternfly/pull/2885)
- Removed flex wrap for action button [(#2923)](https://github.com/patternfly/patternfly/pull/2923)
  - Removes `flex-wrap: wrap` from the data list actions. When the list of buttons get too long you should use the overflow menu to hide buttons, instead of flex-wrap, as we don't support this anymore.
- Fix shadows on selected rows [(#3068)](https://github.com/patternfly/patternfly/pull/3068)

Updated markup:
- The icon in the button in `.pf-c-data-list__toggle` should be wrapped with a new `<div>` with class `.pf-c-data-list__toggle-icon`.

Removed variables:
- `--pf-c-data-list__expandable-content--BoxShadow`
- `--pf-c-data-list__item--before--Height`
- `--pf-c-data-list__item-item--before--Height`
- `--pf-c-data-list__item-action--not-last-child--MarginBottom`
- `--pf-c-data-list--BackgroundColor`
- `--pf-c-data-list--BorderBottomColor`
- `--pf-c-data-list--BorderBottomWidth`
- `--pf-c-data-list__expandable-content--BorderRightWidth`
- `--pf-c-data-list__expandable-content--BorderBottomWidth`
- `--pf-c-data-list__expandable-content--BorderLeftWidth`
- `--pf-c-data-list__expandable-content--BorderRightColor`
- `--pf-c-data-list__expandable-content--BorderBottomColor`
- `--pf-c-data-list__expandable-content--BorderLeftColor`

Renamed variables:
- `--pf-c-data-list__item-content--PaddingBottom` to `--pf-c-data-list__item-content--md--PaddingBottom`
- `--pf-c-data-list__item-action--not-last-child--lg--MarginBottom` to `--pf-c-data-list__item-action--not-last-child--MarginBottom`
- `--pf-c-data-list__expandable-content--md--MaxHeight` to `--pf-c-data-list__expandable-content--MaxHeight`
- `--pf-c-data-list__item-content--PaddingBottom` to `--pf-c-data-list__item-content--md--PaddingBottom`
- `--pf-c-data-list__item--m-expanded__expandable-content--BorderTopWidth` to `--pf-c-data-list__expandable-content--BorderTopWidth`
- `--pf-c-data-list__item-item--BorderTopColor` to `--pf-c-data-list__item--item--BorderBottomColor`
- `--pf-c-data-list__item-item--BorderTopWidth` to `--pf-c-data-list__item--item--BorderBottomWidth`
- `--pf-c-data-list__item--hover--item--BorderTopColor` to `--pf-c-data-list__item--m-selectable--hover__item--BorderTopColor`
- `--pf-c-data-list__item--hover--item--BorderTopWidth` to `--pf-c-data-list__item--m-selectable--hover__item--BorderTopWidth`
- `--pf-c-data-list__item-item--sm--BorderTopWidth` to `--pf-c-data-list__item--item--sm--BorderBottomWidth`
- `--pf-c-data-list__item-item--sm--BorderTopColor` to `--pf-c-data-list__item--item--sm--BorderBottomColor`
- `--pf-c-data-list__item-item--before--Top` to `--pf-c-data-list__item--item--before--Top`
- `--pf-c-data-list__cell-cell--PaddingTop` to `--pf-c-data-list__cell--cell--PaddingTop`
- `--pf-c-data-list__cell-cell--md--PaddingTop` to `--pf-c-data-list__cell--cell--md--PaddingTop`
- `--pf-c-data-list__cell-cell--MarginRight` to `--pf-c-data-list__cell--MarginRight`
- `--pf-c-data-list__item--m-expanded__toggle--c-button-icon--Transform` to `--pf-c-data-list__item--m-expanded__toggle-icon--Transform`
- `--pf-c-data-list--m-compact__cell-cell--MarginRight` to `--pf-c-data-list--m-compact__cell--cell--MarginRight`
- `--pf-c-data-list__item--m-expanded__toggle-icon--Transform` to `--pf-c-data-list__item--m-expanded__toggle-icon--Rotate`
- `--pf-c-data-list__item--item--BorderBottomColor` to `--pf-c-data-list__item--BorderBottomColor`
- `--pf-c-data-list__item--item--BorderBottomWidth` to `--pf-c-data-list__item--BorderBottomWidth`
- `--pf-c-data-list__item--m-selectable--hover__item--BorderTopColor` to - `--pf-c-data-list__item--m-selectable--hover--item--BorderTopColor`
- `--pf-c-data-list__item--m-selectable--hover__item--BorderTopWidth` to - `--pf-c-data-list__item--m-selectable--hover--item--BorderTopWidth`
- `--pf-c-data-list__item--item--sm--BorderBottomWidth` to - `--pf-c-data-list__item--sm--BorderBottomWidth`
- `--pf-c-data-list__item--item--sm--BorderBottomColor` to - `--pf-c-data-list__item--sm--BorderBottomColor`
- `--pf-c-data-list__item--item--before--Top` to `--pf-c-data-list__item--before--sm--Top`

Updated variables:
- Compact data-list font-size to `--pf-global--FontSize--sm`

#### Drawer
- Removed m-border, enabled m-no-border on inline/static [(#2887)](https://github.com/patternfly/patternfly/pull/2887)

Removed classes:
- `.pf-m-border`
  - When the panel overlays content, a shadow should always be used instead of a border

#### Dropdown
- Removed separator in favor of divider component [(#2944)](https://github.com/patternfly/patternfly/pull/2944)
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Cleaned up vars [(#3020)](https://github.com/patternfly/patternfly/pull/3020)

Removed classes:
- `.pf-c-dropdown__separator`
- `.pf-m-hover`
- `.pf-m-focus`
  - The `:hover` and `:focus` selectors still have styles applied to them.

Renamed variables:
- `--pf-c-dropdown__c-divider--MarginTop` to `--pf-c-dropdown--c-divider--MarginTop`
- `--pf-c-dropdown__c-divider--MarginBottom` to `--pf-c-dropdown--c-divider--MarginBottom`
- `--pf-c-dropdown__toggle--BorderWidth` to `--pf-c-dropdown__toggle--before--BorderWidth`
- `--pf-c-dropdown__toggle--BorderTopColor` to `--pf-c-dropdown__toggle--before--BorderTopColor`
- `--pf-c-dropdown__toggle--BorderRightColor` to `--pf-c-dropdown__toggle--before--BorderRightColor`
- `--pf-c-dropdown__toggle--BorderBottomColor` to `--pf-c-dropdown__toggle--before--BorderBottomColor`
- `--pf-c-dropdown__toggle--BorderLeftColor` to `--pf-c-dropdown__toggle--before--BorderLeftColor`
- `--pf-c-dropdown__toggle--hover--BorderBottomColor` to `--pf-c-dropdown__toggle--hover--before--BorderBottomColor`
- `--pf-c-dropdown__toggle--active--BorderBottomWidth` to `--pf-c-dropdown__toggle--active--before--BorderBottomWidth`
- `--pf-c-dropdown__toggle--active--BorderBottomColor` to `--pf-c-dropdown__toggle--active--before--BorderBottomColor`
- `--pf-c-dropdown__toggle--focus--BorderBottomWidth` to `--pf-c-dropdown__toggle--focus--before--BorderBottomWidth`
- `--pf-c-dropdown__toggle--focus--BorderBottomColor` to `--pf-c-dropdown__toggle--focus--before--BorderBottomColor`
- `--pf-c-dropdown__toggle--expanded--BorderBottomWidth` to `--pf-c-dropdown--m-expanded__toggle--before--BorderBottomWidth`
- `--pf-c-dropdown__toggle--expanded--BorderBottomColor` to `--pf-c-dropdown--m-expanded__toggle--before--BorderBottomColor`
- `--pf-c-dropdown__toggle--m-split-button__toggle-check__input--Transform` to `--pf-c-dropdown__toggle--m-split-button__toggle-check__input--TranslateY`
- `--pf-c-dropdown--m-top--m-expanded__toggle-icon--Transform` to `--pf-c-dropdown--m-top--m-expanded__toggle-icon--Rotate`
- `--pf-c-dropdown--m-top__menu--Transform` to `--pf-c-dropdown--m-top__menu--TranslateY`

Removed variables:
- `--pf-c-dropdown__menu--BorderWidth`
- `--pf-c-dropdown__separator--Height`
- `--pf-c-dropdown__separator--BackgroundColor`
- `--pf-c-dropdown__separator--MarginTop`
- `--pf-c-dropdown__separator--MarginBottom`
- `--pf-c-dropdown__toggle--m-plain--BorderColor`
- `--pf-c-dropdown__group--PaddingTop`
- `--pf-c-dropdown__group--first-child--PaddingTop`

#### Empty state
- Center content, fix vars, adjust secondary margin [(#2866)](https://github.com/patternfly/patternfly/pull/2866)
  - Introduces a new element `.pf-c-empty-state__content` that wraps the contents of the empty state content. The `max-width` used for the size variations applies to `.pf-c-empty-state__content` instead of `.pf-c-empty-state`, and `.pf-c-empty-state__content` is centered horizontally and vertically in its parent, reducing the need for using a `.pf-l-bullseye` layout to center empty state content. The bullseye layout can be removed from the empty state if it is being used to center the empty state horizontally, though there is likely no harm in leaving it.
    - Adds `--pf-c-empty-state__content--MaxWidth` that is overridden with `.pf-m-sm` and `.pf-m-lg` via `--pf-c-empty-state--m-sm__content--MaxWidth` and `--pf-c-empty-state--m-lg__content--MaxWidth`
    - Adds a `.pf-m-full-height` variation to `.pf-c-empty-state` for use when the empty state component should be centered vertically in a container, and the empty state does not already consume the height of its container.
  - Adjusts the left/right spacing on buttons in the secondary actions container so that instead of using a `margin-right` to space the buttons, we use a `margin-left` and `margin-right`, which allows us to get rid of the negative right margin on the secondary actions container. All direct children of the secondary actions container are now styled instead of just `.pf-c-button` elements.
    - Adds `--pf-c-empty-state__secondary--child--MarginLeft`. The margin between secondary actions is now calculated from `--pf-c-empty-state__secondary--child--MarginLeft` and `--pf-c-empty-state__secondary--child--MarginRight` between adjacent buttons.
- Split single padding var to top/right/bottom/left [(#3092)](https://github.com/patternfly/patternfly/pull/3092)

Removed variables:
- `--pf-c-empty-state__secondary--MarginRight`
  - This was just to offset the right margin on buttons in the `__secondary` container and is no longer necessary.
- `--pf-c-empty-state--Padding`
  - To change outer padding, use `--pf-c-empty-state--PaddingTop`, `--pf-c-empty-state--PaddingRight`, `--pf-c-empty-state--PaddingBottom`, and `--pf-c-empty-state--PaddingLeft` instead.

Renamed variables
- `--pf-c-empty-state__secondary__c-button--MarginRight` to `--pf-c-empty-state__secondary--child--MarginRight`
- `--pf-c-empty-state__secondary__c-button--MarginBottom` to `--pf-c-empty-state__secondary--child--MarginBottom`
- `--pf-c-empty-state--c-button--MarginTop` to `--pf-c-empty-state__primary--MarginTop`
- `--pf-c-empty-state--c-button__secondary--MarginTop` to `--pf-c-empty-state__primary--secondary--MarginTop`

#### Expandable section (previously Expandable)
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)

Updated markup:
- Added `span.pf-c-expandable-section__toggle-icon` wrapper to toggle icon [(#2927)](https://github.com/patternfly/patternfly/pull/2927)
- Text is now wrapped in a `<span>` with class `.pf-c-expandable-section__toggle-text`

Removed classes:
- `.pf-m-hover`
- `.pf-m-active`
- `.pf-m-focus`
  - The `:hover`, `:active` and `:focus` selectors still have styles applied to them.

Renamed variables:
- `--pf-c-expandable-section--m-expanded__toggle-icon--Transform` to `--pf-c-expandable-section--m-expanded__toggle-icon--Rotate`

Removed variables:
- `--pf-c-expandable-section__toggle--FontWeight`
- `--pf-c-expandable-section__toggle-icon--MarginRight`

#### File upload
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)

Removed clases:
- `.pf-mdisabled`
  - The `:disabled` selector will still have styles applied to it

Removed variables:
- `--pf-c-file-upload__file-select__c-button--m-control--disabled--BackgroundColor`
- `--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderTopColor`
- `--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderRightColor`
- `--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderBottomColor`
- `--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderLeftColor`
- `--pf-c-file-upload__file-select__c-button--m-control--disabled--after--BorderWidth`

#### Form
- Enabled success/invalid states for readonly controls [(#2753)](https://github.com/patternfly/patternfly/pull/2753).
  - Instead of styling the shorthand `background` to add the status icon for the success and invalid states, we're now styling the individual background properties that need to change. As result, the `background` property declarations that were used to add the status icons and their associated variables have been removed.
- Refactored label/control sections, added label help [(#2766)](https://github.com/patternfly/patternfly/pull/2766)
  - This PR adds 2 new elements used for the overall form layout. These elements are the main sections that make up a `.pf-c-form__group`.
  - `.pf-c-form__group-label` - defines the label section of the form. Anything that is above the form control element(s) in a stacked form, and to the left of form control element(s) in a horizontal form. Primarily this will hold the `.pf-c-form__label`. Also as a change introduced in this PR, it will hold the field level help element `.pf-c-form__label-help`.
    - All `.pf-c-label` and any other elements that should be grouped with the label should now be wrapped in `.pf-c-form__group-label`
  - `.pf-c-form__group-control` - defines the control section of the form. This is where form control elements are placed. It will hold the form elements and form element helper text.
    - All form control elements (`.pf-c-form-control`, `.pf-c-check`, `.pf-c-radio`, etc ) should be wrapped in a single `.pf-c-form__group-control` element per form group.
  - The following modifiers have moved from one element to another. Any reference to them should be moved from the old element to the new element
    - `.pf-m-no-padding-top` has moved from `.pf-c-form__label` to `.pf-c-form__group-label`
    - `.pf-m-inline` has been moved from `.pf-c-form__group` to `.pf-c-form__group-control`
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)

Removed classes:
- `.pf-m-border`
- `.pf-c-form__section`

Removed variables:

- `--pf-c-form__label--Color`
- `--pf-c-form__label--FontWeight`
- `--pf-c-form__group--MarginLeft`
- `--pf-c-form--m-horizontal--md__group--GridTemplateColumns`
  - This was used to define the label and form control column widths in horizontal forms. You can now modify the label column width via `--pf-c-form--m-horizontal__group-label--md--GridColumnWidth` and the form control column width via `--pf-c-form--m-horizontal__group-label--md--GridColumnWidth`

Renamed variables:
- `--pf-c-form--m-inline--MarginRight` to `--pf-c-form__group-control--m-inline--child--MarginRight`
- `--pf-c-form--m-error--Color` to `--pf-c-form__helper-text--m-error--Color`
- `--pf-c-form--m-success--Color` to `--pf-c-form__helper-text--m-success--Color`

#### Form control

Removed classes:
- `.pf-m-hover`
- `.pf-m-focus`
  - The `:hover` and `:focus` selectors still have styles applied to them.

Renamed variables:
- `--pf-c-form-control--readonly--focus--BackgroundColor` to `--pf-c-form-control--readonly--BackgroundColor`

Removed variables:
- `--pf-c-form-control--success--check--Background`
- `--pf-c-form-control--success--Background`
- `--pf-c-form-control__select--arrow--Background`
- `--pf-c-form-control__select--Background`
- `--pf-c-form-control__select--invalid--Background`
- `--pf-c-form-control__select--success--Background`

#### Input group
- Removed legacy button styles [(#2935)](https://github.com/patternfly/patternfly/pull/2935)
  - We recommend using the `.pf-m-control` variation of the button component instead

Removed variables:
- `--pf-c-input-group--BorderRadius`
- `--pf-c-input-group--c-button--BorderRadius`


#### Label
- Refactored content and icons [(#2943)](https://github.com/patternfly/patternfly/pull/2943)
  - The label can also be used as an `<a>` element in the case that it is a link.
  - There is a `.pf-m-outline` variation available as an alternate design.
  - You can choose from `.pf-m-[blue/green/orange/red/purple/cyan]` as colors for the label.

Updated markup:
- `.pf-c-label__content` child that contains the label text and an optional `.pf-c-label__icon` wrapper for an icon that is displayed to the left of the text.
- You add an optional `.pf-c-button.pf-m-plain` element as the last child of the label as a close button.

Removed classes:
- `.pf-m-compact`

#### Login
- Moved helper text icon from login to form component [(#2928)](https://github.com/patternfly/patternfly/pull/2928)
  - The `.pf-c-form__helper-text-icon` styles have moved from the login component stylesheet to the form component stylesheet. If you're overriding any of these using the `.pf-c-login` component selector, you will need to update the selector to `.pf-c-form`.

Renamed variables:
- `--pf-c-login__header--sm--PaddingLeft` to `--pf-c-login__header--PaddingLeft`
- `--pf-c-login__header--sm--PaddingRight` to `--pf-c-login__header--PaddingRight`
- `--pf-c-login__main--xl--MarginBottom` to `--pf-c-login__main--MarginBottom`
- `--pf-c-login__footer--sm--PaddingLeft` to `--pf-c-login__footer--PaddingLeft`
- `--pf-c-login__footer--sm--PaddingRight` to `--pf-c-login__footer--PaddingRight`
- `--pf-c-login__main-body--c-form__helper-text-icon--FontSize` to `--pf-c-form__helper-text-icon--FontSize`
- `--pf-c-login__main-body--c-form__helper-text-icon--MarginRight` to `--pf-c-form__helper-text-icon--MarginRight`

Removed variables:
- `--pf-c-page__main-section--m-no-padding-mobile--md--PaddingTop`
- `--pf-c-page__main-section--m-no-padding-mobile--md--PaddingRight`
- `--pf-c-page__main-section--m-no-padding-mobile--md--PaddingBottom`
- `--pf-c-page__main-section--m-no-padding-mobile--md--PaddingLeft`


#### Modal box
- Reduced spacing [(#2761)](https://github.com/patternfly/patternfly/pull/2761)
- Changes box shadow from lg to xl [(#2859)](https://github.com/patternfly/patternfly/pull/2859)
- Left-aligned footer actions by default [(#2881)](https://github.com/patternfly/patternfly/pull/2881)
- Added title, moved padding from container to elements [(#2969)](https://github.com/patternfly/patternfly/pull/2969)
- Added __header element [(#3084)](https://github.com/patternfly/patternfly/pull/3084)

Updated markup:
- Any instance of `.pf-c-title` in the modal that serves as the modal title should be replaced with `.pf-c-modal-box__title`
- All instances of `.pf-c-modal-box__title` and `.pf-c-modal-box__description` should be wrapped in `.pf-c-modal-box__header`

Removed classes:
- `.pf-m-align-left` (this is now the default)

Removed variables:
- `--pf-c-modal-box--BorderColor`
- `--pf-c-modal-box--BorderSize`
- `--pf-c-modal-box__footer__c-button--first-of-type--MarginLeft`
- `--pf-c-modal-box--PaddingTop`
  - This can now be achieved using `--pf-c-modal-box__[modal element]--PaddingTop`, however it's important to note that this variable changes depending on the markup present in the modal, so this variable serves multiple purpopses. And it will need to be modified for each child of the modal component that touches the top edge of the modal.
- `--pf-c-modal-box--PaddingRight`
  - This can now be achieved using `--pf-c-modal-box__[modal element]--PaddingRight`. However it will need to be modified for each child of the modal component that touches the right edge of the modal.
- `--pf-c-modal-box--PaddingBottom`
  - This can now be achieved using `--pf-c-modal-box__[modal element]--last-child--PaddingBottom`. However it will need to be modified for each child of the modal component that touches the bottom edge of the modal.
- `--pf-c-modal-box--PaddingLeft`
  - This can now be achieved using `--pf-c-modal-box__[modal element]--PaddingLeft`. However it will need to be modified for each child of the modal component that touches the left edge of the modal.
- `--pf-c-modal-box__description--PaddingRight`
- `--pf-c-modal-box__description--PaddingLeft`
- `--pf-c-modal-box__description--last-child--PaddingBottom`
- `--pf-c-modal-box__description--body--PaddingTop`

Renamed variables
- `--pf-c-modal-box--body--MinHeight` to `--pf-c-modal-box__body--MinHeight`
- `--pf-c-modal-box__c-title--description--MarginTop` to `--pf-c-modal-box__title--description--PaddingTop`
- `--pf-c-modal-box__description--body--MarginTop` to `--pf-c-modal-box__description--body--PaddingTop`
- `--pf-c-modal-box--c-title--body--MarginTop` to `--pf-c-modal-box__title--body--PaddingTop`
- `--pf-c-modal-box__footer--MarginTop` to `--pf-c-modal-box__footer--PaddingTop`
- `--pf-c-modal-box__title--PaddingTop` to `--pf-c-modal-box__header--PaddingTop`
- `--pf-c-modal-box__title--PaddingRight` to `--pf-c-modal-box__header--PaddingRight`
- `--pf-c-modal-box__title--PaddingLeft` to `--pf-c-modal-box__header--PaddingLeft`
- `--pf-c-modal-box__title--last-child--PaddingBottom` to `--pf-c-modal-box__header--last-child--PaddingBottom`
- `--pf-c-modal-box__title--body--PaddingTop` to `--pf-c-modal-box__header--body--PaddingTop`

Updated variables:
- top/bottom/left/right padding from `--pf-global--spacer--xl` to `--pf-global--spacer--lg`
- space between title and description from `--pf-global--spacer--sm` to `--pf-global--spacer--xs`
- space between description and body from `--pf-global--spacer--lg` to `--pf-global--spacer--md`
- space between title and body from `--pf-global--spacer--lg` to `--pf-global--spacer--md`
- space above footer from `--pf-global--spacer--xl` to `--pf-global--spacer--lg`

#### Nav
- Refactored vertical nav CSS structure [(#2884)](https://github.com/patternfly/patternfly/pull/2884)
  - Applies stylistic updates to css variables rather than redefining component elements.
- Updated nav buttons to be inline [(#2942)](https://github.com/patternfly/patternfly/pull/2942)
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Updated nav to dark theme [(#2978)](https://github.com/patternfly/patternfly/pull/2978)
  - Adds `.pf-m-horizontal` as a modifier to `.pf-c-nav` for horizontal nav variations. For the horizontal masthead and horizontal tertiary nav variations, the `.pf-c-nav` component now needs the `.pf-m-horizontal` modifier class.
- Made `nav__list` a flex parent [(#3006)](https://github.com/patternfly/patternfly/pull/3006)
  - Adds `display: flex; flex-direction: column;` to `.pf-c-nav__list`. If applications have custom CSS for `.pf-c-nav__list`, the spacing and behavior may change with this update.
- Removed __simple-list, added support for -m-horizontal/-m-tertiary at root [(#3062)](https://github.com/patternfly/patternfly/pull/3062)

Updated markup:
- The icon in `.pf-c-nav__toggle` should be wrapped in a new element with class `.pf-c-nav__toggle-icon`

Removed classes:
- `.pf-m-start`
- `.pf-m-end`
  - Instead of applying `.pf-m-start` and `.pf-m-end` when there is overflow on a particular end of the nav, if there is any overflow on any end, apply the class `.pf-m-scrollable` to `.pf-c-nav`.
- `.pf-m-hover`
- `.pf-m-active`
- `.pf-m-focus`
  - The `:hover`, `:active` and `:focus` selectors still have styles applied to them.
- `.pf-m-dark`
  - This is now the default. To continue using the light nav, use `.pf-m-light` instead.
- `.pf-c-nav__simple-list`
- `.pf-c-nav__horizontal-list`
- `.pf-c-nav__tertiary-list`
  - Replaced by `.pf-c-nav__list`

Renamed variables:
- `--pf-c-nav__c-nested-component--Property` to `--pf-c-nav--c-nested-component--Property`
- `--pf-c-nav__toggle--Transition` to `--pf-c-nav__toggle-icon--Transition`
- `--m-dark` to `--m-light`
- `--pf-c-nav__item--m-expanded__toggle-icon--Transform` to `--pf-c-nav__item--m-expanded__toggle-icon--Rotate`
- `--pf-c-nav__horizontal-list__link--Color` to `--pf-c-nav--m-horizontal__link--Color` and `--pf-c-nav__tertiary-list__link--Color` to `--pf-c-nav--m-tertiary__link--Color`
  - The list of changes is too long to list here, so please reference the [file changeset](https://github.com/patternfly/patternfly/pull/3062/files) for a full list of the changes.
- `--pf-c-nav__horizontal-list__link` to `--pf-c-nav--m-horizontal__link` in all instances
- `--pf-c-nav__tertiary-list__link` to `--pf-c-nav--m-tertiary__link` in all instances
- `--pf-c-nav--subnav__simple-list` to `--pf-c-nav__subnav__link` in all instances

Removed variables:
- `--pf-c-nav__scroll-button--Display`
- `--pf-c-nav__scroll-button--Visibility`
- `--pf-c-nav__scroll-button--ZIndex`
- `--pf-c-nav__scroll-button--Height`
- `--pf-c-nav__scroll-button--lg--Height`
- `--pf-c-nav__scroll-button--PaddingRight`
- `--pf-c-nav__scroll-button--PaddingLeft`
- `--pf-c-nav__scroll-button--nth-of-type-1--BoxShadow`
- `--pf-c-nav__scroll-button--nth-of-type-2--BoxShadow`
- `--pf-c-nav__scroll-button--m-dark--nth-of-type-1--BoxShadow`
- `--pf-c-nav__scroll-button--m-dark--nth-of-type-2--BoxShadow`
- `--pf-c-page__header-nav--lg--MarginRight`
- `--pf-c-page__header-nav--lg--MarginLeft`
- `--pf-c-page__header-nav--c-nav__scroll-button--nth-of-type-1--Left`
- `--pf-c-page__header-nav--c-nav__scroll-button--nth-of-type-1--md--Left`
- `--pf-c-page__header-nav--c-nav__scroll-button--nth-of-type-1--lg--Left`
- `--pf-c-page__header-nav--c-nav__scroll-button--lg--BackgroundColor`
- `--pf-c-page__header-nav--c-nav__scroll-button--lg--Top`
- `--pf-c-page__main-nav--c-nav__scroll-button--nth-of-type-1--Left`
- `--pf-c-page__main-nav--c-nav__scroll-button--nth-of-type-1--md--Left`
- `--pf-c-page__main-nav--c-nav__scroll-button--nth-of-type-2--Right`
- `--pf-c-page__main-nav--c-nav__scroll-button--nth-of-type-2--md--Right`
- `--pf-c-nav__horizontal-list__link--FontWeight`
- `--pf-c-nav__tertiary-list__link--FontWeight`
- `--pf-c-nav__tertiary-list__scroll-button--before--BorderColor`
- `--pf-c-nav__tertiary-list__scroll-button--disabled--before--BorderColor`
- `--pf-c-nav__toggle-icon--Transform`
- `--pf-c-nav__scroll-button--lg--Height`
- `--pf-c-nav__scroll-button--Height`
- `--pf-c-nav__horizontal-list__link--lg--PaddingBottom`
- `--pf-c-nav__horizontal-list__link--lg--PaddingTop`
- `--pf-c-nav__item--m-expanded__toggle--Transform`

#### Notification drawer

Renamed variables:
- `--pf-c-notification-drawer__group--m-expanded__group-toggle-icon--Transform` to `--pf-c-notification-drawer__group--m-expanded__group-toggle-icon--Rotate`

#### Options menu
- Added color declaration to menu items [(#2938)](https://github.com/patternfly/patternfly/pull/2938)
  - Added a `color` declaration for `.pf-c-options-menu__menu-item` items so that the color will always match the default text color (`--pf-global--Color--100)`. Since this wasn't defined previously, if applications were using `<a>` elements as menu items, the item color would have been the default blue link color.
- Removed separator in favor of divider component [(#2944)](https://github.com/patternfly/patternfly/pull/2944)
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Cleaned up vars [(#3018)](https://github.com/patternfly/patternfly/pull/3018)

Updated markup:
- Added `div.pf-c-options-menu__menu-item-icon` wrapper to menu item icon [(#2927)](https://github.com/patternfly/patternfly/pull/2927)
- Added `div.pf-c-options-menu__toggle-icon` wrapper to toggle icon [(#2927)](https://github.com/patternfly/patternfly/pull/2927)
- The icon in `.pf-c-options-menu__toggle-button` should be wrapped in a new `<span>` with class `.pf-c-options-menu__toggle-button-icon`

Removed classes:
- `.pf-c-options-menu__separator`
- `.pf-m-hover`
- `.pf-m-active`
- `.pf-m-focus`
  - The `:hover`, `:active` and `:focus` selectors still have styles applied to them.

Renamed variables:
- `--pf-c-options-menu__c-divider--MarginTop` to `--pf-c-options-menu--c-divider--MarginTop`
- `--pf-c-options-menu__c-divider--MarginBottom` to `--pf-c-options-menu--c-divider--MarginBottom`
- `--pf-c-options-menu__toggle--Background` to `--pf-c-options-menu__toggle--BackgroundColor`
- `--pf-c-options-menu__toggle-button--Background` to `--pf-c-options-menu__toggle-button--BackgroundColor`
- `--pf-c-options-menu__menu-item--Background` to `--pf-c-options-menu__menu-item--BackgroundColor`
- `--pf-c-options-menu--m-top--m-expanded__toggle-icon--Transform` to `--pf-c-options-menu--m-top--m-expanded__toggle-icon--Rotate`
- `--pf-c-options-menu--m-top__menu--Transform` to `--pf-c-options-menu--m-top__menu--TranslateY`

Removed variables:
- `--pf-c-options-menu__menu--BorderWidth`
- `--pf-c-options-menu__separator--Height`
- `--pf-c-options-menu__separator--BackgroundColor`
- `--pf-c-options-menu__separator--MarginTop`
- `--pf-c-options-menu__separator--MarginBottom`

#### Page
- Reduced spacing between tertiary nav, breadcrumbs, main section [(#2837)](https://github.com/patternfly/patternfly/pull/2837). Also reduced the space between the breadcrumb section and page section that is below it to `var(--pf-global--spacer--md)`
- Updated page and page header background colors [(#2883)](https://github.com/patternfly/patternfly/pull/2883)
- Cleaned up vars [(#3066)](https://github.com/patternfly/patternfly/pull/3066)
- Removed pf-m-mobile/icon/user, added hidden/visible [(#3091)](https://github.com/patternfly/patternfly/pull/3091)
- Moved masthead selected button mod to header-tools-item [(#3109)](https://github.com/patternfly/patternfly/pull/3109)
  - Moved the `.pf-m-selected` class in the masthead toolbar from the `.pf-c-button` component to the `.pf-c-page__header-tools-item` element. 

Updated markup:
- Adds `.pf-c-page__header-tools-item`, as a child of `.pf-c-page__header-tools-group` to wrap header tools items. All items should now be wrapped in `.pf-c-page__header-tools-item`.
  - `.pf-c-page__header-tools-group` is required as a parent of `.pf-c-page__header-tools-item`
- Removed the classes `.pf-m-icon`, `.pf-m-mobile`, and `.pf-m-user`, which were classes that allowed responsive hiding/showing of toolbar elements. These classes have been removed. Any reference to them should be removed.
- Adds `.pf-m-hidden[-on-{breakpoint}]` and `.pf-m-visible[-on-{breakpoint}]` that can be applied to `pf-c-page__header-tools-[item/group]`. These classes replace `.pf-m-[icon/mobile/user]` for hiding/showing header tools items and groups.
- Any instance of `.pf-m-selected` on a `.pf-c-button` in the masthead should be moved to its containing `.pf-c-page__header-tools-item` element.

Removed variables
- `--pf-c-page__header-tools--MarginTop: var(--pf-global--spacer--sm)`
- `--pf-c-page__header-tools--MarginBottom: var(--pf-global--spacer--sm)`
- `--pf-c-page__main-nav--PaddingBottom`
- `--pf-c-page__main-breadcrumb--md--PaddingTop`
- `--pf-c-page__main-nav--main-breadcrumb--PaddingTop`
- `--pf-c-page__header-sidebar-toggle__c-button--xl--MarginLeft`

Renamed variables:
- `--pf-c-page__sidebar--Transform` to two variables: `--pf-c-page__sidebar--TranslateX`and `--pf-c-page__sidebar--TranslateZ`
- `--pf-c-page__sidebar--m-expanded--Transform` to `--pf-c-page__sidebar--m-expanded--TranslateX`
- `--pf-c-page__sidebar--xl--Transform` to `--pf-c-page__sidebar--xl--TranslateX`

Updated variables:
- Changes `--pf-c-page--BackgroundColor` from `--pf-global--BackgroundColor--dark-100` to `--pf-global--BackgroundColor--light-300`
- Adds a background-color of `--pf-global--BackgroundColor--dark-100` to `.pf-c-page__header`

#### Pagination
- Removed options menu per page text styling [(#3047)](https://github.com/patternfly/patternfly/pull/3047)
- Updated bottom pagination design [(#3050)](https://github.com/patternfly/patternfly/pull/3050)
  - On mobile viewports, the bottom pagination now spans the width of the parent container and is "sticky" to the bottom of the viewport and will remain at the bottom of the viewport as content above it scrolls. This behavior can be disabled by applying `.pf-m-static` to the `.pf-c-pagination` component.

Updated markup:
- The buttons used in `.pf-c-pagination__nav` are now individually wrapped with `div.pf-c-pagination__nav-control`, and this new element has modifiers `.pf-m-first`, `.pf-m-prev`, `.pf-m-next`, and `.pf-m-last` to indicate the first, previous, next, and last buttons. The "first" button should now be wrapped in `<div class="pf-c-pagination__nav-control pf-m-first">// first button</div>`, the "next" wrapped in `<div class="pf-c-pagination__nav-control pf-m-next">// next button</div>`, and so on.
- Since the pagination now spans the width of it's parent container on mobile, it should not be used in a toolbar, and the bottom pagination should be placed directly after the element the pagination is for (data-list, table, etc).

Removed classes:
- `.pf-c-pagination__menu-text`

Renamed classes:
- `.pf-m-footer` to `.pf-m-bottom` to align with React

Renamed variables:
- `--pf-c-pagination__nav--c-button--PaddingLeft` to `--pf-c-pagination__nav-control--c-button--PaddingLeft`
- `--pf-c-pagination__nav--c-button--PaddingRight` to `--pf-c-pagination__nav-control--c-button--PaddingRight`
- `--pf-c-pagination__nav--c-button--FontSize` to `--pf-c-pagination__nav-control--c-button--FontSize`
- `--pf-c-pagination--m-compact__nav--c-button--MarginLeft` to `--pf-c-pagination--m-compact__nav-control--nav-control--MarginLeft`


Removed variables:
- `--pf-c-pagination__menu-text--PaddingLeft`
- `--pf-c-pagination__menu-text--FontSize`
- `--pf-c-pagination__menu-text--Color`

#### Popover
- Reduced spacing [(#2762)](https://github.com/patternfly/patternfly/pull/2762)
  - Title component size changes from `.pf-mxl` to `.pf-mmd`. You will need to change the title component variation used in the popover component from `.pf-mxl` to `.pf-mmd`

Renamed variables:
- `--pf-c-popover__arrow--m-top--Transform` split into `--pf-c-popover__arrow--m-top--TranslateX` and `--pf-c-popover__arrow--m-top--TranslateY` and `--pf-c-popover__arrow--m-top--Rotate`
- `--pf-c-popover__arrow--m-right--Transform` split into `--pf-c-popover__arrow--m-right--TranslateX` and `--pf-c-popover__arrow--m-right--TranslateY` and `--pf-c-popover__arrow--m-right--Rotate`
- `--pf-c-popover__arrow--m-bottom--Transform` split into `--pf-c-popover__arrow--m-bottom--TranslateX` and `--pf-c-popover__arrow--m-bottom--TranslateY` and `--pf-c-popover__arrow--m-bottom--Rotate`
- `--pf-c-popover__arrow--m-left--Transform` split into `--pf-c-popover__arrow--m-left--TranslateX` and `--pf-c-popover__arrow--m-left--TranslateY` and `--pf-c-popover__arrow--m-left--Rotate`

Updated variables:
- Top/right/bottom/left padding changed from `--pf-global--spacer--xl` to `--pf-global--spacer--md`
- Increased right padding of element displayed to the left of the close button to make more room for the close button. That padding changed from `--pf-global--spacer--xl` to `--pf-global--spacer--2xl`
- Popover's `font-size` to `--pf-global--FontSize--sm`
- Space below title changed from `--pf-global--spacer--md` to `--pf-global--spacer--sm`
- Space above footer changed from `--pf-global--spacer--lg` to `--pf-global--spacer--md`

#### Radio
- Fixed radio left margin overflow, error in selector [(#2799)](https://github.com/patternfly/patternfly/pull/2799) by adding a `1px` left margin to a radio component's input element when it comes before the label.
- Fixed issue where radio is cut off when comes after label [(#2912)](https://github.com/patternfly/patternfly/pull/2912)
  - Adds a `1px` right margin to a radio component's input element when it comes after the label.

#### Select
- Removed separator in favor of divider component [(#2944)](https://github.com/patternfly/patternfly/pull/2944)
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Cleaned up vars [(#3019)](https://github.com/patternfly/patternfly/pull/3019)

Updated markup:
- Added `span.pf-c-select__menu-item-icon` wrapper to menu item icon [(#2927)](https://github.com/patternfly/patternfly/pull/2927)
- Added `span.pf-c-select__toggle-arrow` wrapper to toggle icon [(#2927)](https://github.com/patternfly/patternfly/pull/2927)

Removed classes:
- `.pf-c-select__separator`
- `.pf-m-hover`
- `.pf-m-active`
- `.pf-m-focus`
  - The `:hover`, `:active` and `:focus` selectors still have styles applied to them.

Renamed variables:
- `--pf-c-select__menu-input--PaddingTop` to `--pf-c-select__menu-search--PaddingTop`
- `--pf-c-select__menu-input--PaddingRight` to `--pf-c-select__menu-search--PaddingRight`
- `--pf-c-select__menu-input--PaddingBottom` to `--pf-c-select__menu-search--PaddingBottom`
- `--pf-c-select__menu-input--PaddingLeft` to `--pf-c-select__menu-search--PaddingLeft`
- `--pf-c-select__toggle--BorderWidth` to `--pf-c-select__toggle--before--BorderWidth`
- `--pf-c-select__toggle--BorderTopColor` to `--pf-c-select__toggle--before--BorderTopColor`
- `--pf-c-select__toggle--BorderRightColor` to `--pf-c-select__toggle--before--BorderRightColor`
-  `--pf-c-select__toggle--BorderBottomColor` to `--pf-c-select__toggle--before--BorderBottomColor`
- `--pf-c-select__toggle--BorderLeftColor` to `--pf-c-select__toggle--before--BorderLeftColor`
- `--pf-c-select__toggle--hover--BorderBottomColor` to `--pf-c-select__toggle--hover--before--BorderBottomColor`
- `--pf-c-select__toggle--active--BorderBottomColor` to `--pf-c-select__toggle--active--before--BorderBottomColor`
- `--pf-c-select__toggle--expanded--BorderBottomColor` to `--pf-c-select__toggle--m-expanded--before--BorderBottomColor`
- `--pf-c-select__toggle--active--BorderBottomWidth` to `--pf-c-select__toggle--active--before--BorderBottomWidth`
- `--pf-c-select__toggle--expanded--BorderBottomWidth` to `--pf-c-select__toggle--m-expanded--before--BorderBottomWidth`
- `--pf-c-select__toggle-typeahead-form--MinWidth` to `--pf-c-select__toggle-typeahead--MinWidth`
- `--pf-c-select__toggle-typeahead--active--PaddingBottom` to `--pf-c-select__toggle-typeahead--focus--PaddingBottom`
- `--pf-c-select__toggle-button--PaddingLeft` to `--pf-c-select__toggle-clear--toggle-button--PaddingLeft`
- `--pf-c-select__toggle-arrow--m-top--m-expanded__toggle-arrow--Transform` to `--pf-c-select__toggle-arrow--m-top--m-expanded__toggle-arrow--Rotate`
- `--pf-c-select__menu--m-top--Transform` to `--pf-c-select__menu--m-top--TranslateY`
- `--pf-c-select__menu-item-icon--Transform` to `--pf-c-select__menu-item-icon--TranslateY`

Removed variables:
- `--pf-c-select__menu--BorderWidth`
- `--pf-c-select__separator--Height`
- `--pf-c-select__separator--BackgroundColor`
- `--pf-c-select__separator--MarginTop`
- `--pf-c-select__separator--MarginBottom`
- `--pf-c-select__toggle--m-plain--BorderColor`
- `--pf-c-select__toggle--m-plain--Color`
- `--pf-c-select__toggle--m-plain--hover--Color`
- `--pf-c-select__toggle-wrapper--m-typeahead--PaddingTop`


#### Simple list
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)

Removed classes:
- `.pf-m-hover`
- `.pf-m-active`
- `.pf-m-focus`
  - The `:hover`, `:active` and `:focus` selectors still have styles applied to them.

#### Skip to content
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)

Removed classes:
- `.pf-m-focus`
  - The `:focus` selector still has styles applied to it.

#### Switch
- Cleaned up vars [(#3026)](https://github.com/patternfly/patternfly/pull/3026)

Renamed variables:
- `--pf-c-switch--Width` to `--pf-c-switch__toggle--Width`
- `--pf-c-switch__input--checked__toggle--before--Transform` to `--pf-c-switch__input--checked__toggle--before--TranslateX`

Removed variables:
- `--pf-c-switch__toggle-icon--PaddingLeft`
- `--pf-c-switch__toggle-icon--Top`
- `--pf-c-switch__toggle-icon--Transform`
- `--pf-c-switch__label--FontSize`
- `--pf-c-switch__label--FontWeight`
- `--pf-c-switch__label--LineHeight`

#### Tabs
- Updated to new tab design [(#2757)](https://github.com/patternfly/patternfly/pull/2757)
  - Scroll buttons are inline with items rather than positioned absolutely in front of tab list
- Updated class name for tabs button to be tabs link [(#2919)](https://github.com/patternfly/patternfly/pull/2919)
- Fixed tab focus [(#3095)](https://github.com/patternfly/patternfly/pull/3095)
  - Updated tab `:focus` and `:active` states to reflect hover state. Resized the tab `::after` pseudo element to not consume the entirety of the button. 

Renamed classes:
- `pf-c-tabs__button` to `pf-c-tabs__link`

Renamed variables:
- Updates any tabs CSS variable with a reference to the BEM element `__button` to `__link`. Any references to tabs variables with `__button` should be replaced with `__link`. (e.g. `--pf-c-tabs--m-box__button--BackgroundColor` becomes `--pf-c-tabs--m-box__link--BackgroundColor`)
- `--pf-c-tabs--Inset` to `--pf-c-tabs--inset`
- `--pf-c-tabs--before--BorderWidth` to `--pf-c-tabs--before--border-width--base`
- `--pf-c-tabs--m-vertical--Inset` to `--pf-c-tabs--m-vertical--inset`
- `--pf-c-tabs--m-vertical--m-box--Inset` to `--pf-c-tabs--m-vertical--m-box--inset`
- `--pf-c-tabs__item--m-current__link--Background` to `--pf-c-tabs__item--m-current__link--BackgroundColor`
- `--pf-c-tabs__link--before--BorderColor` to `--pf-c-tabs__link--before--border-color--base`
- `--pf-c-tabs__link--before--BorderWidth` to `--pf-c-tabs__link--before--border-width--base`
- `--pf-c-tabs__scroll-button--Transition` was removed and users can control the individual transform durations via `--pf-c-tabs__scroll-button--TransitionDuration--margin`, `--pf-c-tabs__scroll-button--TransitionDuration--transform`, and `--pf-c-tabs__scroll-button--TransitionDuration--opacity`
- `--pf-c-tabs__scroll-button--before--BorderWidth` to `--pf-c-tabs__scroll-button--before--border-width--base`


Removed variables:
- `--pf-c-tabs__item--hover--Color`
- `--pf-c-tabs__button--FontWeight`
- `--pf-c-tabs__button--Background`
- `--pf-c-tabs__scroll-button--ZIndex`
- `--pf-c-tabs__scroll-button--m-secondary--hover--Color`
- `--pf-c-tabs__scroll-button--m-secondary-right--m-start-current--Color`
- `--pf-c-tabs__scroll-button--m-secondary--nth-of-type-1--BoxShadow`
- `--pf-c-tabs__scroll-button--m-secondary--nth-of-type-2--BoxShadow`
- `--pf-c-tabs__item--BackgroundColor`
- `--pf-c-tabs__item--BorderColor`
- `--pf-c-tabs__item--BorderWidth`
- `--pf-c-tabs__item--m-current--ZIndex`
- `--pf-c-tabs__item--m-current--Color`
- `--pf-c-tabs__item--m-current--BorderTopWidth`
- `.pf-m-start`
- `.pf-m-end`
- `.pf-m-start-current`
- `.pf-m-end-current`
- `--pf-c-tabs--before--BorderStyle`
- `--pf-c-tabs__link--before--BorderStyle`
- `--pf-c-tabs__link--after--BorderStyle`
- `--pf-c-tabs__scroll-button--BorderStyle`
- `--pf-c-tabs__link--child--MarginRight`
- `--pf-c-tabs--m-vertical--m-box__link--after--Top`

Updated variables:
- `--pf-c-tabs__button--Color` to `var(--pf-global--Color--200)`
- `--pf-c-tabs__button--OutlineOffset` to `calc(-1 * #{pf-size-prem(6px)})`
- `--pf-c-tabs__button--PaddingRight` to `var(--pf-global--spacer--md)`
- `--pf-c-tabs__button--PaddingLeft` to `var(--pf-global--spacer--md)`
- `--pf-c-tabs__scroll-button--Width` to `var(--pf-global--spacer--2xl)`

#### Table
- Reduced spacing [(#2775)](https://github.com/patternfly/patternfly/pull/2775)
- Replaced expanded content box shadow with border [(#2861)](https://github.com/patternfly/patternfly/pull/2861)
- Fixed td wrapping by adding to overflow-wrap [(#2868)](https://github.com/patternfly/patternfly/pull/2868)
  - This change addresses aggressive table cell text wrapping. Changes `td { word-break: break-word; }` to `tr > - { overflow-wrap: break-word; }`
- Fixed borders, row height, and focus [(#2965)](https://github.com/patternfly/patternfly/pull/2965)
- Updated min-width vars, removed unused [(#3074)](https://github.com/patternfly/patternfly/pull/3074)
- Moved borders to ::after [(#3113)](https://github.com/patternfly/patternfly/pull/3113)
  - Updated `.pf-c-table` borders to use `::after` pseudos to draw borders, rather than `::before` pseudo selectors.

Updated markup:
- The icon in the button in `.pf-c-table__toggle` should be wrapped with a new element with class `.pf-c-table__toggle-icon`

Removed classes:
- `.pf-m-height-auto`
- `--pf-c-table__expandable-row--before--BorderRightWidth`

Renamed variables:
- `--pf-c-table--FontWeight` to `--pf-c-table-cell--FontWeight`
- `--pf-c-table-cell--` to `--pf-c-table--cell--`
- `--pf-c-table--m-compact-cell--` to `--pf-c-table--m-compact--cell--`
- `--pf-c-table__expandable-row--before--BackgroundColor` to `--pf-c-table__expandable-row--before--BorderColor`
- `--pf-c-table__expandable-row--before--Width` to `--pf-c-table__expandable-row--before--BorderWidth`
- `--pf-c-table__sort-indicator--hover--Color` to `--pf-c-table__sort__button--hover__sort-indicator--Color`
- `--pf-c-table__toggle--m-expanded__icon--Transform` to `--pf-c-table__toggle--m-expanded__icon--Rotate`
- `--pf-c-table__toggle--c-button__toggle-icon--Transform` to `--pf-c-table__toggle--c-button__toggle-icon--Rotate`
- `--pf-c-table__toggle--c-button--m-expanded__toggle-icon--Transform` to `--pf-c-table__toggle--c-button--m-expanded__toggle-icon--Rotate`
- `--pf-c-table-tbody--responsive—BorderWidth` to `--pf-c-table--tbody--responsive--border-width--base`
- `--pf-c-table--tbody--after—BorderWidth` to `--pf-c-table--tbody--after--border-width—base`
- `--pf-c-table-tr--responsive—BorderWidth` to `--pf-c-table-tr--responsive--border-width—base`
- `--pf-c-table-tr--responsive--last-child—BorderWidth` to `--pf-c-table-tr--responsive--last-child—BorderBottomWidth`
- `--pf-c-table-tbody--responsive—BorderWidth` to `--pf-c-table-tbody--responsive--border-width--base`
- `--pf-c-table-tr--responsive—BorderWidth` to `--pf-c-table-tr--responsive--border-width--base`
- `--pf-c-table--BorderWidth` to `--pf-c-table--border-width--base`
- `--pf-c-table__expandable-row--before--Top` to `--pf-c-table__expandable-row--after--Top`
- `--pf-c-table__expandable-row--before--Bottom` to `--pf-c-table__expandable-row--after--Bottom`
- `--pf-c-table__expandable-row--before--BorderWidth` to `--pf-c-table__expandable-row--after--border-width--base`
- `--pf-c-table__expandable-row--before--BorderLeftWidth` to `--pf-c-table__expandable-row--after--BorderLeftWidth`
- `--pf-c-table__expandable-row--before--BorderColor` to `--pf-c-table__expandable-row--after--BorderColor`
- `--pf-c-table__compound-expansion-toggle__button--before--BorderWidth` to `--pf-c-table__compound-expansion-toggle__button--before--border-width--base`
- `--pf-c-table__compound-expansion-toggle__button--after--BorderWidth` to `--pf-c-table__compound-expansion-toggle__button--after--border-width--base`
- `--pf-c-table-cell-th--responsive--PaddingTop` to `--pf-c-table--cell--first-child--responsive--PaddingTop`


Removed variables:
- `--pf-c-table__expandable-row--m-expanded--BoxShadow`
- `--pf-c-table__expandable-row--before--ZIndex`
- `--pf-c-table-cell--FontWeight`
- `--pf-c-table__sort--c-button--Color`
- `--pf-c-table__sort-indicator--LineHeight`
- `--pf-c-table__compound-expansion-toggle--BorderTop--BorderWidth`
- `--pf-c-table__compound-expansion-toggle--BorderTop--BorderColor`
- `--pf-c-table__compound-expansion-toggle--BorderRight--BorderWidth`
- `--pf-c-table__compound-expansion-toggle--BorderLeft--BorderWidth`
- `--pf-c-table__compound-expansion-toggle--BorderRight--BorderColor`
- `--pf-c-table__compound-expansion-toggle--BorderLeft--BorderColor`
- `--pf-c-table__compound-expansion-toggle--BorderBottom--BorderWidth`
- `--pf-c-table__compound-expansion-toggle--BorderBottom--BorderColor`
- `--pf-c-table__sort--sorted--Color`
- `--pf-c-table--thead--cell--Width`

Updated variables:
- Changed compact table's header spacing from `--pf-global--spacer--md` top and bottom padding to `calc(var(--pf-global--spacer--sm) + var(--pf-global--spacer--xs))` top padding and `var(--pf-global--spacer--sm)` bottom padding.
- Changed compact table's responsive/grid spacers. All values changed from the default table's responsive spacers:
  - `<tr>` top/bottom padding to `var(--pf-global--spacer--sm)`
  - `<td>` top/bottom padding to `var(--pf-global--spacer--xs)`
  - `.pf-c-table__action` top/bottom margin set to `calc(var(--pf-global--spacer--xs) - -1);` to better align in the grid layout.
  - The expandable row toggle button's (`.pf-c-table__toggle .pf-c-button`) bottom margin set to`calc(#{pf-size-prem(6px)} - -1);` to reduce gap between toggle and expandable row content.

#### Toolbar (previously Data toolbar)
- Removed separator in favor of divider component [(#2944)](https://github.com/patternfly/patternfly/pull/2944)

Removed classes:
- `.pf-c-data-toolbar__item.pf-m-separator`

Removed variables:
- `--pf-c-data-toolbar__item--m-separator--spacer`
- `--pf-c-data-toolbar__item--m-separator--BackgroundColor`
- `--pf-c-data-toolbar__item--m-separator--Width`
- `--pf-c-data-toolbar__item--m-separator--Height`

#### Tooltip
- Reduced spacing [(#2763)](https://github.com/patternfly/patternfly/pull/2763)
- Adds medium box shadow to the tooltip component [(#2855)](https://github.com/patternfly/patternfly/pull/2855)

Renamed variables:
- `--pf-c-tooltip__arrow--m-top--Transform` split into  `--pf-c-tooltip__arrow--m-top--TranslateX` and `--pf-c-tooltip__arrow--m-top--TranslateY` and `--pf-c-tooltip__arrow--m-top--Rotate`
- `--pf-c-tooltip__arrow--m-right--Transform` split into `--pf-c-tooltip__arrow--m-right--TranslateX` and `--pf-c-tooltip__arrow--m-right--TranslateY` and `--pf-c-tooltip__arrow--m-right--Rotate`
- `--pf-c-tooltip__arrow--m-bottom--Transform` split into `--pf-c-tooltip__arrow--m-bottom--TranslateX` and `--pf-c-tooltip__arrow--m-bottom--TranslateY` and `--pf-c-tooltip__arrow--m-bottom--Rotate`
- `--pf-c-tooltip__arrow--m-left--Transform` split into `--pf-c-tooltip__arrow--m-left--TranslateX` and `--pf-c-tooltip__arrow--m-left--TranslateY` and `--pf-c-tooltip__arrow--m-left--Rotate`

Updated variables:
- Top and bottom padding changed from `--pf-global--spacer--md` to `--pf-global--spacer--sm`
- Left and right padding changed from `--pf-global--spacer--lg` to `--pf-global--spacer--md`

#### Wizard
- Updates to shadows and borders [(#2860)](https://github.com/patternfly/patternfly/pull/2860)
- Move padding modifier to body [(#2924)](https://github.com/patternfly/patternfly/pull/2924)
  - Moves `.pf-mno-padding` from `.pf-c-wizard__main` to `.pf-c-wizard__main-body` . The same styling will occur to the wizard main body. If you want to remove padding in the wizard main body you should add `.pf-mno-padding` to `.pf-c-wizard__main-body` now.
- Made desktop nav 250px, remove compact modifier [(#2936)](https://github.com/patternfly/patternfly/pull/2936)
- Reworked wizard so it can be used in modal [(#2964)](https://github.com/patternfly/patternfly/pull/2964)
  - Removed the "modal" functionality/layout from the wizard and makes it a normal container that fills the space of the element it is placed inside of.
- Removed hover active focus and disabled from workspace [(#2975)](https://github.com/patternfly/patternfly/pull/2975)
- Cleaned up vars [(#3013)](https://github.com/patternfly/patternfly/pull/3013)

Updated markup:
- Added `span.pf-c-wizard__toggle` wrapper to toggle icon [(#2927)](https://github.com/patternfly/patternfly/pull/2927)
- When using the wizard in a modal, simply omit all of the element children of the modal component, and place the `.pf-c-wizard` component as the direct and only child of `.pf-c-modal-box`.

Removed classes:
- `.pf-m-compact-nav`
  - This is now the default
- `.pf-m-full-width`
  - This is now the default
- `.pf-m-full-height`
  - This is now the default
- `.pf-m-in-page`
  - This is now the default
- `.pf-m-hover`
- `.pf-m-focus`
  - The `:hover` and `:focus` selectors still have styles applied to them.
- `--pf-c-wizard__toggle-icon--MarginTop`

Renamed variables:
- `--pf-c-wizard__close--lg--Right` to `--pf-c-wizard__close--xl--Right`
- `--pf-c-wizard__main-body--lg--PaddingTop` to `--pf-c-wizard__main-body--xl--PaddingTop`
- `--pf-c-wizard__main-body--lg--PaddingRight` to `--pf-c-wizard__main-body--xl--PaddingRight`
- `--pf-c-wizard__main-body--lg--PaddingBottom` to `--pf-c-wizard__main-body--xl--PaddingBottom`
- `--pf-c-wizard__main-body--lg--PaddingLeft` to `--pf-c-wizard__main-body--xl--PaddingLeft`
- `--pf-c-wizard__footer--lg--PaddingTop` to `--pf-c-wizard__footer--xl--PaddingTop`
- `--pf-c-wizard__footer--lg--PaddingRight` to `--pf-c-wizard__footer--xl--PaddingRight`
- `--pf-c-wizard__footer--lg--PaddingBottom` to `--pf-c-wizard__footer--xl--PaddingBottom`
- `--pf-c-wizard__footer--lg--PaddingLeft` to `--pf-c-wizard__footer--xl--PaddingLeft`
- `--pf-c-wizard__nav-link--before--Transform` to `--pf-c-wizard__nav-link--before--TranslateX`
- `--pf-c-wizard__toggle--m-expanded__toggle-icon--Transform` to `--pf-c-wizard__toggle--m-expanded__toggle-icon--Rotate`

Removed variables:
- `--pf-c-wizard__nav--lg--BoxShadow`
- `--pf-c-wizard--m-in-page__nav--lg--BoxShadow`
- `--pf-c-wizard--m-in-page__nav--lg--BorderRightWidth`
- `--pf-c-wizard--m-in-page__nav--lg--BorderRightColor`
- `--pf-c-wizard--m-compact-nav__nav--lg--Width`
- `--pf-c-wizard--m-in-page__nav--lg--Width`
- `--pf-c-wizard--BoxShadow`
- `--pf-c-wizard--Width`
- `--pf-c-wizard--lg--Width`
- `--pf-c-wizard--lg--MaxWidth`
- `--pf-c-wizard--lg--Height`
- `--pf-c-wizard--lg--MaxHeight`
- `--pf-c-wizard--m-full-width--lg--MaxWidth`
- `--pf-c-wizard--m-full-height--lg--Height`
- `--pf-c-wizard--m-in-page--BoxShadow`
- `--pf-c-wizard--m-in-page--Height`
- `--pf-c-wizard--m-in-page--Width`
- `--pf-c-wizard--m-in-page--lg--MaxWidth`
- `--pf-c-wizard--m-in-page--lg--MaxHeight`
- `--pf-c-wizard--m-in-page__nav-list--md--PaddingLeft`
- `--pf-c-wizard--m-in-page__nav-list--xl--PaddingLeft`
- `--pf-c-wizard--m-in-page__main-body--md--PaddingTop`
- `--pf-c-wizard--m-in-page__main-body--md--PaddingRight`
- `--pf-c-wizard--m-in-page__main-body--md--PaddingBottom`
- `--pf-c-wizard--m-in-page__main-body--md--PaddingLeft`
- `--pf-c-wizard--m-in-page__main-body--xl--PaddingRight`
- `--pf-c-wizard--m-in-page__main-body--xl--PaddingLeft`
- `--pf-c-wizard--m-in-page__footer--md--PaddingTop`
- `--pf-c-wizard--m-in-page__footer--md--PaddingRight`
- `--pf-c-wizard--m-in-page__footer--md--PaddingBottom`
- `--pf-c-wizard--m-in-page__footer--md--PaddingLeft`
- `--pf-c-wizard--m-in-page__footer--xl--PaddingRight`
- `--pf-c-wizard--m-in-page__footer--xl--PaddingLeft`

Updated variables:
- Changes wizard box shadow from lg to xl
- Removes box shadow from mobile nav toggle when expanded, replaces with border
- Replaces desktop nav box shadow with border
- `--pf-c-wizard__nav--lg--Width` from 300px to 250px on desktop

### Layouts
- Update gutters in patternfly layouts (gallery, grid, level, split, stack) to have a single gutter instead of responsive, so the gutter is always 16px, instead of being 16px on mobile and 24px on desktop. No futher changes are needed to consume this update, though applications may find that custom elements that may have aligned with the spacing at the old breakpoint no longer align. [(#2962)](https://github.com/patternfly/patternfly/pull/2962)
