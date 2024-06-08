import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'

const Newsview = () => {
    const [news, changenews] = useState(
        {"articles":[]}
    )
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
(response)=>{changenews(response.data)}
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navebar/>
            <div className="contaner">
                <div className="row">
                <center><h1>Today's News</h1></center>
                <br></br><br></br><br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                news.articles.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img src={value.urlToImage} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <p class="card-text">{value.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsview
