import React from 'react';
import {
  GithubFilled,
  GithubOutlined,
  FacebookFilled,
  FacebookOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import classes from './NavBar.module.css';
// import img from '../../assets/final-logo.PNG';
import img from '../../assets/logo5.PNG';

import {
  Button,
  Navbar as navbar,
  Container,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
const { Header } = Layout;

const NavBackgroundColor = '#e3f2fd';

const Navbar = () => {
  return (
    <>
      {/* <Header className={classes.header}>
        <Menu theme='dark' className={classes.menu} mode='horizontal'>
          <Menu.Item>
            <img src={img} alt='logo' className={classes.imgStyle} />
          </Menu.Item>
        </Menu>
        <Menu
          theme='dark'
          mode='horizontal'
          className={(classes.menu, classes.rightStyle)}
        >
          <Menu.Item key='2'>
            <GithubFilled
              style={{ fontSize: '30px' }}
              onClick={() => {
                window.open('https://github.com/ashishthakor');
              }}
            />
          </Menu.Item>
          <Menu.Item key='3'>
            <FacebookFilled
              style={{ fontSize: '30px' }}
              onClick={() => {
                window.open('https://m.facebook.com/ashish.thakor.71465');
              }}
            />
          </Menu.Item>
        </Menu>
      </Header> */}
      {/* <nav class='navbar navbar-expand-lg navbar-light bg-light'> */}
      <nav
        className='navbar navbar-expand-lg  navbar-light navbar-default navbar-fixed-top'
        style={{
          // backgroundColor: '#a6a6a6',
          // backgroundColor: '#4f5eff',
          // backgroundColor: '#6a76f7',
          // backgroundColor: '#1890ff',
          // backgroundColor: '#2e3133',
          // backgroundColor: '#FF5758',
          backgroundColor: '#000',
          borderRadius: '15px',
        }}
      >
        <img src={img} alt='logo' className={classes.imgStyle} />
        <button
          className='navbar-toggler bg-light'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <GithubOutlined
                // fill='#fff'
                style={{ fontSize: '30px', color: '#fff' }}
                onClick={() => {
                  window.open('https://github.com/ashishthakor');
                }}
              />
              {/* <GithubFilled
                style={{ fontSize: '30px' }}
                onClick={() => {
                  window.open('https://github.com/ashishthakor');
                }}
              /> */}
            </li>
            <li className='nav-item'>
              <FacebookFilled
                style={{ fontSize: '30px', color: '#fff' }}
                onClick={() => {
                  window.open('https://m.facebook.com/ashish.thakor.71465');
                }}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
