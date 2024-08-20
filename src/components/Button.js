import React from "react";
import '../styles/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    path,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={path}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSizes}`}>
                {children}
            </button>
        </Link>
    )
};