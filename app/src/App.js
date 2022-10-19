import './App.css'

export default function App(){
    return(
        <div>
            <h1>To Dew List</h1>

            <input type="text"></input>
            <button>+</button>


            <ul>
                <li>
                    <input type="checkbox"></input>
                    eat bugs
                </li>

                <li>
                    <input type="checkbox"></input>
                    sit on a leaf
                </li>

                <li>
                    <input type="checkbox"></input>
                    fight god
                </li>
            </ul>

            <footer>
                <p>1 item left</p> 
                <p> all | to-dew | to-did</p>
                <button>clear</button>
            </footer>

        </div>




    )
}