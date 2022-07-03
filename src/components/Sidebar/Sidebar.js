import { logoSVG } from 'assets/index'
import { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineApartment, AiOutlineHome, AiOutlineLock, AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { MdLogout, MdOutlineAnalytics } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import { ThemeContext } from '../../App'
import {
    SButton,
    SContainerItems,
    SDivider,
    SidebarContainer,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb
} from './styles'

const Sidebar = ({ isOpenSideBar }) => {
    const searchRef = useRef(null)
    const { setTheme, theme } = useContext(ThemeContext)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { pathname } = useLocation()
    const isOpen = isOpenSideBar

    useEffect(() => {
        setSidebarOpen(sidebarOpen)
        isOpen(sidebarOpen)
    }, [isOpen, sidebarOpen])

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true)
            searchRef.current.focus()
        } else {
            console.log(searchRef.current.value)
            // search some functionality
        }
    }

    return (
        <SidebarContainer isOpen={sidebarOpen}>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>
            <SSearch onClick={searchClickHandler} style={!sidebarOpen ? { width: 'fit-content' } : {}}>
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input ref={searchRef} placeholder="Buscar..." style={!sidebarOpen ? { width: 0, padding: 0 } : {}} />
            </SSearch>
            <SContainerItems>
                <SDivider />
                {primaryLinksArray.map(({ icon, label, notification, to }) => (
                    <SLinkContainer key={label} isActive={pathname === to}>
                        <SLink to={to} style={!sidebarOpen ? { width: 'fit-content' } : {}}>
                            <SLinkIcon>{icon}</SLinkIcon>
                            {sidebarOpen && (
                                <>
                                    <SLinkLabel>{label}</SLinkLabel>
                                    {/* if notifications are at 0 or null, do not display */}
                                    {!!notification && <SLinkNotification>{notification}</SLinkNotification>}
                                </>
                            )}
                        </SLink>
                    </SLinkContainer>
                ))}
                <SDivider />
                {secondaryLinksArray.map(({ icon, label, to }) => (
                    <SLinkContainer key={label} isActive={pathname === to}>
                        <SLink to={to} style={!sidebarOpen ? { width: 'fit-content' } : {}}>
                            <SLinkIcon>{icon}</SLinkIcon>
                            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                        </SLink>
                    </SLinkContainer>
                ))}
                <SDivider />
                <STheme>
                    {sidebarOpen && <SThemeLabel>Modo oscuro</SThemeLabel>}
                    <SThemeToggler
                        isActive={theme === 'dark'}
                        onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}
                    >
                        <SToggleThumb style={theme === 'dark' ? { right: '1px' } : {}} />
                    </SThemeToggler>
                </STheme>
                <SButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLock />
                </SButton>
            </SContainerItems>
        </SidebarContainer>
    )
}

const primaryLinksArray = [
    {
        label: 'Inicio',
        icon: <AiOutlineHome />,
        to: '/',
        notification: 0
    },
    {
        label: 'Usuarios',
        icon: <BsPeople />,
        to: '/users',
        notification: 0
    },
    {
        label: 'Roles',
        icon: <MdOutlineAnalytics />,
        to: '/roles',
        notification: 3
    },
    {
        label: 'Clientes',
        icon: <AiOutlineApartment />,
        to: '/customers',
        notification: 1
    }
]

const secondaryLinksArray = [
    {
        label: 'Configuración',
        icon: <AiOutlineSetting />,
        to: '/configs'
    },
    {
        label: 'Cerrar sesión',
        icon: <MdLogout />,
        to: '/logout'
    }
]

export default Sidebar
