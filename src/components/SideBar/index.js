import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from './SideBar.elements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarMenu>
          <SideBarLink to='/'>
            Pizza's
          </SideBarLink>
          <SideBarLink to='/'>
            Desserts
          </SideBarLink>
          <SideBarLink to='/'>
            Full Menu
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to='/'>
            Order Now
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarContainer>
    </>
  )
};

export default SideBar;
