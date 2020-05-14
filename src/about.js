import React from 'react';

import './styles/fonts.css';
import './styles/body.css';

import me from './images/me.jpg'

export default class About extends React.Component {
    render() {
        var bannerStyle = {
            margin: "20px 0 20px 0",
        }
        return (
            <div className="row" id="about">
                <div className="col-md-3">
                    <br></br><br></br>
                    <img alt="" src={me} className="img-fluid" style={bannerStyle}></img>
                    <br></br><br></br>
                </div>
                <div className="col-md-9">
                    <br></br><br></br><br></br>
                    <h1 className="muli big">
                        Pranshu Gupta
                </h1>
                    {/* <br></br> */}
                    <div style={{ paddingLeft: "5px" }}>
                        <p>
                            I am a graduate student in College of Computing at Georgia Institute of Technology, specializing in machine learning, currently involved in research with the Social Dynamics and Wellbeing Lab at Georgia Tech.
                            Before Georgia Tech, I worked at Microsoft for two years, where I built intelligent applications on cloud.
                    </p>
                        <p>
                            I am interested in computer vision, graphics, machine learning and developing applications powered by artificial intelligence. I love building Software, learning more about Computer Science and Painting.
                    </p>
                        <p>
                            <svg width="320px" height="40%" class="img-responsive" data-slug-id="msazure-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506 72">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.244 8.014L13.857 26.209H26.811L20.455 8.014H20.244ZM24.702 0L40.97 43.201H32.716L28.89 32.476H11.869L8.194 43.201H0L16.267 0H24.702Z" transform="translate(350.999 14.3985)" fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.145 0H25.878V2.923L9.64 25.186H25.968V30.97H0V27.505L15.997 5.784H1.145V0Z" transform="translate(394.539 26.6293)" fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.806 0V30.97H20.455V26.902H20.335C19.371 28.309 18.08 29.408 16.464 30.201C14.847 30.994 13.035 31.392 11.027 31.392C7.431 31.392 4.695 30.372 2.817 28.333C0.939 26.295 0 23.127 0 18.829V0H7.381V17.955C7.381 20.566 7.898 22.529 8.933 23.845C9.967 25.16 11.528 25.818 13.618 25.818C15.686 25.818 17.342 25.09 18.588 23.634C19.833 22.178 20.455 20.274 20.455 17.925V0H27.806Z" transform="translate(424.786 26.6293)" fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.274 0C15.856 0 16.378 0.04 16.84 0.12C17.302 0.201 17.694 0.301 18.015 0.422V7.803C17.633 7.521 17.076 7.256 16.343 7.004C15.61 6.753 14.721 6.628 13.677 6.628C11.889 6.628 10.378 7.381 9.143 8.887C7.908 10.394 7.291 12.713 7.291 15.846V31.481H0V0.512H7.291V5.393H7.411C8.074 3.705 9.078 2.385 10.423 1.431C11.769 0.478 13.385 0 15.274 0Z" transform="translate(458.27 26.1176)" fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.238 12.983C21.238 10.573 20.68 8.736 19.566 7.47C18.451 6.205 16.88 5.573 14.851 5.573C13.104 5.573 11.538 6.201 10.152 7.456C8.76601 8.711 7.84201 10.553 7.38101 12.983H21.238ZM25.908 23.798V29.794C24.703 30.557 23.126 31.174 21.177 31.646C19.229 32.118 17.151 32.354 14.942 32.354C10.221 32.354 6.551 30.959 3.93 28.167C1.31 25.376 0 21.489 0 16.508C0 11.709 1.4 7.756 4.202 4.654C7.004 1.55 10.553 0 14.851 0C19.13 0 22.458 1.309 24.838 3.93C27.217 6.551 28.408 10.171 28.408 14.791V18.316H7.2C7.52 21.429 8.52 23.602 10.197 24.837C11.874 26.073 14.038 26.69 16.689 26.69C18.436 26.69 20.103 26.424 21.69 25.892C23.276 25.36 24.682 24.662 25.908 23.798Z" transform="translate(476.741 25.9979)" fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M229.35 21.39H218.492V46.394H211.112V21.39H205.93V15.425H211.112V11.117C211.112 7.863 212.17 5.197 214.29 3.119C216.408 1.039 219.124 0 222.438 0C223.322 0 224.105 0.045 224.788 0.136C225.471 0.227 226.074 0.362 226.596 0.542V6.839C226.354 6.699 225.933 6.528 225.33 6.327C224.728 6.126 224.035 6.026 223.252 6.026C221.725 6.026 220.551 6.502 219.727 7.456C218.903 8.411 218.492 9.822 218.492 11.689V15.425H229.35V8.465L236.67 6.237V15.425H244.052V21.39H236.67V35.879C236.67 37.788 237.017 39.134 237.71 39.916C238.403 40.7 239.492 41.091 240.978 41.091C241.4 41.091 241.907 40.992 242.5 40.79C243.092 40.59 243.609 40.349 244.052 40.068V46.092C243.589 46.354 242.821 46.594 241.746 46.816C240.672 47.036 239.613 47.147 238.568 47.147C235.495 47.147 233.191 46.329 231.655 44.692C230.118 43.055 229.35 40.59 229.35 37.295V21.39ZM180.943 31.12C180.943 34.354 181.676 36.824 183.142 38.532C184.607 40.239 186.706 41.091 189.438 41.091C192.089 41.091 194.108 40.239 195.493 38.532C196.879 36.824 197.572 34.293 197.572 30.939C197.572 27.606 196.854 25.09 195.418 23.393C193.982 21.696 191.968 20.848 189.378 20.848C186.706 20.848 184.633 21.736 183.157 23.514C181.68 25.29 180.943 27.827 180.943 31.12ZM173.351 31.361C173.351 26.24 174.797 22.183 177.689 19.19C180.581 16.198 184.598 14.702 189.739 14.702C194.579 14.702 198.36 16.143 201.082 19.025C203.803 21.908 205.163 25.798 205.163 30.699C205.163 35.72 203.717 39.716 200.826 42.688C197.933 45.661 193.997 47.147 189.016 47.147C184.216 47.147 180.405 45.737 177.584 42.914C174.762 40.093 173.351 36.242 173.351 31.361ZM156.933 23.559C156.933 24.603 157.265 25.421 157.928 26.014C158.59 26.606 160.056 27.354 162.326 28.258C165.238 29.423 167.282 30.734 168.456 32.19C169.631 33.646 170.219 35.408 170.219 37.477C170.219 40.389 169.099 42.729 166.86 44.495C164.62 46.264 161.593 47.147 157.777 47.147C156.492 47.147 155.07 46.992 153.514 46.68C151.957 46.369 150.637 45.972 149.552 45.49V38.321C150.878 39.244 152.304 39.977 153.83 40.519C155.357 41.062 156.742 41.333 157.988 41.333C159.634 41.333 160.85 41.102 161.633 40.64C162.416 40.178 162.808 39.405 162.808 38.321C162.808 37.316 162.401 36.467 161.588 35.775C160.775 35.081 159.233 34.283 156.963 33.379C154.272 32.255 152.365 30.99 151.24 29.584C150.115 28.178 149.552 26.391 149.552 24.221C149.552 21.43 150.662 19.135 152.881 17.337C155.1 15.54 157.978 14.642 161.513 14.642C162.597 14.642 163.812 14.762 165.158 15.002C166.503 15.244 167.628 15.556 168.532 15.937V22.866C167.568 22.223 166.443 21.671 165.158 21.208C163.872 20.746 162.597 20.516 161.332 20.516C159.946 20.516 158.866 20.787 158.093 21.329C157.32 21.871 156.933 22.615 156.933 23.559ZM121.868 31.12C121.868 34.354 122.6 36.824 124.067 38.532C125.533 40.239 127.632 41.091 130.363 41.091C133.015 41.091 135.033 40.239 136.418 38.532C137.804 36.824 138.497 34.293 138.497 30.939C138.497 27.606 137.779 25.09 136.343 23.393C134.907 21.696 132.893 20.848 130.303 20.848C127.632 20.848 125.558 21.736 124.082 23.514C122.605 25.29 121.868 27.827 121.868 31.12ZM114.276 31.361C114.276 26.24 115.722 22.183 118.614 19.19C121.506 16.198 125.523 14.702 130.664 14.702C135.505 14.702 139.285 16.143 142.007 19.025C144.728 21.908 146.089 25.798 146.089 30.699C146.089 35.72 144.642 39.716 141.751 42.688C138.859 45.661 134.922 47.147 129.941 47.147C125.141 47.147 121.33 45.737 118.509 42.914C115.687 40.093 114.276 36.242 114.276 31.361ZM111.14 14.912C111.722 14.912 112.245 14.953 112.706 15.034C113.168 15.114 113.56 15.213 113.882 15.334V22.715C113.5 22.434 112.942 22.168 112.21 21.917C111.476 21.665 110.587 21.54 109.544 21.54C107.756 21.54 106.245 22.293 105.01 23.799C103.775 25.306 103.157 27.625 103.157 30.758V46.394H95.866V15.425H103.157V20.305H103.277C103.94 18.618 104.944 17.298 106.29 16.343C107.635 15.39 109.252 14.912 111.14 14.912ZM83.184 41.091C84.268 41.091 85.463 40.841 86.768 40.339C88.074 39.836 89.279 39.174 90.384 38.35V45.128C89.219 45.791 87.898 46.293 86.422 46.634C84.947 46.976 83.324 47.147 81.557 47.147C76.997 47.147 73.292 45.706 70.441 42.824C67.588 39.942 66.163 36.262 66.163 31.784C66.163 26.802 67.619 22.701 70.531 19.476C73.443 16.253 77.57 14.642 82.913 14.642C84.279 14.642 85.659 14.818 87.055 15.169C88.451 15.52 89.56 15.926 90.384 16.388V23.378C89.259 22.554 88.109 21.917 86.934 21.464C85.76 21.013 84.559 20.787 83.334 20.787C80.462 20.787 78.143 21.721 76.375 23.589C74.608 25.456 73.724 27.977 73.724 31.15C73.724 34.283 74.572 36.724 76.27 38.471C77.967 40.218 80.272 41.091 83.184 41.091ZM53.781 46.394H61.071V15.425H53.781V46.394ZM53.028 6.478C53.028 5.273 53.465 4.263 54.339 3.45C55.212 2.636 56.251 2.23 57.456 2.23C58.741 2.23 59.807 2.647 60.65 3.48C61.494 4.313 61.915 5.313 61.915 6.478C61.915 7.662 61.483 8.657 60.62 9.459C59.756 10.263 58.702 10.664 57.456 10.664C56.211 10.664 55.162 10.258 54.309 9.445C53.454 8.631 53.028 7.642 53.028 6.478ZM46.755 3.194V46.394H39.254V12.533H39.133L25.727 46.394H20.757L7.019 12.533H6.929V46.394H0V3.194H10.755L23.167 35.217H23.347L36.452 3.194H46.755Z" transform="translate(93.5977 11.2052)" fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 34.219H34.219V0H0V34.219Z" transform="translate(0.00499725 0.00601196)" fill="#F25022"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 34.219H34.219V0H0V34.219Z" transform="translate(37.779)" fill="#7FBA00"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 34.219H34.219V0H0V34.219Z" transform="translate(0 37.779)" fill="#00A4EF"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 34.219H34.219V0H0V34.219Z" transform="translate(37.779 37.779)" fill="#FFB900"></path>
                            </svg>
                        </p>
                        <p>
                            Incoming Software Engineer II at Azure Compute, Summer 2020
                    </p>
                    </div>
                    <br></br><br></br>
                </div>
            </div>
        )
    }
}