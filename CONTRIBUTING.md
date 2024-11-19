# 🎭 Contributing to Devflix

Ready to be the hero in our next commit? Here's how you can add your star power to the Devflix universe:

## 🚀 How to Join Our Cast of Contributors

1. Fork the repo (no, not with a spoon - this isn't The Matrix)
2. Branch out (like a decision tree, but cooler)
3. Add your blockbuster to `src/data/movies.js`
4. Send us a pull request (and maybe an autograph?)

## 🎥 Lights, Camera, Action: Adding Your Blockbuster

To add your tech thriller, rom-com, or sci-fi epic to our stellar array, beam this structure into `src/data/movies.js`:

```javascript
{
  id: [unique number, like the iterations of Windows],
  title: "Your Movie Title (something punny, please)",
  poster: "/posters/your_movie_poster.jpg",
  description: "Your movie description (make it pop like a kernel)",
  thumbnails: [
    "/thumbnails/your_movie_thumbnail1.jpg",
    "/thumbnails/your_movie_thumbnail2.jpg",
    "/thumbnails/your_movie_thumbnail3.jpg"
  ],
  videoUrl: "https://youtu.be/your_youtube_video_id" // As optional as semicolons in JavaScript
}
```

### 📸 Poster Child Guidelines

- JPG format (we're not savages)
- 2:3 aspect ratio (like a good algorithm: balanced)
- File path: `public/posters/`
- Name it like the movie name, like `leaky_blinders.jpg`

### 📝 Describe It Like You're Pitching to Marvel

- Make it compelling (like a well-commented function)
- 100-300 words (the Goldilocks zone of descriptions)

### 🖼️ Thumbnail Thaumaturgy

- 1-3 thumbnails (like your daily Git commits, right?)
- JPG format (consistency is key, like in good variable naming)
- File path: `public/thumbnails/`
- Name them, like `leaky_blinders_t1.jpg`, `leaky_blinders_t2.jpg`, etc. (sequential naming, it's what computers crave)

## 🕵️ Pull Request Protocol

1. Follow the guidelines (like you follow coding standards... you do, right?)
2. Wait for two thumbs up from our code critics

Thank you for contributing to Devflix! May your commits be atomic and your pull requests be ever in your favor! 🖖