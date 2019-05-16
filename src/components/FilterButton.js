import React from 'react'
import styled, { css } from 'styled-components'

import styles from './FilterButton.css'

const StyledButton = styled.button`
  border-color: black;
  background-color: black;
  font-size: 1.25rem;
  cursor: pointer;

  ${props => props.isActive && css`
    background: black;
    color: white;
  `}

  ${props => !props.isActive && css`
    background: white;
    color: black;
  `}
`

const FilterButton = ({ text, onClick, isActive }) => (
  <StyledButton
    type="button"
    className={styles.button}
    onClick={() => onClick(text)}
    isActive={isActive}
  >
    {text}
  </StyledButton>
)

export default FilterButton
