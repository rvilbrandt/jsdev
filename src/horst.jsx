import React from 'react';

class Horst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Klaus',
    };
  }

  onClick() {
    this.setState({ name: 'Hansi' });
  }

  onChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (<div>
      Horst und sein Freund der nette {this.state.name}!
      {this.props.children}
      <input type="text" value={this.state.name} onChange={e => this.onChange(e)} />
      <button onClick={e => this.onClick(e)}>Neuer Freund</button>
    </div>);
  }
}

export default Horst;
