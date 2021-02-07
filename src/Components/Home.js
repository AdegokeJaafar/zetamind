import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
                    <div>
                        <header class="text-center font-bold">
                            WELCOME TO CONTONSO COLLEGE
                        </header>

                        <div>
                            <p class="font-bold">
                            Go to Student Form
                            </p>  
                            <Link to="/student-form">
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Go to Page
                                </button>
                            </Link>   
                        </div>
                            <br></br>
                    <div>
                        <p class="font-bold">
                        Go to Staff Form
                        </p>  
                        <Link to="/staff-form">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Go to Page
                        </button>
                        </Link>   
                    </div>
                            <br></br>
                    <div>
                        <p class="font-bold">
                        Go to StudentPerTeacher Page
                        </p>  
                        <Link to="/page">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Go to Page
                            </button>
                            </Link>   
                    </div>
                        <br></br>
                    <div>
                        <p class="font-bold"> 
                        Go to Teacher's Table
                        </p> 
                        <Link to="/teacher-table">
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Go to Page
                            </button>  
                            </Link> 
                    </div>
                        <br></br>
                    <div>
                        <p class="font-bold">
                        Go to Student's Table
                        </p>  
                        <Link to="/students-table">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Go to Page
                            </button>
                            </Link>   
                    </div>


                </div>
        )
    }
}

export default Home