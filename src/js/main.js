import CompaniesTable from "./companiesTable/CompaniesTable.js"

document.addEventListener("DOMContentLoaded", async () => {
	const companiesTable = new CompaniesTable;
	companiesTable.databaseBranch = "companies_v2";
	await companiesTable.initializeTable(); 
})


document.addEventListener("DOMContentLoaded", () => {
	const modal = document.getElementById("modal");
	const closeModalButton = document.querySelector(".close-modal");
	const header = document.getElementById('header');

	function openModal(btn) {

		header.classList.add('took-off');
		document.body.style.overflow = 'hidden';
		modal.style.display = "flex";
	}

	function closeModal() {
		modal.style.display = "none";
		header.classList.remove('took-off');
		header.classList.add('scrolled');
		document.body.style.overflowY = 'auto';
	}

	const openModalButtons = document.querySelectorAll('[data-open-modal]');

	openModalButtons.forEach(button => {
		button.addEventListener("click", () => {openModal(button)});
		});

	closeModalButton.addEventListener("click", closeModal);


	window.addEventListener("click", (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});
});

const companylistBody = document.querySelector(".companylist-body");
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      header.classList.add('scrolled');
      header.classList.remove('took-off');
      companylistBody.classList.add("disabled");
    } else {
      header.classList.remove('scrolled');
      header.classList.remove('took-off');
      companylistBody.classList.remove("disabled");
    }
});

function toggleClass(divEl, classEl) {

  if (divEl.classList.contains(classEl)) divEl.classList.remove(classEl)
    else divEl.classList.add(classEl)
}


const namelistButton = document.querySelector(".namelist-container__activation-button");
const namelistContainer = document.querySelector(".companylist");
namelistButton.addEventListener('click', () => {
	toggleClass(namelistContainer, "active");
	const cont = document.querySelector(".card-popup-container");
	const line = document.querySelector(".company-list__line");

	const activeRow = document.querySelector(".companylist__card.activated");
	if (activeRow) activeRow.classList.toggle("activated");
	if (line) line.remove();
	if (cont) cont.remove();

} );



document.addEventListener("DOMContentLoaded", () => {
	const containerNew = document.querySelector(".market__header");
	const containerNewButton = containerNew.querySelector(".market-header__button");

	const containerOld = document.querySelector(".market__header-old-clients");
	const containerOldButton = containerOld.querySelector(".market-header__button");



	const containerCloud = document.querySelector(".marketplace-swiper-container");
	const containerBox =  document.querySelector(".marketplace-box-container");

	const pricesCloud = containerCloud.querySelectorAll(".card__price");
	const pricesBox = containerBox.querySelectorAll(".card__price");
	const promoPrices = document.querySelectorAll(".card__price-promo");

	const marketButtons = document.querySelector(".market__button-container");
	const marketContainer = marketButtons.querySelector(".button-container__bottom-wrapper");
	const marketWrapper = marketContainer.querySelectorAll("div");




	function changeMarketState(buttonContainer, arrWrapper) {
		buttonContainer.classList.toggle("disabled");
		arrWrapper.forEach(el => {
			el.classList.toggle("disabled");
		});
	}


	containerNewButton.addEventListener("click", () => {
		containerNew.style.display = "none";
		containerOld.style.display = "flex";
		changeMarketState(marketContainer, marketWrapper);

		promoPrices.forEach(element => {
			element.classList.toggle("disabled");
		});

		pricesCloud.forEach(element => {

			if (element.classList.contains("promo")) {
			element.style.display = "none";
			
			};

		});
	
	pricesBox.forEach(element => {
		if (!element.classList.contains("canceled")) {
		element.classList.toggle("disabled");
		}
		else {element.classList.toggle("canceled")}
	});

	
	});
	containerOldButton.addEventListener("click", () => {
	containerNew.style.display = "block";
	containerOld.style.display = "none";
	changeMarketState(marketContainer, marketWrapper);
	promoPrices.forEach(element => {
		element.classList.toggle("disabled");
	});

	pricesCloud.forEach(element => {
		if (element.classList.contains("promo")) {
		element.style.display = "flex";
		};

	});
	
	pricesBox.forEach(element => {
		if (!element.classList.contains("disabled")) {
		element.classList.toggle("canceled");
		}
		else {element.classList.toggle("disabled")}
	});
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const button = document.querySelector(".burger-icon__menu-icon");
	const closeButton = document.querySelector(".burger-icon__menu-close");
	const sideMenu = document.querySelector(".nav-phone");


	const aboutUsMore = document.querySelector(".company-info-more span");
	const text = document.querySelector(".company-info-full");

	aboutUsMore.addEventListener('click', () => {
		if (text.style.display == "block") {

		aboutUsMore.textContent = "Подробнее?"
		text.style.display = "none";
		} else {    

		aboutUsMore.textContent = "Закрыть?"
		text.style.display = "block";
		}
	});


	button.addEventListener('click', () => {
		sideMenu.classList.toggle("disabled");
	});

	closeButton.addEventListener('click', () => {
		sideMenu.classList.toggle("disabled");
	});

});


const marketButtonContainer = document.querySelectorAll(".market__bottom-container");

marketButtonContainer.forEach(element => {
	element.addEventListener("click", (event) => {
	const marketBottomText = element.querySelector(".market__bottom-text-wrapper");
	const button = element.querySelector(".market__bottom-button");
	if (event.target == button) {
		marketBottomText.classList.toggle("disabled");}

	});  
});





document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper('.swiper-carousel', {
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 5,
		spaceBetween: 20,
		loop: true, 
		grabCursor: true, 
		centeredSlides: false, 
		breakpoints: {
		320: {
			centeredSlides: true, 
			slidesPerView: 2.5, 
		},
		660: {
			centeredSlides: true,
			slidesPerView: 4, 
		},
		930: {
			centeredSlides: false, 
			slidesPerView: 5,
			}
		}
	});
});



