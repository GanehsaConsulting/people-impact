export const Title = ({ children, className = '' }) => {
    return (
        <h1
            className={`text-2xl md:text-4xl tracking-tight ${className}`}
        >
            {children}
        </h1>
    );
}