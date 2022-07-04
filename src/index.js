import React from 'react';
import ReactDom from "react-dom/client";

function Welcome(a){
    return <h1>Selamat Datang {a.name}!</h1>
}

let pengguna="Sri Nuhayatun";

function App(){
    if(pengguna==" "){
        return <button>Login</button>
    }else{
        return <Welcome name={pengguna}/>;
    }
}

const root =ReactDom.createRoot(document.getElementById("root"));
root.render(App());