document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper('.tariffs-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 4, 
		loop: false, // Бесконечная прокрутка
		grabCursor: false, // Курсор "рука" для перетаскивания
		centeredSlides: false, // Центрирование активного слайда
		noSwiping: true,
		noSwipingClass: 'swiper-slide',
		breakpoints: {
			0: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			350: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			500: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			660: {
				spaceBetween: 15,
				noSwiping: false,
				slidesPerView: 2, 
				centeredSlides: false,
			},
			929: {
				spaceBetween: 5,
				noSwiping: true,
				slidesPerView: 4, 
				centeredSlides: false,
			},        
			1600: {
				spaceBetween: 25,
				noSwiping: true,
				slidesPerView: 4, 
				centeredSlides: false,
			}
		}
	});
});


document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper('.tariffs-container-new', {
		slidesPerView: 4, 
		loop: false, // Бесконечная прокрутка
		grabCursor: false, // Курсор "рука" для перетаскивания
		centeredSlides: false, // Центрирование активного слайда
		noSwiping: true,
		noSwipingClass: 'swiper-slide',
		breakpoints: {
			0: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			350: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			500: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			660: {
				spaceBetween: 15,
				noSwiping: false,
				slidesPerView: 2, 
				centeredSlides: false,
			},
            929: {
				spaceBetween: 25,
				noSwiping: true,
				slidesPerView: 3, 
				centeredSlides: false,
            },        
            1600: {
				spaceBetween: 25,
				noSwiping: true,
				slidesPerView: 3, 
				centeredSlides: false,
			}
		}
	});
});



document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper('.marketplace-swiper-container', {
		slidesPerView: 3, 
		spaceBetween: 15,
		loop: false, // Бесконечная прокрутка
		grabCursor: false, // Курсор "рука" для перетаскивания
		centeredSlides: false, // Центрирование активного слайда
		breakpoints: {
			0: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			350: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			500: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			660: {
				spaceBetween: 15,
				noSwiping: false,
				slidesPerView: 2, 
				centeredSlides: false,
			},
			929: {
				spaceBetween: 25,
				noSwiping: true,
				slidesPerView: 4, 
				centeredSlides: false,
			},        
			1600: {
				spaceBetween: 25,
				noSwiping: true,
				slidesPerView: 4, 
				centeredSlides: false,
			}
		}
	});
});


