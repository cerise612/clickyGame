import React, { Component } from 'react';
import Container from "./components/Container";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import NavBar from "./components/NavBar";
// import ScoringInfo from "./components/ScoringInfo";
import images from "./images.json";
import Footer from "./components/Footer";

class App extends Component {
 state = {
   images,
   currentScore: 0,
   topScore: 0,
   message: ""
 };

 // set state to start game
 loadImages() {
   this.setState({ images: this.shuffleImages(this.state.images) });
 }

 imageSelected = id => {
   let guessedCorrectly = false;
   const newImages = this.state.images.map(image => {
     const newImage = { ...image };
     // verifying user selection
     if (newImage.id === id) {
       if (!newImage.clicked) {
         //      update imageSelected to true;
         newImage.clicked = true;
         // update message to say "you guessed correctly"
         guessedCorrectly = true;
       }
     }
     return newImage;
   });
   guessedCorrectly
     ? this.correctGuess(newImages)
     : this.incorrectGuess(newImages);
 };

 // if image not already selected
 correctGuess = newImages => {
   const { currentScore, topScore } = this.state;
   //       increment current score
   const newCurrentScore = currentScore + 1;
   //     If current score > top score, update top score = current score
   const newTopScore = newCurrentScore > topScore ? newCurrentScore : topScore;
   //      ShuffleImages
   this.setState({
     images: this.shuffleImages(newImages),
     currentScore: newCurrentScore,
     topScore: newTopScore,
     message: "Correct Guess"
   });
 };
 // if the image was already selected reset current score to zero;
 incorrectGuess = images => {
   this.setState({
     //       reset all imagesSelected to false
     images: this.resetImages(images),
     currentScore: 0,
     message: "Incorrect Guess"
   });
 };
 //   reset all imagesSelected to false
 resetImages = images => {
   const resetImages = images.map(image => ({ ...image, clicked: false }));
   return this.shuffleImages(resetImages);
 };

 //      ShuffleImages
 shuffleImages = images => {
   let i = images.length - 1;
   while (i > 0) {
     const j = Math.floor(Math.random() * (i + 1));
     const temp = images[i];
     images[i] = images[j];
     images[j] = temp;
     i--;
   }
   return images;
 };

 // render page
 render() {
   console.log(this.state.images);
   return (
     <div>
       <NavBar message={this.state.message} currentScore={this.state.currentScore} topScore={this.state.topScore} />
       <Header />
       <Container>
         {this.state.images.map(image => (
           <ImageCard
             key={image.id}
             id={image.id}
             image={image.image}
             imageSelected={this.imageSelected}
           />
         ))}
       </Container>
       <Footer />
     </div>
   );
 }
};

export default App;