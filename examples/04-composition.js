var React = require('react');

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic hash={this.props.hash} />
                <ProfileLink username={this.props.username} />
            </div>
        );
    }
});

var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={'http://www.gravatar.com/avatar/' + this.props.hash } />
        );
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <a href={'http://www.facebook.com/' + this.props.username}>
                {this.props.username}
            </a>
        );
    }
});

React.render(
    <Avatar username="m.schuhfuss" hash="e506e5bd38075f5fe7f9e53a597c1f3a" />,
    document.body
);