document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper('.marketplace-box-container', {
		slidesPerView: 3, 
		spaceBetween: 15,
		loop: false, // Бесконечная прокрутка
		grabCursor: false, // Курсор "рука" для перетаскивания
		centeredSlides: false, // Центрирование активного слайда
		breakpoints: {
			0: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			350: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			500: {
				spaceBetween: 20,
				noSwiping: false,
				slidesPerView: 1.1, 
				centeredSlides: false,
			},
			660: {
				spaceBetween: 15,
				noSwiping: false,
				slidesPerView: 2, 
				centeredSlides: false,
			},
			929: {
				spaceBetween: 25,
				noSwiping: true,
				slidesPerView: 4, 
				centeredSlides: false,
			},        
			1600: {
				spaceBetween: 25,
				noSwiping: true,
				slidesPerView: 4, 
				centeredSlides: false,
			}
		}
	});
});


//Вопрос ответ
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item-new");

  faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question-new");
      const toggleButton = item.querySelector(".faq-toggle");
      const answer = item.querySelector(".faq-answer-new");

      question.addEventListener("click", () => {
          // Переключаем класс active для кнопки
          toggleButton.classList.toggle("active");

          // Переключаем класс active для ответа
          answer.classList.toggle("active");

          // Если ответ активен, задаем максимальную высоту
          if (answer.classList.contains("active")) {
              answer.style.maxHeight = answer.scrollHeight + "px";
          } else {
              answer.style.maxHeight = "0";
          }
      });
  });
});




document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector(".tariff-box-container");
	const userButtons = container.querySelectorAll('.user-btn');
	const corporatePrice = document.getElementById('corporate-price');

	// Объект с ценами
	const prices = {
		'50': '159 000 ₽',
		'100': '229 000 ₽',
		'250': '349 000 ₽',
		'500': '599 000 ₽'
	};

	// Добавляем обработчики событий для кнопок
	userButtons.forEach(button => {
		button.addEventListener('click', () => {
			// Убираем класс active у всех кнопок
			userButtons.forEach(btn => btn.classList.remove('active'));

			// Добавляем класс active текущей кнопке
			button.classList.add('active');

			// Получаем выбранное количество пользователей
			const selectedUsers = button.dataset.users;

			// Обновляем цену
			corporatePrice.textContent = prices[selectedUsers];
		});
	});

	// Инициализация первой активной кнопки
	userButtons[0].classList.add('active');
});



document.addEventListener("DOMContentLoaded", () => {
	const subscriptionTypeButtons = document.querySelectorAll('.subscription-type-btn');
	const cloudSubscription = document.querySelector('.cloud-subscription');
	const boxSubscription = document.querySelector('.box-subscription');

	const container = document.querySelector(".marketplace-box-container");
	const userButtons = container.querySelectorAll('.user-btn');
	const corporatePrice = document.getElementById('marketplace-corporate-price');

	subscriptionTypeButtons.forEach(button => {
		button.addEventListener('click', () => {
			subscriptionTypeButtons.forEach(btn => btn.classList.remove('active'));
			button.classList.add('active');

			if (button.dataset.type === 'cloud') {
				cloudSubscription.style.display = 'flex';
				boxSubscription.style.display = 'none';
			} else {
				cloudSubscription.style.display = 'none';
				boxSubscription.style.display = 'flex';
			}
		});
	});

    const canceledPrice = document.getElementById("special_price");

    userButtons.forEach(button => {
        button.addEventListener('click', () => {
            userButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const prices = {
                '50': '29 995 ₽/мес.',
                '100': '39 995 ₽/мес.',
                '250': '49 995 ₽/мес.',
                '500': '59 995 ₽/мес.'
            };
            const pricesCanceled = {
              '50': '59 990 ₽/мес.',
              '100': '79 990 ₽/мес.',
              '250': '99 990 ₽/мес.',
              '500': '119 990 ₽/мес.'
            };
            const marketHeader = document.querySelector(".market__header-old-clients");
            const selectedUsers = button.dataset.users;

            if (marketHeader.style.display == "flex") {
              corporatePrice.textContent = pricesCanceled[selectedUsers];
            }
            else {
              corporatePrice.textContent = prices[selectedUsers];
            }
            canceledPrice.textContent = pricesCanceled[selectedUsers];
        });
    });

    userButtons[0].click();

});



