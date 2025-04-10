import { IconHome } from '@tabler/icons-react';import { IconSettingsCheck } from '@tabler/icons-react';import { IconCertificate } from '@tabler/icons-react';import { IconPhone } from '@tabler/icons-react';import { IconX } from '@tabler/icons-react';import { IconMenu3 } from '@tabler/icons-react';import { IconAdjustmentsCog } from '@tabler/icons-react';
import './assets/header.css';
import { useState } from 'react';
import {Link} from "react-route-dom"

function Header(){
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return(
    <>
        {!isMobileMenuOpen && (
        <div className="mobile-menu-button">
            <button onClick={toggleMenu}>
                <IconMenu3 stroke={3} />
            </button>
        </div>
    )}
 <div className="PageLogo">
            <h1>J.</h1>
</div>
        <div className={`menu ${isCollapsed ? 'collapsed' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <button>
                        {isCollapsed ? <IconMenu3 stroke={2} /> : <IconX stroke={2} />}
                    </button>
                </div>
                <br />

                <Link to = "/Home">
                    <button><IconHome stroke={2} />
                        <span>Home</span>
                    </button>
                </Link>
                <Link to = "/Skills">
                    <button><IconSettingsCheck stroke={2} />
                        <span>Key Competencies</span>
                    </button>
                </Link>
                <Link to = "/Projects">
                    <button><IconAdjustmentsCog stroke={2} />
                        <span>Projects</span>
                    </button>
                </Link>
                <Link to = "/Certificates">
                    <button><IconCertificate stroke={2} />
                        <span>Certificates</span>
                    </button>
                </Link>
                <Link to = "/Contact">
                    <button><IconPhone stroke={2} />
                        <span>Contact</span>
                    </button>
                </Link>
            </nav>


        </div>
    </>
    );
}

export default Header