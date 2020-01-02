var App = () => (
  <GroceryList groceryItems={['Bread', 'Cheese', 'Ham']}/>
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem key={item} item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      mouseOver: false
    };
    this.clicked = (event) => {
      this.setState({
        done: !this.state.done
      })
    };
    this.mouseOver = (event) => {
      this.setState({
        mouseOver: !this.state.mouseOver
      })
    }
  }

  render () {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.mouseOver ? 'bold' : 'normal',
    };
    return (
      <li style={style} 
        onClick={this.clicked.bind(this)} 
        onMouseEnter={this.mouseOver.bind(this)}
        onMouseLeave={this.mouseOver.bind(this)}> 
      {this.props.item}</li>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));