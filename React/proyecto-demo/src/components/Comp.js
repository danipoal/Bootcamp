const React = require("react");

class Comp extends React.Component{
    render(){
        return React.createElement(
            "div", null, "Texto dentro de el componente"
        );
    }
}
export default Comp;