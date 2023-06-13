import './Help.scss';

function Help(){
    

    return(
        <div className='help'>
            <h1 className='help-title'> Besoin d'aide ?</h1>
            <div className="help-tabs">
    <input className="help-tabs"type="radio" id="tabfree" name="mytabs"checked='checked' /> 
    <label className='help-label blue'for="tabfree">Je suis une entreprise</label>
    <div className="help-tab blue">  
     
      <div className='help-tab-faq'> 
      <input className='help-tab-faq-input' type='checkbox'  id='check1'/>
      <label  for='check1'className='help-tab-faq-label'>Comment publier une annonce ?</label>
      <div className='help-tab-faq-content'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      </div>

      <div className='help-tab-faq'> 
      <input className='help-tab-faq-input' type='checkbox' id='check2'/>
      <label  for='check2'className='help-tab-faq-label'>Comment publier une annonce ?</label>
      <div className='help-tab-faq-content'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      </div>

    </div>

    <input className="help-tabs"type="radio" id="tabsilver" name="mytabs"/>
    <label className='help-label orange' for="tabsilver">Je suis un candidat</label>
    <div className="help-tab orange">
      <h2>Comment créer mon profil ?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>


    </div>
        
    </div>

    )
}

export default Help;
