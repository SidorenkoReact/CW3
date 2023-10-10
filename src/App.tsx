import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <header style={{display: "flex", width: "100vw", height: 50, backgroundColor: "grey", alignItems: "center"}}>
        <button>Войти</button>
        <nav style={{display: "flex", justifyContent: "right", width: "100%"}}>
          <a href="">О сайте</a>
          <a href="">Посты</a>
        </nav>
      </header>

      <main style={{display: "flex", flexDirection: "column", alignItems: "start", width: 600}}>
        <button>Добавить пост</button>
        <hr/>
        <input type="search" placeholder="Найти..."/>
        <select>
          <option hidden>Сортировка</option>
          <option>По Названию</option>
          <option>По Описанию</option>
        </select>
        <select>
          <option>10</option>
          <option>25</option>
        </select>

        <section style={{display: "flex", flexDirection: "column", alignItems: "center", width: 600}}>
          <h4>Посты</h4>
          <article style={{display: "flex", border: "1px black solid", flexDirection: "row", alignItems: "center", width: 600}}>
            <div>
              <h6>Заголовок</h6>
              <p>
                Текст поста
              </p>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "end", width: "100%"}}>
              <button>Открыть</button>
              <button>Удалить</button>
            </div>
          </article>
        </section>
      </main>
      <footer style={{display: "flex", justifyContent: "center", width: "100vw", height: 20, backgroundColor: "grey"}}>
        <small>Все права защищены ©</small>
      </footer>

    </div>
  );
}

export default App;
