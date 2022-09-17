import React, { Component } from 'react';
import { Button, Typography, Space, Image } from 'antd';
import {
   LinkedinOutlined,
   InstagramOutlined,
   GithubOutlined,
   MailOutlined,
} from '@ant-design/icons';
const { Title } = Typography;

class App extends Component {
   render() {
      return (
         <>
            <div className="lgo">
               <Image className="" src={'/logo512.png'} height={205} />
            </div>
            <div className="contact">
               <Title level={1}>Contact Us</Title>
               <Space direction="horizontal">
                  <Button
                     className="button"
                     href="https://www.linkedin.com/in/ayi-solahudin/"
                  >
                     <LinkedinOutlined />
                     Linkedin
                  </Button>
                  <Button
                     className="button"
                     href="https://www.instagram.com/ayi.shallahudin/"
                  >
                     <InstagramOutlined />
                     Instagram
                  </Button>
                  <Button className="button" href="https://github.com/ayiis218">
                     <GithubOutlined />
                     GitHub
                  </Button>
                  <Button className="button" href="mailto:ayiis.218@gmail.com">
                     <MailOutlined />
                     Gmail
                  </Button>
               </Space>
            </div>
         </>
      );
   }
}

export default App;
