import React from 'react';
import ReactDOM from 'react-dom'

// import ProfileMenu from './profile-menu';
// import ProfileCompleted from './profile-completed'
// import ProfileInProgress from './profile-inprogress'
import './profile.css';

function Profile() {
    return (
        <div className="Profile">
            <div className="ProfileMenu">
                <ProfileMenu />
            </div>
            <div className="ProfileContent">
                <section id='Completed'>
                    <h1>Completed</h1>
                    <ProfileCompleted />
                </section>
                <section id='In-progress'>
                    <h1>In-progress</h1>
                    <ProfileInProgress />
                </section>
            </div>
        </div>
    );
}

class ProfileMenu extends React.Component {
    render() {
        return (
            <ul>
                <li id='avatar'>
                    <img id='avatar-img' alt='Smiling woman'></img>
                </li>
                <li id='myprojects'>
                    <a href='#'>My Projects</a>
                </li>
                <li id='notifications'>
                    <a href='#'>Notifications</a>
                </li>
                <li id='preferences'>
                    <a href='#'>preferences</a>
                </li>
            </ul>
        );
    }
}

class ProfileCompleted extends React.Component {
    render() {
        return (
            <>
            </>
        );
    }
}

class ProfileInProgress extends React.Component {
    render() {
        return (
            <>
            </>
        );
    }
}
ReactDOM.render(<ProfileCompleted />, document.getElementById('root'));
ReactDOM.render(<ProfileInProgress />, document.getElementById('root'));
ReactDOM.render(<ProfileMenu />, document.getElementById('root'));

export default Profile