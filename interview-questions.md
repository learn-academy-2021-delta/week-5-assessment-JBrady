# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: Most Ruby methods are accessors, meaning they just pull the data. Mutators will change the original data. In programming, accessors are generally preferred over mutators because mutating data is permenant. Whereas, simply accessing the data (accessors) will leave the original data unchanged so you can refer to it later. Using mostly mutators or mutating lots of data, is akin to writing a word document without the option to undo any changes, or writing software without using a version control system.

  Researched answer: In Ruby, a mutator (setter) is a method used to change values in an instance variable. An accessor (getter) is a method that retrieves a value from an instance variable. Most methods in Ruby are accessors, and have 3 key words defining types of accessors which are attr_accessor (generates a getter and setter method), attr_reader (generates a getter method), and attr_writer (generates a setter method). 



2. What is a block in Ruby?

  Your answer: A block is a block of code that executes commands, just like in Javascript. However in Ruby, a block is denoted by 
  ```
  do
   ...
  end
  ```
  whereas in JS it's denoted by curly braces {}.

  Researched answer: Ruby blocks are blocks of executable code. They can be written on multiple lines with the do..end syntax, or all inline with the curly braces {}. Ruby code blocks are also called 'closures' in other languages (good to know. I've been asked "whats a closure" in interviews before). In Ruby, you can invoke blocks with functions that have the same name as the code block.



3. What is a gem?

  Your answer: A gem is what Ruby names packages in their proprietary package management system (similar to yarn or npm). The packages are called 'gems' because rubys are gems in real life. This makes the packages seem cute and adorable, which makes sense because Ruby is cute, nice and adorable.

  In my opinion, naming them 'gems' is a stroke of genius because it helps facilitate the idea of Ruby being more accessible to humans rather than just machines.

  Researched answer: Gems are small self-contained packages of code that will perform a specific action in Ruby. They're equivelent to a plugin or extension for Ruby. Anyone can create gems from scratch, but according to rubygems.org there are 168,395 total gems available, so there's probably already one that fits a developers needs. 



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a type of database where the data is stored in tables with primary keys contained in each table. There ARE different kinds of databases, but currently relational databases are the most common in enterprise environments. MySQL is a popular open source RDBMS.

  Researched answer: In simple terms, a relational database is a collection of organized data with unique identifiers (primary keys) that help identify relationships between specific data points. They use the SQL (structured query language) programming language. Other types of databases include, NoSQL (not only SQL) databases like MongoDB and Cassandra, and flat file databases like Microsoft Excel. I first heard about NoSQL databases and Cassandra in 2010 when Digg.com released v4 of thier website. They switched from using MySQL database to Cassandra which was supposed to be faster and scale better. At that time Cassandra was pretty new and experimental, and ended up causing more problems than solutions for Digg.  



5. What are primary keys? Why are they important?

  Your answer: Primary keys are found in databases and are usually unique numbers meant to differentiate rows of data from one another. They're important for databases and tables to reference each other accuratly.

  Researched answer: A primary key is a unique identified for each record in a relational database table. When your building out a database, you'll have many tables that need to talk to each other for certain queries. Primary keys are what help facilitate this successfully.  



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: The acronym REST stand for "Representational State Transfer". Coming from the world of HTML and CSS, URL paths were just coded into the site using, usually relative (as opposed to absolute) file paths. However, it's not that simple anymore. Turns out, paths (routes) are pretty important and a tad bit more complicated than just coding to a file path on a server somewhere. 

2. JSON: JSON stands for Javascript Object Notation. It's essentialy a "lightweight data-interchange format" based on Javascript and used with restful APIs for sending data back and forth. It's pretty easy to read, understand and write, and can be parsed with most modern languages. In that respect, it's replaced XML as the format of choice for web development.

3. ERB: ERB (Embedded Ruby) is a template engine that embeds Ruby language into HTML. It comes as a standard library in Ruby, and Rails has an inproved version called Erubis. It gives developers the ability to insert ruby code directly into HTML files. 

4. Params: Used with Ruby on Rails. In the model-view-controller paradigm, params are found in the controller. Params are how you access user data from a web application. There can be user supplied params, or routing params.

5. API: API stands for Application Programming Interface, and is essentially middleware that allows 2 applicaitons to talk to each other. Popular services and websites provide open APIs to third party developers which allow them to create new services on top of the original. 
