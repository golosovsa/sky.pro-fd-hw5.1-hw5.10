import styled, { css } from 'styled-components'

const Tab = styled.p`
  ${(props) => props.theme.applyColors('tab')}
  ${(props) => props.theme.applySize(26, 26)}
  ${(props) => props.theme.applyFont(13, 13, 400)}
  border-radius: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${(props) =>
    props.left &&
    css`
      left: ${props.theme.width(props.left)};
    `}
  ${(props) =>
    props.right &&
    css`
      right: ${props.theme.width(props.right)};
    `}
  ${(props) =>
    props.top &&
    css`
      top: ${props.theme.height(props.top)};
    `}
  ${(props) =>
    props.bottom &&
    css`
      bottom: ${props.theme.height(props.bottom)};
    `}
`

export default Tab
