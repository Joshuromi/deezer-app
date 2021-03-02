import Navbar from '../navbar/navbar.component';
import Avatar from '../../assest/avatar.svg';
import './sidebar.style.css';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-profile">
            <img src={Avatar} alt="avatar" className="profile-img" />
            <p>Josh Ojuromi</p>
        </div>
        <div className="page-links"></div>
        <Navbar />
    </div>
)

export default Sidebar;