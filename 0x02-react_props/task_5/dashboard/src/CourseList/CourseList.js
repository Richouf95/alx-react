import React from 'react'
import './CourseList.css'
import CourseListRow from './CourseListRow'

const CourseList = () => {
  return (
    <table data-testid='CourseList' style={{marginTop: "20px"}}>
        <thead>
            <CourseListRow textFirstCell="Available courses" isHeader="true"/>
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader="true"/>
        </thead>
        <tbody>
            <CourseListRow textFirstCell="ES6" textSecondCell="60" />
            <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
            <CourseListRow textFirstCell="React" textSecondCell="40" />
        </tbody>
    </table>
  )
}

export default CourseList