const tariffSection = document.querySelector(".tariffs-section-new");
const topWrapper = tariffSection.querySelector(".button-container__top-wrapper");
const topWrapperButtons = topWrapper.querySelectorAll("div");
const topRightButton = topWrapper.querySelector(".top-wrapper__right-button");
const topLeftButton = topWrapper.querySelector(".top-wrapper__left-button");

const boxSection = document.getElementById("market-container");
const cloudSection = document.getElementById("market-container-example");
const marketContainer = document.querySelector(".market__button-container");
const marketSection = document.querySelector(".marketplace-swiper-container");

const marketWrapper = marketContainer.querySelector(".button-container__bottom-wrapper");
const marketWrapperButtons = marketWrapper.querySelectorAll("div");
const marketPrices = marketSection.querySelectorAll(".card__price");

marketWrapper.addEventListener("click", (event) => {
	const target = event.target.closest('.market-button');

	if (target && !event.target.classList.contains("activated")) {
		marketWrapperButtons.forEach(element => {
			element.classList.toggle("activated");
		});

		marketPrices.forEach(element => {
			element.classList.toggle("disabled");
		});
	} 
});


const bottomWrapper = document.querySelector(".button-container__bottom-wrapper");
const bottomWrapperButtons = bottomWrapper.querySelectorAll("div");
const bottomRightButton = bottomWrapper.querySelector(".bottom-wrapper__right-button");
const bottomLeftButton = bottomWrapper.querySelector(".bottom-wrapper__left-button");
const cloudDiv = bottomWrapper.querySelector(".bottom-wrapper__discount-cloud");
const swiperButtonsContainer = document.querySelector(".tariff-buttons-container");
const swiperPrices = document.querySelectorAll(".swiper-card__price");


topWrapper.addEventListener("click", (event) => {
	if (event.target == topRightButton && !event.target.classList.contains("activated")) {
		topWrapperButtons.forEach(element => {
			if (element != cloudDiv) {
				element.classList.toggle("activated");
			}
			boxSection.style.display = "flex";
			cloudSection.style.display = "none";
			swiperButtonsContainer.style.display = "none";

			bottomWrapperButtons.forEach(el => {
				el.classList.add("disabled");
				bottomWrapper.classList.add("disabled");
			});
		});
	} 

	if (event.target == topLeftButton && !event.target.classList.contains("activated")) {
		topWrapperButtons.forEach(element => {
			if (element != cloudDiv) {
				element.classList.toggle("activated");
			}
			boxSection.style.display = "none";
			cloudSection.style.display = "flex";
			swiperButtonsContainer.style.display = "flex";

			bottomWrapperButtons.forEach(el => {
				el.classList.remove("disabled");
				bottomWrapper.classList.remove("disabled");
			});
		});
	} 
});


bottomWrapper.addEventListener("click", (event) => {
	if (event.target == bottomRightButton && !event.target.classList.contains("activated")) {
		bottomWrapperButtons.forEach(element => {
		if (element != cloudDiv) {
			element.classList.toggle("activated");
		}

		swiperPrices.forEach(element => {
			element.classList.toggle("disabled");
		});

		});
	} 

	if (event.target == bottomLeftButton && !event.target.classList.contains("activated")) {
		bottomWrapperButtons.forEach(element => {
		if (element != cloudDiv) {
			element.classList.toggle("activated");
		}

		swiperPrices.forEach(element => {
			element.classList.toggle("disabled");
		});

		});
	} 
});



