# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Create a method that takes an array and a string as parameters
def find_common_letter array, string

    # Create a variable equal to the array using .select
    common_letter = array.select do |value|

        # Check if the string includes a common letter. This will return a boolean value using .include?
        # Using downcase if the string has capital letters
        value.downcase.include? string.downcase
    end

    # Call on the variable
    common_letter
end

# Print the expected output
p find_common_letter(beverages_array, letter_o)
p find_common_letter(beverages_array, letter_t)

# Returned correct output


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# Create a method that accepts an array of numbers as a parameter
def sum_of_nums(array)
    
    # Create a variable called sum to set the value to 0
    sum = 0

    # Iterate on the array using .each
    array.each do |value|
        
        # Return the sum plus or equal to the value
        sum += value
    end

    # Print out the sum
    p sum
end

sum_of_nums(nums_array1)
sum_of_nums(nums_array2)

# Returned correct output


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

# Create a class called Bike
class Bike
    attr_accessor :model, :wheels, :current_speed

    # Initialize the Bike class with a model, wheels, current speed
    def initialize model
        @model = model

        # Give the wheels a default value of 2
        @wheels = 2

        # Give the current speed a default value of 0
        @current_speed = 0
    end

    # Create the output sentence using string interpolation
    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end

    # Create pedal_faster method that takes speed as a parameter
    def pedal_faster(speed)

        # Return @current_speed to equal the sum of @current_speed and the value of the speed parameter
        @current_speed = @current_speed += speed
    end

    # Create brake method that takes speed as a parameter
    def brake(speed)

        # If @current_speed minus speed is greater than or equal to 0
        if @current_speed - speed >= 0

            # Then return the value of @current_speed minus speed
            @current_speed - speed
        
        # Else return @current_speed = 0    
        else
            @current_speed = 0
        end
    end
end

bike = Bike.new 'Trek'
p bike.bike_info
bike.pedal_faster(10)
p bike.bike_info
bike.pedal_faster(10)
p bike.bike_info
bike.brake(25)
p bike.bike_info

# Returned correct output