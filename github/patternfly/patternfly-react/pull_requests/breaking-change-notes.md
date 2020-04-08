## Merge master and bump @patternfly/patternfly to 4.6.0 [(#4022)](https://github.com/patternfly/patternfly-react/pull/4022)
**Accordion:** Remove prop `noBoxShadow` per https://github.com/patternfly/patternfly/pull/2760 . If a shadow is needed, the accordion can be placed in a card, or a shadow can be applied either using CSS or a box-shadow utility class.
**Page:** Remove prop `noPaddingMobile` from PageSection per https://github.com/patternfly/patternfly/pull/2816 . This note should be removed in favor of the PR that implements #4013.

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