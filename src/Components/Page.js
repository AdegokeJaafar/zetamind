import React, { Component } from 'react'
import { students, teachers } from '../Data/data';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state= {
            studentPerTeacher: [],
            selectedTeacher: ''
        }
    }

    handleChange = (event) => {
        const { name, value} = event.target;
        const studentPerTeacher = students.filter(student => student.classTeacherNo === value);

        this.setState({
            selectedTeacher: value,
            studentPerTeacher
        });
        
    };

    render(){
        const { selectedTeacher, studentPerTeacher } = this.state;
        return (
            <div>
                <h1 class="block text-gray-700 font-bold mb-2 text-xl text-center">STUDENT PER TEACHER PAGE</h1>
<br></br>
<br></br>
                <select
                    name="teacher"
                    onChange={this.handleChange}
                    value={selectedTeacher}
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                    <option value=''>Select Teacher</option>
                 
                 {
                     teachers.map(teacher => (
                        <option
                            key={teacher.staffNo}
                            value={teacher.staffNo}
                        >
                            {teacher.firstName} {teacher.lastName}
                            </option>
                     ))
                 }
           </select>
           <br></br>
           <br></br>
           <br></br>
                <table class="w-">
                <thead>
                    <tr>
                    <th class="w-1/5 bg-green-200 text-left">Students No.</th>
                    <th class="w-1/5 bg-green-200 text-left">First Name</th>
                    <th class="w-1/5 bg-green-200 text-left">Last Name</th>
                    <th class="w-1/5 bg-green-200 text-left">Class</th>
                    <th class="w-1/5 bg-green-200 text-left">Class Teacher No </th>
                    <th class="w-1/5 bg-green-200 text-left">ClassTeacherFullName</th>
                    </tr>
                </thead> 
                <tbody>
                {
                    studentPerTeacher.map(student => (
                                <tr>
                                    <td>{student.studentNo}</td>
                                    <td>{student.firstName} </td>
                                    <td>{student.lastName}</td>
                                    <td>{student.class}</td>
                                    <td>{student.classTeacherNo}</td>
                                    <td>{student.classTeacherFull}</td>
                                </tr>
                            ))
                        }
                    </tbody> 
                 </table>    

                 

            </div>
        )
    }
}

export default Page