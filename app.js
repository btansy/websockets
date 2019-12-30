var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
    <li>{props.groceryItems[2]}</li>
  </ul>
);

var GroceryList = () => (
  <div>
    <h3>Grocery List</h3>
    <GroceryListItem groceryItems={['Bread', 'Cheese', 'Ham']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.groceryItems}</li>
//     );
//   }
// }

// var GroceryList = () => (
//   <div>
//     <h3>Grocery List</h3>
//     <ul>
//       {props.todos.map(todo =>
//         <GroceryListItem groceryItems={['Bread', 'Cheese', 'Ham']} />
//       )}
//     </ul>
//   </div>
// );


// ReactDOM.render(<GroceryList />, document.getElementById("app"));

