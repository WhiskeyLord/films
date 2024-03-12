function Footer(){
    return         <footer className="page-footer indigo darken-4">
    <div className="container">
        {new Date().getFullYear()}
      <div className="row ">
        <div className="col l6 s12">
          <h5 className="white-text">Фильмы</h5>
          <p className="grey-text text-lighten-4">Информация о фильмах и сериалах.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Ссылки</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://ru.wikipedia.org/wiki/Матрица_(фильм)">Википедия</a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.kinopoisk.ru/film/301/?utm_referrer=yandex.ru">Кинопоиск</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © Made by Maximova Olga 2024
      
      </div>
    </div>
  </footer>
}

export {Footer};