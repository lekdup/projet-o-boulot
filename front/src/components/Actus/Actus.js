import './Actus.scss';
import article from '../../assets/articles.svg'

function Actus(){
    return(
        <div className='Actus'>
          <h1> Actualités </h1>
          <p> Quoi de neuf dans le monde de l'emploi ?</p>
          <form className='Actus-searchbar'>
            <input className='Actus-searchbar-input' type="text" name="searchbar" placeholder="Votre recherche"></input> 
            <button className='Actus-searchbar-button'>Go !</button>
          </form>

          <div className='Actus-list'> 
            <div className='Actus-list-element'>
              <div className="Actus-list-element-illustration">
                <img src={article} alt="illustration of woman reading newspaper" />
              </div>
              <div className='Actus-list-element-text'>
                <h2 className='Actus-list-element-text-title'><a href="#"> Du nouveau dans le monde de l'événementiel</a></h2>
                <p className='Actus-list-element-text-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cum unde rerum culpa cumque modi quidem exercitationem repellendus corporis omnis ipsa quaerat quia, est voluptatem nulla eius recusandae iure optio facilis, vitae at inventore, quo odio? Sit eligendi deserunt adipisci. Deleniti, culpa. Deserunt error iste ducimus mollitia itaque. Repellat quos aut quia inventore quo ea qui necessitatibus rem doloribus. Voluptates ab vero repellendus culpa maxime doloremque consequuntur asperiores! Quis ea ipsam explicabo minus aliquid sint, saepe sunt distinctio ab autem enim at expedita! Minima quis rem numquam sed, soluta magnam possimus quidem quo eligendi nulla? Qui quasi cum cumque quos omnis, magnam fugit doloremque ipsam sequi iste veritatis sunt similique excepturi? Eius sequi culpa dolorum dicta aliquam quod nihil accusamus libero facilis non. Quod harum quam, consectetur quis esse distinctio, rerum aut dolorem nobis aspernatur obcaecati fugiat expedita quaerat. Ut deleniti cupiditate!</p>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Actus;
