import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import Button from "../base/Button";

//CategoriesImages
import asmondeeSale from "../../assets/Categories/asmondeeSale.jpg";
import preorders from "../../assets/Categories/preorders.jpg";
import jigsaw from "./../../assets/Categories/jigsaw.jpg";
import boardGames from "./../../assets/Categories/boardGames.jpg";
import rolePlaying from "./../../assets/Categories/roleplaingGames.jpg";
import rpgAccessories from "./../../assets/Categories/rpgAccessories.jpg";
import tradingCards from "./../../assets/Categories/tradingCardGames.jpg";
import magic from "./../../assets/Categories/magic.jpg";
import sale from "./../../assets/Categories/sale.png";

const Titles = {
  asmondeeSale: "The Asmondee Summer Sale is on!",
  preorders: "Preorders",
  jigsaw: "Jigsaw Puzzles",
  boardGames: "Board Games",
  rolePlaying: "Roleplaying Games",
  rpg: "RPG Accessories",
  tradingCards: "Trading Card Games",
  magic: "Magic: The Gathering Singles",
};

const Categories = (props) => {
  return (
    <Container>
      <CategoriesContainer>
        <div>
          <CategoryItem image={asmondeeSale} title={Titles.asmondeeSale} />
          <CategoryItem image={preorders} title={Titles.preorders} />
        </div>
        <div>
          <CategoryItem image={jigsaw} title={Titles.asmondeeSale} />
          <CategoryItem image={boardGames} title={Titles.preorders} />
        </div>
        <div>
          <CategoryItem image={rolePlaying} title={Titles.rolePlaying} />
          <CategoryItem image={rpgAccessories} title={Titles.rpg} />
        </div>
        <div>
          <CategoryItem image={tradingCards} title={Titles.tradingCards} />
          <CategoryItem image={magic} title={Titles.magic} />
          <CategoryItem image={sale} />
        </div>
      </CategoriesContainer>
      <Button categories>ALL CATEGORIES</Button>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`;

const CategoriesContainer = styled.div`
  > div {
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 3rem;
    grid-template-rows: 20rem;
    & :nth-child(2n) {
      grid-template-columns: 1fr 2fr;
    }
  }
  & :nth-child(2n) {
    grid-template-columns: 1fr 2fr;
  }

  & :last-child {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
