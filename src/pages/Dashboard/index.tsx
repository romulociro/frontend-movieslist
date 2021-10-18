import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { CardContainer } from './styles';
import { Header } from '../../components/Header';
import 'antd/dist/antd.css';
import api from '../../services/api';
import DetailsMovie from '../DetailsMovie';

const Dashboard: React.FC = () => {
  const token = localStorage.getItem('@MovieList:token');
  const [movies, setMovies] = useState<any[]>([]);

  const userData = async () => {
    try {
      const res: any = await api.get('http://localhost:3333/movies', {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <Header />
      <CardContainer>
        <Card title="Movies">
          {movies.map((movie) => (
            <Card.Grid className="cardGrid">
              <Card
                className="card"
                size="small"
                title={movie.title}
                extra={<DetailsMovie sinopse={movie.sinopse} title={movie.title} />}
              >
                <p>
                  Diretor:
                  {' '}
                  {movie.director}
                </p>
                <p>
                  Categoria:
                  {' '}
                  {movie.category}
                </p>
                <p>
                  Ano:
                  {' '}
                  {movie.year}
                </p>
              </Card>
            </Card.Grid>
          ))}
        </Card>
      </CardContainer>
    </>
  );
};

export default Dashboard;
