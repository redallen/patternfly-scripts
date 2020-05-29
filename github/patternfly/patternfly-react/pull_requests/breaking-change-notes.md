## improvement(ChipGroup): Update ChipGroup to match new design [(#4246)](https://github.com/patternfly/patternfly-react/pull/4246)
1. **ChipGroup** :
- `withToolbar` prop has been removed.  Add the `categoryName` prop instead to add a chip group with a category.
- `headingLevel` prop has been removed.  The category name has internally been switched to a `<span>`
2. **ChipGroupToolbarItem**: This component has been removed.  To Create a ChipGroup with a category, add the `categoryName` prop to `<ChipGroup>`.  All props that were on the `<ChipGroupToolbarItem>` have been added to `<ChipGroup>`.  So to convert to new API, move move all you props up to <ChipGroup> and remove `<ChipGroupToolbarItem>`.
3. **Chip**: The overflow chip no longer contains a button.  Th specify a overflow chip as a button do the following `<Chip component='button'  isOverflowChip>
            Overflow Chip name
          </Chip>`

## fix(nav): bump core and update variants [(#4225)](https://github.com/patternfly/patternfly-react/pull/4225)
- **Nav:** `variant` prop has been removed from `NavList`. Pass variant={`horizontal` | `tertiary`} to `Nav` instead.

