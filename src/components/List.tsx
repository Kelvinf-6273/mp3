
import styled from 'styled-components';
import ListItem from './ListItem';

const ListContainer = styled.ul`
    padding-left: 30px;
    font-size: calc(2px + 2vw);
    text-align: left;
`;

interface ListProps {
    items: string[];
}

const List = ({ items }: ListProps) => {
    return (
        <ListContainer>
            {items.map((item, index) => (
                <ListItem key={index} text={item} />
            ))}
        </ListContainer>
    );
};

export default List;
