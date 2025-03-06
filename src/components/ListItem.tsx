
import styled from 'styled-components';

const ListItemContainer = styled.li`
    border-left: 4px solid black;
    list-style: none;
    padding-left: 10px;
    margin: 10px 0;
`;

interface ListItemProps {
    text: string;
}

const ListItem = ({ text }: ListItemProps) => {
    return <ListItemContainer>{text}</ListItemContainer>;
};

export default ListItem;
