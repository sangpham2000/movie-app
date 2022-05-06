import React from 'react';

import { useParams } from 'react-router-dom';

import PageHeader from '../components/page-header/PageHeader';
import MovieGrid from '../components/movie-grid/MovieGrid';

import Helmet from '../components/Helmet';

import { category as cate } from '../api/tmdbApi';

const Catalog = () => {
    let { category } = useParams();

    return (
        <React.Fragment>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <Helmet title={category === cate.movie ? 'Movies' : 'TV Series'}>
                <div className="container">
                    <div className="section mb-3">
                        <MovieGrid category={category} />
                    </div>
                </div>
            </Helmet>
        </React.Fragment>
    );
};

export default Catalog;
