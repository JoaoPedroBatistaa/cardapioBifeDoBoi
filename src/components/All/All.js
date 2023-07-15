import React, { useState, useEffect } from 'react';
import './styles.css';


// IMAGENS
import whats from "./whats.png"
import hamburguer from "./hamburguer.png";
import pancake from "./pancake.png"
import example from "./hamburguers/example.png"
import tutorial from "./tutorial.png"
import close from "./close.png"

function All() {

  const [menuOption, setMenuOption] = useState('hamburguer');
  const [showPopup, setShowPopup] = useState(true);

  // useEffect(() => {
  //   // Defina o estado para não exibir o pop-up após um determinado período de tempo
  //   const timeout = setTimeout(() => {
  //     setShowPopup(false);
  //   }, 10000); // Defina aqui a quantidade de milissegundos que o pop-up deve permanecer visível (5 segundos neste exemplo)
  
  //   // Retorne uma função de limpeza para cancelar o timeout quando o componente for desmontado
  //   return () => clearTimeout(timeout);
  // }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  

  

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <div className='divClose'  onClick={handleClosePopup}>
            <img src={close} className='close'/>
          </div>
          <div className='popTop'>
            <p className='popTitle'>Seja bem-vindo ao cardápio do Bife do Boi!!</p>
          </div>
          <p className='popDesc'>Para alternar entre o menu de Hamburguers e Panquecas basta alternar entre os ícones ao topo do do cardápio como na imagem abaixo:</p>
          <img src={tutorial} className='tutorial'/>
        </div>
      )}

      <div className='whatsButton'>
        <img src={whats} className='whatsIcon'></img>
      </div>

      <div className="Header">
        <p className='Title'>Bife do Boi</p>
        <div className='turnMenu'>
          <label>
            <input 
              type="radio" 
              name="menu" 
              value="hamburguer" 
              className="hiddenRadio"
              checked={menuOption === 'hamburguer'}
              onChange={() => setMenuOption('hamburguer')}
              defaultChecked
            />
            <img 
              src={hamburguer} 
              className='menuIcon'
            />
          </label>
          <label>
            <input 
              type="radio" 
              name="menu" 
              value="pancake" 
              className="hiddenRadio"
              checked={menuOption === 'pancake'}
              onChange={() => setMenuOption('pancake')}
            />
            <img 
              src={pancake} 
              className='menuIcon'
            />
          </label>
        </div>
      </div>

      <div className={`ContainerHamburguer ${menuOption === 'pancake' ? 'inactive' : ''}`}>

        <p className='ContainerTitle'>Menu Hamburguers</p>
        <div className='linhaTitles'></div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>



      </div>
      
      
      
      <div className={`ContainerPancake ${menuOption === 'hamburguer' ? 'inactive' : ''}`}>

        <p className='ContainerTitle'>Menu Panquecas</p>
        <div className='linhaTitles'></div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>



      </div>
      
      
      <div className='ContainerDrinks'>

        <p className='ContainerTitle'>Bebidas</p>
        <div className='linhaTitles'></div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>

        <div className='foodItem'>
          <div className='foodDesc'>
            <div className='descTitleArea'>
              <p className='descTitle'>X-Bife do Boi</p>
              <p className='descPrice'>23,00</p>
            </div>

            <div className='linha'></div>

            <p className='desc'>2 hamburguers, pão, presunto e mussarela, alface e tomate, milho e batata</p>
          </div>

          <div className='foodImg'>
            <img src={example} className='foodImgImage'/>
          </div>
        </div>



      </div>
    </div>
    
  );
}

export default All;
