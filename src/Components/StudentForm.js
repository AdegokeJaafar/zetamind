import React, { Component } from 'react' 

class StudentForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
          student: '',
          firstname: '',
          lastname: '',
          class: ''
        }
    }

    handleStudentChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

   
    handleSubmit = event => {
        alert(`${this.state.student} ${this.state.firstname} ${this.state.lastname} ${this.state.class}`)
            event.preventDefault()
    }
    render() {
        return (
<div>
<form id="form"class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <h1 class="block text-gray-700 font-bold mb-2 text-xl text-center">STUDENT FORM</h1>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="studentNo">
                    Student No.
                </label>
                <input
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="studentNo" id="studentNo" type="text" required/> 
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="firstName">
                    First Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="firstName" id="firstName" type="text"  required/>
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="name">
                    Last Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="lastName" id="lastName" type="text" required/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="Date">
                Class
                </label>
    
                <select id="class" name="class" class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option>JSS 1</option>
                  <option>JSS 2</option>
                  <option>JSS 3</option>
                  <option>SSS 1</option>
                  <option>SSS 2</option>
                  <option>SSS 3</option>
                  </select>
                </div>  
                 
            <div class="flex items-center justify-between">
                <button id="submit"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                     Submit
                </button>
            </div>

            <div class="mb-4">

 </div>
 
        </ form >

</div>
        )
    }
}
/* <div>
<label>Student No.</label>
<input type="text" value={this.state.student}  onChange={this.handleStudentChange}/>
            </div>

            <div>
<label>First Name</label>
<input type="text" value={this.state.firstname}  onChange={this.handleFirstnameChange}/>
            </div>

            <div>
<label>Last name</label>
<input type="text" value={this.state.lastname}  onChange={this.handleLastnameChange}/>
            </div>

            <div>
<label>Class</label>
<select value={this.state.class} onChange={this.handleClassChange}>
    <option value="jss1">JSS 1</option>
    <option value="jss2">JSS 2</option>
    <option value="jss3">JSS 3</option>
    <option value="sss1">SSS 1</option>
    <option value="sss2">SSS 2</option>
    <option value="sss3">SSS 3</option>
</select>
            </div>
            <button type="submit">Submit</button> */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


export default StudentForm;