import { useState } from "react";

import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

function valuetext(value) {
  return `${value}°C`;
}

const PriceSlider = () => {
  const [values, setValue] = useState([19, 53]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newVal = [...values];
    newVal[name] = value;
    setValue(newVal);
    console.log(values);
  };
  return (
    <Container>
      <Slider
        value={values}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <PriceSet>
        <span>
          From
          <StyledInput
            value={values[0]}
            onChange={handleInputChange}
            name="0"
          />
        </span>
        <span>
          To
          <StyledInput
            value={values[1]}
            onChange={handleInputChange}
            name="1"
          />
        </span>
      </PriceSet>
    </Container>
  );
};
export default PriceSlider;

const Container = styled.div``;

const PriceSet = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 4rem;
  margin-left: 1rem; ;
`;
