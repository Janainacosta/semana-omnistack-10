import React, { useState, useEffect } from 'react'; 
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';


// Componente: função que retorna algum conteúdo html, css ou javascript (questoa de interface por exemplo)
//bloco isolado de html, css,JS, o qual não interfere no restante da aplicação.

// Propriedade: informações que um componente pai passa para o componente filho.

// Estado: informações mantidas pelo componente(lembrar: imutabilidade)

function App(){
    const[devs, setDevs] = useState([]);

   
    useEffect(() => {
      async function loadDevs(){
        const response = await api.get('/devs');

        setDevs(response.data);
      }

      loadDevs();
    }, []);

    async function handleAddDev(data){
      // e.prevenDefault(); aqui esta errado pq: essa linha de cod, previne que o navegador atualize a pagina
      // dai quando ele atualiza ele perde os daddos do stado e tbm da chamar, so faltou um 't' ali
      //e.preventDefault();
      
      const response = await api.post('/devs', data)

      // console.log(response.data);
     

     setDevs([...devs, response.data]);
    }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))} 
        </ul>
      </main>

    </div>
 // <> <h1>Contador: {counter}</h1>
   //<button onClick={incrementCounter}>Incrementar</button>
  // </>
  );
}  

export default App;
