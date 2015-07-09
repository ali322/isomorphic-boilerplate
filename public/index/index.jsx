var React = require("react");

// require("./stylesheet/index.scss");
var User = React.createClass({
    render() {
        console.log(this.props);
        return (
            <div>
                <UserButton name={this.props.name}/>
            </div>
        )
    }
})
var UserButton = React.createClass({
    handleClick() {
        alert('clicked3!');
    },
    render() {
        // console.log(this.props);
        return (
            <div>
                <p>{this.props.name}</p>
                <button onClick={this.handleClick}>button553</button>
            </div>
        )
    }
});
module.exports = User;

if(typeof window !== 'undefined'){
    window.onload = function(){
        React.render(<User/>,document.body);
    };
}
