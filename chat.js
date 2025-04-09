document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.querySelector(".language-select");

    

    
    // Trending Movies Section
    const trendingMovies = [
        { image: "images/image3.png", rank: 1 },
        { image: "images/image4.png", rank: 2 },
        { image: "images/image5.png", rank: 3 },
        { image: "images/image6.png", rank: 4 },
        { image: "images/image7.png", rank: 5 },
        { image: "images/image8.png", rank: 6 },
        { image: "images/image9.png", rank: 7 },
        { image: "images/image10.png", rank: 8 },
        { image: "images/image11.png", rank: 9 },
        { image: "images/image12.png", rank: 10 }
    ];

    const moviesContainer = document.getElementById("moviesContainer");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    // Generate Trending Movie Cards
    trendingMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const rankSpan = document.createElement("span");
        rankSpan.classList.add("rank");
        rankSpan.textContent = movie.rank;

        const img = document.createElement("img");
        img.src = movie.image;
        img.alt = `Movie ${movie.rank}`;

        movieCard.appendChild(rankSpan);
        movieCard.appendChild(img);
        moviesContainer.appendChild(movieCard);
    });
});