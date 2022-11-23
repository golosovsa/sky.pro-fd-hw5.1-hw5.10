import FilterContainer from "../styled/FilterContainer/FilterContainer";
import Button from "../styled/Button/Button";

function Filter() {
    return (
        <FilterContainer>
            Искать по:
            <FilterContainer.Buttons>
                <Button>исполнителю</Button>
                <Button>году выпуска</Button>
                <Button>жанру</Button>
            </FilterContainer.Buttons>
        </FilterContainer>
    );
}

export default Filter;
