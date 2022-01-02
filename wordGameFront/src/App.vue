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
        <Game @guessedWord="handleGuess" :word="word" />
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
import { map, wait } from './js/utils';

export default {
  data() {
    return {
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
      word: [
        {
          ltr: 'v',
          isGuessed: false
        },
        {
          ltr: 'e',
          isGuessed: false
        },
        {
          ltr: 'r',
          isGuessed: false
        },
        {
          ltr: 'y',
          isGuessed: false
        },
        {
          ltr: ' ',
          isGuessed: true
        },
        {
          ltr: 'l',
          isGuessed: false
        },
        {
          ltr: 'o',
          isGuessed: false
        },
        {
          ltr: 'n',
          isGuessed: false
        },
        {
          ltr: 'g',
          isGuessed: false
        },
      ],
      letterCount: 0,
      lettersLeft: 0,
      user: {
        name: '',
        lives: 3,
      },
      guessText: {
        msg: '',
        timeStamp: new Date()
      }
    }
  },
  methods: {
    handleGuess(letter, correct) {
      if (this.lettersLeft > 0) {

        setTimeout(() => {
          //check if letter in word and display guess text
          this.guessText = {
            msg: `${this.users[this.playingUser.id].name} guessed ${letter}`,
            timeStamp: new Date()
          }

          setTimeout(() => {
            if (correct) {
              this.handleCorrectGuess(letter);

              //check if letter in word and display guess text
              this.guessText = {
                msg: `${letter} is in the word! ${this.users[this.playingUser.id].name} scores some points`,
                timeStamp: new Date()
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
            }
          }, 500 + Math.random() * 1000);
        }, 50);
      }
    },
    handleCorrectGuess(letter) {
      this.word.find(ltr => ltr.ltr === letter).isGuessed = true;
      this.users[this.playingUser.id].score += Math.ceil(map(this.lettersLeft, this.letterCount, 0, 20, 0));
      this.lettersLeft--;
    }
  },
  async mounted() {
    this.word.forEach(letter => {
      if (letter.ltr != ' ') this.letterCount++;
      if (!letter.isGuessed) {
        this.lettersLeft++;
      }
    });

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