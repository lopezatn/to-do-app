import Example from ".";
import ListItemExample, { Item } from "./ListItemExample";


export default () => {
    // Apply all this code to app.tsx to see how it's used
    const handleOnClick = (val: string, id?: number) => {
        console.log('Clicked! Value: ', val, ' type: ', typeof val, '. Id: ', id, ' type: ', typeof id);
      }
    
    
      // This is not an array, this is an 
      // object of type Item
      const item: Item = {
        id: 0,
        value: 'Item obj'
      }
    
      return (
        <div className="App">
          <Example message='Hi bitch' optionalMessage2={undefined} numbersToSum={[1, 3]}/>
          <br />
          <h1>Our list1</h1>
          <ul>
            {<ListItemExample items={['item 1', 'asdasd2', 'asdasdasdas2']} onClick={handleOnClick} />}
          </ul>
          <br />
          <h1>Our list2</h1>
          <ul>
            {<ListItemExample items2={[item]} onClick={handleOnClick} />}
          </ul>
        </div>
    )
}