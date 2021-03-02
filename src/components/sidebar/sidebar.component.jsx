import Avatar from '../../assest/avatar.svg';
import './sidear.style.css';

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-profile">
            <img src={Avatar} alt="avatar" className="profile-img" />
            <p>Josh Ojuromi</p>
        </div>
        <div className="page-links"></div>
    </div>
)

export default Sidebar;