// rewrite this piss of crap
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];

	ll = selElmnt.length;

	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);

	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 0; j < ll; j++) {

	c = document.createElement("DIV");
	c.innerHTML = selElmnt.options[j].innerHTML;
	c.addEventListener("click", function(e) {
		var y, i, k, s, h, sl, yl;
		s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		sl = s.length;
		h = this.parentNode.previousSibling;



		for (i = 0; i < sl; i++) {
			if (s.options[i].innerHTML == this.innerHTML) {
			s.selectedIndex = i;
			h.innerHTML = this.innerHTML;
			y = this.parentNode.getElementsByClassName("same-as-selected");
			yl = y.length;
			for (k = 0; k < yl; k++) {
				y[k].removeAttribute("class");
			}            
			this.setAttribute("class", "same-as-selected");

			const card = document.getElementById("special-description");
			const text = card.querySelectorAll(".swiper-card__price");

			const secondCard = document.getElementById("third-description");
			const textSecond = secondCard.querySelectorAll(".card__price");

			const thirdCard = document.getElementById("select-card");
			const textThird = thirdCard.querySelectorAll(".card__price");


			const marketHeader = document.querySelector(".market__header-old-clients");

			textSecond.forEach(element => {
				if (element.classList.contains("disabled")) {  
				} else {
				let selectedItem = secondCard.querySelector(".select-selected");

			
				const marketplaceYear = {
					'250': '7 992 ₽/мес.',
					'500': '9 592 ₽/мес.',
					'1000': '11 992 ₽/мес.',
					'2000': '11 992 ₽/мес.',
					'3000': '11 992 ₽/мес.',

					'4000': '11 992 ₽/мес.',
					'5000': '11 992 ₽/мес.',
					'6000': '11 992 ₽/мес.',
					'7000': '11 992 ₽/мес.',
					'8000': '11 992 ₽/мес.',
		
					'9000': '11 992 ₽/мес.',
					'10000': '11 992 ₽/мес.'
				};

				const marketplaceYear2 = {
					'250': '4 995 ₽/мес.',
					'500': '5 995 ₽/мес.',
					'1000': '7 495 ₽/мес.',
					'2000': '7 495 ₽/мес.',
					'3000': '7 495 ₽/мес.',
					
					'4000': '7 495 ₽/мес.',
					'5000': '7 495 ₽/мес.',
					'6000': '7 495 ₽/мес.',
					'7000': '7 495 ₽/мес.',
					'8000': '7 495 ₽/мес.',

					'9000': '7 495 ₽/мес.',
					'10000': '7 495 ₽/мес.'
				};

				
				const marketplaceMonth = {
					'250': '9 990 ₽/мес.',
					'500': '11 990 ₽/мес.',
					'1000': '14 990 ₽/мес.',
					'2000': '14 992 ₽/мес.',
					'3000': '14 992 ₽/мес.',

					'4000': '14 992 ₽/мес.',
					'5000': '14 992 ₽/мес.',
					'6000': '14 992 ₽/мес.',
					'7000': '14 992 ₽/мес.',
					'8000': '14 992 ₽/мес.',
		
					'9000': '14 992 ₽/мес.',
					'10000': '14 992 ₽/мес.'
				};

				const selectedUsers = selectedItem.textContent;
				if (element.classList.contains("year")) {
					if (marketHeader.style.display == "flex") {
					element.textContent = marketplaceYear[selectedUsers];
					}
					else {
					element.textContent = marketplaceYear2[selectedUsers];
					}
				} else 
				element.textContent = marketplaceMonth[selectedUsers];
				}        
			});

			text.forEach(element => {
				if (element.classList.contains("disabled")) {
				} else {
				let selectedItem = card.querySelector(".select-selected");

				const pricesMonth = {
					'250': '33 990 ₽/мес.',
					'500': '59 990 ₽/мес.',
					'1000': '99 990 ₽/мес.',
					'2000': '199 990 ₽/мес.',
					'3000': '299 990 ₽/мес.',

					'4000': '399 990 ₽/мес.',
					'5000': '499 990 ₽/мес.',
					'6000': '599 990 ₽/мес.',
					'7000': '699 990 ₽/мес.',
					'8000': '799 990 ₽/мес.',
		
					'9000': '999 990 ₽/мес.',
					'10000': '999 990 ₽/мес.'
				};
				const pricesYear = {
					'250': '23 793 ₽/мес.',
					'500': '41 993 ₽/мес.',
					'1000': '69 993 ₽/мес.',
					'2000': '139 993 ₽/мес.',
					'3000': '209 993 ₽/мес.',
					
					'4000': '279 793 ₽/мес.',
					'5000': '349 993 ₽/мес.',
					'6000': '419 993 ₽/мес.',
					'7000': '489 993 ₽/мес.',
					'8000': '559 993 ₽/мес.',

					'9000': '629 993 ₽/мес.',
					'10000': '699 993 ₽/мес.'
				};
				const weight = {
					'250': '3 ТБ',
					'500': '5 ТБ',
					'1000': '10 ТБ',
					'2000': '20 ТБ',
					'3000': '30 ТБ',
					
					'4000': '40 ТБ',
					'5000': '50 ТБ',
					'6000': '60 ТБ',
					'7000': '70 ТБ',
					'8000': '80 ТБ',

					'9000': '90 ТБ',
					'10000': '100 ТБ'
				}
				const weightSpan = document.getElementById("weight-span");
				
				const selectedUsers = selectedItem.textContent;
				
				weightSpan.textContent = weight[selectedUsers];
				if (element.classList.contains("year")) {
					element.textContent = pricesYear[selectedUsers];
				} else 
				element.textContent = pricesMonth[selectedUsers];

				}        
			});

			break;
			}
		}
		h.click();
	});
	b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");

	xl = x.length;
	yl = y.length;
	
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

document.addEventListener("click", closeAllSelect);





// not mine


document.addEventListener("DOMContentLoaded", () => {
  const questionBlocks = document.querySelectorAll('.question-block');
  const form = document.querySelector('.cost-form');
  const submitButton = form.querySelector('.submit-btn');

  // Функция для перехода к следующему шагу
  function goToNextStep(currentStep) {
      const currentBlock = document.querySelector(`.question-block[data-step="${currentStep}"]`);
      const nextBlock = document.querySelector(`.question-block[data-step="${currentStep + 1}"]`);

      if (nextBlock) {
          // Анимация исчезновения текущего блока
          currentBlock.style.opacity = '0';
          currentBlock.style.transform = 'translateY(20px)';

          setTimeout(() => {
              currentBlock.classList.remove('active');

              // Анимация появления следующего блока
              nextBlock.classList.add('active');
              setTimeout(() => {
                  nextBlock.style.opacity = '1';
                  nextBlock.style.transform = 'translateY(0)';
              }, 50); // Задержка для корректного отображения
          }, 500); // Время анимации исчезновения
      } else {
          // Если это последний шаг, показываем кнопку отправки
          submitButton.classList.add('show');
          setTimeout(() => {
              submitButton.style.opacity = '1';
              submitButton.style.transform = 'translateY(0)';
          }, 50);
      }
  }

  // Обработчик событий для радио-кнопок
  form.addEventListener('change', (event) => {
      const target = event.target;

      if (target.type === 'radio') {
          const currentStep = parseInt(target.closest('.question-block').dataset.step);
          goToNextStep(currentStep);
      }
  });

  // Инициализация первого шага
  questionBlocks[0].classList.add('active');
  setTimeout(() => {
      questionBlocks[0].style.opacity = '1';
      questionBlocks[0].style.transform = 'translateY(0)';
  }, 50);
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const target = entry.target;
              const targetNumber = parseInt(target.getAttribute("data-target"));
              let currentNumber = 0;

              const interval = setInterval(() => {
                  currentNumber += Math.ceil(targetNumber / 100); // Шаг анимации
                  target.textContent = currentNumber;

                  if (currentNumber >= targetNumber) {
                      target.textContent = targetNumber; // Останавливаем на целевом значении
                      clearInterval(interval);
                  }

                  // Добавляем символ + обратно после завершения анимации
                  if (currentNumber >= targetNumber) {
                      target.innerHTML = targetNumber + '<span>+</span>';
                  }
              }, 20); // Скорость анимации

              observer.unobserve(target); // Прекращаем наблюдение после запуска анимации
          }
      });
  }, { threshold: 0.5 }); // Анимация начинается, когда блок виден на 50%

  counters.forEach((counter) => observer.observe(counter));
});