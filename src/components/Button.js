import React from "react";
import '../styles/Button.css';
import { Link } from 'react-router-dom';

export const Button = ({
    children,
    path,
    style,
    color
}) => {
    return (
        <Link to={path}>
            <button style={style} className={`btn btn--${color} btn--large`}>
                {children}
            </button>
        </Link>
    )
};