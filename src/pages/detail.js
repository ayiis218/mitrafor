import React, { Component } from 'react';
import { Typography, Space, Image } from 'antd';
import LayoutMain from '../layouts';
import wrapped from '../hoc';
import data from '../components/product.json';

const { Text } = Typography;

const price = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USA',
});

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         product: [],
      };
   }
   componentDidMount() {
      if (this.props.params.id) {
         this.setState({
            product: data.filter(
               (element) => element.id === parseInt(this.props.params.id)
            ),
         });
      }
   }

   render() {
      return (
         <>
            <LayoutMain>
               <Space direction="vertical">
                  {this.state.product.length ? (
                     <>
                        <Text className="title">Images:</Text>
                        <Image
                           className="images"
                           src={this.state.product[0].thumbnail}
                           width={300}
                           height={170}
                        />
                        <Text className="title">
                           Name Product: {this.state.product[0].title}
                        </Text>
                        <Text className="title">
                           Brand: {this.state.product[0].brand}
                        </Text>
                        <Text className="title">
                           Category: {this.state.product[0].category}
                        </Text>
                        <Text className="title">
                           Stock: {this.state.product[0].stock}
                        </Text>
                        <Text className="title">
                           Price: {price.format(this.state.product[0].price)}
                        </Text>
                        <Text className="title">
                           Discount:{' '}
                           {price.format(
                              this.state.product[0].discountPercentage
                           )}
                        </Text>
                        <Text className="title">
                           Rating: {this.state.product[0].rating}
                        </Text>
                     </>
                  ) : (
                     <Text className="title">No data</Text>
                  )}
               </Space>
            </LayoutMain>
         </>
      );
   }
}

export default wrapped(App);
