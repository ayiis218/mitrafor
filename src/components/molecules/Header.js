import React, { Component } from 'react';
import wrapped from '../../hoc';
import { Image, Layout, Menu } from 'antd';
import {
   HomeOutlined,
   InfoCircleOutlined,
   PhoneOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const getItem = (label, key, icon, children) => {
   return {
      key,
      icon,
      children,
      label,
   };
};

const Navigation = [
   getItem('Home', '1', <HomeOutlined />),
   getItem('About', '2', <InfoCircleOutlined />),
   getItem('Contact', '3', <PhoneOutlined />),
];

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         collapsed: false,
         defaultKey: ['1'],
      };
      this.handleClick = this.handleClick.bind(this);
   }
   componentDidMount() {
      if (this.props.defaultKey) {
         this.setState({
            ...this.state,
            defaultKey: [`${this.props.defaultKey}`],
         });
      }
      return;
   }
   handleClick(e) {
      this.setState({ ...this.state, defaultKey: [`${e.key}`] });
      const redirectTo = ['', 'about', 'contact'];
      this.props.navigate(`/${redirectTo[e.key - 1]}`);
   }
   render() {
      return (
         <Header>
            <div className="logo">
               <Image className="avatar" src={'/logo512.png'} height={65} />
            </div>
            <Menu
               theme="dark"
               mode="horizontal"
               items={Navigation}
               onClick={this.handleClick}
               selectedKeys={this.state.defaultKey}
            />
         </Header>
      );
   }
}
export default wrapped(App);
