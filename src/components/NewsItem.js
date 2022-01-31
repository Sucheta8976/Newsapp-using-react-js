import React, { Component } from 'react';



export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className=" badge rounded-pill bg-danger" >
                            {source} </span>
                    </div>

                    <img src={!imageUrl ? "https://images.livemint.com/img/2022/01/28/600x338/SpiceJet_1643348641734_1643348641937.jpg" : imageUrl} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{description}..</p>
                        <p className="card-text"><small className="text-dark"><b>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</b></small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
