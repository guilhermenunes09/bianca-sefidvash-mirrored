import React from 'react';
import './quotationmarks.css';

function Quote (props) {
    return(
        <div className="p-4 m-4 d-flex flex-row justify-content-center align-items-center">
            <blockquote class="quote-box">
                <p class="quotation-mark">
                    “
                </p>
                <p class="quote-text pl-4 pr-4">
                   {props.quotation}
                </p>
                <div class="blog-post-actions">
                    <p class="blog-post-bottom pr-4 text-right">
                    {props.author}
                    </p>
                </div>
            </blockquote>
        </div>
    )
}

export default Quote;