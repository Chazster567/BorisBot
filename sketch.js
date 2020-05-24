let input;
let message;
let spacer = -100;
let opening = true;
let reply;
let replyMessage = '';
let borisTop;
let borisBottom;
let mouth = 0;
let r = 0;
let choices2 = [0, 1];
let choices3 = [0, 1, 2];
let choices4 = [0, 0, 0, 1];

function preload() {
  soundFormats('mp3', 'ogg');
  close = loadSound('assets/closeNHS.mp3');
  greeting = loadSound('assets/greeting.mp3');
  uhh = loadSound('assets/uhh.mp3');
  shopping = loadSound('assets/shopping.mp3');
  sayno = loadSound('assets/sayno.mp3');
  colour = loadSound('assets/red.mp3');
  ty = loadSound('assets/thankyou.mp3');
  intensive = loadSound('assets/intensive.mp3');
  danger = loadSound('assets/danger.mp3');
  fantastic = loadSound('assets/fantastic.mp3');
  our = loadSound('assets/ournhs.mp3');
  lives = loadSound('assets/lives.mp3');
  exercise = loadSound('assets/exercise.mp3');
  joke = loadSound('assets/joke.mp3');
  fat = loadSound('assets/fat.mp3');
  abandon = loadSound('assets/abandon.mp3');
  fu = loadSound('assets/fu.mp3');
  bean = loadSound('assets/bean.mp3');
  valued = loadSound('assets/valued.mp3');
  wiff = loadSound('assets/wiff.mp3');
  borisTop = loadImage('assets/borisTop.png');
  borisBottom = loadImage('assets/borisBottom.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  input = createInput();
  input.position(windowWidth/2 - (input.width/2), 0.8 * windowHeight);
  
  button = createButton('Send');
  button.position(windowWidth/2 - (button.width/2), 0.8 * windowHeight + input.height + 10);
  button.mousePressed(response);
}

function response() {
  background(220);
  message = input.value();
  textSize(24);
  if (message.toLowerCase().indexOf('hello') !== -1 || message.toLowerCase().indexOf('hey') !== -1 || message.toLowerCase().indexOf('howdy') !== -1) {
    reply = greeting;
    replyMessage = 'Good Evening!';
  } else if (message.toLowerCase().indexOf('favourite colour') !== -1) {
    reply = colour;
    replyMessage = 'Red.';
  } else if (message.toLowerCase().indexOf('conservative') !== -1) {
    r = random(choices2);
    if (r == 0) {
      reply = close;
      replyMessage = 'We will immediately close the NHS...';
    } else if (r == 1) {
      reply = lives;
      replyMessage = 'Many lives will be lost.';
    }
  } else if (message.toLowerCase().indexOf('favourite thing') !== -1 || message.toLowerCase().indexOf('favourite pastime') !== -1) {
    r = random(choices2);
    if (r == 0) {
      reply = shopping;
      replyMessage = 'Shopping... for basic necessities... as infrequently as possible.';
    } else if (r == 1) {
      reply = exercise;
      replyMessage = 'Unlimited amounts of outdoor exercise.';
    }
  } else if (message.toLowerCase().indexOf('should i do') !== -1) {
    reply = sayno;
    replyMessage = 'You should say no!';
  } else if (message.toLowerCase().indexOf('you are') !== -1) {
    reply = ty;
    replyMessage = 'Thank You!';
  } else if (message.toLowerCase().indexOf('nhs') !== -1) {
    reply = intensive;
    replyMessage = 'There will not be enough ventilators, enough IC beds, enough Drs and Nurses.';
  } else if (message.toLowerCase().indexOf('how are you') !== -1) {
    reply = fantastic;
    replyMessage = 'Fantastic!';
  } else if (message.toLowerCase().indexOf('brexit') !== -1) {
    reply = valued;
    replyMessage = 'We will remain a valued and by the way, fully paid up member of the EU.';
  } else if (message.toLowerCase().indexOf('lockdown') !== -1) {
    reply = bean;
    replyMessage = 'I have just been in India, I am told I will be reincarnated as a baked bean or something.';
  } else if (message.toLowerCase().indexOf('coronavirus') !== -1 || message.toLowerCase().indexOf('covid') !== -1) {
    r = random(choices2);
    if (r == 0) {
      reply = fu;
      replyMessage = 'And I say to the Chinese, and I say to the world, F U!';
    } else if (r == 1) {
      reply = danger;
      replyMessage = 'This country is in real danger.';
    }
  } else if (message.toLowerCase().indexOf('joke') !== -1) {
    r = random(choices3);
    console.log(r);
    if (r == 0) {
      reply = joke;
      replyMessage = 'Immense Suffering!';
    } else if (r == 1) {
      reply = our;
      replyMessage = 'Our NHS!';
    } else if (r == 2) {
      reply = abandon;
      replyMessage = 'Abandoned business, darkened pubs and restaurants.';
    }
  } else {
    r = random(choices3);
    if (r == 0) {
      reply = uhh;
      replyMessage = 'Uhh...';
    } else if (r == 1) {
      reply = fat;
      replyMessage = 'I am fat!';
    } else if (r == 2) {
      reply = wiff;
      replyMessage = 'Wiff Waff!';
    }
  }
  message = message[0].toUpperCase() + message.slice(1);
  fill(43, 117, 36);
  textAlign(RIGHT);
  text(message, 0, (0.8 * windowHeight) + spacer, windowWidth - 10);
  reply.play();
  fill(36, 101, 117);
  textAlign(LEFT);
  text(replyMessage, 10, (0.8 * windowHeight) - 50 + spacer, windowWidth);
  setInterval(updateMouth, 20);
}

function updateMouth() {
  if (reply.isPlaying()) {
    noStroke();
    fill(220);
    ellipse(windowWidth/2, windowHeight/2, 180, 150);
    image(borisTop, windowWidth/2 - 150, windowHeight/5, 300, 300); 
    image(borisBottom, windowWidth/2 - 150, windowHeight/5 + mouth, 300, 300);
    if (opening) {
      mouth += 0.2;
      if (mouth > 4) {
        opening = false;
      }
    } else { 
      mouth -= 0.2;
      if (mouth < 0.2) {
        opening = true;
      }
    }
  }
}