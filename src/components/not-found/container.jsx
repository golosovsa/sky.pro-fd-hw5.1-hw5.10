import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  ${(props) => props.theme.applyColors('not-found-container')}
  width: 100%;
  height: calc(100% - ${(props) => props.theme.height(190)});
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  row-gap: ${(props) => props.theme.height(32)};
`

export const NotFoundSubTitleContainer = styled.div`
  margin-top: ${(props) => props.theme.width(-35)};
  margin-bottom: ${(props) => props.theme.width(-27)};
`

export const NotFoundTextContainer = styled.div`
  width: ${(props) => props.theme.width(350)};
`

export const NotFoundButtonContainer = styled.div`
  width: ${(props) => props.theme.width(278)};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
`
