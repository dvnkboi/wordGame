<template>
  <div class="flex p-10 h-screen w-screen justify-center items-center gap-5">
    <transition name="fade-left" appear>
      <div
        class="w-2/12 bg-gray-50 shadow-2xl rounded-3xl h-full transform transition duration-1000 delay-300"
      ></div>
    </transition>
    <transition name="fade-down" appear>
      <div
        class="w-7/12 bg-gray-50 shadow-2xl rounded-3xl h-full transform transition duration-1000 delay-300"
      >
        <Game @guessedWord="handleGuess" :word="word" :lettersLeft="lettersLeft" :round="round" />
      </div>
    </transition>

    <transition name="fade-right" appear>
      <div
        class="w-3/12 bg-gray-50 shadow-2xl rounded-3xl h-full transform transition duration-1000 delay-300"
      >
        <Chat :users="users" :guessText="guessText" :playingUser="playingUser" />
      </div>
    </transition>
  </div>
</template>

<script>
import Chat from './components/chat.vue'
import Game from './components/game.vue'
import { map, wait, getWordArray, words } from './js/utils';

export default {
  data() {
    return {
      round: 0,
      playingUser: {
        id: '1234',
      },
      users: {
        '1234': {
          name: 'user1',
          lives: 3,
          score: 0,
        },
        '2345': {
          name: 'user2',
          lives: 3,
          score: -1,
        },
        '0': {
          name: 'Guess Bot',
          lives: Infinity,
          score: Infinity,
        }
      },
      word: [],
      letterCount: 0,
      lettersLeft: 0,
      user: {
        name: '',
        lives: 3,
      },
      guessText: {
        msg: '',
        timeStamp: new Date()
      },
      guessLock: false,
    }
  },
  methods: {
    async handleGuess(letter, correct) {
      if (this.guessLock) return;
      this.guessLock = true;
      if (this.lettersLeft > 0) {

        await wait(50);

        //check if letter in word and display guess text
        this.guessText = {
          msg: `${this.users[this.playingUser.id].name} guessed ${letter}`,
          timeStamp: new Date()
        }


        await wait(500 + Math.random() * 1000);

        if (correct) {
          this.handleCorrectGuess(letter);

          //check if letter in word and display guess text
          this.guessText = {
            msg: `${letter} is in the word! ${this.users[this.playingUser.id].name} scores some points`,
            timeStamp: new Date()
          }

          await wait(300);

          if (this.lettersLeft <= 0) {
            alert('u win');
            this.startGame();
          }
        }
        else {
          this.users[this.playingUser.id].lives--;

          //check if letter in word and display guess text
          this.guessText = {
            msg: `${letter} is not in the word! :c ${this.users[this.playingUser.id].name} loses a life`,
            timeStamp: new Date()
          }
        }
        if (this.user.lives <= 0) {
          alert('u lost');
          this.startGame();
        }
      }
      this.guessLock = false;
    },
    handleCorrectGuess(inputLetter) {
      this.word.map(letter => {
        if (letter.ltr.toLowerCase() == inputLetter.toLowerCase()) {
          letter.isGuessed = true;
          this.users[this.playingUser.id].score += Math.ceil(map(this.lettersLeft, this.letterCount, 0, 20, 0));
          this.lettersLeft--;
        }
      });
    },
    startGame() {
      this.round++;
      this.word = getWordArray(words[Math.floor(Math.random() * words.length)]);
      this.word.forEach(letter => {
        if (letter.ltr != ' ') this.letterCount++;
        if (!letter.isGuessed) {
          this.lettersLeft++;
        }
      });
    }
  },
  async mounted() {

    //get random word
    this.startGame();

    await wait(2000);

    //check if letter in word and display guess text
    this.guessText = {
      msg: `Welcome to Word guesser`,
      timeStamp: new Date()
    }

    await wait(500);

    //check if letter in word and display guess text
    this.guessText = {
      msg: `the word you have to guess has ${this.lettersLeft} letters`,
      timeStamp: new Date()
    }

  },
  components: {
    Chat,
    Game
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

.fade-left-enter-from,
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-25px);
}

.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(25px);
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-25px);
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(25px);
}
</style>  


<style type="text/css">
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-button {
  width: 24px;
  height: 24px;
}
::-webkit-scrollbar-thumb {
  @apply bg-slate-200;
  border: 0px none #ffffff;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-300;
}
::-webkit-scrollbar-thumb:active {
  @apply bg-slate-300;
}
::-webkit-scrollbar-track {
  @apply bg-transparent;
  border: 0px none #ffffff;
  border-radius: 100px;
}
::-webkit-scrollbar-track:hover {
  @apply bg-transparent;
}
::-webkit-scrollbar-track:active {
  @apply bg-slate-400 bg-opacity-20;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>