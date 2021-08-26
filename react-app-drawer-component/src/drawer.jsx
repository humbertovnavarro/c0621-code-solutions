import React from 'react';
class DrawerItem extends React.Component {
  render() {
    return (
      <li className={'drawer-item'}>
        <a>
          {this.props.title}
        </a>
      </li>
    );
  }
}
class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { isOpen: false };
  }

  handleModalClick(e) {
    if (!this.state.isOpen) {
      return;
    }
    if (e.target.matches('.modal')) {
      this.setState({ isOpen: false });
    }
  }

  handleButtonClick() {
    this.setState({ isOpen: true });
  }

  render() {
    const items = this.props.items.map(item => {
      return <DrawerItem key={item.title} title={item.title} />;
    });
    const state = this.state.isOpen ? 'open' : 'close';
    return (
    <div className={'drawer'}>
    <button onClick={this.handleButtonClick}><i className="fas fa-bars"></i></button>
    <div onClick={this.handleModalClick} className={`modal ${state}`}>
      <div className={`drawer-container ${state}`}>
        <div className={'drawer'}>
            <h1>{this.props.title}</h1>
            <ul>
              {items}
            </ul>
        </div>
      </div>
    </div>
    </div>
    );
  }
}
export default Drawer;
