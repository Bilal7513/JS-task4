const sliderContainer = document.getElementById('slider-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let i = 0;
let sliderTimer;

const sliderArray = [
    {
        imgArray: '/images/nissan.jpg',
        imgHeading: 'Nissan GTR R34 Skyline',
        imgPara: 'Legendary sports car with advanced awd system and iconic RB26DETT engine.',
    },
    {
        imgArray: '/images/Supra.jpg',
        imgHeading: 'Toyota Supra MK4',
        imgPara: 'Iconic sports car known for its 2JZ engine and immense tuning potential.',
    },
    {
        imgArray: '/images/mazda.jpg',
        imgHeading: 'MAZDA RX-7',
        imgPara: 'Lightweight sports car with unique rotary engine and sleek design.',
    },
    {
        imgArray: '/images/BMW M4.jpg',
        imgHeading: 'BMW M4',
        imgPara: 'A high-performance coupe famed for its aggressive styling, powerful engine, and track-ready precision handling.',
    },
    {
        imgArray: '/images/charger.jpg',
        imgHeading: 'Dodge Charger 1968',
        imgPara: 'Classic muscle car with bold design and powerful V8 engine.',
    },
    {
        imgArray: '/images/challenger.jpg',
        imgHeading: 'DODGE CHALLENGER',
        imgPara: 'Modern muscle car with retro design and powerful V8 engines.',
    },
    {
        imgArray: '/images/camero.jpg',
        imgHeading: 'CHEVROLET CAMARO SS',
        imgPara: 'Classic muscle car offering powerful V8 engine and aggressive american styling.',
    },
    {
        imgArray: '/images/350z.jpg',
        imgHeading: 'NISSAN 350Z',
        imgPara: 'Sleek sports car known for its powerful V6 engine, offering a combination of performance and style at an accessible price.',
    },
    {
        imgArray: '/images/toyota86.jpg',
        imgHeading: 'TOYOTA 86',
        imgPara: 'Lightweight sports car celebrated for its agile handling, and pure rear-wheel-drive performance.',
    },
];

const numberOfSlide = sliderArray.length;

function createItem(){
    sliderContainer.innerHTML = '';

    const div = document.createElement('div');
    div.classList.add('slider-item','relative','animate-fade','hover:animate-none','sm:w-[600px]','md:w-[700px]','lg:w-[980px]');
    
    const img = document.createElement('img');
    img.classList.add('w-[300px]','h-[160px]','rounded-lg','transition-[opacity]','ease-in','duration-1000','hover:opacity-80','sm:w-[600px]','sm:h-[340px]','md:w-[700px]','md:h-[360px]','lg:w-[980px]','lg:h-[480px]','xl:w-[1200px]','xl:h-[520px]')
    img.src = sliderArray[i].imgArray;
    img.alt = 'car image';
    div.appendChild(img);
    
    const span = document.createElement('span');
    span.classList.add('w-[250px]','absolute','bg-PastelRed','text-center','p-1','rounded','left-[25px]','bottom-0','sm:w-[450px]','sm:left-[75px]','md:w-[500px]','md:left-[95px]','lg:w-[600px]','lg:left-[190px]','xl:w-[620px]','xl:left-[180px]')
    
    const h2 = document.createElement('h2');
    h2.innerHTML = sliderArray[i].imgHeading;
    h2.classList.add('text-[12px]', 'font-medium','sm:text-[16px]','lg:text-[20px]','xl:text-[22px]');
    span.appendChild(h2);
    
    const p = document.createElement('p');
    p.innerHTML = sliderArray[i].imgPara;
    p.classList.add('text-[8px]','sm:text-[10px]','md:text-[12px]','lg:text-[15px]','xl:text-[16px]');
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
        dot.classList.add('dot','w-[8px]','h-[8px]','ml-1','rounded','cursor-pointer','sm:w-[10px]','sm:h-[10px]','sm:rounded-md','lg:w-[12px]','lg:h-[12px]','lg:rounded-lg','lg:mt-[10px]');
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