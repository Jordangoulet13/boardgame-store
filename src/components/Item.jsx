import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItem } from "../redux/features/itemSlice";

const Item = ({ item, history, match }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(
      setItem({
        item: item,
      })
    );
    history.push(`${match.url}/${item.name}`);
  };

  return (
    <Container onClick={() => handleClick(item)}>
      {item.available ? null : <Available>Out of stock</Available>}
      {item.sale ? <Available sale>-{item.sale}%</Available> : null}
      <Image src={item.image} />
      <TextContainer>
        <Text>{item.name}</Text>
        {item.sale ? (
          <Price>
            {" "}
            <span>${item.saleprice} CAD</span>
            <span>${item.price} CAD</span>
          </Price>
        ) : (
          <Price>${item.price} CAD</Price>
        )}
      </TextContainer>
    </Container>
  );
};

export default withRouter(Item);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    margin: 1rem 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
`;

const Available = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40%;
  height: 10%;
  background-color: ${(p) => (p.sale ? "#4DC3C5" : "#db4e44")};
  color: #fff;
  left: 2rem;
  top: 4rem;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: ${(p) => p.theme.secondaryfontFamily};
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
`;

const Text = styled.span`
  padding-top: 2rem;
  margin: 0;
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0;
  span {
    padding: 0 1rem;
    :first-child {
      color: lightgrey;
      text-decoration: line-through;
    }
  }
`;
