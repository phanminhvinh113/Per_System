import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Children, FC, FunctionComponent, useState } from "react";
import styled from "styled-components";
//
interface Props {}
//
interface PropsContent {
  active: boolean;
}
//
const ContentSearch: FC<PropsContent> = ({ active }) => {
  return <ContentWrapper active={active}></ContentWrapper>;
};
//
const Search: FunctionComponent<Props> = () => {
  //
  const [query, setQuery] = useState("");
  const [active, setInputActive] = useState(false);
  //
  return (
    <SearchWrapper>
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      <Input
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setInputActive(true)}
        onBlur={() => setInputActive(false)}
        value={query}
        type="text"
        placeholder="Typing..."
      />
      <Right>Search</Right>
      <ContentSearch active={active} />
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  position: relative;
  .search-icon {
    position: absolute;
    top: 25%;
    left: 10px;
    color: #ccc;
  }
`;

const Input = styled.input`
  border: 1px solid #ccc;
  outline: none;
  border-radius: 4px;
  width: 60vw;
  padding: 8px 30px;
  padding-right: 70px;
  size: 1rem;
`;
const Right = styled.span`
  position: absolute;
  right: 10px;
  top: 20%;
  border-left: 1px solid #ccc;
  padding-left: 5px;
  color: #737575;
  cursor: pointer;
  &:hover {
    color: #357ef3;
  }
`;
const ContentWrapper = styled.div<PropsContent>`
  z-index: 1000;
  position: absolute;
  top: 100%;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  width: 60vw;
  height: 200px;
  display: ${(props) => (props.active ? "block" : "none")};
`;
