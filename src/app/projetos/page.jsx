import React from 'react';

const Projetos = ({ project }) => {
  return (
    <section className="min-h-screen pt-12 flex items-center justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
      {/* Primeiro projeto */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* Primeiro projeto */}
          <a href="#">
            <img className="rounded-t-lg" src="/images/ecommerce1.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E-commerce em ReactJS APIShopee tailwindCSS</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">O e-commerce em React é uma aplicação web que permite aos usuários visualizar produtos, adicioná-los ao carrinho de compras e realizar transações de compra de forma fácil e intuitiva.</p>
            <a href="https://github.com/vmaarcos/E-commerce" className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Veja no github
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Segundo projeto */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="/images/digramaMySQLhospital.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Diagrama Hopsital, e uma biblioteca</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Diagrama de um hospital e de uma biblioteca em SQL cujo livros estão organizados por sessões, feito no draw.io e MySQL</p>
            <a href="https://github.com/vmaarcos/MySql-ER-BIBLIOTECA" className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Veja no Github
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            
          </div>
        </div>
 
      {/* 3 projeto */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="/images/loginReact.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Login em React </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Login em React na época estava aprendendo react e tailwindCSS, tela de login simples porém funcional.</p>
            <a href="https://github.com/vmaarcos/Login-React" className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Veja no github
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
        {/* 4 projeto */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="/images/ecommerce1.png" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E-commerce em ReactJS APIShopee tailwindCSS</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">O e-commerce em React é uma aplicação web que permite aos usuários visualizar produtos, adicioná-los ao carrinho de compras e realizar transações de compra de forma fácil e intuitiva.</p>
            <a href="https://github.com/vmaarcos/E-commerce" className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Veja no github
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Projetos;
