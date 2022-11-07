import ButtonText from "./ButtonText"

function Filter() {
  return (
    <>
      <div className="filter__title">Искать по:</div>
      <ButtonText text="исполнителю" classes="filter__button button-author"/>
      <ButtonText text="году выпуска" classes="filter__button button-year"/>
      <ButtonText text="жанру" classes="filter__button button-genre"/>
    </>
  )
}

export default Filter
