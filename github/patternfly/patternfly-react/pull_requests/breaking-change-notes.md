## feat(react-core): bump core and fix build [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
**Button:** Remove isHover and isFocus props, all instances of them should be removed from your application.
**Chip:** Remove isReadOnly prop, all instances of it should be removed from your application.
**Dropdown:** Remove isHover and isFocus props from Toggle, KebabToggle, and DropdownToggle. All instances of them should be removed from your application.
**Select:**
- Remove isFocus prop from SelectOption, all instances of it should be removed from your application.
- Remove isFocus and isHovered props from SelectToggle, all instances of them should be removed from your application.

**Expandable:**
- Rename component to ExpandableSection, all instances in your application should be renamed.
- Remove isFocus and isHovered props from ExpandableSection, all instances of them should be removed from your application.

**Label:** Remove isCompact prop from Label, all instances of it should be removed from your application.
**Options menu:** Remove isFocused and isHovered prop from OptionsMenuToggle and OptionsMenuToggleWithText, all instances of it should be removed from your application.
**Context selector:** Remove isHover prop from ContextSelectorItem. Remove isHovered and isFocused props from ContextSelectorToggle. All instances of these should be removed from your application.
**Nav:** Change default theme to dark. Use theme="light" if you wish to use the light variant.
**Skip to content:** Remove component prop in favor of anchor tag, all instances of it should be removed from your application.
**Datatoolbar:** Remove separator variant, all instances of it should be removed from your application.
**Wizard:** Remove isFullHeight and isFullWidth props, all instances of them should be removed from your application.
**Page:** Change default theme to dark. Use theme="light" if you wish to use the light variant.

## perf(packages): Use tsc instead of babel for build [(#4076)](https://github.com/patternfly/patternfly-react/pull/4076)
**ALL packages:**

