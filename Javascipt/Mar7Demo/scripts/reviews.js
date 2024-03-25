(function() {

    const template = document.createElement("template");
        template.id = "customer-review-template";
        template.innerHTML= `

    <style>
        #review_img>img {
        width: 13vh;
        height: 10vh;
        }
    </style>

    <div id ="review_box">
        <picture id="review_img">
            <img src = "">
        </picture>

        <h1 id="review_name"></h1>
        <h2 id="review_job"></h2>
        <p id="review_content"></p>

    <button type ="button" onclick="prev()">Previous</button>
    <button type ="button" onclick="next()">Next</button>

    </div>
    `;

    document.body.appendChild(template);

    customElements.define("customer-review",
        class customerReview extends HTMLElement {
            constructor() {
            super();
            this.attachShadow({ mode: "open" });
            }

    connectedCallback() {
            const tmpl = document.getElementById
                ("customer-review-template");
                const node = document.importNode(tmpl.content, true);
                this.shadowRoot.appendChild(node);
            }
    });

  })();

    const reviewList = [ {

    name: "Reviewer #1",
    img: "images/Volunteering.jpg",
    job: "Graphic Designer",
    review: "Review #1",
},
{ 
    name: "Reviewer #2",
    img: "images/Volunteering.jpg",
    job: "Graphic Designer",
    review: "Review #2",
},
{
    name: "Reviewer #3",
    img: "images/Volunteering.jpg",
    job: "Graphic Designer",
    review: "Review #3",
}
];

    function loadReview(reviewNumber) {
        let myReview = reviewList[reviewNumber];
        window.reviewShowing = reviewNumber; // Caching off which review is showing

    // Get Document Areas
    let reviewPicture = document.querySelector("customer-review").shadowRoot.querySelector("#review_img>img");
        reviewName = document.querySelector("customer-review").shadowRoot.querySelector("#review_name");
        reviewJob = document.querySelector("customer-review").shadowRoot.querySelector("#review_job");
        reviewContent = document.querySelector("customer-review").shadowRoot.querySelector("#review_content");

    reviewPicture.src = myReview.img;
    reviewName.textContent = myReview.name;
    reviewJob.textContent = myReview.job;
    reviewContent.textContent = myReview.review;

    }

    function next() {
        if(window.reviewShowing == undefined) {
            window.reviewShowing = 0;
        }

        window.reviewShowing = (window.reviewShowing < reviewList.length -1)?window.reviewShowing +1: 0;
        loadReview(window.reviewShowing);
    }

    function prev() {
        if(window.reviewShowing == undefined) {
            window.reviewShowing = 0;
    }

        window.reviewShowing = (window.reviewShowing > 0)? window.reviewShowing -1: reviewList.length -1;
        loadReview(window.reviewShowing);
    }

    loadReview(0);