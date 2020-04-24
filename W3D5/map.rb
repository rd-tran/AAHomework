class Map
  def initialize
    @arr_map = []
  end

  def set(key, value)
    pair_index = arr_map.index { |index| pair[0] == key }
    if pair_index
      arr_map[pair_index][1] = value
    else
      arr_map.push([key, value])
    end
    value
  end

  def get(key)
    arr_map.each { |pair| return pair[1] if pair[0] == key }
    nil
  end

  def delete(key)
    value = get(key)
    arr_map.reject! { |pair| pair[0] == key }
    value
  end

  def show
    deep_dup(arr_map)
  end

  attr_reader :arr_map
end