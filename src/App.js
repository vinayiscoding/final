import React,{Component} from 'react';
import "./App.css"
import Child1 from './Child1';
import Child2 from './Child2';
import * as d3 from 'd3';
import SampleDataset from './SampleDataset.csv';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      dropDownValue: 'A'
    };
  }
  componentDidMount(){
    var self=this
    d3.csv(SampleDataset,function(d){
      return {
        x:parseFloat(d.x),
        y:parseFloat(d.y),
        category:d.category
      }
    }).then(function(csv_data){
      self.setState({data:csv_data})
      //console.log(csv_data)
    })
    .catch(function(err){
      console.log(err)
    })
  }
  render() {
    return <div className="parent">
    <div className="TopBar">
        <div className="TopSelect">
          Select Target:
          <select onChange={(event) => this.setState({ dropDownValue: event.target.value })}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
      </div>
      <div className="child1"><Child1 data1={this.state.data}></Child1></div>
      <div className="child2"><Child2 data2={this.state.data}></Child2></div>
      </div>;
  }
}

export default App;