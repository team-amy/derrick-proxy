var mongoose = require ('mongoose');
var faker = require ('faker');

mongoose.connect('mongodb://localhost:27017/media',{ useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('CONNECTED')
});

let albumSchema = mongoose.Schema({
  id: Number,
  artist: String,
  albumTitle: String,
  album: Array, //urls
  artistDescription: String,
  coverArt: String
});

let Album =mongoose.model('Albums', albumSchema);

const seedDB = () => {
  let data = new Album({
    id:1,
    artist: "DerAnaM",
    albumTitle: 'Fancy Electric Cows ',
    album: [
      {track: "MidSummer Madness", url: "https://s3.amazonaws.com/namfecproject/88RISING-+Midsummer+Madness+(Official+Music+Video).mp3", lyrics: faker.lorem.paragraph()},
      {track: "Slide", url: "https://s3.amazonaws.com/namfecproject/Calvin+Harris+-+Slide+(Official+Audio)+ft.+Frank+Ocean%2C+Migos.mp3", lyrics: faker.lorem.paragraph()},
      {track: "The Way I Am", url: "https://s3.amazonaws.com/namfecproject/Charlie+Puth+-+The+Way+I+Am+%5BOfficial+Lyric+Video%5D.mp3", lyrics: faker.lorem.paragraph()},
      {track: "Hold My Girl", url: "https://s3.amazonaws.com/namfecproject/George+Ezra+-+Hold+My+Girl+(Lyric+Video).mp3" , lyrics: faker.lorem.paragraph()},
      {track: "I'm Yours Forever", url:"https://s3.amazonaws.com/namfecproject/Im+Yours+Forever+-+Tetris+Effect+-+E3+2018+Announce+Trailer+Song.mp3", lyrics: faker.lorem.paragraph()},
      {track: "1950", url: "https://s3.amazonaws.com/namfecproject/King+Princess+-+1950.mp3", lyrics: faker.lorem.paragraph()},
      {track: "Want", url: "https://s3.amazonaws.com/namfecproject/Night+Tales+-+Want+Ft.+Kimono+(Official+Lyric+Video).mp3", lyrics: faker.lorem.paragraph()},
      {track: "Stay", url: "https://s3.amazonaws.com/namfecproject/Post+Malone+-+Stay+(Lyrics).mp3", lyrics: faker.lorem.paragraph()},
      {track: "Hair Too Long", url: "https://s3.amazonaws.com/namfecproject/The+Vamps+-+Hair+Too+Long.mp3" , lyrics: faker.lorem.paragraph()},
      {track: "Bloom", url:"https://s3.amazonaws.com/namfecproject/Troye+Sivan+-+Bloom+(Lyric+Video).mp3", lyrics: faker.lorem.paragraph()}
    ],
    artistDescription: faker.lorem.paragraph(),
    coverArt: faker.image.imageUrl()
  })
  data.save((err)=>{
    if (err) return handleError(err)
  });

  for (let i = 2; i < 103; i++) {
    let data = new Album({
      id: i,
      artist: faker.random.words(2),
      albumTitle: faker.random.words(2),
      album:
        [
          {track: faker.random.words(4), lyrics: faker.lorem.paragraph()},
          {track: faker.random.words(2), lyrics: faker.lorem.paragraph()},
          {track: faker.random.words(3), lyrics: faker.lorem.paragraph()},
          {track: faker.random.words(5), lyrics: faker.lorem.paragraph()},
          {track: faker.random.words(5), lyrics: faker.lorem.paragraph()},
          {track: faker.random.words(5), lyrics: faker.lorem.paragraph()},
          {track: faker.random.words(5), lyrics: faker.lorem.paragraph()}
        ],
      artistDescription: faker.lorem.paragraph(),
      coverArt: faker.image.imageUrl()
    })
    data.save((err)=>{
      if (err) return handleError(err)
    });
  }
}

const getData = (id, callback) => {
  Album.find({'id': id}, (err,data)=> {
    if (err) {
      console.error(err);
    }
    callback(data)
  })
}

module.exports.seedDB = seedDB;
module.exports.getData = getData;