import React from 'react';
import "../img/IMAGE.png";

function Grid70({ onToggle }) {
    return (
        <>
            <div className='p-1 burger flex flex-col justify-center items-center fixed top-3 right-3 rounded bg-white'>
                <button className='p-1' onClick={onToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <div className="  ">
                <div className="flex bg__grid__70 flex-col justify-center items-center">

                    <h1 className='grid__70__h1 w-7/12 '>Welcome to the incredible</h1>
                    <div className='text-white mt-4 space-x-12'>
                        <button className='bg-transparent button__style  border-2 border-white rounded-md  px-12 py-4'>Button Text</button>
                        <button className=' bg__button  button__style rounded-md '>Button Text</button>
                    </div>

                </div>
                <div className='flex mt-12 space-y-4 flex-col justify-center items-center'>
                    <h1 className='section__heading__h1'>Section Heading</h1>
                    <p className='p__this__is'>This is some text inside of a div block.</p>
                </div>
                <div className='grid grid-cols-4 gap-3'>
                    <div className='w-10/12 mx-auto shadow'>
                        <div className='ml-2'>
                            <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6667 16.6666V10.6666C56.6667 4.99996 52.3333 0.666626 46.6667 0.666626H10C4.33333 0.666626 0 4.99996 0 10.6666V37.3333C0 43 4.33333 47.3333 10 47.3333H46.6667C52.3333 47.3333 56.6667 43 56.6667 37.3333V31.3333L80 44V3.99996L56.6667 16.6666ZM50 37.3333C50 39.3333 48.6667 40.6666 46.6667 40.6666H10C8 40.6666 6.66667 39.3333 6.66667 37.3333V10.6666C6.66667 8.66663 8 7.33329 10 7.33329H46.6667C48.6667 7.33329 50 8.66663 50 10.6666V37.3333ZM73.3333 32.6666L57.3333 24L73.3333 15.3333V32.6666Z" fill="black" />
                            </svg>
                        </div>
                        <h4 className='style__h4 mt-12'>STYLE 1</h4>
                        <p className='style__p mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                        <button className='style__btn mt-3'>Text Link</button>
                    </div>
                    <div className='w-10/12 mx-auto shadow'>
                        <div className='ml-2'>
                            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.6666 0.333313H10.3333C4.66665 0.333313 0.333313 4.66665 0.333313 10.3333V63.6666C0.333313 69.3333 4.66665 73.6666 10.3333 73.6666H63.6666C69.3333 73.6666 73.6666 69.3333 73.6666 63.6666V10.3333C73.6666 4.66665 69.3333 0.333313 63.6666 0.333313ZM23.6666 67H10.3333C8.33331 67 6.99998 65.6666 6.99998 63.6666V27H23.6666V67ZM67 63.6666C67 65.6666 65.6666 67 63.6666 67H30.3333V27H67V63.6666ZM67 20.3333H6.99998V10.3333C6.99998 8.33331 8.33331 6.99998 10.3333 6.99998H63.6666C65.6666 6.99998 67 8.33331 67 10.3333V20.3333Z" fill="black" />
                            </svg>
                        </div>
                        <h4 className='style__h4 mt-12'>STYLE 1</h4>
                        <p className='style__p mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                        <button className='style__btn mt-3'>Text Link</button>
                    </div>
                    <div className='w-10/12 mx-auto shadow'>
                        <div className='ml-2'>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M40 26.6667C32.6667 26.6667 26.6667 32.6667 26.6667 40C26.6667 47.3333 32.6667 53.3333 40 53.3333C47.3333 53.3333 53.3333 47.3333 53.3333 40C53.3333 32.6667 47.3333 26.6667 40 26.6667ZM40 46.6667C36.3333 46.6667 33.3333 43.6667 33.3333 40C33.3333 36.3333 36.3333 33.3333 40 33.3333C43.6667 33.3333 46.6667 36.3333 46.6667 40C46.6667 43.6667 43.6667 46.6667 40 46.6667ZM70 50C75.6667 50 80 45.6667 80 40C80 34.3333 75.6667 30 70 30H68.3333C68 29 67.6667 28 67 27L68.3333 25.6667C72.3333 21.6667 72.3333 15.3333 68.3333 11.6667C64.3333 7.66667 58 7.66667 54.3333 11.6667L53 13C52 12.6667 51 12 50 11.6667V10C50 4.33333 45.6667 0 40 0C34.3333 0 30 4.33333 30 10V11.6667C29 12 28 12.3333 27 13L25.6667 11.6667C21.6667 7.66667 15.3333 7.66667 11.6667 11.6667C7.66667 15.6667 7.66667 22 11.6667 25.6667L13 27C12.6667 28 12 29 11.6667 30H10C4.33333 30 0 34.3333 0 40C0 45.6667 4.33333 50 10 50H11.6667C12 51 12.3333 52 13 53L11.6667 54.3333C7.66667 58.3333 7.66667 64.6667 11.6667 68.3333C15.6667 72.3333 22 72.3333 25.6667 68.3333L27 67C28 67.3333 29 68 30 68.3333V70C30 75.6667 34.3333 80 40 80C45.6667 80 50 75.6667 50 70V68.3333C51 68 52 67.6667 53 67L54.3333 68.3333C58.3333 72.3333 64.6667 72.3333 68.3333 68.3333C72.3333 64.3333 72.3333 58 68.3333 54.3333L67 53C67.3333 52 68 51 68.3333 50H70ZM63.3333 58.6667C64.6667 60 64.6667 62.3333 63.3333 63.6667C62 65 60 65 58.6667 63.6667L54 59C51 61.3333 47.3333 63 43.3333 63.3333V70C43.3333 72 42 73.3333 40 73.3333C38 73.3333 36.6667 72 36.6667 70V63C32.6667 62.3333 29 61 26 58.6667L21.3333 63.3333C20 64.6667 18 64.6667 16.6667 63.3333C15.3333 62 15.3333 60 16.6667 58.6667L21.3333 54C19 51 17.3333 47.3333 17 43.3333H10C8 43.3333 6.66667 42 6.66667 40C6.66667 38 8 36.6667 10 36.6667H17C17.6667 32.6667 19 29 21.3333 26L16.6667 21.3333C15.3333 20 15.3333 18 16.6667 16.6667C18 15.3333 20 15.3333 21.3333 16.6667L26 21.3333C29 19 32.6667 17.3333 36.6667 17V10C36.6667 8 38 6.66667 40 6.66667C42 6.66667 43.3333 8 43.3333 10V17C47.3333 17.6667 51 19 54 21.3333L58.6667 16.6667C60 15.3333 62 15.3333 63.3333 16.6667C64.6667 18 64.6667 20 63.3333 21.3333L58.6667 26C61 29 62.6667 32.6667 63 36.6667H70C72 36.6667 73.3333 38 73.3333 40C73.3333 42 72 43.3333 70 43.3333H63C62.3333 47.3333 61 51 58.6667 54L63.3333 58.6667Z" fill="black" />
                            </svg>
                        </div>
                        <h4 className='style__h4 mt-12'>STYLE 1</h4>
                        <p className='style__p mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                        <button className='style__btn mt-3'>Text Link</button>
                    </div>
                    <div className='w-10/12 mx-auto shadow'>
                        <div className='ml-2'>
                            <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C37 0 26 8.33333 21.6667 20H20C9 20 0 29 0 40C0 51 9 60 20 60H50C66.6667 60 80 46.6667 80 30C80 13.3333 66.6667 0 50 0ZM50 53.3333H20C12.6667 53.3333 6.66667 47.3333 6.66667 40C6.66667 32.6667 12.6667 26.6667 20 26.6667H27C28.6667 15.3333 38.3333 6.66667 50 6.66667C63 6.66667 73.3333 17 73.3333 30C73.3333 43 63 53.3333 50 53.3333Z" fill="black" />
                            </svg>
                        </div>
                        <h4 className='style__h4 mt-12'>STYLE 1</h4>
                        <p className='style__p mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                        <button className='style__btn mt-3'>Text Link</button>
                    </div>
                </div>
                <div className='p-5 mt-12' style={{ background: "#CF404D" }}>
                    <div className='flex justify-between items-center'>
                        <h1 className='red-div__h1'>Here you can put some text</h1>
                        <button className='red-div__button text-white px-5 py-2'>Call To Action</button>
                    </div>
                </div>
                <div className='flex mt-12 space-y-4 flex-col justify-center items-center'>
                    <h1 className='section__heading__h1 uppercase'>Lightbox Section</h1>
                    <p className='p__this__is'>This is some text inside of a div block.</p>
                </div>
                <div className='grid grid-cols-4 gap-6 w-10/12 mx-auto mt-12'>
                    <img src="https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png" alt="velosaped" />
                    <img src="https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png" alt="velosaped" />
                    <img src="https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png" alt="velosaped" />
                    <img src="https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png" alt="velosaped" />
                    <img src="https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png" alt="velosaped" />
                    <img src="https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png" alt="velosaped" />
                    <img src="https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png" alt="velosaped" />
                    <img src="https://media.architecturaldigest.com/photos/5785586af5b3b150126f0767/1:1/w_601,h_601,c_limit/cyclotron-bicycle-of-future-02.png" alt="velosaped" />
                </div>
                <div style={{ background: "#FAFAFA" }} className='flex mt-12 space-y-4 flex-col justify-center items-center'>
                    <h1 className='section__heading__h1 uppercase'>Contact Form</h1>
                    <p className='p__this__is'>This is some text inside of a div block.</p>
                </div>
            </div>


        </>
    );
}

export default Grid70;
