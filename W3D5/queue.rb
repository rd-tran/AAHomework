class Queue
  def initialize
    @queue_arr = []
  end

  def enqueue(el)
    @queue_arr.push(el)
    el
  end

  def dequeue
    @queue_arr.shift
  end

  def peek
    @queue_arr.first
  end

  attr_reader :@queue_arr
end