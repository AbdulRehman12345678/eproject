const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper=document.querySelector('.wrapper');


signUpBtnLink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
})


// const signInBtnLink=document.querySelector('.signupbtn-link')

// const signUpBtnLink=document.querySelector('.signupbtn-link')

// const wrapper=document.querySelector('.wrapper');

// signinbtnLink.addEventListener('click',()=>{
//     wrapper.classList.toggle('active');
// });