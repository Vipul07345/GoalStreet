// project2/FAQSection.jsx
import React, { useState } from 'react';
import './FAQSection.css'; // Import the CSS for this component

const FAQSection = () => {
    // State to manage which FAQ item is open
    // Using an array of booleans to track the open/closed state of each FAQ item
    const [openStates, setOpenStates] = useState(Array(6).fill(false));

    // Function to toggle the open/closed state of an FAQ item
    const toggleFAQ = (index) => {
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index]; // Toggle the state of the clicked item
            return newStates;
        });
    };

    // Array of FAQ data
    const faqData = [
        {
            question: "How are you different from the other 98,820 programs teaching Code?",
            answer: "We're not just a series of pre-recorded lectures or a cohort-based course. We're a hands-on learning experience that helps code enthusiasts grow in their careers through project-based learning and continuous feedback. We also offer exclusive paid freelance gigs & internships to our members."
        },
        {
            question: "Is these cohorts for me?",
            answer: "The club is for you if you’re a beginner level coder or a coding enthusiast looking to upskill and find work ( internships ). You’re a good fit if you have a basic knowledge of programming languages, but struggle to apply them in real life projects and problem statements."
        },
        {
            question: "How much time do I need to spend on learning and doing projects?",
            answer: "We’d recommend you spend at least 8 hours a week to make the most out of your learning experience!",

        },
        {
            question: "What are the prerequisites to join?",
            answer: "The only prerequisites to join the cohort are that you should have a basic knowledge of respective domain, and willingness to learn :)"
        },
        {
            question: "How long does the cohort last?",
            answer: "The cohort is 6 to 8 weeks long based on which plan you opt for."
        },
        {
            question: "What’s the last date to make the payment?",
            answer: "We have limited seats and cohort acceptance happens through a screening process on a first-come first-serve basis. Payments close a week before the cohort starts, or earlier if we fill all the available seats."
        },
        {
            question: "How are you guys helping us get internships and gigs?",
            answer: "Being one of India's largest remote internships platforms, we get 1,000+ paid internships and freelancing opportunities posted on our platform every single month. These opportunities range across tech, design, marketing, product, and more. As a member of cohort, you’ll get exclusive early access to all opportunities, and a badge to help you stand out from the crowd!"
        },
        {
            question: "Why should I trust you guys?",
            answer: "Our cohorts saw 5000+ registrations and a rating of 4.6/5 from cohort members! We have a community of 20,000+ students, freelancers, and entrepreneurs from across the country growing with us. bluelearn is backed by Lightspeed India, Elevation Capital, Titan Capital, and a host of angel investors!"
        },
        {
            question: "How do I choose between the Foundation and Growth Plan?",
            answer: "The Growth Plan is perfect for you if: -You want to upskill in design with hands-on projects -You already know the basics of the domain choosen -You want to build your portfolio and find paid work -You want feedback on your projects from someone experienced You’ll be a great fit for the Foundation Plan if: -You want to learn scratch -You want to upskill in code with hands-on projects -You want to build your portfolio and find your first paid work"
        },
    ];

    return (
        <section className="faq-section-container">
            <h2 className="faq-main-heading">Frequently Asked Questions</h2>
            <div className="faq-items-wrapper">
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question-header" onClick={() => toggleFAQ(index)}>
                            <p className="faq-question">{item.question}</p>
                            <span className="faq-toggle-icon">
                                {openStates[index] ? '−' : '+'} {/* Change icon based on state */}
                            </span>
                        </div>
                        {/* Conditionally render the answer with a transition */}
                        <div className={`faq-answer-container ${openStates[index] ? 'open' : ''}`}>
                            <p className="faq-answer-content">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
