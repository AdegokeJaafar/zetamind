import React, { Component } from 'react'

class StaffForm extends Component {
    render() {
        return (
        <div>
<form id="form"class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <h1 class="block text-gray-700 font-bold mb-2 text-xl text-center">STAFF FORM</h1>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="num">
                    Staff No.
                </label>
                <input
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="num" id="num" type="num" required/> 
                    </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="name">
                    First Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name" id="name" type="name"  required/>
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="name">
                    Last Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name" id="name" type="name" required/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="Date">
                Levels
                </label>
    
                <select id="class" name="class" autocomplete="class" class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option>Level 6</option>
                  <option>Level 7</option>
                  <option>Level 8</option>
                  <option>Level 9</option>
                  <option>Level 10</option>
                  <option>Level 11</option>
                  <option>Level 12</option>
                  </select>
                </div>   
           

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="Date">
                Class Held
                </label>
    
                <select id="class" name="class" autocomplete="class" class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option>JSS 1</option>
                  <option>JSS 2</option>
                  <option>JSS 3</option>
                  <option>SSS 1</option>
                  <option>SSS 2</option>
                  <option>SSS 3</option>
                  </select>
                </div>   
            <div class="flex items-center justify-between">
                <button 
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




export default StaffForm