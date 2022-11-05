function Search(props) {
  return (
    <>
      <svg className="search__svg">
        <use href="img/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder={props.placeholder}
        name="search"
      />
    </>
  )
}

export default Search
