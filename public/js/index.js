const content = document.querySelectorAll('.content');

for(paragraph in content){
    if( paragraph % 2 === 0 ){
        content[paragraph].classList.add('even')
    }else{
        content[paragraph].classList.add('odd')
    }
}