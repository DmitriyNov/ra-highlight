import New from "./New";
import Popular from "./Popular";

export default function NewPopularWrapper(Component, views) {
    const status = (views <= 100) ? "New" : (views > 1000) ? "Popular" : "";
    const NewPopularWrapper = (props) => {

        if (status === "New") {
            return (
                <New>
                    <Component {...props}/>
                </New>
            )
        } else if (status === "Popular") {
            return (
                <Popular>
                    <Component {...props}/>
                </Popular>
            )
        } else {
            return (
                <Component {...props}/>
            )
        }
        
    }

    const componentName = Component.displayName || Component.name;
    NewPopularWrapper.displayName = status + componentName;

    return NewPopularWrapper;
}
