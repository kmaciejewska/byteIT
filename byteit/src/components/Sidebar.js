import React, { useEffect } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

export default function Sidebar({ isOpen, toggleSidebar }) {
  let width = useWindowDimensions();

  useEffect(() => {
    toggleSidebar(false);
  }, [width]);

  return (
    <SidebarContainer isOpen={isOpen} onClick={() => toggleSidebar(false)}>
      <Icon onClick={() => toggleSidebar(false)}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={() => toggleSidebar(false)}>
            about
          </SidebarLink>
          <SidebarLink to="services" onClick={() => toggleSidebar(false)}>
            services
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={() => toggleSidebar(false)}>
            portfolio
          </SidebarLink>
          <SidebarLink to="contact" onClick={() => toggleSidebar(false)}>
            contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
