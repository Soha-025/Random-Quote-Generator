const quotes = {
  motivation: [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  ],
  peace: [
    { text: "Peace begins with a smile.", author: "Mother Teresa" },
    { text: "When the power of love overcomes the love of power, the world will know peace.", author: "Jimi Hendrix" },
    { text: "Nothing can bring you peace but yourself.", author: "Ralph Waldo Emerson" },
  ],
  love: [
    { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
    { text: "Love recognizes no barriers.", author: "Maya Angelou" },
  ],
  kindness: [
    { text: "No act of kindness, no matter how small, is ever wasted.", author: "Aesop" },
    { text: "Kindness is the language which the deaf can hear and the blind can see.", author: "Mark Twain" },
    { text: "Carry out a random act of kindness with no expectation of reward.", author: "Princess Diana" },
  ],
  hardworking: [
    { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
    { text: "There are no secrets to success. It is the result of preparation and hard work.", author: "Colin Powell" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  ]
};

function newQuote() {
  const category = document.getElementById("category").value;
  const categoryQuotes = quotes[category];
  const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  document.getElementById("quote").innerText = `"${categoryQuotes[randomIndex].text}"`;
  document.getElementById("author").innerText = `— ${categoryQuotes[randomIndex].author}`;
}
