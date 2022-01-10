const menu_btn = document.querySelector('#menu_btn');
const navigation = document.querySelector('.navbar_a');
const close_btn = document.querySelector('#close');
const navItems = document.querySelectorAll('.navbar_a a');
const butt = document.querySelector('#btn');

butt.addEventListener('click',()=>{
    confirm('sotib olasizmi');
});


menu_btn.addEventListener('click',()=>{
    navigation.classList.toggle('active');
    close_btn.style.display='block';
    
});

close_btn.addEventListener('click',()=>{
    navigation.classList.remove('active');
    menu_btn.style.display='block';
    close_btn.style.display='none';
});

navItems.forEach(item=>{
    item.addEventListener('click',()=>{
        navigation.classList.remove('active');
        close_btn.style.display='none';

    });
});

