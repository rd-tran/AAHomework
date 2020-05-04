require 'colorize'

class LRUCache
  def initialize(size)
    @cache = Array.new(size)
  end

  def count
    # returns number of elements currently in cache
    cache.count
  end

  def add(el)
    # adds element to cache according to LRU principle
    idx = cache.index(el)

    if cache.include?(el)
      cache.delete_at(idx)
      cache.push(el)
    else
      cache.shift
      cache.push(el)
    end

    nil
  end

  def show
    # shows the items in the cache, with the LRU item first
    puts "Least Recent".colorize(:red)
    cache.each { |ele| puts "⬇️  #{ele}" }
    puts "Most Recent".colorize(:green)
    nil
  end

  private
  # helper methods go here!
  attr_reader :cache
end

# if $PROGRAM_NAME == __FILE__ 
  johnny_cache = LRUCache.new(4)

  johnny_cache.add("I walk the line")
  johnny_cache.add(5)

  johnny_cache.count # => returns 2

  johnny_cache.add([1,2,3])
  johnny_cache.add(5)
  johnny_cache.add(-5)
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.add([1,2,3,4])
  johnny_cache.add("I walk the line")
  johnny_cache.add(:ring_of_fire)
  johnny_cache.add("I walk the line")
  johnny_cache.add({a: 1, b: 2, c: 3})


  johnny_cache.show 
  # => prints [
  #   [1, 2, 3, 4],
  #   :ring_of_fire,
  #   "I walk the line",
  #   {:a=>1, :b=>2, :c=>3}
  # ]
# end