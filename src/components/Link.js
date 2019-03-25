import React from 'react'
import styled, { css } from 'styled-components'

const StlyedLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: black;
  border-bottom: 1px solid;
  margin-bottom: 1px;

  ${props => !props.noHover && css`
    &:hover {
      color: deeppink;
      border-bottom: 2px solid;
      margin-bottom: 0;
    }
  `}

  ${props => props.primary && css`
    color: deeppink;
  `}

  ${props => props.secondary && css`
    color: black;
  `}
`

const Link = ({ to, children, ...rest }) => (
  <StlyedLink
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    {children}
  </StlyedLink>
)

export default Link
