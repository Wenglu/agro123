const wrapper = document.querySelector('.wrapper')
const ulList = document.querySelector('ul')
const liItem = document.querySelector('.sth')
const sth1 = document.querySelector('.sth1')
const sth2 = document.querySelector('.sth2')
const sth3 = document.querySelector('.sth3')
const sth4 = document.querySelector('.sth4')
const sth5 = document.querySelector('.sth5')




const fun1 = () =>{
    sth2.classList.remove('active')
    sth3.classList.remove('active')
    sth4.classList.remove('active')
    sth1.classList.add('active')
    sth5.classList.remove('active')

}
const fun2 = () =>{
    sth1.classList.remove('active')
    sth3.classList.remove('active')
    sth4.classList.remove('active')
    sth5.classList.remove('active')
    sth2.classList.add('active')
}
const fun3 = () =>{
    sth1.classList.remove('active')
    sth2.classList.remove('active')
    sth4.classList.remove('active')
    sth5.classList.remove('active')
    sth3.classList.add('active')
}
const fun4 = () =>{
    sth1.classList.remove('active')
    sth2.classList.remove('active')
    sth3.classList.remove('active')
    sth5.classList.remove('active')
    sth4.classList.add('active')
}

const fun5 = () =>{
    sth1.classList.remove('active')
    sth2.classList.remove('active')
    sth3.classList.remove('active')
    sth5.classList.add('active')
    sth4.classList.remove('active')

}

sth1.addEventListener('click' , fun1)
sth2.addEventListener('click' , fun2)
sth3.addEventListener('click' , fun3)
sth4.addEventListener('click' , fun4)
sth5.addEventListener('click' , fun5)

