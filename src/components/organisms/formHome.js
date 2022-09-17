import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../product.json';

import { Image, Table, Button, Input } from 'antd';
const { Search } = Input;
const { Column, ColumnGroup } = Table;

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         search: '',
         data: [],
      };
      this.handleSearch = this.handleSearch.bind(this);
   }
   componentDidMount() {
      this.setState({ ...this.state, product: data });
   }
   handleSearch(value) {
      this.setState({
         search: value,
         product: data.filter((e) =>
            e.title.toLowerCase().includes(value.toLowerCase())
         ),
      });
   }
   render() {
      return (
         <>
            <div className="search">
               <Search
                  placeholder="Search user"
                  allowClear
                  onChange={(e) => this.handleSearch(e.target.value)}
                  onSearch={(value) => this.handleSearch(value)}
               />
            </div>

            <Table dataSource={this.state.product}>
               <Column className="action" title="No" dataIndex="id" key="id" />
               <ColumnGroup className="desc" title="Product">
                  <Column
                     className="action"
                     title="Product"
                     dataIndex="title"
                     key="title"
                  />
                  <Column
                     className="action"
                     title="Brand"
                     dataIndex="brand"
                     key="brand"
                  />
               </ColumnGroup>
               <Column
                  className="desc"
                  title="Description"
                  dataIndex="description"
                  key="description"
               />
               <Column
                  className="desc"
                  title="Images"
                  dataIndex="thumbnail"
                  key="images"
                  render={(thumbnail) => (
                     <Image
                        className="images"
                        src={thumbnail}
                        width={250}
                        height={130}
                     />
                  )}
               />
               <Column
                  className="action"
                  title="Action"
                  dataIndex="id"
                  key="id"
                  render={(id) => (
                     <Link to={`/detail/${id}`}>
                        <Button className="button" type="primary">
                           Detail
                        </Button>
                     </Link>
                  )}
               />
            </Table>
         </>
      );
   }
}

export default App;
