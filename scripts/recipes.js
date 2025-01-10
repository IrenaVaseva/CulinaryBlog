const ulElement = document.getElementById('recipes');

function openRecipe(nameElement) {
    //console.log(nameElement);
    const aContentElement = document.querySelector(`.readMore[data-name="${nameElement}"]`);
    const textA = aContentElement.textContent;
    const divContentRecipe = document.querySelector(`.content-recipe[data-name="${nameElement}"]`);

    if (textA.toUpperCase() == 'ВИЖ РЕЦЕПТАТА') {
        divContentRecipe.style.display = 'block';
        aContentElement.textContent = 'Скрий';
    } else if (textA.toUpperCase() == 'СКРИЙ') {
        divContentRecipe.style.display = 'none';
        aContentElement.textContent = 'Виж рецептата';
    }
}

ulElement.addEventListener('click', function (event) {
    const recipeName = event.target.attributes['data-name'].value;

    if ((event.target.nodeName === 'A') && (event.target.className === 'readMore')){
        openRecipe(recipeName);
    }
})
