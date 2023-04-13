import "./ipro_edge.css";
import 'font-awesome/css/font-awesome.min.css';

function Ipro_Edge(){
    return(
        <div id="navi"><br></br>
            <div id="hari">
                <h3 style={{ color: "white" }}>iPro</h3>
                <h5 style={{ color: "white" }}>EDGE</h5>
            </div><br/><br/>
            <div class="div">
                <input id="hari2" type="Email" class="input-field" autoComplete="off" placeholder="name@gmail.com" name="name" />
                <div id="email">
                    <i class="fa fa-envelope-o" aria-hidden="true" style={{ color: "white" }}></i>
                </div>
            </div>
            <br/>
            <div id="div1">
            <input id="hari3" type="password" placeholder="password"/>
                <div id="user" >
            <i class="fa fa-user" aria-hidden="true" style={{ color: "white" }}></i>
            </div>            
            </div>
            <br/>&ensp;&ensp;&ensp;&ensp;
            <button id="hari4"><code><b>LOGIN</b></code></button>
            <br/><br/>
            <h6>copyright &copy; 2023</h6>
        </div>
    )
}
export default Ipro_Edge;