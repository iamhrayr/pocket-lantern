import ListItem from './ListItem';

type Props = {
  children: React$Node,
};

const List = ({ children }: Props): React$Node => {
  return children;
};

List.Item = ListItem;

export default List;
