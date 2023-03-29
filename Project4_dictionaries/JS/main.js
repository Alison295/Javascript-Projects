function my_Dictionary() { // Defining and naming the function for displaying a dictionary with KVP pairs
    var Video_Game = {
        Name: "Pokemon Legends: Arceus",
        Developer:"Game Freak",
        Platform: "Nintendo Switch",
        Year: 2022,
        Genre: "Action role-playing",
        Mode: "Single-player",
    };
    delete Video_Game.Mode; // This removes the Mode KVP from the Dictionary before it is displayed 
    document.getElementById("Dictionary").innerHTML = Video_Game.Name;
}