
import React from 'react';

function UserCard({ users }) {
    const cardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '1rem',
    };

    const cardStyle = {
        width: 'calc(33.33% - 2rem)',
        margin: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '1rem',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        color: 'black',
    };

    const buttonStyle = {
        borderRadius: '2rem',
        padding: '0.5rem 1rem',
        border: 'none',
    };

    const imageStyle = {
        borderRadius: '50%',
    };

    return (
        <div className="container">
            <div style={cardContainerStyle}>
                {users.map((user, index) => (
                    <div style={cardStyle} key={user.id}>
                        <div
                            className={`card ${index % 3 === 0 ? 'bg-light' : ''}`}
                            style={{ border: 'none', borderRadius: '10px' }}
                        >
                            <img
                                src={user.avatar}
                                className="card-img-top"
                                alt={`${user.first_name} ${user.last_name}`}
                                style={imageStyle}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {user.first_name} {user.last_name}
                                </h5>
                                <p className="card-text" style={{ color: 'black' }}>
                                    {user.email}
                                </p>
                                <button style={buttonStyle} className="btn btn-primary">
                                    More...
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserCard;
