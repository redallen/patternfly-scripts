## Empty state width [(#3933)](https://github.com/patternfly/patternfly-react/pull/3933)
1. Changes the default width to `full` instead of `large`.  To maintain the previous default behaviour, set the `variant` prop to large. e.g `<EmptyState variant={EmptyStateVariant.large}> ...</EmptyState>` 
2. Variant `small` has been updated to `sm`
3. Variant `large` has been updated to `lg`

## perf(react-styles): remove emotion, fix types [(#3886)](https://github.com/patternfly/patternfly-react/pull/3886)
### @patternfly/react-styles
- No longer reexports functions from `emotion`
- Remove all exports except for the `css` function and CSS-in-JS stylesheets in the `css` folder
### @patternfly/react-core
- Replaced `[BackgroundImageSrc.{sm,xs2x,sm,sm2x,lg}]` with strings `'sm' | 'xs2x' | 'sm' | 'sm2x' | 'lg'`
- Removed always ignored `[BackgroundImageSrc.filter]` for new `filter` prop of type `ReactNode`

## fix(nothing): test prerelease workflow [(#3868)](https://github.com/patternfly/patternfly-react/pull/3868)
- Test note