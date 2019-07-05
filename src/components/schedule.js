import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCourse } from '../actions';


class Schedule extends Component {

    constructor(props) {
        super(props)

        this.renderCourse = this.renderCourse.bind(this);

    }

    renderCourse(course) {
        return (
            <div key={this.props.courses.indexOf(course)} className={`slot ${course.enrolled ? 'slot_course' : 'slot_empty'}`}>
            <div>{course.enrolled ? course.title : "Empty Slot"}</div>
            <a className= {`action slot_remove`} onClick={() => this.props.removeCourse(course)}>Remove Course</a>
            </div>
        )
    }

    render() {
        return (
            <div>
            <div className="schedule_slot">
                {
                this.props.courses.map(this.renderCourse)
                }
            </div>
        </div>

        )
       
    }

}

function mapStateToProps(state) {
    return { courses: state.courses };
}


function mapDispatchToProps(dispatch) {
    return { removeCourse:(course) => {
        dispatch(removeCourse(course))

    }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);