class Hangman:
    '''A game which tries to find the word 
    which we try to discover
    
    :param good_word: good_word is used for determine 
    the word which we want to discover 
    :param life: property that contain the life that 
    the player still has. It should start at 5.
    :param well_guessed_letters: letter list correctly guessed by the user. 
    :param bad_guessed_letters: letter list wrongly guessed by the user
    :param good_answers: the number of turn played by the player
    :param error_count: the number of errors made by the player
    :param turn_count: the number of well guessed letters
    '''
    def __init__(self, good_word :[str], life :int=5) -> None:
        self.good_word = good_word
        self.life = life
        
        # It should start equel to: _ _ _ _ _ with the same number 
        # of _ as the lenght of the word. 
        self.well_guessed_letters :[str] = ['_' for i in range(len(self.good_word))]
        self.bad_guessed_letters :[str] = []
        self.good_answers :int = 0
        self.error_count :int = 0
        self.turn_count :int = 0
    
    def play(self) -> str:
        """Search the letter parameter into good_word
      
        :param letter: letter which we enter to search into good_words
        :return: a string of well or bad guessed letter list
        """
        letter = input('please type a letter to discover the word: ')
        self.turn_count += 1
        if letter in self.good_word:
            self.good_answers += 1
            # enumerate provide to reach indexes letters 
            # correctly guessed by the user
            for i, let in enumerate(self.good_word):
                if let == letter:
                       self.well_guessed_letters[i] = letter
            return ' '.join(self.well_guessed_letters)
        else:
            # if you don't guessed correctly you lose 1 from your life
            self.life -= 1
            self.error_count += 1
            self.bad_guessed_letters.append(letter)
            return ' '.join(self.well_guessed_letters)
            
    def start_game(self) -> str:
        '''Start the search game until having a result positive 
        or negative about search letter into good word
        :return a string sentence
        '''
        while '_' in self.well_guessed_letters and self.life != 0:
            print(self.play())
        
        if not '_' in self.well_guessed_letters:
            return self.well_played()
        elif self.life == 0:
            return self.game_over()
        
    def game_over(self) -> str:
        '''give a messafe if you have negative result about search
        :return: a string sentence
        '''
        return 'game over...'
        
    def well_played(self) -> str:
        '''give a messafe if you have positive result about search
        :return: a string sentence
        '''
        return f'You found the word: {self.good_word} in {self.turn_count} turns with {self.error_count} errors!'