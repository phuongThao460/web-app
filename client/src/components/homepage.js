import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Logo} from './pics';
import {Link} from 'react-router-dom';
import pics from './images/example.jpg';
function Homepage () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
  };
  const [news, setNews] = useState ([]);
  /*useEffect (
    () => {
      axios
        .get (
          'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2abd7de3acf84ffa950ace9645f1a973'
        )
        .then (result => {
          setNews (result.data.articles);
          //console.log(result.data.articles[0])
        })
        .catch ();
    },
    [news]
  );*/
  return (
    <div className="container-page">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="mb-3" />
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sport
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Policities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Finance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Discovery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Health</a>
            </li>
          </ul>
          {window.sessionStorage.getItem ('fullname') != null
            ? <div style={{display: 'flex'}}>
                <p style={{margin: '0', fontWeight: '500'}}>
                  {window.sessionStorage.getItem ('fullname')}
                </p>
                <div style={{borderRight: '1px solid #dee2e6', margin: "0 10px 0 10px"}} />
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                  Logout
                </Link>
              </div>
            : <Link
                to="/"
                style={{textDecoration: 'none', color: 'black'}}
                className="btn-login"
              >
                Login
              </Link>}

        </div>
      </nav>
      <div className="title-news">
        <div className="title-image">
          <a href="/#">
            <Logo />
          </a>
        </div>
      </div>
      <div className="trending-tab">
        <p className="small-text">COVID-19</p>
        <p className="small-text">WORLD CUP</p>
        <p className="small-text">MUSIC SHOW</p>
        <p className="small-text">TRAFFIC</p>
      </div>
      <div className="main-tab">
        <div className="left-row">
          <div>
            {news.map (i => {
              return (
                <div>
                  <div className="left-contain">
                    <div className="left-title">
                      <a href={i.url} className="link-to-news-detail">
                        <h4>{i.title}</h4>
                      </a>
                      <i>{i.description}</i>
                      <p className="left-content">{i.content}</p>
                    </div>
                    <div className="left-image">
                      <img src={i.urlToImage} className="img-title" />

                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}

          </div>

        </div>
        <div style={{borderRight: '1px solid #dee2e6', marginTop: '10px'}} />
        <div className="right-row">
          <span
            style={{marginLeft: '6px', fontSize: '18px', fontWeight: '700'}}
          >
            Advertising
          </span>
          <div className="right-caroudel">
            <div className="right-caroudel-1">
              <Slider {...settings}>
                <div>
                  <Link to={'/introduction'} target="_blank">
                    <img className="img" src={pics} />
                  </Link>

                </div>
                <div>
                  <h3>SLIDE 2</h3>
                </div>
                <div>
                  <h3>SLIDE 3</h3>
                </div>
              </Slider>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Homepage;
