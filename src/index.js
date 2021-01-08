import './styles.scss';

function helloChudik(){
    console.log('ello, ja');
    console.log(document.getElementsByTagName('div' ).length);
}
document.getElementById('home').addEventListener('click', helloChudik);
