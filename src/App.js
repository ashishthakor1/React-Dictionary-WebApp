import './App.css';
import Search from './componants/Search';
import NavBar from './componants/NavBar/Navbar';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  const searchStyle = { padding: '0', marginTop: 70, marginBottom: 30 };
  return (
    <div className='App'>
      <Layout style={{ padding: '10px' }}>
        <NavBar />
        <Content className='site-layout' style={searchStyle}>
          <Search />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
