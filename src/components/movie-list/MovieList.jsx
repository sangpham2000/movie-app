import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { Autoplay } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';

import tmdbApi, { category } from '../../api/tmdbApi';

import MovieCard from '../movie-card/MovieCard';

const MovieList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {
                            params,
                        });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {
                            params,
                        });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        };
        getList();
    }, [props.category, props.id, props.type]);

    return (
        <div className="movie-list">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={'auto'}
                autoplay={{ delay: 7000 }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <MovieCard item={item} category={props.category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default MovieList;
