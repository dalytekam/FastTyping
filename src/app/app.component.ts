import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title: string = "fast typing";
  score: number = 0;
  counter: number = 7;
  words = ["potatoes", "pinaple", "apple", "banana"];
  tall = this.words.length;

  word: string = this.words[0];
  isgameover = false;
  isWordMatch = false;
  countdown() {
    setInterval(() => {
      this.counter--;
    }, 1000);
  }

  displayword() {
    this.word = this.words[Math.floor(Math.random() * this.tall)];
  }

  ngOnInit() {
    this.countdown();
  }

  onKeyup(typedWord) {
    if (typedWord.value == this.word && this.counter > 0) {
      typedWord.value = "";
      this.counter = 10;
      this.score++;
      this.displayword();
      this.isWordMatch = true;
      setTimeout(() => {
        this.isWordMatch = false;
      }, 1000);
    }
  }
}
