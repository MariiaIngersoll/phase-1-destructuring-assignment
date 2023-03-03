const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
const [blackAndWhite, , black, pink] = farmAnimals.split(' ')
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [red, orange, yellow, green, blue, indigo, violet] = colors; 
// Arrays
const [r, o, y, g, b,n , v] = colors;
// 4. Use destructuring to assign appropriate variables using the color names.
const [, , , , , indg, ,] = colors;
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

const {muppetName, color, song , job, partner} = muppet;

const {song2, song4} = nestedMuppet.album.theMuppetMovie;
const {nestedJob, nestedPartner} = nestedMuppet;