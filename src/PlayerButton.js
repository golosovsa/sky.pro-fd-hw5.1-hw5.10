import ButtonSvg from './ButtonSvg'

function PlayerButton(props) {
  const cls = `player__btn-${props.name}`
  const svgCls = `${cls}-svg`
  const alt = props.name
  const href = `img/icon/sprite.svg#icon-${props.name}`

  const onClick = () => props.action('PlayerButton', props.name)

  return (
    <ButtonSvg
      class={cls}
      svgClass={svgCls}
      alt={alt}
      href={href}
      click={onClick}
    />
  )
}

export default PlayerButton
