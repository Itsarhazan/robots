
export function NiceButton({ Icon, children, ...restOfProps }) {
    console.log('children:', children)
    

    return (
        <button {...restOfProps}>
            {Icon && <Icon />}
            {' '}
            {children}
        </button>
    )
}
