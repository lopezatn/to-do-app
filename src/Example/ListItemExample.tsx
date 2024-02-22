export type Item = {
  id: number;
  value: string;
};

// const obj: Items2 = {
//     id: 1,
//     value: 'some value'
// }

interface ListItemExampleProps {
  items?: string[];
  items2?: Item[];
  onClick?: (value: string, id?: number) => void;
}

const ListItemExample = (propsObject: ListItemExampleProps) => {
  const { items2, items, onClick } = propsObject;

  if (items2) {
    return (
      <>
        {items2.map((value: Item, index) => {
          console.log("Item obj", value);

          return (
            <li onClick={() => onClick?.(value.value, value.id)} key={index}>
              {value.value}
            </li>
          );
        })}
      </>
    );
  }

  if (items) {
    return (
      <>
        {items.map((value: string, index: number) => {
          // onClick?.(value) means
          // if(typeof onClick !== 'undefined') onClick(value)

          return (
            <li onClick={() => onClick?.(value)} key={index}>
              {value}
            </li>
          );
        })}
      </>
    );
  }

  return <></>;
};

export default ListItemExample;
