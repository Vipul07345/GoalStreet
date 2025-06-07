import React, { useState } from 'react';
import './TradeShows.css';

const Trades = [
    {
        id: 1,
        imagesrc: "https://i.postimg.cc/MH4DjPng/download-13.jpg",
        place: "Hyderabad",
        title: "The Art Of Makeup : Mastering The Perfect Everyday Look",
        time: "by Tony Nguyeb __ Oct 12 2023"
    }
];

const TradePerRow = 2;
const InitialRows = 3;
const RowsToAddOnClick = 2;

function TradesGrid() {
    const [rows, setRows] = useState(InitialRows);
    const [viewMoreClicked, setViewMoreClicked] = useState(false);
    const [activeSection, setActiveSection] = useState('All');
    const [displayedColumns, setDisplayedColumns] = useState(2);


    const handleButton = () => {
        if (viewMoreClicked) return; 
        setViewMoreClicked(true); 
        setTimeout(() => {
            setRows(rows + RowsToAddOnClick);

        }, 1000);
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
        setRows(InitialRows);
        setDisplayedColumns(2);
    };

    const firstTrade = Trades[0];
    const showImages = activeSection === 'All';

    const initialImageCount = InitialRows * TradePerRow;
    const additionalImageCount = (rows - InitialRows) * TradePerRow;
    const totalImagesToShow = initialImageCount + additionalImageCount;
    const displayedImageCount = totalImagesToShow;

    const allButton = displayedImageCount < 10 && showImages;

    return (
        <div className='Trades'>
            <div className="Trade-section">
                <h3 className='Trade-Head'>Trades Shows</h3>
                <div className="section-navigation">
                    <span
                        className={activeSection === 'All' ? 'active' : ''}
                        onClick={() => handleSectionClick('All')}
                    >
                        All
                    </span>
                    <span
                        className={activeSection === 'Local' ? 'active' : ''}
                        onClick={() => handleSectionClick('Local')}
                    >
                        Local
                    </span>
                    <span
                        className={activeSection === 'National' ? 'active' : ''}
                        onClick={() => handleSectionClick('National')}
                    >
                        National
                    </span>
                </div>
                <div className='Trade-postbutton'>
                <button className='Trade-Post'>+Post</button>
                </div>
            </div>

            <div className="Trade-Image" style={{ gridTemplateColumns: `repeat(${displayedColumns}, 1fr)` }}>
                {showImages &&
                    Array.from({ length: displayedImageCount }).map((_, index) => (
                        <div key={index} className="Image-All">
                            <img src={firstTrade.imagesrc} alt={firstTrade.title} />
                            <h3 className='Image-Place'>{firstTrade.place}</h3>
                            <h2 className='Image-title'>{firstTrade.title}</h2>
                            <p className='Image-time'>{firstTrade.time}</p>
                        </div>
                    ))}

            </div>

            {!viewMoreClicked && allButton && ( 
                <div className='Trade-button'>
                    <button
                        onClick={handleButton}
                        className="Trade-ViewMore"

                    >
                        View More ↓
                    </button>
                </div>
            )}

            {!allButton && <p className="Trade-NoImage">No more recommendations</p>}
        </div>
    );
}

export default TradesGrid;
