'use client'

import React from 'react';
import NewsData from './types/NewsData';
import { DateTime } from 'luxon';

//NEW FROM HERE BELOW
interface DataListProps {
  data: NewsData[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {

    const listItems = data.map(data =>
    (
        <div className="flex flex-wrap items-center mt-4 mb-4">
            <div className="bg-white rounded-lg shadow-2xl md:flex overflow-hidden">
                <img src={data.banner_image ? data.banner_image : 'https://www.benzinga.com/next-assets/images/schema-image-default.png'} alt="Data"
                    className="rounded-t-lg md:w-1/3 md:rounded-l-lg md:rounded-t-none" />
                <div className="p-6">
                    <h2 className="mb-2 font-bold text:xl md:text-2xl text-orange-700">{data.title}</h2>
                    <span className="mb-4 bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{data.overall_sentiment_label}</span>
                    <p className="mb-4 text-gray-700">{data.summary}</p>
                    <p className="mb-4 text-gray-900 leading-none">Authors: {data.authors.join(',')}</p>
                    <p className="mb-2 text-gray-700">Published: {DateTime.fromISO(data.time_published).toLocaleString(DateTime.DATETIME_FULL)}</p>
                    <a href={data.url} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                        rel="noreferrer">Read More</a>
                </div>
                <div className="p-6">
                    
                </div>
            </div>
        </div>)
    );

    return <div>{listItems}</div>;
};

export default DataList;