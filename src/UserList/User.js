import React from 'react'

class User extends React.Component {
    state = {
        isEdited: false,
        userName: this.props.user.name
    }

    editToggle = () => {
        this.setState({
            isEdited: !this.state.isEdited,
            userName: this.props.user.name
        })
    }

    onUserNameChangeHandler = event => {
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            this.state.isEdited ?
                <div>
                    <button onClick={this.editToggle}>
                        Cancel
                </button>
                    <input
                        type='text'
                        onChange={this.onUserNameChangeHandler}
                        value={this.state.userName}
                    />
                    <button onClick={() => {
                        this.props.onEditUserHandler(
                            this.props.user.key,
                            this.state.userName,
                        )
                        // .then(()=>this.editToggle())
                        this.editToggle()
                    }}>
                        Save
                    </button>
                </div>
                :
                <div>
                    <button
                        onClick={this.editToggle}>
                        Edit!
                    </button>
                    {this.props.user.name}
                </div>
        )
    }
}

export default User