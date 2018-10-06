import { breakpoints, themeProps } from '@artsy/palette'
import * as React from 'react'
import styled from 'styled-components'

const breakpointComponents = Object.keys(breakpoints).reduce(
  (res, breakpoint) => {
    return {
      ...res,
      [breakpoint]: styled.div`
        @media ${themeProps.mediaQueries[breakpoint]} {
          display: block;
        }
        @media not all and ${themeProps.mediaQueries[breakpoint]} {
          display: none;
        }
      `,
    }
  },
  {
    else: props => props.children,
  }
)

const inversedBreakpointComponents = new WeakMap()
Object.keys(breakpointComponents).forEach(breakpoint => {
  inversedBreakpointComponents.set(breakpointComponents[breakpoint], breakpoint)
})

export class Responsive2 extends React.Component {
  render() {
    const rendered = this.props.children(breakpointComponents)
    const renderedBreakpointComponents = React.Children.toArray(
      rendered.props.children
    )
    let elseIndex = null
    let seenBreakpoints = []
    renderedBreakpointComponents.forEach((breakpointComponent, i) => {
      if (breakpointComponent.type === breakpointComponents.else) {
        elseIndex = i
      } else {
        seenBreakpoints.push(
          inversedBreakpointComponents.get(breakpointComponent.type)
        )
      }
    })
    if (elseIndex !== null) {
      const elseBreakpoint = renderedBreakpointComponents[elseIndex]
      const mediaQuery = seenBreakpoints
        .map(breakpoint => themeProps.mediaQueries[breakpoint])
        .join(', ')
      const elseBreakpointComponent = styled.div`
        @media ${mediaQuery} {
          display: none;
        }
        @media not all and (${mediaQuery}) {
          display: block;
        }
      `
      renderedBreakpointComponents[elseIndex] = React.createElement(
        elseBreakpointComponent,
        null,
        React.Children.toArray(elseBreakpoint.props.children)
      )
    }
    return renderedBreakpointComponents
  }
}
