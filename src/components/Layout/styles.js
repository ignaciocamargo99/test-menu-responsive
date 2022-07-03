import styled from 'styled-components'

import { valueSideBar } from 'styles/variables'

export const LayoutWrapper = styled.div`
  display: flex;
  &:hover {
    transition: 0.2s all ease;
  }
`

export const Main = styled.main`
  padding: calc(${valueSideBar.smSpacing} * 2);
  top: 0;
  position: absolute;
  overflow: hidden;
  left: ${({ isOpen }) => (isOpen ? '15vw' : '7vw')};
  max-width: ${({ isOpen }) => (isOpen ? '83vw' : '90vw')};
  min-width: ${({ isOpen }) => (isOpen ? '83vw' : '90vw')};

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  h5 {
    font-size: 0.8rem;
  }

  /**
  * Adapt the main content to responsive design
  */

  @media (max-width: 1500px) {
    left: ${({ isOpen }) => (isOpen ? '250px' : '90px')};
    min-width: ${({ isOpen }) => (isOpen ? '78vw' : '90vw')};
    max-width: ${({ isOpen }) => (isOpen ? '78vw' : '90vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '75vw' : '88vw')};
      max-width: ${({ isOpen }) => (isOpen ? '75vw' : '88vw')};
    }
  }

  @media (max-width: 1135px) {
    left: ${({ isOpen }) => (isOpen ? '250px' : '90px')};
    min-width: ${({ isOpen }) => (isOpen ? '75vw' : '89vw')};
    max-width: ${({ isOpen }) => (isOpen ? '75vw' : '89vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '72vw' : '86vw')};
      max-width: ${({ isOpen }) => (isOpen ? '75vw' : '86vw')};
    }
  }

  @media (max-width: 1000px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '87vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '87vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '84vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '84vw')};
    }
  }

  @media (max-width: 820px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '85vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '85vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '82vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '82vw')};
    }
  }

  @media (max-width: 750px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '84vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '84vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '81vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '81vw')};
    }
  }

  @media (max-width: 665px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '82vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '82vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '79vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '79vw')};
    }
  }

  @media (max-width: 588px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '81vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '81vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '77vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '77vw')};
    }
  }

  @media (max-width: 480px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '77vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '77vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '74vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '74vw')};
    }
  }

  @media (max-width: 390px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '73vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '73vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '70vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '70vw')};
    }
  }

  @media (max-width: 333px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '69vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '69vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '66vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '66vw')};
    }
  }

  @media (max-width: 290px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '65vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '65vw')};
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '62vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '62vw')};
    }
  }

  @media (max-width: 277px) {
    min-width: ${({ isOpen }) => (isOpen ? '0' : '55vw')};
    max-width: ${({ isOpen }) => (isOpen ? '0' : '55vw')};
    padding: 1rem 1rem 0 0;
    table {
      min-width: ${({ isOpen }) => (isOpen ? '0' : '51vw')};
      max-width: ${({ isOpen }) => (isOpen ? '0' : '51vw')};
    }
  }
`
