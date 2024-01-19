import Select, { components } from "react-select";
import styled from "styled-components";

const SortingBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  text-transform: capitalize;
`;

function DropdownIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <img src="/dropdown-icon.svg" alt="dropdown icon" />
    </components.DropdownIndicator>
  );
}

function Sorting({ value, options, onSelect }) {
  return (
    <SortingBlock>
      <Label htmlFor="sort">
        <img src="/up-down-icon.svg" alt="sorting icon" />
        Sort by
      </Label>
      <Select
        inputId="sort"
        options={options}
        defaultValue={value}
        onChange={onSelect}
        isSearchable={false}
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        classNamePrefix="sort-select"
        className="sort-select"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary50: "var(--dark-grey-color)",
          },
        })}
      />
    </SortingBlock>
  );
}

export default Sorting;
