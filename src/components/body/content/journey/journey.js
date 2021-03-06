import React, { Component } from 'react';
import TableCompleted from './tablecompleted';
import TableCurrent from './tablecurrent';

class Journey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggeduser : null
        }
    }

    //current logged user will be added to the state
    componentWillMount(){
        this.setState({loggeduser : this.props.loggeduser});
    }

    render() {
        return (
            <div>
                <h4>My Trips</h4>
                <nav>
                    <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Current</a>
                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Completed</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <br/>
                        <TableCurrent currentuser={this.state.loggeduser.id}/>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div class="table-responsive">
                        <br/>
                            <TableCompleted currentuser={this.state.loggeduser.id}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Journey;