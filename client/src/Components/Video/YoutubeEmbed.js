import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbed.css"
const YoutubeEmbed = () => (
    <div className="row">
        <div className="col-md-4 mx-auto">
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/0bqSGUtyskA`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;