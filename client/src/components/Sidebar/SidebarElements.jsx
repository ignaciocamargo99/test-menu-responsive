import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { btnLockUnlock, valueSideBar } from 'styles/variablesSidebar'

export const SidebarContainer = styled.div`
  width: ${({ isOpen }) => (!isOpen ? 'auto' : valueSideBar.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 3800;
  padding: ${valueSideBar.lgSpacing};
  min-height: 100%;
  position: fixed;
  @media (max-width: 1000px) {
    width: ${({ isOpen }) => (!isOpen ? 'auto' : '100vw')};
  }
`

export const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${valueSideBar.borderRadius};
  input {
    padding: 0 ${valueSideBar.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 14px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`

export const SSearchIcon = styled.button`
  ${btnLockUnlock};
  padding: calc(${valueSideBar.mdSpacing} - 2px) ${valueSideBar.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`

export const SContainerItems = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`

export const SDivider = styled.div`
  height: 0.2vh;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${valueSideBar.lgSpacing} 0;
`

export const SButton = styled.button`
  ${btnLockUnlock};
  width: 100%;
  height: 5vh;
  border-radius: 10%;
  background: ${({ theme }) => theme.bgBtnLock};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease;
  cursor: pointer;
  border-radius: ${valueSideBar.borderRadius};
  margin: 40px 0px;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`

export const SLinkContainer = styled.div`
  background: ${({ theme, isActive }) => (!isActive ? 'transparent' : theme.bg3)};
  border-radius: ${valueSideBar.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 0.95rem;
  padding: calc(${valueSideBar.smSpacing} - 2px) 0;
`

export const SLogo = styled.div`
  width: 51px;

  img {
    max-width: 100%;
    height: 100%;
  }
  cursor: pointer;

  margin-bottom: ${valueSideBar.lgSpacing};
`

export const SLinkIcon = styled.div`
  padding: ${valueSideBar.smSpacing} ${valueSideBar.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${valueSideBar.smSpacing};
`

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${valueSideBar.smSpacing} / 2) ${valueSideBar.smSpacing};
  border-radius: calc(${valueSideBar.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;

  margin-right: ${valueSideBar.mdSpacing};
`

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`
export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`
export const SThemeToggler = styled.button`
  ${btnLockUnlock};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};

  position: relative;
`

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`
