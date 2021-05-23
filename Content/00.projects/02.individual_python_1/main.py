from utils import Hangman

good_word = input('Please type a word to start the game: ')
game = Hangman(good_word)
print(game.start_game())