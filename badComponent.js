import { Component } from 'react';
import getData from './dataFetcher';

export default class BadComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    };
    getData().then(data => this.setState({ data }));
  }

  addData () {
    return Promise.resolve({ text: 'foo' });
  }

  render () {
    return (
      <div>
        <PageTitle>
          Data 
          <PageControls>
            <AddDataButton onClick={() => {
              this.addData().then(newItem => {
                this.state.data.push(newItem);
                this.forceUpdate();
              });
            }} />
          </PageControls>
        </PageTitle>
        {!this.state.data.length && <span>Loading...</span>}
        {this.state.data.map(d => <DataRow d={d} />)}
        <PageFooter changeParent={this.setState} />
      </div>
    );
  }
}