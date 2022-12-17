import styled from 'styled-components'

export const ShortListStyled = styled.div`
  ${(props) => props.theme.applyColors('short-list')}
  max-width: max-content;
  max-height: ${(props) => props.theme.height(237)};
  padding-right: ${(props) => props.theme.width(24)};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: ${(props) => props.theme.width(4)};
  }
  &::-webkit-scrollbar-track {
    border-radius: ${(props) => props.theme.width(2)};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${(props) => props.theme.width(2)};
  }

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  white-space: nowrap;
  row-gap: ${(props) => props.theme.height(28)};
`
