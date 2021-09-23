import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByPriceRange } from "../redux/features/itemSlice";

import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

function valuetext(value) {
  return `${value}°C`;
}

const PriceSlider = () => {
  const dispatch = useDispatch();
  const [values, setValue] = useState([0, 300]);
  const [initial, setInitial] = useState(true);
  useEffect(() => {
    if (initial) {
      setInitial(false);
    } else {
      dispatch(filterByPriceRange({ start: values[0], end: values[1] }));
    }
  }, [initial, values, dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let newVal = [...values];
    newVal[name] = value;
    setValue(newVal);
  };
  return (
    <Container>
      <Slider
        value={values}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={300}
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
