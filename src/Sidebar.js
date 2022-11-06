function Sidebar(props) {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">{props.children}</div>
    </div>
  )
}

export default Sidebar;
