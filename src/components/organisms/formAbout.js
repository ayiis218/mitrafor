import React, { Component } from 'react';
import { Typography, Image, Button, Space } from 'antd';
const { Title } = Typography;

class App extends Component {
   render() {
      return (
         <div className="about">
            <Title level={2}>Prodotti</Title>
            <Title className="bio">
               Sebuah Web Aplikasi yang berisi produk elektronik, food,
               aksesoris, fashion, furniture, dan beberapa produk lainnya.
               Aplikasi ini user bisa melakukan pencarian berbagai peroduk
               dengan memasukan kata kunci dan juga user bisa melihat detail
               dari produk.
            </Title>
            <Image
               className="profile"
               src="https://i.postimg.cc/prcBDMrC/ai-2.jpg"
               width={100}
            />
            <Title level={2}>Ayi Solahudin</Title>
            <Title className="bio">
               Saya merupakan lulusan SMK Negeri 1 Kawali jurusan Rekayasa
               Perangkat Lunak dan seorang alumni di Pijar Camp sebagai
               Fullstack Web Development
            </Title>
            <Title level={5}>My Project</Title>
            <Space direction="horizontal">
               <Button
                  className="button"
                  href="https://ricette-dellapp-webapp.vercel.app/"
                  size="large"
               >
                  Ricette dellApp
               </Button>
               <Button
                  className="button"
                  href="https://ricette-mobile.vercel.app/"
                  size="large"
               >
                  Ricette Mobile
               </Button>
               <Button
                  className="button"
                  href="https://nokujob.web.app/"
                  size="large"
               >
                  Soku Job
               </Button>
               <Button
                  className="button"
                  href="https://skyloca.vercel.app/"
                  size="large"
               >
                  Skyloca
               </Button>
               <Button
                  className="button"
                  href="https://negozioapp.netlify.app/"
                  size="large"
               >
                  Negozio
               </Button>
            </Space>
         </div>
      );
   }
}

export default App;
