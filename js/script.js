(function() {
  const menuBtn = document.querySelector('.menu_btn');
  const menuBurger = document.querySelector('.menu_btn__burger');
  const nav = document.querySelector('nav');
  const menu = document.querySelector('.menu');
  const menuItem = document.querySelectorAll('.menu_item');


  let showMenu = false;
  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBurger.classList.add('open');
      nav.classList.add('open');
      menu.classList.add('open');
      menuItem.forEach(item => item.classList.add('open'));


      showMenu = true;
    } else {
      menuBurger.classList.remove('open');
      nav.classList.remove('open');
      menu.classList.remove('open');
      menuItem.forEach(item => item.classList.remove('open'));


      showMenu = false;
    }
  }
}());

//content product
(function () {
  const item = [{
      image: 'image5.png',
      name: 'Aliquam lobortis',
      price: '$75.00 - $85.00'
    },
    {
      image: 'image6.png',
      name: 'FUSCE ALIQUAM',
      price: '$65.00 - $75.00'
   },
    {
      image: 'image7.png',
      name: 'AIR SUPERIORITY',
      price: '$35.00 - $45.00'
    }];
  const itemImg = document.getElementsByClassName('item_img');
  const itemName = document.getElementsByClassName('item_name');
  const itemPrice = document.getElementsByClassName('item_price');

  for (let i = 0; i < itemImg.length; i++) {
    itemImg[i].querySelector('img').src = `img/${item[i].image}`;
    itemName[i].textContent = item[i].name;
    itemPrice[i].textContent = item[i].price;
  }

}());

//slider reviews
(function() {
  const review = document.getElementsByClassName('review_container');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const circleContainer = document.querySelector('.circle');
  const circleBtn = document.getElementsByClassName('circle_btn');
  let count = 0;

  nextBtn.addEventListener('click', function() {
    count ++;
    if (count == review.length) {
      count = 0;
    }
    slide();
    
  });

  prevBtn.addEventListener('click', function() {
    count --;
    if (count < 0) {
      count = (review.length - 1);
    }
    slide();
  });

  function slide() {
    //remove class active
    for (let index = 0; index < review.length; index++) {
      review[index].classList.remove('active');
      circleBtn[index].classList.remove('active');
    }
    //add class active to current container
    review[count].classList.add('active');
    circleBtn[count].classList.add('active');


  }

  //click on circle div
  circleContainer.addEventListener('click', function(e) {
    const targetBtn = e.target;

    //checking if target has class .circle_btn
    if (targetBtn.classList.contains('circle_btn')) {
      
      for(let i = 0; i < circleBtn.length; i++) {
        circleBtn[i].classList.remove('active');
      }

      targetBtn.classList.add('active');
      
      //getting value of data-target attr 
      const dataTarget = targetBtn.getAttribute('data-target');
      
      //checking if data-target = id => show selected container 
      for (let i = 0; i < review.length; i++) {
        //getting value of id attr 
        const reviewId = review[i].getAttribute('id');
        if (dataTarget == reviewId) {
          review[i].classList.add('active');
          count = i;
        } else {
          review[i].classList.remove('active');
        }

      }

    }
  });
  
  
}());

//content reviews
(function() {
  const contentReview = [{
    photo: 'ellipse2.png',
    name: 'Aliquam lobortis',
    message: 'Now that you have a ready strategy to move forward, it’s time to come up with some ideas.',
    prof: 'UI Designer'
  },
  {
    photo: 'usama.png',
    name: 'Shahriar Sohag',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    prof: 'UI Designer'
 },
  {
    photo: 'rectangle20.png',
    name: 'Aliquam lobortis',
    message: 'Sit consequatur dolorum, ipsam esse facilis eveniet sed ipsum animi provident sint nam nostrum ratione dignissimos quas quam nemo quasi at ipsa.',
    prof: 'UI Designer'
  }];
  const userPhoto = document.querySelectorAll('.icon');
  const userName = document.getElementsByClassName('name');
  const userMessage = document.getElementsByClassName('message');
  const userProf = document.getElementsByClassName('spec');

  for (let i = 0; i < contentReview.length; i++) {
    userPhoto[i].querySelector('img').src = `img/${contentReview[i].photo}`;
    userPhoto[i].querySelector('img').alt = contentReview[i].name;
    userName[i].textContent = contentReview[i].name;
    userMessage[i].textContent = contentReview[i].message;
    userProf[i].textContent = contentReview[i].prof;
  }
}());

//animation
(function () {
  const animItems = document.querySelectorAll('._anim-items');
  console.log(animItems)
  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
      for(let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 3;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if(!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
          
        }

      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
  
}());