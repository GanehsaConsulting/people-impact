export const Title = ({ children, className = '' }) => {
    return (
        <h1
            className={`text-4xl tracking-tight ${className}`}
        >
            {children}
        </h1>
    );
}