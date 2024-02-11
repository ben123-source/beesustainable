import Navbar from "./Navbar";

const Tracker = () => {
    return (
        <>
            <style>
                {`
                .container {
                    background-color: #F4B04E;
                    min-height: 100vh;
                }
                .trackerText {
                    /* Add styles if needed */
                }
                .flexContainer {
                    display: flex;
                    margin-bottom: 16px;
                }
                .flexItem {
                    width: 50%;
                    border-bottom: 2px solid #yourCustomGrayColor; /* Replace with your custom gray color */
                    background-color: gray;
                    height: 48px;
                }
                .flexItem:hover {
                    text-decoration: underline dashed;
                }
                `}
            </style>
            <div className="container">
                <Navbar />
                <p className="trackerText">Tracker</p>
                <div className="flexContainer">
                    <div className="flexItem"></div>
                </div>
            </div>
        </>
    );
}

export default Tracker;