## replace Toolbar with PageHeaderTools in page header [(#4223)](https://github.com/patternfly/patternfly-react/pull/4223)
**PageHeader**: `avatar` prop was removed. Add the avatar to the `PageHeaderTools` component instead (which is passed into `PageHeader` via the `headerTools` prop.
**PageHeader**: `toolbar` prop was removed. Use the `headerTools` prop instead. Also, if you previously used the `Toolbar`, `ToolbarGroup`, or `ToolbarItem` components for the header, replace them with the `PageHeaderTools`, `PageHeaderToolsGroup`, and `PageHeaderToolsItem` components.

## fix(pagination): update to match core [(#4202)](https://github.com/patternfly/patternfly-react/pull/4202)
- **Pagination:** Remove obsolete 'left' and 'right' variants. These should be replaced with 'top' (default) or 'bottom'.

## Breaking/alert [(#4190)](https://github.com/patternfly/patternfly-react/pull/4190)
- **Alert**: If you were previously using the `action` prop for the close button, use the `actionClose` prop instead
- **Alert**: If you were previously using the `action` prop for a link button, use the `actionLinks` prop instead

## fix(experimental): remove experimental directory [(#4176)](https://github.com/patternfly/patternfly-react/pull/4176)
1. **Drawer**: Removes import path `'@patternfly/react-core/dist/js/experimental'`. The import path `'@patternfly/react-core'` should be used instead.

## chore(packages): bump core to 4.10.1 [(#4170)](https://github.com/patternfly/patternfly-react/pull/4170)
- **Card:**
  - Rename CardHeader to CardTitle
  - Rename CardHeadMain to CardHeaderMain
  - Rename CardHead to CardHeader
- **Table:**
  - Remove `cellHeightAuto` transformer. It is no longer needed.
  - `cellWidth('max')` has been replaced with `cellWidth(100)`

## feat(Label): refactor for updated design and features [(#4165)](https://github.com/patternfly/patternfly-react/pull/4165)
1. Default color changed to grey. Design also adjusted.

## Chore/4112 dropdownitem icon [(#4147)](https://github.com/patternfly/patternfly-react/pull/4147)
- **Dropdown:**
  - Remove DropdownItemIcon in favor of <DropdownItem icon={<Icon />} />
  - Remove variant prop from DropdownItem. If you were using variant="icon" before, use the new icon prop instead.

## Tabs updates [(#4146)](https://github.com/patternfly/patternfly-react/pull/4146)
**Tabs**:
1. Changed prop `variant` for consistency.  You will need to update all instances of `variant` prop to `component` 
2. Changed `TabVariant` enum Name to `TabComponent` for consistent naming.  You will now need to update all instances of `tabVariant` to `TabComponent`. 

**Tab**: 
1. The title should be wrapped with `<TabTitleText>` for proper styling.  If you would like to place an Icon in the Tab, it should be wrapped with `<TabTitleIcon>` for proper styling.

## chore(packages): bump react peer dep to 16.8.0 [(#4144)](https://github.com/patternfly/patternfly-react/pull/4144)
- Our packages now can possibly use hooks, which requires `react@^16.8.0` instead of `react@^16.4.0`. We recommend upgrading your version of React if it is below 16.8.0.

## fix(wizard): remove old prop "isCompactNav" [(#4142)](https://github.com/patternfly/patternfly-react/pull/4142)
1. **WizardNav**: Removes prop `isCompactNav `. This prop is no longer used.

<!-- Are there any upstream issues or separate issues you need to reference? -->
**Additional issues**: https://github.com/patternfly/patternfly/pull/2936

## chore(Wizard): make wizard inPage [(#4140)](https://github.com/patternfly/patternfly-react/pull/4140)
- Modal: Remove hideTitle prop. To hide the Modal header, do not pass a title prop, a description prop, or a header prop. If there is no title or header passed, please provide an aria-label prop to the Modal component to make it accessible.
- Wizard: Remove inPage prop. By default the Wizard will be displayed in page, filling its parent container. If the consumer passes a managed isOpen flag, then the Wizard will be displayed in a modal.

## feat(Wizard): update hasBodyPadding [(#4136)](https://github.com/patternfly/patternfly-react/pull/4136)
- **Wizard:** Rename `hasBodyPadding` to `hasNoBodyPadding` for Wizard and WizardBody.

<!-- What changes are being made? Please link the issue being addressed. -->
- **What**: Closes #4052 -- moves padding to wizard body.

<!-- Are there any upstream issues or separate issues you need to reference? -->
- **Additional issues**: #4039, renamed prop to remain consistent with @kmcfaul's `hasNoPadding` changes in #4133.

## feat(Drawer, DataList, Page): rename noPadding to hasNoPadding [(#4133)](https://github.com/patternfly/patternfly-react/pull/4133)
1. Renamed `noPadding` to `hasNoPadding` for Drawer, DataList and Page components.
2. Added `hasPaddingOn` and `hasNoPaddingOn` properties to PageSection, accounting for page size breakpoints. Breakpoints are defined in the `PageSectionBreakpoints` enum.

## fix(nav): fix scrolling [(#4129)](https://github.com/patternfly/patternfly-react/pull/4129)
-  **Nav**: The tertiary variant of NavList must now be inside a `<PageSection type="nav">` to scroll properly.

## feat(react-core): bump core and fix build [(#4116)](https://github.com/patternfly/patternfly-react/pull/4116)
- **Button:** Remove isHover and isFocus props, all instances of them should be removed from your application.
- **Chip:** Remove isReadOnly prop, all instances of it should be removed from your application.
- **Dropdown:** Remove isHover and isFocus props from Toggle, KebabToggle, and DropdownToggle. All instances of them should be removed from your application.
- **Select:** Remove isFocus and isHovered props from SelectToggle, all instances of them should be removed from your application.
- **Expandable:**
  - Rename component to ExpandableSection, all instances in your application should be renamed.
  - Remove isFocus and isHovered props from ExpandableSection, all instances of them should be removed from your application.
- **Label:** Remove isCompact prop from Label, all instances of it should be removed from your application.
- **Options menu:** Remove isFocused and isHovered prop from OptionsMenuToggle and OptionsMenuToggleWithText, all instances of it should be removed from your application.
- **Context selector:** Remove isHover prop from ContextSelectorItem. Remove isHovered and isFocused props from ContextSelectorToggle. All instances of these should be removed from your application.
- **Nav:** Change default theme to dark. Use theme="light" if you wish to use the light variant.
- **Skip to content:** Remove component prop in favor of anchor tag, all instances of it should be removed from your application.
- **Datatoolbar:** Remove separator variant, all instances of it should be removed from your application.
- **Wizard:** Remove isFullHeight and isFullWidth props, all instances of them should be removed from your application.
- **Page:** Change default theme to dark. Use theme="light" if you wish to use the light variant.

## perf(packages): Use tsc instead of babel for build [(#4076)](https://github.com/patternfly/patternfly-react/pull/4076)
**ALL packages:**

- We no longer support UMD builds for individual packages. Consider using our [react-core.umd.js bundle](https://unpkg.com/@patternfly/react-core@3/dist/umd/react-core.umd.js) instead.
- We no longer define `propTypes` for our components. Consider using our Typescript types under each packages' `dist/js` folder instead.

## feat(react-inline-edit-extension): convert to TS [(#4073)](https://github.com/patternfly/patternfly-react/pull/4073)
### @patternfly/react-virtualized-extension
- Many types have been added and amended while converting this project to TS.

## chore(EmptyStateIcon): Remove unused props interface from EmptyStateIcon [(#4065)](https://github.com/patternfly/patternfly-react/pull/4065)
Removed deprecated `size` and `title` from  IconProps.

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

## fix(charts): Update types to match latest Victory packages [(#4304)](https://github.com/patternfly/patternfly-react/pull/4304)
- Updated Victory to package versions to 34.3.8

## fix(charts): Bump Victory packages [(#3974)](https://github.com/patternfly/patternfly-react/pull/3974)
- Updated Victory to package versions to 34.1.3

## fix(charts): Update react-charts types [(#4138)](https://github.com/patternfly/patternfly-react/pull/4138)
- Removed the @types/victory dependency and updated the PatternFly charts to use the types introduced with Victory 34.x

## fix(charts): Update react-charts types [(#4152)](https://github.com/patternfly/patternfly-react/pull/4152)
- Updated label prop types to sync with Victory 34.x

## fix(charts): Use Victory's createContainer instead of allowZoom prop [(#4278)](https://github.com/patternfly/patternfly-react/pull/4278)
- Use `containerComponent={<VictoryZoomComponent />}` with Chart instead of `allowZoom`
- Use `containerComponent={<VictoryZoomComponent />}` with ChartGroup instead of `allowZoom`

