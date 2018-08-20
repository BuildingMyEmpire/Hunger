var funFacts = [
  ["<p>Sussex:</p><p>Food Insecurity Rate: 7.2% (10,400 people)</p><p>Avg. Meal Cost: $3.69</p> ","Sussex"],
  ["<p>Passaic:</p><p>Food Insecurity Rate: 9.6% (48,880 people)</p><p>Avg. Meal Cost: $3.25</p>", "Passaic"],
  ["<p>Bergen:</p><p>Food Insecurity Rate: 7.5% (70,200 people)</p><p>Avg. Meal Cost: $3.77</p>","Bergen"],
  ["<p>Warren:</p><p>Food Insecurity Rate: 9.0% (9,620 people)</p><p>Avg. Meal Cost: $3.64</p>", "Warren"],
  ["<p>Morris:</p><p>Food Insecurity Rate: 6.1% (30,360 people)</p><p>Avg. Meal Cost: $3.55</p>","Morris"],
  ["<p>Essex:</p><p>Food Insecurity Rate: 17.1% (135,210 people)</p><p>Avg. Meal Cost: $3.92</p>","Essex"],
  ["<p>Hunterdon:</p><p>Food Insecurity Rate: 6.3% (7,880 people)</p><p>Avg. Meal Cost: $3.94</p>","Hunterdon"],
  ["<p>Somerset:</p><p>Food Insecurity Rate: 6.9% (22,730 people)</p><p>Avg. Meal Cost: $3.52</p>", "Somerset"],
  ["<p>Union:</p><p>Food Insecurity Rate: 9.6% (53,100 people)</p><p>Avg. Meal Cost: $3.23</p>","Union"],
  ["<p>Middlesex:</p><p>Food Insecurity Rate: 8.4% (70,110 people)</p><p>Avg. Meal Cost: $3.10</p>", "Middlesex"],
  ["<p>Mercer:</p><p>Food Insecurity Rate: 11.0% (40,900 people)</p><p>Avg. Meal Cost: $3.28</p>","Mercer"],
  ["<p>Monmouth:</p><p>Food Insecurity Rate: 8.5% (53,210 people)</p><p>Avg. Meal Cost: $3.42</p>", "Monmouth"],
  ["<p>Ocean:</p><p>Food Insecurity Rate: 9.4% (54,950 people)</p><p>Avg. Meal Cost: $3.28</p>","Ocean"],
  ["<p>Burlington:</p><p>Food Insecurity Rate: 9.9% (44,400 people)</p><p>Avg. Meal Cost: $3.18</p>", "Burlington"],
  ["<p>Camden:</p><p>Food Insecurity Rate: 12.2% (62,480 people)</p><p>Avg. Meal Cost: $3.30</p>","Camden"],
  ["<p>Atlantic:</p><p>Food Insecurity Rate: 12.9% (35,480 people)</p><p>Avg. Meal Cost: $3.29</p>","Altantic"],
  ["<p>Gloucester:</p><p>Food Insecurity Rate: 9.9% (28,730 people)</p><p>Avg. Meal Cost: $3.69</p>", "Gloucester"],
  ["<p>Salem:</p><p>Food Insecurity Rate: 13.0% (8,400 people)</p><p>Avg. Meal Cost: $3.08</p>", "Salem"],
  ["<p>Cumberland:</p><p>Food Insecurity Rate: 12.9% (20,110 people)</p><p>Avg. Meal Cost: $3.69</p>","Cumberland"],
  ["<p>Cape May:</p><p>Food Insecurity Rate: 12.4% (11,790 people)</p><p>Avg. Meal Cost: $2.89</p>", "Cape May"],
  ["<p>Hudson:</p><p>Food Insecurity Rate: 10.5% (69,860 people)</p><p>Avg. Meal Cost: $3.89</p>", "Hudson"]
];

   function pick(index){
     document.getElementById("display").innerHTML=funFacts[index][0];
   }
