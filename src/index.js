import './styles.scss';

function helloChudik(){
    console.log('Hello, ja');
    console.log(document.getElementsByTagName('div' ).length);
}
document.getElementById('home').addEventListener('click', helloChudik);

let myObject = {
    one: true,
    two: 2,
    three: 'three'
}; 
