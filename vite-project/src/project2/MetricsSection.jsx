import React from 'react';
import './MetricsSection.css'; // Import the CSS for this component

const MetricsSection = () => {
    return (
        <section className="metrics-section-container">
            <h2 className="metrics-main-heading">Achieve your design north-star metrics</h2>
            <div className="metrics-cards-wrapper">
                {/* Card 1: Top-Left (Large) - 5 job interviews */}
                <div className="metric-card metric-card-large">
                    <p className="card-highlight-large">5 job</p>
                    <p className="card-highlight-large">interviews</p>
                    <p className="card-subtext">on average per student</p>
                </div>

                {/* Card 2: Top-Right (Small) - ~15 days earning */}
                <div className="metric-card metric-card-small">
                    <p className="card-subtext">start earning within</p>
                    <p className="card-highlight-small">~15 days</p>
                    <p className="card-subtext">after the cohort starts</p>
                </div>

                {/* Card 3: Bottom-Left (Small) - 24x7 support */}
                <div className="metric-card metric-card-small">
                    <p className="card-highlight-small">24x7</p>
                    <p className="card-subtext">support for any doubts</p>
                </div>

                {/* Card 4: Bottom-Right (Small) - 5 job interviews (Now properly aligned) */}
                <div className="metric-card metric-card-small metric-card-fixed">
                    <p className="card-highlight-small">5 job</p>
                    <p className="card-highlight-small">interviews</p>
                    <p className="card-subtext">on average per student</p>
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;
