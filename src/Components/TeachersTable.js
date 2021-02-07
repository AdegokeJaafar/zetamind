import React, { Component } from 'react';
import { teachers } from '../Data/data';

class TeachersTable extends Component {
    render(){
        return (
            <div>
                <h1 class="block text-gray-700 font-bold mb-2 text-xl text-center">TEACHER'S TABLE</h1>

                <table class="table-auto w-full">
                    <thead>
                        <tr>
                        <th class="w-1/5 bg-green-200 text-left">Staff No.</th>
                        <th class="w-1/5 bg-green-200 text-left">First Name</th>
                        <th class="w-1/5 bg-green-200 text-left">Last Name</th>
                        <th class="w-1/5 bg-green-200 text-left">Levels</th>
                        <th class="w-1/5 bg-green-200 text-left">Class Held</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers.map(teacher => (
                                <tr>
                                    <td>{teacher.staffNo}</td>
                                    <td>{teacher.firstName} </td>
                                    <td>{teacher.lastName}</td>
                                    <td>{teacher.level}</td>
                                    <td>{teacher.classHeld}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default TeachersTable