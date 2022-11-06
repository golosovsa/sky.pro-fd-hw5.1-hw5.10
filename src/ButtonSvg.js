function ButtonSvg(props) {
    return (
    <div className={`${props.class} _btn`}>
      <svg className={props.svgClass} alt={props.alt} onClick={props.click}>
        <use href={props.href}/>
      </svg>
    </div>
  )
}

export default ButtonSvg
