(function (factory) {
  typeof define === 'function' && define.amd ? define('custom', factory) :
  factory();
})((function () { 'use strict';

  const unlockBtn = document.querySelector('.btn-js');
  const main = document.querySelector('.main');
  const body = document.querySelector('.body');
  const buttonSlap = document.querySelector(`[data-id="slap"]`);
  const buttonKiss = document.querySelector(`[data-id="kiss"]`);
  const modal = document.querySelector('.modal');
  const moreBtn = document.querySelector('[data-id="more"]');
  const resultBtn = document.querySelector('[data-id="result"]');
  const modalContainerBtn = modal.querySelector('.modal__btn-container-js');
  const modalContainerForm = modal.querySelector('.modal__form-container');
  const modalContainer = modal.querySelector('.modal__container-js');
  const modalContainerGirls = document.querySelector('.modal__select-container-js');
  main.querySelector('.footer-js');
  const bodyItems = body.children;
  let countGirl = 0;
  const maxCountGirl = 12;
  unlockBtn.addEventListener('click', () => {
    main.classList.add('main__loading');
    setTimeout(() => {
      main.classList.add('main__gallery');
    }, 2000);
  });
  const girls = [{
    id: 1,
    info: 'Wendy, 25',
    millies: '13',
    bg: './img/content/wendy.jpg'
  }, {
    id: 2,
    info: 'Choi, 37',
    millies: '19',
    bg: './img/content/choi.jpg'
  }, {
    id: 3,
    info: 'Yang, 29',
    millies: '36',
    bg: './img/content/yang.jpg'
  }, {
    id: 4,
    info: 'Min, 23',
    millies: '16',
    bg: './img/content/min.jpg'
  }, {
    id: 5,
    info: 'Amy, 25',
    millies: '47',
    bg: './img/content/amy.jpg'
  }, {
    id: 6,
    info: 'Lily, 27',
    millies: '21',
    bg: './img/content/lily.jpg'
  }, {
    id: 7,
    info: 'Jane, 30',
    millies: '11',
    bg: './img/content/jane.jpg'
  }, {
    id: 8,
    info: 'Yujin, 25',
    millies: '43',
    bg: './img/content/yujin.jpg'
  }, {
    id: 9,
    info: 'Jenny, 29',
    millies: '13',
    bg: './img/content/jenny.jpg'
  }, {
    id: 10,
    info: 'Alice, 22',
    millies: '51',
    bg: './img/content/alice.jpg'
  }, {
    id: 11,
    info: 'Jiwon, 23',
    millies: '76',
    bg: './img/content/jiwon.jpg'
  }, {
    id: 12,
    info: 'Min, 30',
    millies: '46',
    bg: './img/content/min30.jpg'
  }, {
    id: 13,
    info: 'Amy, 27',
    millies: '33',
    bg: './img/content/amy27.jpg'
  }, {
    id: 14,
    info: 'Jeong, 29',
    millies: '20',
    bg: './img/content/jeong.jpg'
  }, {
    id: 15,
    info: 'Cindy, 20',
    millies: '63',
    bg: './img/content/cindy.jpg'
  }, {
    id: 16,
    info: 'Lin, 28',
    millies: '47',
    bg: './img/content/lin.jpg'
  }, {
    id: 17,
    info: 'Emily, 28',
    millies: '21',
    bg: './img/content/emily.jpg'
  }, {
    id: 18,
    info: 'Grace, 25',
    millies: '31',
    bg: './img/content/grace.jpg'
  }, {
    id: 19,
    info: 'Kang, 29',
    millies: '11',
    bg: './img/content/kang.jpg'
  }, {
    id: 20,
    info: 'Lucy, 29',
    millies: '45',
    bg: './img/content/lucy.jpg'
  }, {
    id: 21,
    info: 'Sujin, 25',
    millies: '38',
    bg: './img/content/sujin.jpg'
  }, {
    id: 22,
    info: 'Zhang, 22',
    millies: '27',
    bg: './img/content/zhang.jpg'
  }, {
    id: 23,
    info: 'Subin, 21',
    millies: '14',
    bg: './img/content/subin.jpg'
  }, {
    id: 24,
    info: 'Jessica, 29',
    millies: '41',
    bg: './img/content/jessica.jpg'
  }, {
    id: 25,
    info: 'Jung, 29',
    millies: '25',
    bg: './img/content/jung.jpg'
  }, {
    id: 26,
    info: 'Sunny, 19',
    millies: '57',
    bg: './img/content/sunny.jpg'
  }, {
    id: 27,
    info: 'Sumin, 21',
    millies: '62',
    bg: './img/content/sumin.jpg'
  }, {
    id: 28,
    info: 'Liu, 22',
    millies: '27',
    bg: './img/content/liu.jpg'
  }, {
    id: 29,
    info: 'Sarah, 23',
    millies: '19',
    bg: './img/content/lucy.jpg'
  }, {
    id: 30,
    info: 'Yoon, 24',
    millies: '49',
    bg: './img/content/yoon.jpg'
  }, {
    id: 31,
    info: 'Rachel, 25',
    millies: '36',
    bg: './img/content/rachel.jpg'
  }, {
    id: 32,
    info: 'Tina, 26',
    millies: '22',
    bg: './img/content/tina.jpg'
  }, {
    id: 33,
    info: 'Vivian, 36',
    millies: '35',
    bg: './img/content/vivian.jpg'
  }, {
    id: 34,
    info: 'Jisu, 27',
    millies: '10',
    bg: './img/content/jisu.jpg'
  }, {
    id: 35,
    info: 'Ann, 28',
    millies: '32',
    bg: './img/content/ann.jpg'
  }, {
    id: 36,
    info: 'Heyjin, 29',
    millies: '21',
    bg: './img/content/heyjin.jpg'
  }, {
    id: 37,
    info: 'Crystal, 30',
    millies: '18',
    bg: './img/content/crystal.jpg'
  }, {
    id: 38,
    info: 'Chloe, 31',
    millies: '50',
    bg: './img/content/chloe.jpg'
  }, {
    id: 39,
    info: 'Zoe, 29',
    millies: '27',
    bg: './img/content/zoe.jpg'
  }, {
    id: 40,
    info: 'Song, 28',
    millies: '30',
    bg: './img/content/song.jpg'
  }, {
    id: 41,
    info: 'Jang, 27',
    millies: '20',
    bg: './img/content/jang.jpg'
  }, {
    id: 42,
    info: 'Cherry, 31',
    millies: '25',
    bg: './img/content/cherry.jpg'
  }, {
    id: 43,
    info: 'Bella, 28',
    millies: '43',
    bg: './img/content/bella.jpg'
  }, {
    id: 44,
    info: 'Yejin, 27',
    millies: '32',
    bg: './img/content/yejin.jpg'
  }, {
    id: 45,
    info: 'Jo, 26',
    millies: '59',
    bg: './img/content/jo.jpg'
  }, {
    id: 46,
    info: 'Yuri, 25',
    millies: '17',
    bg: './img/content/yuri.jpg'
  }, {
    id: 47,
    info: 'Soyeon, 24',
    millies: '31',
    bg: './img/content/soyeon.jpg'
  }, {
    id: 48,
    info: 'Daisy, 23',
    millies: '51',
    bg: './img/content/daisy.jpg'
  }, {
    id: 49,
    info: 'Minju, 22',
    millies: '35',
    bg: './img/content/minju.jpg'
  }, {
    id: 50,
    info: 'Wendy, 29',
    millies: '40',
    bg: './img/content/wendy29.jpg'
  }];

  function shuffle(sourceArray) {
    for (var i = 0; i < 12; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));
      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }

    return sourceArray.slice(0, maxCountGirl);
  }

  const girlsRandom = shuffle(girls);

  const girlUpdate = num => {
    const girlBg = document.querySelector('.girl-js');
    const girlTitle = document.querySelector('.girl__title-js');
    const distance = document.querySelector('.girl__distance-js');
    document.querySelector('.girl__content'); // container.dataset.id = girlsRandom[num].id;

    girlBg.src = girlsRandom[num].bg;
    girlTitle.textContent = girlsRandom[num].info;
    distance.textContent = girlsRandom[num].millies;
  };

  const selectUpdate = () => {
    const selectGirl = document.querySelector('#select-girl');
    const element = selectGirl.content.cloneNode(true);
    const girlBg = document.querySelector('.girl-js').src;
    const girlTitle = document.querySelector('.girl__title-js').textContent;
    element.querySelector('.select-girl-img-js').src = girlBg;
    element.querySelector('.select-girl-img-js').alt = girlTitle;
    element.querySelector('.modal__select-name-js').textContent = girlTitle;
    modalContainerGirls.append(element);
  };

  girlUpdate(countGirl);

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };

  window.addEventListener('resize', appHeight);
  appHeight(); // var lazyLoadInstance = new LazyLoad({
  //     elements_selector: ".lazy"
  // });

  const openModal = () => {
    modal.classList.add('modal_opened');
    modalContainer.append(bodyItems[4]);
  };

  const checkLastGirl = () => countGirl < maxCountGirl - 1;

  buttonKiss.addEventListener('click', () => checkLastGirl() ? (selectUpdate(), countGirl++, girlUpdate(countGirl)) : openModal());
  buttonSlap.addEventListener('click', () => checkLastGirl() ? (countGirl++, girlUpdate(countGirl)) : openModal());

  function tgtrimm(str) {
    var ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '').replace(/\s+/gi, ', ');
    return ars;
  }

  modalContainerGirls.addEventListener('click', e => {
    const method = modal.querySelector('.modal__form-method-js');
    const name = modal.querySelector('.modal__form-name-js');
    const girl = e.target.closest('.modal__select-girl-js');
    const button = e.target.closest('.modal__icon-js');

    if (button) {
      const btn = button.dataset.btn;

      switch (btn) {
        case 'video':
          modalContainerForm.classList.add('modal__form-container_active');
          method.textContent = 'video call';
          name.textContent = tgtrimm(girl.querySelector('.modal__select-name-js').textContent);
          break;

        case 'chat':
          modalContainerForm.classList.add('modal__form-container_active');
          method.textContent = 'chat';
          name.textContent = tgtrimm(girl.querySelector('.modal__select-name-js').textContent);
          break;

        default:
          return;
      }

      document.querySelector('.footer').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
  moreBtn.addEventListener('click', () => modalContainerBtn.classList.add('modal__btn-container_hidden'));
  resultBtn.addEventListener('click', () => {
    modalContainerBtn.classList.add('modal__btn-container_result');
    const formbtn = modal.querySelector('[data-id="register"]');
    formbtn.textContent = 'start chating';
  }); // const closeModal = () => {
  //     modal.classList.remove('modal_opened');
  //     setTimeout(()=> {
  //         modal.classList.remove('modal_form-active');
  //     }, 500);
  // }
  // const checkKeyPress = (e) => {
  //     if (e.code === "Escape") {
  //         closeModal();
  //     }
  // };
  // const checkPressOverlay = (e) => {
  //     if (e.target === modal) {
  //       closeModal();
  //     }
  // };
  // const openForm = () => {
  //     modal.classList.add('modal_form-active');
  // }
  // yes.addEventListener("click", openForm)
  // no.addEventListener("click", closeModal);
  // modal.addEventListener("click", e => checkPressOverlay(e));
  // closeModalBtn.addEventListener('click', closeModal);
  // document.addEventListener("keydown", checkKeyPress);
  // profileBtnBack.addEventListener('click', () => {
  //     profile.classList.remove('profile_active');
  //     setTimeout(()=> {
  //         catalogContainer.classList.remove('catalog__main-container_hidden');    
  //         profileLogo.classList.remove('catalog__logo_hidden');
  //         document.querySelector('.profile__gallery-js').innerHTML = '';
  //     }, 200);
  // });
  // function tgtrimm(str){var ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', '); return ars;}
  // profileNavBtn.addEventListener('click', (e) => {
  //     const nav = e.target.classList.contains('profile__nav');
  //     const name = tgtrimm(e.target.closest('.profile').querySelector('.profile__info-name-js').textContent);
  //     const popupGirlName = modal.querySelector('.modal__invite-name-js');
  //     popupGirlName.textContent = name;
  //     const classes = e.target.closest('.profile__btn');
  //     const activeAnim = document.querySelector('.modal__anim_active');
  //     activeAnim && activeAnim.classList.remove('modal__anim_active');
  //     if(classes.classList.contains('profile__btn-wine-js')) {
  //         document.querySelector('.modal__anim-wine').classList.add('modal__anim_active');
  //     }
  //     if(classes.classList.contains('profile__btn-coffee-js')) {
  //         document.querySelector('.modal__anim-cup').classList.add('modal__anim_active');
  //     }
  //     if(classes.classList.contains('profile__btn-film-js')) {
  //         document.querySelector('.modal__anim-film').classList.add('modal__anim_active');
  //     }
  //     if(classes.classList.contains('profile__btn-flower-js')) {
  //         document.querySelector('.modal__anim-flower').classList.add('modal__anim_active');
  //     }
  //     if(classes.classList.contains('profile__btn-pizza-js')) {
  //         document.querySelector('.modal__anim-pizza').classList.add('modal__anim_active');
  //     }
  //     if(classes.classList.contains('profile__btn-dinner-js')) {
  //         document.querySelector('.modal__anim-dinner').classList.add('modal__anim_active');
  //     }
  //     if(classes.classList.contains('profile__btn-star-js')) {
  //         document.querySelector('.modal__anim-star').classList.add('modal__anim_active');
  //     }
  //     if(!nav) {
  //         openModal(e);
  //     }
  // });
  // buttonUnlock.addEventListener('click', () => {
  //     document.querySelector('.main').classList.add('main_hidden');
  // });
  // const containerGirl = document.querySelector('.catalog__list-js')
  // containerGirl.addEventListener('click', (e) => {
  //     const girlId = e.target.closest('.catalog__item-js').dataset.id;
  //     catalogContainer.classList.add('catalog__main-container_hidden');
  //     profileLogo.classList.add('catalog__logo_hidden');
  //     const header = document.querySelector('.profile__header-js');
  //     const avatar = document.querySelector('.profile__avatar-js');
  //     const distance = document.querySelector('.profile__info-distance-js');
  //     const name = document.querySelector('.profile__info-name-js');
  //     const photosContainer = document.querySelector('.profile__gallery-js');
  //     const girl = girls.find(g => {
  //         if(g.id == girlId) return g;
  //     })
  //     name.textContent = girl.info || '';
  //     distance.textContent = girl.millies || '';
  //     header.src = girl.header || '';
  //     header.alt = girl.info || '';
  //     avatar.src = girl.avatar || '';
  //     avatar.alt = girl.info || '';
  //     if(girl.photo.length === 6) {
  //         photosContainer.classList.add('profile__gallery_template1');
  //         photosContainer.classList.remove('profile__gallery_template2');
  //         photosContainer.classList.remove('profile__gallery_template3');
  //         photosContainer.classList.remove('profile__gallery_template4');
  //         photosContainer.classList.remove('profile__gallery_template5');
  //         photosContainer.classList.remove('profile__gallery_template6');
  //     }
  //     if(girl.photo.length === 8) {
  //         photosContainer.classList.add('profile__gallery_template2');
  //         photosContainer.classList.remove('profile__gallery_template1');
  //         photosContainer.classList.remove('profile__gallery_template3');
  //         photosContainer.classList.remove('profile__gallery_template4');
  //         photosContainer.classList.remove('profile__gallery_template5');
  //         photosContainer.classList.remove('profile__gallery_template6');
  //     }
  //     if(girl.photo.length === 4) {
  //         photosContainer.classList.add('profile__gallery_template3');
  //         photosContainer.classList.remove('profile__gallery_template1');
  //         photosContainer.classList.remove('profile__gallery_template2');
  //         photosContainer.classList.remove('profile__gallery_template4');
  //         photosContainer.classList.remove('profile__gallery_template5');
  //         photosContainer.classList.remove('profile__gallery_template6');
  //     }
  //     if(girl.photo.length === 5) {
  //         photosContainer.classList.add('profile__gallery_template4');
  //         photosContainer.classList.remove('profile__gallery_template3');
  //         photosContainer.classList.remove('profile__gallery_template1');
  //         photosContainer.classList.remove('profile__gallery_template2');
  //         photosContainer.classList.remove('profile__gallery_template5');
  //         photosContainer.classList.remove('profile__gallery_template6');
  //     }
  //     if(girl.photo.length === 3) {
  //         photosContainer.classList.add('profile__gallery_template5');
  //         photosContainer.classList.remove('profile__gallery_template3');
  //         photosContainer.classList.remove('profile__gallery_template1');
  //         photosContainer.classList.remove('profile__gallery_template2');
  //         photosContainer.classList.remove('profile__gallery_template4');
  //         photosContainer.classList.remove('profile__gallery_template6');
  //     }
  //     if(girl.photo.length === 7) {
  //         photosContainer.classList.add('profile__gallery_template6');
  //         photosContainer.classList.remove('profile__gallery_template3');
  //         photosContainer.classList.remove('profile__gallery_template1');
  //         photosContainer.classList.remove('profile__gallery_template2');
  //         photosContainer.classList.remove('profile__gallery_template4');
  //         photosContainer.classList.remove('profile__gallery_template5');
  //     }
  //     girl.photo.forEach(photo => {
  //         let img = document.createElement('img');
  //         img.src = photo;
  //         img.alt = girl.info;
  //         photosContainer.append(img);
  //     })
  //     setTimeout(()=>profile.classList.add('profile_active'),500);
  //     document.querySelector('.profile__header').scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start'
  //     });
  // })
  // girlsRandom.forEach((girl, idx) => {
  //     if(idx > 11) return;
  //     const photosPreview = girl.preview;
  //     let girlTemplate = document.querySelector('#girl');
  //     let element = girlTemplate.content.cloneNode(true);
  //     element.querySelector('.catalog__item-js').dataset.id = girl.id;
  //     element.querySelector('.catalog__girl-info-js').textContent = girl.info;
  //     element.querySelector('.catalog__image-container-js').classList.add(girl.preview.length === 3 ? 'catalog__image-container_three' : 'catalog__image-container_four');
  //     let count;
  //     switch(girl.photo.length) {
  //         case 3: 
  //             count = 3;
  //             break;
  //         case 4:
  //             count = 4;
  //             break;
  //         case 5:
  //             count = 5;
  //             break;
  //         case 6:
  //             count = 6;
  //             break;
  //         case 7:
  //             count = 7;    
  //             break;
  //         case 8:
  //             count = 8;
  //             break;
  //         default:
  //             break;        
  //     }
  //     element.querySelector('.catalog__image-container-js').classList.add(girl.preview.length === 3 ? `catalog__image-container_three-count-${count}` : `catalog__image-container_four-count-${count}`);
  //     // element.querySelector('.catalog__image-container-js').classList.add(girl.preview.length === 3 ? 'catalog__image-container_three' : 'catalog__image-container_four');
  //     photosPreview.forEach((photo, idx) => {
  //         let div = document.createElement('div');
  //         div.classList.add('catalog__image');
  //         let image = document.createElement('img');
  //         image.src = photo;
  //         image.alt = girl.info;
  //         div.append(image);
  //         element.querySelector('.catalog__image-container-js').append(div);
  //     })
  //     containerGirl.append(element);
  // })
  // const catalog = document.querySelector('.catalog');
  // let formActive = false;
  // const option = {
  // 	root: document.querySelector( '#viewport' ),
  // 	rootMargin: '0px',
  // 	threshold: [ 0, 0.5 ]
  // };
  // const observer = new IntersectionObserver((entries, observer) => {
  //     if(document.querySelector('.main_hidden') && !formActive) {
  //         let isCatalog = catalogContainer.classList.contains('catalog__main-container_hidden');
  //         formActive = true;
  //         catalog.querySelector('.catalog__loader').classList.add('catalog__loader_active');
  //         setTimeout(() => {
  //             catalog.querySelector('.catalog__loader').classList.remove('catalog__loader_active');
  //             setTimeout(() => {
  //                 catalog.querySelector('.catalog__form').style.display = 'flex';
  //                 setTimeout(() => {
  //                     catalog.querySelector('.catalog__form').classList.add('catalog__form_active');
  //                     document.querySelector('[data-id="register"]').scrollIntoView({
  //                         behavior: 'smooth',
  //                         block: 'start'
  //                     });
  //                 }, 1000);
  //             }, 1000);
  //         }, 4000);
  //     }
  // }, option);

}));
