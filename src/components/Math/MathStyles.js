const InlineMathStyles = {
    InlineMath: {
        transition: 'all 0.2s',
        '&:hover': {
            margin: '0 2px',
            fontSize: '1.625rem'
        }
    }
}

const BlockMathStyles = {
    BlockMath: {
        transition: 'all 0.2s',
        display: 'inline-block',
        margin: '30px 0 30px 70px',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    }
}

export {
    InlineMathStyles,
    BlockMathStyles
}