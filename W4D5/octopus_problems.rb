FISHES = [
  'fish',
  'fiiish',
  'fiiiiish',
  'fiiiish',
  'fffish',
  'ffiiiiisshh',
  'fsh',
  'fiiiissshhhhhh'
].freeze

# TODO Sluggish Octopus
=begin
Find the longest fish in O(n^2) time.
Do this by comparing all fish lengths to all other fish lengths.
=end

def quadratic(fishes)
  fishes.each do |fish1|
    longest = true
    
    fishes.each do |fish2|
      longest = false if fish2.length > fish1.length
    end

    return fish1 if longest
  end
end

# TODO Dominant Octopus
=begin
Find the longest fish in O(n log n) time.
Hint: You saw a sorting algorithm that runs in O(n log n)
in the Sorting Complexity Demo.
Remember that Big O is classified by the dominant term.
=end

def merge_sort_fishes(fishes)
  return fishes if fishes.length <= 1

  mid_idx = fishes.length / 2

  left = fishes[0...mid_idx]
  right = fishes[mid_idx..-1]

  left_sorted = merge_sort_fishes(left)
  right_sorted = merge_sort_fishes(right)

  merge_fishes(left_sorted, right_sorted)
end

def merge_fishes(left, right)
  merged = []
  until left.empty? || right.empty?
    if left.first.length < right.first.length
      merged << left.shift
    else
      merged << right.shift
    end
  end

  merged + left + right
end

def loglinear(fishes)
  sorted = merge_sort_fishes(fishes)
  sorted.last
end


# TODO Clever Octopus
=begin
Find the longest fish in O(n) time.
The octopus can hold on to the longest fish that you have found so far while
stepping through the array only once.
=end

def constant(fishes)
  longest_fish = ''
  
  fishes.each do |fish|
    longest_fish = fish if fish.length > longest_fish.length
  end

  longest_fish
end

# TODO Dancing Octopus
=begin
Full of fish, the Octopus attempts Dance Dance Revolution.
The game has tiles in the following directions:

# * tiles_array = [
  "up", "right-up", "right", "right-down", "down",
  "left-down", "left",  "left-up"
]

To play the game, the octopus must step on a tile with her corresponding
tentacle. We can assume that the octopus's eight tentacles are numbered and
correspond to the tile direction indices.
=end

TILES_ARRAY = [
  "up", "right-up", "right", "right-down", "down",
  "left-down", "left",  "left-up"
].freeze

# TODO Slow Dance
=begin
Given a tile direction, iterate through a tiles array to return the tentacle
number (tile index) the octopus must move. This should take O(n) time.

# * slow_dance("up", tiles_array)
  > 0

# * slow_dance("right-down", tiles_array)
  > 3
=end

def slow_dance(direction, tiles_arr)
  tiles_arr.each_with_index { |tile, idx| return idx if tile == direction }
end

# TODO Constant Dance!
=begin
Now that the octopus is warmed up, let's help her dance faster.
Use a different data structure and write a new function so that you can access
the tentacle number in O(1) time.

# * fast_dance("up", new_tiles_data_structure)
> 0

# * fast_dance("right-down", new_tiles_data_structure)
> 3
=end

TILES_HASH = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7,
}.freeze

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end