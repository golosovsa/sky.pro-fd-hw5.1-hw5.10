import styled, { css, keyframes } from 'styled-components'
import { LAYOUT_WIDTH } from '../../app/theme/constants'

export const SkeletonStyled = styled.div`
  ${(props) => props.theme.applyColors('skeleton')}
  ${(props) =>
    props.full &&
    css`
      width: 100vw;
      height: 100vh;
    `}
  ${(props) =>
    props.fill &&
    css`
      width: 100%;
      height: 100%;
    `}
    animation: ${(props) => keyframes`
        0%{
            background-position: ${props.theme.width(
              -LAYOUT_WIDTH - (Number(props.animationOffset) || 0)
            )};
        }
        100% {
            background-position: ${props.theme.width(
              LAYOUT_WIDTH * 2 - (Number(props.animationOffset) || 0)
            )};
        }
    `} ${(props) => props.shineDuration} infinite linear;
  background-size: ${(props) => props.theme.width(LAYOUT_WIDTH * 3)} 1px;
  ${(props) =>
    props.height &&
    css`
      height: ${props.theme.height(props.height)};
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.theme.width(props.width)};
    `}
`
