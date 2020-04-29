class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    puts "Starting game"
    sleep 1
    system("clear")
    puts "First sequence:"
    sleep 1
    system("clear")
    until game_over
      take_turn
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    unless game_over
      round_success_message
      self.sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    seq.each do |color|
      puts color
      sleep 0.75
      system("clear")
      sleep 0.5
    end
  end

  def require_sequence
    system("clear")
    puts "Repeat the sequence by entering each color on a new line:"
    sequence_length.times do |i|
      input = gets.chomp
      
      unless input == seq[i]
        self.game_over = true
        break
      end
    end

    sleep 0.5
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "Round successful!"
    sleep 1
    system("clear")
    puts "Next sequence:"
    sleep 1
    system("clear")
  end

  def game_over_message
    puts "Uh oh, that's the wrong sequence"
    puts "GAME OVER!"
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
    "GAME OVER!"
  end
end
