import './Help.scss';
import questions from '../../assets/questions.png';

function Help(){
  return(
    <div className='help'>
      <h1 className='help-title'> Besoin d'aide ?</h1>
      <img src={questions} alt=''/>
      <div className="help-tabs">

        <input className="help-tabs"type="radio" id="tabfree" name="mytabs"checked='checked' /> 
        <label className='help-label blue'htmlFor="tabfree">Je suis une entreprise</label>

        <div className="help-tab blue">
          <div className='help-tab-faq'> 
            <input className='help-tab-faq-input' type='checkbox'  id='check1'/>
            <label  htmlFor='check1'className='help-tab-faq-label'>Comment créer mon espace entreprise ?</label>
            <div className='help-tab-faq-content'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

          <div className='help-tab-faq'> 
            <input className='help-tab-faq-input' type='checkbox' id='check2'/>
            <label  htmlFor='check2'className='help-tab-faq-label'>Comment publier une annonce ?</label>
            <div className='help-tab-faq-content'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>

        <input className="help-tabs"type="radio" id="tabsilver" name="mytabs"/>
        <label className='help-label orange' htmlFor="tabsilver">Je suis un candidat</label>

        <div className="help-tab orange">
          <div className='help-tab-faq'> 
            <input className='help-tab-faq-input' type='checkbox' id='check3'/>
            <label  htmlFor='check3'className='help-tab-faq-label'>Comment se passe le recrutement ?</label>
            <div className='help-tab-faq-content'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

          <div className='help-tab-faq'> 
            <input className='help-tab-faq-input' type='checkbox' id='check4'/>
            <label  htmlFor='check4'className='help-tab-faq-label'>Puis-je cumuler plusieurs job ?</label>
            <div className='help-tab-faq-content'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help;
