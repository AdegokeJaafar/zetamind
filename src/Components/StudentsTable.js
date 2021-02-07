import React, { Component } from 'react';
import { students } from '../Data/data';

class StudentsTable extends Component {
    render(){
        return (
            <div>
                <h1 class="block text-gray-700 font-bold mb-2 text-xl text-center">STUDENT'S TABLE</h1>

                <table class="table-auto w-full">
                    <thead>
                        <tr>
                        <th class="w-1/5 bg-green-200 text-left">Students No.</th>
                        <th class="w-1/5 bg-green-200 text-left">First Name</th>
                        <th class="w-1/5 bg-green-200 text-left">Last Name</th>
                        <th class="w-1/5 bg-green-200 text-left">Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student => (
                                <tr>
                                    <td>{student.studentNo}</td>
                                    <td>{student.firstName} </td>
                                    <td>{student.lastName}</td>
                                    <td>{student.class}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentsTable