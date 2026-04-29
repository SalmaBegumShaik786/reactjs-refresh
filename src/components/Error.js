import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Error Page Us</h1>
            <h2>Oops !!! Something went wrong</h2>
            <h3>{error.data}</h3>
        </div>
    )
}

export default Error;