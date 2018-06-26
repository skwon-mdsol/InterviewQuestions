import { Component } from 'react';

class BadComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount () {
    getData().then(data => this.setState({ data }));
  }

  addData () {
    return Promise.resolve({ text: 'foo' });
  }

  renderData () {
    if (!this.state.data.length) {
      return <span>Loading..</span>;
    } else {
      return this.state.data.map(d => <Data data={d} key={d} />);
    }
  }

  render () {
    return (
      <div>
        <PageTitle>
          Data 
          <PageControls>
            <AddDataButton onClick={() => {
              this.addData().then(newItem => {
                this.state.data.push(newItem)
                this.forceUpdate()
              })
            }} />
          </PageControls>
        </PageTitle>
        {this.renderData()}
      </div>
    );
  }
}

export default BadComponent;