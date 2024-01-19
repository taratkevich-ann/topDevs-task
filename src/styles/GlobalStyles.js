import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --small-border-radius: 12px;
  --border-radius: 20px; 
  --grey-color:  #393F45;
  --black-color: #151515;
  --dark-grey-color: #1F1F1F;
  --white-color: #fff;
  --light-grey-color: rgba(255, 255, 255, 0.50)
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: inherit;
}

body {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--black-color);
  color: var(--white-color);
  margin: 0;
}

button {
  border: none;
  background: none;
  padding: 0;
  outline: none;
  cursor: pointer;
}

.sort-select {
  font-size: 14px;
  width: 132px;
}

.sort-select .sort-select__control {
  background-color: var(--black-color);
  border-color: var(--grey-color);
  border-radius: 6px;
  box-shadow: none;
}

.sort-select .sort-select__control:hover {
  border-color: var(--light-grey-color);
}

.sort-select .sort-select__menu {
  background-color: var(--dark-grey-color);
}

.sort-select .sort-select__menu-list {
  padding: 8px 0;
}

.sort-select .sort-select__single-value, .sort-select .sort-select__placeholder {
  color: var(--white-color);
}

.sort-select .sort-select__option {
  padding: 6px 12px;
  color: var(--white-color);
}

.sort-select__option.sort-select__option--is-selected, .sort-select__option.sort-select__option--is-focused{
  background-color: var(--dark-grey-color);
  color: var(--light-grey-color);
}


.sort-select .sort-select__indicator {
  padding: 6px;
  transition: transform .2s;
}

.sort-select__control--menu-is-open .sort-select__indicator img {
  transform: rotateZ(180deg);
}
`;

export default GlobalStyles;
