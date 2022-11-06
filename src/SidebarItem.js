function SidebarItem(props) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={props.action}>
        <img className="sidebar__img" src={props.img} alt={props.alt} />
      </a>
    </div>
  )
}

export default SidebarItem
