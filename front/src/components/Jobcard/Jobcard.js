import './Jobcard.scss';
import {useState} from 'react';

function Jobcard(){

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return(
        <div className='jobcard'>
            <div className ='jobcard-bookmark'>
                <h1>{'<'}</h1>
                {isClicked ? <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="25" height="" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16"> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" fill="#acadad"></path> </svg> : <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#adadad"></path> </svg> }
                </div>
            <h1 className='jobcard-title'> Saisie administrative </h1>
            <div className='jobcard-tags'> <p> ADMINISTRATION</p></div>


            <p className='jobcard-content'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum nibh. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Aenean pharetra magna ac placerat. Eu turpis egestas pretium aenean pharetra. Eget duis at tellus at urna condimentum mattis pellentesque. Morbi tincidunt ornare massa eget egestas. Vulputate enim nulla aliquet porttitor. Enim sit amet venenatis urna cursus eget. Nunc faucibus a pellentesque sit amet porttitor. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Ullamcorper velit sed ullamcorper morbi tincidunt.

Massa placerat duis ultricies lacus sed turpis tincidunt. Arcu vitae elementum curabitur vitae. Scelerisque eu ultrices vitae auctor eu. A cras semper auctor neque. Amet tellus cras adipiscing enim eu turpis. Vitae congue eu consequat ac felis donec et odio. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Consequat id porta nibh venenatis cras. Pharetra et ultrices neque ornare aenean euismod. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Cursus euismod quis viverra nibh. Tempor id eu nisl nunc. Nibh sed pulvinar proin gravida hendrerit lectus a. Pharetra massa massa ultricies mi quis hendrerit dolor. Sed blandit libero volutpat sed. Ac ut consequat semper viverra nam libero justo.Massa placerat duis ultricies lacus sed turpis tincidunt. Arcu vitae elementum curabitur vitae. Scelerisque eu ultrices vitae auctor eu. A cras semper auctor neque. Amet tellus cras adipiscing enim eu turpis. Vitae congue eu consequat ac felis donec et odio. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Consequat id porta nibh venenatis cras. Pharetra et ultrices neque ornare aenean euismod. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Cursus euismod quis viverra nibh. Tempor id eu nisl nunc. Nibh sed pulvinar proin gravida hendrerit lectus a. Pharetra massa massa ultricies mi quis hendrerit dolor. Sed blandit libero volutpat sed. Ac ut consequat semper viverra nam libero justo.Massa placerat duis ultricies lacus sed turpis tincidunt. Arcu vitae elementum curabitur vitae. Scelerisque eu ultrices vitae auctor eu. A cras semper auctor neque. Amet tellus cras adipiscing enim eu turpis. Vitae congue eu consequat ac felis donec et odio. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Consequat id porta nibh venenatis cras. Pharetra et ultrices neque ornare aenean euismod. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Cursus euismod quis viverra nibh. Tempor id eu nisl nunc. Nibh sed pulvinar proin gravida hendrerit lectus a. Pharetra massa massa ultricies mi quis hendrerit dolor. Sed blandit libero volutpat sed. Ac ut consequat semper viverra nam libero justo.
</p>
<button className='jobcard-btn'> Je postule !</button>
        </div>
    )
}

export default Jobcard;