- We no longer support UMD builds for individual packages. Consider using our [react-core.umd.js bundle](https://unpkg.com/@patternfly/react-core@3/dist/umd/react-core.umd.js) instead.
- We no longer define `propTypes` for our components. Consider using our Typescript types under each packages' `dist/js` folder instead.

## feat(react-inline-edit-extension): convert to TS [(#4073)](https://github.com/patternfly/patternfly-react/pull/4073)
### @patternfly/react-virtualized-extension
- Many types have been added and amended while converting this project to TS.

## chore(EmptyStateIcon): Remove unused props interface from EmptyStateIcon [(#4065)](https://github.com/patternfly/patternfly-react/pull/4065)
Removed IconSize and IconProps from EmptyStateIcon. 

### react-core

**Empty state:** Removed IconSize and IconProps from EmptyStateIcon. Pass a custom `icon` instead.

Closes #3336

## refactor(Wizard): Update string props to be React nodes. [(#4063)](https://github.com/patternfly/patternfly-react/pull/4063)
1.  `WizardNavItem`: Renamed prop `text` to `content`.  The type of the prop has been changed to React.ReactNode to allow for flexibility.

## feat(react-tokens): unify react-token generation [(#4058)](https://github.com/patternfly/patternfly-react/pull/4058)
### react-tokens
- Some of our tokens have had their values updated to be correct.
- New files with a different structure have been added to the index.

## Feat(Dropdown): add image & plain text support [(#4038)](https://github.com/patternfly/patternfly-react/pull/4038)
* `iconComponent` prop in `DropdownToggle` has been renamed to `toggleIndicator`, replace instances of `iconComponent` with `toggleIndicator`.

## fix(popover): update default popover header size [(#4030)](https://github.com/patternfly/patternfly-react/pull/4030)
1. **Popover**: PopoverHeader title now has a default size of medium. Extra large is no longer the default size.

## Remove promoted components from experimental index file [(#4029)](https://github.com/patternfly/patternfly-react/pull/4029)
If you were importing beta components like this: 
`‘import { Divider } from @patternfly/react-core/dist/esm/experimental’;` or 
`'import { Divider } from '@patternfly/react-core/dist/esm/experimental/components/Divider';` 

you will now need to import them like this:
`'import { Divider } from '@patternfly/react-core/dist/esm/components';` or 
`'import { Divider } from '@patternfly/react-core/dist/esm/components/Divider';`

## Merge master and bump @patternfly/patternfly to 4.6.0 [(#4022)](https://github.com/patternfly/patternfly-react/pull/4022)
### react-core
**Accordion:** Remove prop `noBoxShadow` per https://github.com/patternfly/patternfly/pull/2760 . If a shadow is needed, the accordion can be placed in a card, or a shadow can be applied either using CSS or a box-shadow utility class.
**Page:** Remove prop `noPaddingMobile` from PageSection per https://github.com/patternfly/patternfly/pull/2816 . This note should be removed in favor of the PR that implements #4013.
### react-tokens
- The tokens `global_BackgroundColor_150`, and `global_BackgroundColor_300` have been removed (see associated [Core PR](https://github.com/patternfly/patternfly/pull/2818)). Consider using `global_BackgroundColor_200` with its new value `#f0f0f0` instead.

## fix(modal): default action alignment to left [(#4017)](https://github.com/patternfly/patternfly-react/pull/4017)
1. **Modal**: Removes prop `isFooterLeftAligned `. This prop is no longer used.
2. **Modal**: Layout change where modal footer actions are left-aligned by default.
3. **ModalBoxFooter**: Removes prop `isLeftAligned`. This prop is no longer used.

As part of this work, I've introduced the prop `isFooterRightAligned`/`isRightAligned` for those who are _not able_ to go with the new design recommendation and would like to use right-aligned actions instead. This PR also includes some minor followup/cleanup from the recent aria-prop alignment work.

## fix(gutter): fix type for gutter support [(#4014)](https://github.com/patternfly/patternfly-react/pull/4014)
1. **Gallery**: Removes prop `gutter`. The prop `hasGutter` should be used instead.
2. **Grid**: Removes prop `gutter`. The prop `hasGutter` should be used instead.
3. **Level**: Removes prop `gutter`. The prop `hasGutter` should be used instead.
4. **Split**: Removes prop `gutter`. The prop `hasGutter` should be used instead.
5. **Stack**: Removes prop `gutter`. The prop `hasGutter` should be used instead.

Additional issues: https://github.com/patternfly/patternfly/issues/2725

## fix(icons): fix types, upgrade typescript [(#3978)](https://github.com/patternfly/patternfly-react/pull/3978)
### @patternfly/react-icons
- Removed `OutlinedFontAwesomeLogoFullIcon`.

## FormGroup, TextInput, TextArea, FormSelect [(#3975)](https://github.com/patternfly/patternfly-react/pull/3975)
1. TextInput, TextArea and FormSelect: Removed `isValid` prop, `validated` prop should be used instead. To set a the input to invalid, set `validated` prop to `error` or the  enum value `ValidatedOptions.error`.

## feat(Select): change isExpanded to isOpen, split selections prop, rem… [(#3945)](https://github.com/patternfly/patternfly-react/pull/3945)
1. Renames `isExpanded` property to `isOpen`.
2. Splits `selections` property into `selection` and `selections` for use in single versus multiple select variants respectively.
3. Removes deprecated `CheckboxSelect` and `CheckboxSelectOption` components. Please use the `variant = "checkbox"`.

## Empty state width [(#3933)](https://github.com/patternfly/patternfly-react/pull/3933)
1. Changes the default width to `full` instead of `large`.  To maintain the previous default behaviour, set the `variant` prop to large. e.g `<EmptyState variant={EmptyStateVariant.large}> ...</EmptyState>` 
2. Variant `small` has been updated to `sm`
3. Variant `large` has been updated to `lg`

## refactor(ApplicationLauncher): Removed the deprecated prop dropdownItems [(#3929)](https://github.com/patternfly/patternfly-react/pull/3929)
1. Removes deprecated prop `dropdownItems`.  the prop `items` should be used instead

## Aria property name updates [(#3924)](https://github.com/patternfly/patternfly-react/pull/3924)
1. **AboutModalContainer**: Removes prop `ariaLabelledbyId`. The prop `aboutModalBoxHeaderId` should be used instead.
2. **AboutModalContainer**: Removes prop `ariaDescribedById`. The prop `aboutModalBoxContentId` should be used instead.
3. **ChipButton**: Removes prop `ariaLabel`. The prop `aria-label` should be used instead.
4. **DropdownToggle**: Removes prop `ariaHasPopup`. The prop `aria-haspopup` should be used instead.
5. **Toggle**: Removes prop `ariaHasPopup`. The prop `aria-haspopup` should be used instead.
6. **LoginForm**: Removes prop `rememberMeAriaLabel`. This prop is no longer used.
7. **Modal**: Removes prop `ariaDescribedById`. The prop `modalContentAriaDescribedById` should be used instead.
8. **ModalContent**: Removes prop `ariaDescribedById`. The prop `modalBoxAriaDescribedById` should be used instead.
9. **OptionsMenu**: Removes prop `ariaLabelMenu`. This prop is no longer used.
10. **OptionsMenuItemGroup**: Removes prop `ariaLabel`. The prop `aria-label` should be used instead.
11. **OptionsMenuToggleWithText**: Removes prop `ariaHasPopup`. The prop `aria-haspopup` should be used instead.
12. **ProgressBar**: Removes prop `ariaProps`. The prop `progressBarAriaProps` should be used instead.
13. **ProgressContainer**: Removes prop `ariaProps`. The prop `progressBarAriaProps` should be used instead.
14. **Select**: Removes prop `ariaLabelledBy`. The prop `aria-labelledby` should be used instead.
15. **Select**: Removes prop `ariaLabelTypeAhead`. The prop `typeAheadAriaLabel` should be used instead.
16. **Select**: Removes prop `ariaLabelClear`. The prop `clearSelectionsAriaLabel` should be used instead.
17. **Select**: Removes prop `ariaLabelToggle`. The prop `toggleAriaLabel` should be used instead.
18. **Select**: Removes prop `ariaLabelRemove`. The prop `removeSelectionAriaLabel` should be used instead.
19. **SelectToggle**: Removes prop `ariaLabelledBy`. The prop `aria-labelledby` should be used instead.
20. **SelectToggle**: Removes prop `ariaLabelToggle`. The prop `aria-label` should be used instead.
21. **Wizard**: Removes prop `ariaLabelNav`. The prop `navAriaLabel` should be used instead.
22. **Wizard**: Removes prop `ariaLabelCloseButton`. The prop `closeButtonAriaLabel` should be used instead.
23. **WizardHeader**: Removes prop `ariaLabelCloseButton`. The prop `closeButtonAriaLabel` should be used instead.
24. **WizardNav**: Removes prop `ariaLabel`. The prop `aria-label` should be used instead.

## fix(title): remove problematic default headingLevel [(#3922)](https://github.com/patternfly/patternfly-react/pull/3922)
1. **Title**: Removes enum `TitleSize`. The enum `TitleSizes` should be used instead.
2. **Title**: Removes valid values `xs` and `sm` for `size` prop. Use size `md` instead.
3. **Title**: Removes enum `TitleLevel`. Use one of the string values 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6' instead.
4. **Title**: `headingLevel` is now a required prop. Update any existing usage of `Title` to supply a string value for headingLevel of h1-h6.
5. **Title**: Removes default value `h1` for `headingLevel` prop. Use one of the string values 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6' explicitly.

## Breaking modal variant [(#3920)](https://github.com/patternfly/patternfly-react/pull/3920)
1. Collapses the `isLarge` and `isSmall` properties into a single `variant` property. To maintain the current behavior, set the `variant` property to `large` or `small`, or use the newly added `ModalVariant` enum as `ModalVariant.large` or `ModalVariant.small`.

## feat(Page): make mainContainerId required [(#3904)](https://github.com/patternfly/patternfly-react/pull/3904)
1. Makes `mainContainerId` a required property.

## feat(Alert): change default alert variant to default [(#3903)](https://github.com/patternfly/patternfly-react/pull/3903)
1. Changes the default of the `variant` property to `default` instead of `info`. To maintain current default behavior, set the `variant` property to `info`.

## perf(react-styles): remove emotion, fix types [(#3886)](https://github.com/patternfly/patternfly-react/pull/3886)
### @patternfly/react-styles
- No longer reexports functions from `emotion`
- Remove all exports except for the `css` function and CSS-in-JS stylesheets in the `css` folder
### @patternfly/react-core
- Replaced `[BackgroundImageSrc.{sm,xs2x,sm,sm2x,lg}]` with strings `'sm' | 'xs2x' | 'sm' | 'sm2x' | 'lg'`
- Removed always ignored `[BackgroundImageSrc.filter]` for new `filter` prop of type `ReactNode`
- Removed deprecated `ProgressVariant.info` that adds no styling. Do not pass this prop or pass `null` instead.

## fix(nothing): test prerelease workflow [(#3868)](https://github.com/patternfly/patternfly-react/pull/3868)
- Test note

## chore(table): update types in table [(#3296)](https://github.com/patternfly/patternfly-react/pull/3296)
- Change type of `onSelect` in Table from `(event: React.ChangeEvent<HTMLInputElement>) => void` to `(event: React.FormEvent<HTMLInputElement>) => void`