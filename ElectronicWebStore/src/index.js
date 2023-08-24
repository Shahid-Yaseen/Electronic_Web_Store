window.onload=()=>{
    const mobileMenuIcon=document.getElementById('mobile-menu-icon');
    mobileMenuIcon.addEventListener('click',()=>{
      mobileMenuIcon.classList.toggle('open');
    })
    const allProducts=document.getElementById('all-products');
    allProducts.addEventListener('click',()=>{
      allProducts.classList.toggle('open');
    });
    
   
  }