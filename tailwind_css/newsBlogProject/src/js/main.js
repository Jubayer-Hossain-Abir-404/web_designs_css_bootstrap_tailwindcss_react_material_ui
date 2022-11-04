// for search
const searchContent = document.querySelector('#searchContent')
const searchIcon = document.querySelector('#searchIcon')
if(searchIcon!=null){
    searchIcon.addEventListener('click', ()=>{
        if(searchContent.classList.contains('opacity-0')){
            searchContent.classList.remove('opacity-0');
            searchContent.classList.add('opacity-100');
            searchContent.classList.add('top-[1px]');
        }else{
            searchContent.classList.remove('opacity-100');
            searchContent.classList.add('opacity-0');
            searchContent.classList.remove('top-[1px]');
        }
    })
}




// for mobile Navbar

const mobileNav = document.querySelector('#mobileNav')
const mainMenu = document.querySelector('#mainMenu')
if(mainMenu!=null){
    mainMenu.addEventListener('click', ()=>{
        if(mobileNav.classList.contains('opacity-0')){
            mobileNav.classList.remove('opacity-0');
            mobileNav.classList.add('opacity-100');
            // mobileNav.classList.add('top-[1px]');
        }else{
            mobileNav.classList.remove('opacity-100');
            mobileNav.classList.add('opacity-0');
            // mobileNav.classList.remove('top-[1px]');
        }
    })
}


// seo page

const leftBarContent = document.querySelector('#leftBar')
const leftBarIcon = document.querySelector('#leftBarIcon')
const wholePage = document.querySelector('#wholePage')

const closeIcon = document.querySelector('#closeIcon')

if(leftBarIcon!=null){
    leftBarIcon.addEventListener('click', ()=>{
        if(leftBarContent.classList.contains('opacity-0')){
            leftBarContent.classList.remove('-left-96');
            leftBarContent.classList.add('left-0');
            leftBarContent.classList.remove('opacity-0');
            leftBarContent.classList.add('opacity-100');
        }else{
            leftBarContent.classList.remove('left-0');
            leftBarContent.classList.add('-left-96');
            leftBarContent.classList.add('opacity-0');
            leftBarContent.classList.remove('opacity-100');
        }
    })
}

if(closeIcon!=null)
    closeIcon.addEventListener('click', ()=>{
        if(leftBarContent.classList.contains('opacity-100')){
            leftBarContent.classList.add('-left-96');
            leftBarContent.classList.remove('left-0');
            leftBarContent.classList.add('opacity-0');
            leftBarContent.classList.remove('opacity-100');
        }
})


// for the mobile navbar dropdown

function mobNav(e1, e2)
{
    const mobBtn = document.querySelector(e1)
    const mobdropdown = document.querySelector(e2)
    if(mobdropdown.classList.contains('hidden')){
        mobdropdown.classList.remove('hidden');
        mobdropdown.classList.add('flex');
        mobBtn.classList.remove('fa-chevron-right');
        mobBtn.classList.add('fa-chevron-down');
    }else{
        mobdropdown.classList.remove('flex');
        mobdropdown.classList.add('hidden');
        mobBtn.classList.add('fa-chevron-right');
        mobBtn.classList.remove('fa-chevron-down');
    }
}

// for topbar search

const topBarContent = document.querySelector('#topBarContent')
const topBarSearchContent = document.querySelector('#topBarSearchContent')
const topBarSearchIcon = document.querySelector('#topBarSearchIcon')
const closeSearchIcon = document.querySelector('#closeSearchIcon')

if(topBarSearchIcon!=null){
    topBarSearchIcon.addEventListener('click', ()=>{
        if(topBarSearchContent.classList.contains('hidden')){
            topBarSearchContent.classList.remove('hidden');
            topBarSearchContent.classList.add('flex');
            topBarContent.classList.remove('flex');
            topBarContent.classList.add('hidden'); 
        }
    })
}

if(closeSearchIcon!=null)
    closeSearchIcon.addEventListener('click', ()=>{
        if(topBarContent.classList.contains('hidden')){
            topBarSearchContent.classList.add('hidden');
            topBarSearchContent.classList.remove('flex');
            topBarContent.classList.add('flex');
            topBarContent.classList.remove('hidden'); 
        }
})


// for tooltip in the author profile
tippy('.link',{
    placement: 'bottom'
  })



