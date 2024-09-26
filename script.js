const sliderContainer = document.getElementById('slider-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let i = 0;
let sliderTimer;

const sliderArray = [
    {
        imgArray: './images/nissan.jpg',
        imgHeading: 'Nissan GTR R34 Skyline',
        imgPara: 'Legendary sports car with advanced awd system and iconic RB26DETT engine.',
    },
    {
        imgArray: './images/Supra.jpg',
        imgHeading: 'Toyota Supra MK4',
        imgPara: 'Iconic sports car known for its 2JZ engine and immense tuning potential.',
    },
    {
        imgArray: './images/mazda.jpg',
        imgHeading: 'MAZDA RX-7',
        imgPara: 'Lightweight sports car with unique rotary engine and sleek design.',
    },
    {
        imgArray: './images/BMW M4.jpg',
        imgHeading: 'BMW M4',
        imgPara: 'A high-performance coupe famed for its aggressive styling, powerful engine, and track-ready precision handling.',
    },
    {
        imgArray: './images/charger.jpg',
        imgHeading: 'Dodge Charger 1968',
        imgPara: 'Classic muscle car with bold design and powerful V8 engine.',
    },
    {
        imgArray: './images/challenger.jpg',
        imgHeading: 'DODGE CHALLENGER',
        imgPara: 'Modern muscle car with retro design and powerful V8 engines.',
    },
    {
        imgArray: './images/camero.jpg',
        imgHeading: 'CHEVROLET CAMARO SS',
        imgPara: 'Classic muscle car offering powerful V8 engine and aggressive american styling.',
    },
    {
        imgArray: './images/350z.jpg',
        imgHeading: 'NISSAN 350Z',
        imgPara: 'Sleek sports car known for its powerful V6 engine, offering a combination of performance and style at an accessible price.',
    },
    {
        imgArray: './images/toyota86.jpg',
        imgHeading: 'TOYOTA 86',
        imgPara: 'Lightweight sports car celebrated for its agile handling, and pure rear-wheel-drive performance.',
    },
];

const numberOfSlide = sliderArray.length;

function createItem(){
    sliderContainer.innerHTML = '';

    const div = document.createElement('div');
    div.classList.add('slider-item','relative','animate-fade','hover:animate-none');
    
    const img = document.createElement('img');
    img.classList.add('w-[260px]','h-[180px]','rounded-lg','transition-[opacity]','ease-in','duration-1000','hover:opacity-80','sm:w-[550px]','sm:h-[360px]','md:w-[650px]','md:h-[430px]','lg:w-[900px]','lg:h-[500px]')
    img.src = sliderArray[i].imgArray;
    img.alt = 'car image';
    div.appendChild(img);
    
    const span = document.createElement('span');
    span.classList.add('w-[240px]','absolute','bg-PastelRed','text-center','p-1','rounded','bottom-0','left-[10px]','sm:w-[500px]','sm:left-[25px]','md:w-[580px]','md:left-[35px]','lg:w-[800px]','lg:left-[50px]')
    
    const h2 = document.createElement('h2');
    h2.innerHTML = sliderArray[i].imgHeading;
    h2.classList.add('text-[12px]', 'font-medium','sm:text-[18px]','md:text-[20px]','lg:text-[22px]');
    span.appendChild(h2);
    
    const p = document.createElement('p');
    p.innerHTML = sliderArray[i].imgPara;
    p.classList.add('text-[8px]','sm:text-[12px]','md:text-[14px]','lg:text-18px]');
    span.appendChild(p);
    
    div.appendChild(span);
    sliderContainer.appendChild(div);

    div.addEventListener('mouseover', pauseSlides);
    div.addEventListener('mouseout', resumeSlides);

    selected();
}

function dots() {
    const dots = document.querySelector('.dots');
    for (let j = 0; j < numberOfSlide; j++) {
        const dot = document.createElement('button');
        dot.classList.add('dot','w-[8px]','h-[8px]','ml-1','rounded-xl','cursor-pointer','mt-[8px]','sm:w-[12px]','sm:h-[12px]','md:w-[13px]','md:h-[13px]','lg:w-[14px]','lg:h-[14px]');
        dot.addEventListener('click', () => {
            i = j;
            createItem();
            sliderTime();
        });
        dots.appendChild(dot);
    }
}

function selected() {
    const dots = document.getElementsByClassName('dot');
    for (let j = 0; j < dots.length; j++) {
        dots[j].classList.remove('dot_selected','bg-PastelRed','transition-[background]','ease-linear','duration-700');
        dots[j].classList.add('bg-white');
    }
    dots[i].classList.remove('bg-white');
    dots[i].classList.add('dot_selected','bg-PastelRed','transition-[background]','ease-linear','duration-700');
}

dots();

function sliderTime(){
    clearTimeout(sliderTimer)
    sliderTimer = setTimeout(showNext, 5000);
}

function pauseSlides(){
    clearTimeout(sliderTimer);
}

function resumeSlides(){
    sliderTimer = setTimeout(showNext, 0);
}

function showNext(){
    if (i < sliderArray.length - 1) {
        i++;
    } else {
        i = 0;
    }
    createItem();
    sliderTime();
}

function showPrev(){
    if (i > 0) {
        i--;
    } else {
        i = sliderArray.length -1;
    }
    createItem();
    sliderTime();
}

nextBtn.addEventListener('click', showNext);

prevBtn.addEventListener('click', showPrev);

createItem();
sliderTime();